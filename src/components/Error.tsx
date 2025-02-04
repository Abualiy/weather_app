import Image from 'next/image'

export default function Error() {
    return (
        <div className="w-3/4 h-screen bg-base-100 card flex flex-col gap-10 mb-8 items-center justify-center">
            <Image src="/empty.svg" width={150} height={100} alt="no data"/>
            <h1 className="text-4xl font-bold text-white">Sorry! No Data to display!</h1>
        </div>
    )
}