import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { LiaEyeSolid } from "react-icons/lia"

export default function Visibility({visibility} : {visibility: number}) {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold text-xs md:text-[0.8rem]">Visibility</h1>
                <div className="text-xs md:text-[0.8rem]">
                    <LiaEyeSolid className="text-2xl"/>
                    {visibility}km
                </div>
            </CardContent>
        </Card>
    )
}
