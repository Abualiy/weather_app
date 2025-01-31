interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; pressure: number; feels_like: number };
  wind: { speed: number };
  visibility: number;
  sys: { sunrise: number; sunset: number };
  dt: number;
  forecast?: ForecastItem[];
  hourlyForecast?: HourlyForecastItem[];
}

interface WeatherResponse {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; pressure: number; feels_like: number };
  wind: { speed: number };
  visibility: number;
  sys: { sunrise: number; sunset: number };
  dt: number;
}

interface ForecastResponse {
  list: ForecastItem[];
}

interface ForecastItem {
  dt: number;
  main: { temp: number; feels_like: number };
  weather: { description: string; icon: string }[];
}

interface HourlyForecastItem {
  dt: number;
  main: { temp: number; feels_like: number };
  weather: { description: string; icon: string }[];
}


export async function getWeatherByCity(cityOrCoords: string): Promise<WeatherData | null> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  try {
    // Determine if the input is coordinates or a city name
    const isCoords = cityOrCoords.includes(',');
    const query = isCoords ? `lat=${cityOrCoords.split(',')[0]}&lon=${cityOrCoords.split(',')[1]}` : `q=${cityOrCoords}`;

    // Fetch current weather
    const response = await fetch(`${baseUrl}?${query}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error('City or coordinates not found');
    const data: WeatherResponse = await response.json();

    // Map the WeatherResponse to WeatherData
    const weatherData: WeatherData = {
      name: data.name,
      weather: data.weather,
      main: data.main,
      wind: data.wind,
      visibility: data.visibility,
      sys: data.sys,
      dt: data.dt,
    };

    // Fetch 5-day forecast
    const forecastResponse = await fetch(`${forecastUrl}?${query}&appid=${apiKey}&units=metric`);
    if (!forecastResponse.ok) throw new Error('Forecast data not found');
    const forecastData: ForecastResponse = await forecastResponse.json();

    // Filter forecast data to start from tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Set to tomorrow
    tomorrow.setHours(0, 0, 0, 0); // Start of the day

    const filteredForecast = forecastData.list.filter((item) => {
      const itemDate = new Date(item.dt * 1000);
      return itemDate >= tomorrow; // Only include data from tomorrow onwards
    });

    // Group forecast data by day and pick one data point per day
    const dailyForecast: ForecastItem[] = [];
    const uniqueDays = new Set<string>();

    filteredForecast.forEach((item) => {
      const itemDate = new Date(item.dt * 1000).toLocaleDateString(); // Get date string (e.g., "10/25/2023")
      if (!uniqueDays.has(itemDate) && dailyForecast.length < 4) {
        uniqueDays.add(itemDate);
        dailyForecast.push(item);
      }
    });

    weatherData.forecast = dailyForecast; // Assign the 4-day forecast

    // Process hourly forecast
    const hourlyForecast: HourlyForecastItem[] = forecastData.list
      .map((item) => ({
        dt: item.dt,
        main: item.main,
        weather: item.weather,
      }))
      .slice(0, 8); // Limit to the next 24 hours (8 x 3-hour intervals)

    weatherData.hourlyForecast = hourlyForecast; // Assign hourly forecast


    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
}