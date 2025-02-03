import * as React from "react"

import Image from "next/image"
import { formatOnlyMonth } from "@/lib/dateFormattingHelper"

export default function FourDayForecast(
    {
        temp,
        icon,
        date,
    }: {
        temp: number
        icon: string
        date: number
    }) {

        console.log(icon)
    return (
        <div className="w-full flex justify-between border-b-2 border-base-200 py-2 text-white">
            <div>
                <p>{temp}°C</p>
            </div>
            <div>
                <Image src={`/weather_icons/${icon}.png`} width={20} height={20} alt="weather" />
            </div>
            <div>
                <p>{formatOnlyMonth(date)}</p>
            </div>
        </div >
    )
}
