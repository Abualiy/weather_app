import * as React from "react"

import Image from "next/image"

export default function FourDayForecast(
    {
        count
    }: {
        count: number
    }) {
    return (
        <div className="w-full flex justify-between border-b-2 border-base-200 py-2 text-white">
            <div>
                <p>14.5'c</p>
            </div>
            <div>
                <Image src="/weather_icons/01n.png" width={20} height={20} alt="weather" />
            </div>
            <div>
                <p>Mar {10 + count}</p>
            </div>
        </div >
    )
}
