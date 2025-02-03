import { isDay } from "./isDay";

export function getWeatherImage(description: string): string {
    switch (true) {
      case /clear/i.test(description):
        return isDay() ? '/weather_icons/01d.png' : '/weather_icons/01n.png'; // Clear sky image
      case /cloud/i.test(description):
        return isDay() ? '/weather_icons/02d.png' : '/weather_icons/02n.png'; // Cloudy weather image
      case /rain/i.test(description):
        return isDay() ? '/weather_icons/09d.png' : '/weather_icons/09n.png'; // Rainy weather image
      case /thunderstorm/i.test(description):
        return isDay() ? '/weather_icons/11d.png' : '/weather_icons/11n.png'; // Thunderstorm image
      case /snow/i.test(description):
        return isDay()? '/weather_icons/13d.png' : '/weather_icons/13n.png'; // Snowy weather image
      case /mist|fog|haze|smoke/i.test(description):
        return isDay() ? '/weather_icons/50d.png' : '/weather_icons/50n.png'; // Foggy weather image
      default:
        return '/weather_icons/o1d.png'; // Default weather image
    }
  }
  