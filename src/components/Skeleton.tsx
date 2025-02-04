import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { useState } from "react"

export function LoadingSkeleton() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fourDay, setFourDay] = useState([1, 2, 3, 4])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hour, setHour] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    return (
        <div className="w-[95%] md:w-3/4 h-auto flex flex-col gap-3 mb-8 lg:flex-row">
            {/* right side */}
            <div className="w-full lg:w-2/3 h-full flex flex-col gap-3">
                {/* now div */}
                <div className="w-full min-h-60 card text-xl bg-base-100 relative font-bold">

                    <Card className="w-full h-full card border-none text-xl bg-base-100 relative font-bold">
                        <CardHeader className="text-white">
                            <Skeleton className="flex absolute right-4 w-[150px] md:w-[250px] h-7" />
                            <CardTitle className="text-3xl ">Now</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="flex items-center justify-between">
                                <Skeleton className="text-white text-6xl font-bold  h-16 w-[120px] md:w-[250px]" />
                                <Skeleton className="text-white text-6xl font-bold  h-16 w-20 md:w-36" />
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Skeleton className="h-7 w-16 md:w-32" />
                            <Skeleton className="h-7 w-14 md:w-32" />
                        </CardFooter>
                    </Card>
                </div>
                {/* 4 day forecast and today highlight */}
                <div className="w-full h-auto flex gap-3 flex-col md:flex-row">
                    {/* 4 day forecast */}
                    <div className="w-full md:w-1/3 h-full bg-base-100 shadow-xl card card-body">
                        <h1 className=" card-title text-white">4 Days Forecast</h1>
                        <div className="flex flex-col gap-2">
                            {
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                fourDay.map((day, index) => (
                                    <Skeleton key={index} className="w-full h-8" />
                                ))
                            }

                        </div>
                    </div>
                    {/* today highlight */}
                    <div className="w-full md:w-2/3 h-full bg-base-100 shadow-xl card card-body">
                        <h1 className="card-title text-white">Today highlight
                        </h1>
                        {/* sun */}
                        <Skeleton className="w-full h-20" />
                        {/* today info */}
                        <div className="flex justify-between gap-2">
                            <Skeleton className="w-1/4 h-20" />
                            <Skeleton className="w-1/4 h-20" />
                            <Skeleton className="w-1/4 h-20" />
                            <Skeleton className="w-1/4 h-20" />
                        </div>
                    </div>
                </div>
            </div>
            {/* left side */}
            <div className="w-full lg:w-1/3 h-full bg-base-100 card card-body">
                <h1 className="card-title text-white">Today at</h1>

                <div className="w-full grid grid-cols-2 gap-2">
                    {hour.map((h, index) => (
                        <Skeleton key={index} className="w-full h-24" />
                    ))}
                </div>

            </div>
        </div>
    )
}



// {weather &&
//                         <div className="w-2/3 h-full bg-base-100 shadow-xl card card-body">
//                             <h1 className="card-title text-white">Today highlight
//                             </h1>
//                             {/* sun */}
//                             <Sun sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
//                             {/* today info */}
//                             <div className="flex justify-between gap-2">
//                                 <div className="w-1/4 ">
//                                     <Humidity humidity={weather.main.humidity} />
//                                 </div>
//                                 <div className="w-1/4 ">
//                                     <Pressure pressure={weather.main.pressure} />
//                                 </div>
//                                 <div className="w-1/4 ">
//                                     <Visibility visibility={weather.visibility} />
//                                 </div>
//                                 <div className="w-1/4 ">
//                                     <FeelsLike feels_like={weather.main.feels_like} />
//                                 </div>
//                             </div>
//                         </div>}