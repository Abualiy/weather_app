import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { CiTempHigh } from "react-icons/ci"

export default function FeelsLike({feels_like}:{feels_like:number}) {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold text-xs md:text-[0.8rem] lg:text-xl">FeelsLike</h1>
                <div className="text-xs md:text-[0.8rem] lg:text-xl items-center ">
                    <CiTempHigh className="text-2xl"/>
                    {feels_like}°C
                </div>
            </CardContent>
        </Card>
    )
}
