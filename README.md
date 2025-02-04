# Weather Info App

Weather Info is a responsive and feature-rich weather application built with modern web technologies. It provides current weather conditions, a four-day weather forecast, and hourly forecasts for any location. The app uses OpenWeatherMap's API to fetch accurate weather data.

- **Visit** [Weathe info](https://weather-info-app123.vercel.app/)
  
## Features
- **Current Location Weather:** Automatically fetches weather data based on the user's current location.
- **City Search:** Allows users to search weather details for any city.
- **Current Weather Conditions:** Displays temperature, weather condition, and other important weather metrics.
- **Four-Day Forecast:** Provides weather information for the next four days.
- **Hourly Forecast:** Visualizes weather updates for the day.
- **Today Highlights:** Showcases metrics like humidity, pressure, visibility, and "feels-like" temperature.

## Technologies Used
- **[Next.js](https://nextjs.org/):** Framework for server-rendered React applications.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for custom designs.
- **[DaisyUI](https://daisyui.com/):** Tailwind CSS components for beautiful UI elements.
- **[shadcn](https://shadcn.dev/):** Component library for seamless UI development.
- **[Zustand](https://zustand-demo.pmnd.rs/):** State management for a simplified and efficient global state.
- **[OpenWeatherMap API](https://openweathermap.org/):** Source of weather data.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Abualiy/weather_app
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
weather-info-app/
├── components/
├── lib/
├── app/
├── public/
├── assets/
└── ...
```

- **components/**: Reusable UI components (WeatherNow, FourDayForecast, HourlyForecast, etc.)
- **lib/**: Helper functions and custom hooks (e.g., weather fetching logic)
- **app/**: Application routes
- **assets/**: Icons and images

## Usage
- **Search for City:** Enter the city name in the search bar and press "Enter" to fetch weather data.
- **Current Location:** Click the "Current Location" button to fetch weather data based on your GPS location.

## Screenshots
![Weather Info App Screenshot](/public/weather-info-app.png)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## Contact
For any inquiries or feedback, please reach out via:
- **GitHub:** [Akrem Muktar](https://github.com/Abualiy)
- **Email:** akremmuktar332@gmail.com

