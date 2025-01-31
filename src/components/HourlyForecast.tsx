import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { WiHumidity } from "react-icons/wi"
import Image from "next/image"

export default function Humidity() {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold">9:00 AM</h1>
                <div>
                <Image src="/weather_icons/04d.png" width={40} height={20} alt={"temp_icon"} />
                </div>
                <p className="text-xl">
                   14.28'c
                </p>
            </CardContent>
        </Card>
    )
}
