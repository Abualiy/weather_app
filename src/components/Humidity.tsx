import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { WiHumidity } from "react-icons/wi"

export default function Humidity({humidity} : {humidity: number}) {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold text-xs md:text-[0.8rem] ">Humidity</h1>
                <div className="text-xs md:text-[0.8rem]">
                    <WiHumidity className="text-2xl"/>
                    {humidity}%
                </div>
            </CardContent>
        </Card>
    )
}
