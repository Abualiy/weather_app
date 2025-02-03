import { create } from 'zustand';
import { getWeatherByCity } from './weather';

interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; pressure: number; feels_like: number };
  wind: { speed: number };
  visibility: number;
  sys: { sunrise: number; sunset: number };
  dt: number;
  forecast?: {
    dt: number;
    main: { temp: number; feels_like: number };
    weather: { description: string, icon: string  }[];
  }[];
  hourlyForecast?: {
    dt: number;
    main: { temp: number; feels_like: number };
    weather: { description: string, icon: string }[];
  }[];
}


interface WeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: boolean;
  fetchWeather: (location: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: false,

  fetchWeather: async (location: string) => {
    set({ loading: true, error: false });
    try {
      const data = await getWeatherByCity(location);
      set({ weather: data, loading: false });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: true, loading: false });
    }
  },

}));
