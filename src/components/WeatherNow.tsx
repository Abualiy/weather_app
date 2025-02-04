import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoLocationOutline } from "react-icons/io5"
import { formatDate } from "@/lib/dateFormattingHelper"

export default function WeatherNow(
  {
    name,
    temp,
    description,
    icon,
    date,
  } : {
    name: string
    temp: number
    description: string
    icon: string
    date: number
  }) {
console.log(icon)

  return (
    <Card className="w-full h-full bg-base-100 border-none">
      <CardHeader className="text-white">
        <h2 className="flex absolute right-4 text-3xl">{name} <IoLocationOutline /></h2>
        <CardTitle className="text-3xl ">Now</CardTitle>

      </CardHeader>
      <CardContent>
        <CardDescription className="flex items-center justify-between">
          <h1 className="text-white text-6xl font-bold ">{temp}°C</h1>
          <Image src={`/weather_icons/${icon}.png`} width={100} height={100} alt="weather now"/>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-white">
        <p>{description}</p>
        <p>{formatDate(date)}</p>
      </CardFooter>
    </Card>
  )
}
