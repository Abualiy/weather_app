'use client'

import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import WeatherNow from "../components/WeatherNow";
import { useEffect, useState } from "react";
import FourDayForecast from "@/components/FourDayForecast";
import Sun from "../components/Sun";
import Humidity from "@/components/Humidity";
import Pressure from "@/components/Presure";
import Visibility from "@/components/Visibility";
import FeelsLike from "@/components/FeelsLike";
import HourlyForecast from "@/components/HourlyForecast";
import { useWeatherStore } from "@/lib/weatherStore";
import { isDay } from "@/lib/isDay";
import { LoadingSkeleton } from "@/components/Skeleton";
import Error from "@/components/Error";




export default function Home() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [city, setCity] = useState<string>('');
  const { weather, loading, error, fetchWeather } = useWeatherStore();

  useEffect(() => {
    // Fetch current location weather on mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        await fetchWeather(`${lat},${lon}`);
      });
    }
  }, []);

  const handleCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        await fetchWeather(`${lat},${lon}`);
      });
    };
  }

  const handleSearch = async () => {
    if (city.trim() !== '') {
      await fetchWeather(city);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className={`w-screen h-screen overflow-y-scroll flex flex-col items-center ${isDay() && 'bg-day-bg'} ${!isDay() && 'bg-night-bg'} bg-cover `}>
      {/* header */}
      <div className="w-11/12 m-5 flex flex-col gap-2 items-start justify-around md:flex-row  ld:item-center">
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
            className="input input-bordered input-accent w-full text-white font-bold"
            value={city}
            onChange={(e) => (setCity(e.target.value))}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* current location button */}
        <div className="self-end">
          <button
            className="btn btn-accent text-xl"
            onClick={handleCurrentLocation}
          >
            <FaLocationCrosshairs />
            Current Location
          </button>
        </div>
      </div>
      {
        loading ? (
          <LoadingSkeleton />
        ) : (
          weather ? (
            // {/* main */}
            <div className="w-3/4 h-screen flex gap-3 mb-8">
              {/* left side */}
              <div className="w-2/3 h-full flex flex-col gap-3">
                {/* now div */}
                <div className="w-full min-h-60 card text-xl bg-base-100 relative font-bold">

                  {<WeatherNow
                    name={weather.name}
                    temp={weather.main.temp}
                    description={weather.weather[0].description}
                    date={weather.dt}
                    icon={weather.weather[0].icon}
                  />}
                </div>
                {/* 4 day forecast and today highlight */}
                <div className="w-full h-auto flex gap-3">
                  {/* 4 day forecast */}
                  <div className="w-1/3 h-full bg-base-100 shadow-xl card card-body">
                    <h1 className=" card-title text-white">4 Days Forecast</h1>
                    {weather?.forecast?.length &&
                      (<div className="flex flex-col gap-2">
                        {
                          weather.forecast.map((day, index) => (
                            <div key={index} className="w-full">
                              <FourDayForecast temp={day.main.temp} icon={day.weather[0].icon} date={day.dt} />
                            </div>
                          ))
                        }
                      </div>)
                    }
                  </div>
                  {/* today highlight */}
                  {
                    <div className="w-2/3 h-full bg-base-100 shadow-xl card card-body">
                      <h1 className="card-title text-white">Today highlight
                      </h1>
                      {/* sun */}
                      <Sun sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
                      {/* today info */}
                      <div className="flex justify-between gap-2">
                        <div className="w-1/4 ">
                          <Humidity humidity={weather.main.humidity} />
                        </div>
                        <div className="w-1/4 ">
                          <Pressure pressure={weather.main.pressure} />
                        </div>
                        <div className="w-1/4 ">
                          <Visibility visibility={weather.visibility} />
                        </div>
                        <div className="w-1/4 ">
                          <FeelsLike feels_like={weather.main.feels_like} />
                        </div>
                      </div>
                    </div>}
                </div>
              </div>
              {/* left side */}
              <div className="w-1/3 h-full bg-base-100 card card-body">
                <h1 className="card-title text-white">Today at</h1>
                {
                  weather?.hourlyForecast?.length &&
                  <div className="w-full grid grid-cols-2 gap-2">
                    {weather.hourlyForecast.map((forecast, index) => (
                      <div key={index} className="w-full card">
                        <HourlyForecast time={forecast.dt} icon={forecast.weather[0].icon} temp={forecast.main.temp} />
                      </div>
                    ))}
                  </div>
                }
              </div>
            </div>
          ) : (
            error ? (
              <Error />
            ) : (
              <LoadingSkeleton />

            )
          ))
      }
    </div>
  )
}




// 'use client'
// import { useState } from 'react';
// import { getWeatherByCity } from '@/lib/weather';
// import ModeToggle from '@/components/ModeToggle';



// export default function Home() {
//  

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
//           
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//         <button
//          
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