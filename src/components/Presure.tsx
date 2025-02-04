import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { TiWaves } from "react-icons/ti"

export default function Pressure({pressure} : {pressure: number}) {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col  gap-2">
                <h1 className="text-slate-600 font-bold text-xs md:text-[0.8rem] lg:text-xl">Pressure</h1>
                <div className="ttext-xs md:text-[0.8rem] lg:text-xl">
                    <TiWaves className="text-2xl"/>
                    {pressure}hPa
                </div>
            </CardContent>
        </Card>
    )
}
