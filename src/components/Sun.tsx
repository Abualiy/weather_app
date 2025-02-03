import * as React from "react"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { WiSunrise } from "react-icons/wi"
import { LuMoon } from "react-icons/lu"

export default function Sun(
  {
    sunrise,
    sunset,
  }: {
    sunrise: number
    sunset: number
  }) {
  return (
    <Card className="w-full bg-base-200 text-white">

      <CardContent className="text-2xl flex justify-between pt-4">
        <div >
          <div className="flex gap-2">
            <WiSunrise />
            <p>{new Date(sunrise * 1000).toLocaleTimeString()}</p>
          </div>
          <h3 className="text-xs text-slate-600 font-bold">Sunrise</h3>
        </div>
        <div>
          <div className="flex gap-2">
            <LuMoon />
            <p>{new Date(sunset * 1000).toLocaleTimeString()}</p>
          </div>
          <h3 className="text-xs text-slate-600 font-bold">Sunrise</h3>
        </div>
      </CardContent>
    </Card>
  )
}
