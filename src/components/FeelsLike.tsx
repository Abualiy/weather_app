import * as React from "react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { WiHumidity } from "react-icons/wi"

export default function FeelsLike() {
    return (
        <Card className="w-full bg-base-200 border-none text-white">
            <CardContent className="p-2 flex flex-col gap-2">
                <h1 className="text-slate-600 font-bold">FeelsLike</h1>
                <div className="text-xl items-center">
                    <WiHumidity className="text-2xl"/>
                    14.82'C
                </div>
            </CardContent>
        </Card>
    )
}
