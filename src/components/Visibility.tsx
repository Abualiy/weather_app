import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { WiHumidity } from "react-icons/wi"

export default function Visibility() {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold">Visibility</h1>
                <div className="text-xl">
                    <WiHumidity className="text-2xl"/>
                    10km
                </div>
            </CardContent>
        </Card>
    )
}
