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

export default function WeatherNow() {
  return (
    <Card className="w-full h-full card border-none text-xl bg-base-100 relative font-bold">
      <CardHeader className="text-white">
        <h2 className="flex absolute right-4 text-3xl">Harar <IoLocationOutline /></h2>
        <CardTitle className="text-3xl ">Now</CardTitle>

      </CardHeader>
      <CardContent>
        <CardDescription className="flex items-center justify-between">
          <h1 className="text-white text-6xl font-bold ">15.18'C</h1>
          <Image src="/weather_icons/01n.png" width={100} height={100} alt="weather now"/>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Clear sky</p>
        <p>Wednesday 1, Mar</p>
      </CardFooter>
    </Card>
  )
}
