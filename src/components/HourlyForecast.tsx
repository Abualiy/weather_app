import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function Humidity({
    time,
    icon,
    temp
}:{
    time: number
    icon: string
    temp: number
}) {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold">{new Date(time * 1000).toLocaleTimeString()}</h1>
                <div>
                <Image src={`/weather_icons/${icon}.png`}width={40} height={20} alt={"temp_icon"} />
                </div>
                <p className="text-xs">
                   {temp}°C
                </p>
            </CardContent>
        </Card>
    )
}
