'use client'

import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import WeatherNow from "../components/WeatherNow";
import { useState } from "react";
import FourDayForecast from "@/components/FourDayForecast";
import Sun from "../components/Sun";
import Humidity from "@/components/Humidity";
import Pressure from "@/components/Presure";
import Visibility from "@/components/Visibility";
import FeelsLike from "@/components/FeelsLike";
import HourlyForecast from "@/components/HourlyForecast";

export default function Home() {
  const [days, setDays] = useState([1, 2, 3, 4]);
  const [hours, setHours] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="w-screen h-screen overflow-y-scroll flex flex-col items-center bg-night-bg bg-cover ">
      {/* header */}
      <div className="w-11/12 m-5 flex flex-col gap-2 items-start justify-around md:flex-row  md:item-center">
        {/* logo */}
        <div className="flex items-center gap-2 text-yellow-100 input input-bordered input-accent">
          <TiWeatherWindyCloudy size={'2rem'} />
          <h1 className="text-3xl font-bold ">Weather info</h1>
        </div>

        {/* search bar */}
        <div className="w-full md:w-1/3" >
          <input
            type="search"
            placeholder="Search for city... "
            className="input input-bordered input-accent w-full"
          />
        </div>

        {/* current location button */}
        <div className="self-end">
          <button className="btn btn-accent text-xl">
            <FaLocationCrosshairs />
            Current Location
          </button>
        </div>
      </div>

      {/* main */}
      <div className="w-3/4 h-screen flex gap-3 mb-8">
        {/* left side */}
        <div className="w-2/3 h-full flex flex-col gap-3">
          {/* now div */}
          <div className="w-full">
            <WeatherNow />
          </div>
          {/* 4 day forecast and today highlight */}
          <div className="w-full h-auto flex gap-3">
            {/* 4 day forecast */}
            <div className="w-1/3 h-full bg-base-100 shadow-xl card card-body">
              <h1 className=" card-title text-white">4 Days Forecast</h1>
              <div className="flex flex-col gap-2">
                {
                  days.map((day, index) => (
                    <div key={index} className="w-full">
                      <FourDayForecast count={day} />
                    </div>
                  ))
                }
              </div>
            </div>
            {/* today highlight */}
            <div className="w-2/3 h-full bg-base-100 shadow-xl card card-body">
              <h1 className="card-title text-white">Today highlight
              </h1>
              {/* sun */}
              <Sun />
              {/* today info */}
              <div className="flex justify-between gap-2">
                <div className="w-1/4 ">
                  <Humidity />
                </div>
                <div className="w-1/4 ">
                  <Pressure />
                </div>
                <div className="w-1/4 ">
                  <Visibility />
                </div>
                <div className="w-1/4 ">
                  <FeelsLike />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left side */}
        <div className="w-1/3 h-full bg-base-100 card card-body">
          <h1 className="card-title text-white">Today at</h1>
          <div className="w-full grid grid-cols-2 gap-2">
            {hours.map((hour, index) => (
              <div key={index} className="w-full card">
                <HourlyForecast />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



// 'use client'
// import { useState } from 'react';
// import { getWeatherByCity } from '@/lib/weather';
// import ModeToggle from '@/components/ModeToggle';

// interface WeatherData {
//   name: string;
//   weather: { description: string; icon: string }[];
//   main: { temp: number; humidity: number; pressure: number; feels_like: number };
//   wind: { speed: number };
//   visibility: number;
//   sys: { sunrise: number; sunset: number };
//   dt: number;
//   forecast?: {
//     dt: number;
//     main: { temp: number; feels_like: number };
//     weather: { description: string }[];
//   }[];
//   hourlyForecast?: {
//     dt: number;
//     main: { temp: number; feels_like: number };
//     weather: { description: string }[];
//   }[];
// }

// export default function Home() {
//   const [city, setCity] = useState<string>('');
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   // const { theme, setTheme }
//   const handleSearch = async () => {
//     const data = await getWeatherByCity(city);
//     setWeather(data);
//   };

//   const handleCurrentLocation = async () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         const data = await getWeatherByCity(`${lat},${lon}`);
//         setWeather(data);
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Weather App</h1>
//       <ModeToggle />
//       <div className="flex items-center gap-4">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="border rounded-lg px-4 py-2"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//         <button
//           onClick={handleCurrentLocation}
//           className="bg-green-500 text-white px-4 py-2 rounded-lg"
//         >
//           Use Current Location
//         </button>
//       </div>

//       {weather && (
//         <div className="mt-4">
//           <h2 className="text-xl font-semibold">Weather in {weather.name}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Condition: {weather.weather[0].description}</p>
//           <p>Feels like: {weather.main.feels_like}°C</p>
//           <p>Wind speed: {weather.wind.speed} m/s</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Pressure: {weather.main.pressure} hPa</p>
//           <p>Visibility: {weather.visibility / 1000} km</p>
//           <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>

//           {/* Show 5-day forecast */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold">5-Day Forecast</h3>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {weather.forecast?.map((forecast, index) => (
//                 <div key={index} className="border p-4 rounded-md">
//                   <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
//                   <p>Temp: {forecast.main.temp}°C</p>
//                   <p>Condition: {forecast.weather[0].description}</p>
//                   <p>Feels like: {forecast.main.feels_like}°C</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Show hourly forecast */}
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold">Hourly Forecast</h3>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {weather.hourlyForecast?.map((hourly, index) => (
//                 <div key={index} className="border p-4 rounded-md">
//                   <p>{new Date(hourly.dt * 1000).toLocaleTimeString()}</p>
//                   <p>Temp: {hourly.main.temp}°C</p>
//                   <p>Condition: {hourly.weather[0].description}</p>
//                   <p>Feels like: {hourly.main.feels_like}°C</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }