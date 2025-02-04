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
    <div className={`w-screen h-screen overflow-y-auto flex flex-col items-center ${isDay() ? 'bg-day-bg' : 'bg-night-bg'} bg-cover `}>
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
            <div className="w-[95%] md:w-3/4 h-auto flex flex-col gap-3 mb-8 lg:flex-row">
              {/* right side */}
              <div className="w-full lg:w-2/3 h-full flex flex-col gap-3">
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
                <div className="w-full h-auto flex gap-3 flex-col md:flex-row">
                  {/* 4 day forecast */}
                  <div className="w-full md:w-1/3 h-full bg-base-100 shadow-xl card card-body">
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
                    <div className="w-full md:w-2/3 h-full bg-base-100 shadow-xl card card-body">
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
              <div className="w-full lg:w-1/3 h-full bg-base-100 card card-body">
                <h1 className="card-title text-white">Today at</h1>
                {
                  weather?.hourlyForecast?.length &&
                  <div className="w-full grid lg:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-2 text-xs">
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