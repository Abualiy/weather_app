import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WiSunrise } from "react-icons/wi"
import { LuMoon } from "react-icons/lu"

export default function Sun() {
  return (
    <Card className="w-full bg-base-200 text-white">
      
      <CardContent className="text-2xl flex justify-between pt-4">
        <div >
          <div className="flex gap-2">
            <WiSunrise />
            <p>6:00 AM</p>
          </div>
          <h3 className="text-xs text-slate-600 font-bold">Sunrise</h3>
        </div>
        <div>
          <div className="flex gap-2">
            <LuMoon />
            <p>6:00 AM</p>
          </div>
          <h3 className="text-xs text-slate-600 font-bold">Sunrise</h3>
        </div>
      </CardContent>
    </Card>
  )
}
