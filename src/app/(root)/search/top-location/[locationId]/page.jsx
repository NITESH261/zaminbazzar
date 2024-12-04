"use server"

import { Button } from "@/components/ui/button"
import { Heart, PhoneCallIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SEARCH_RESULT = 44789

const LocationData = [
    {
        image: "property-1.jpg",
        propertyName: "Evara Wadhwa Wise City",
        propertyLocation: "in Panvel, Navi Mumbai",
        PropertyPrice: "₹1.49 - 4.61 Cr"
    },
    {
        image: "property-2.jpg",
        propertyName: "Evara Wadhwa Wise City",
        propertyLocation: "in Panvel, Navi Mumbai",
        PropertyPrice: "₹1.49 - 4.61 Cr"
    },
    {
        image: "property-3.jpg",
        propertyName: "Evara Wadhwa Wise City",
        propertyLocation: "in Panvel, Navi Mumbai",
        PropertyPrice: "₹1.49 - 4.61 Cr"
    },
    {
        image: "property-4.jpg",
        propertyName: "Evara Wadhwa Wise City",
        propertyLocation: "in Panvel, Navi Mumbai",
        PropertyPrice: "₹1.49 - 4.61 Cr"
    }
]

const page = async ({ params }) => {

    const LocationId = (await params).locationId

    return (
        <>
            <div className="flex w-full h-fit bg-white rounded-2xl p-4">
                <div className="gap-2 text-lg font-semibold w-full">
                    <span className="">{SEARCH_RESULT}</span> Result | <span className="capitalize">{LocationId}</span>
                </div>
            </div>
            <div className="flex w-full h-[calc(100%-80px)] overflow-y-auto scrollbar">
                <div className="flex flex-col w-full h-fit bg-white rounded-2xl gap-4 p-4">
                    {LocationData.map((location, index) =>
                        <Link href={"#"} key={index} className="flex flex-col sm:flex-row border w-full gap-2 rounded-2xl border-neutral-200">
                            <div className="flex w-full sm:w-2/5 relative aspect-video sm:aspect-[3/2]">
                                <Image
                                    src={`/assets/popular-property/${location.image}`}
                                    alt="property img"
                                    fill
                                    className="object-cover rounded-2xl sm:rounded-r-none"
                                />
                                <Button variant="ghost" size="icon" className="absolute right-2 top-2">
                                    <Heart className="!size-6 fill-neutral-200" />
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-4 w-full sm:w-3/5 p-4">
                                <div className="flex flex-col gap-2 sm:gap-4 w-full sm:flex-grow">
                                    <div className="flex flex-col w-full space-y-1">
                                        <span className="text-lg md:text-xl font-semibold">
                                            {location.propertyName}
                                        </span>
                                        <span className="text-sm hover:underline transition-all">
                                            Land {location.propertyLocation}
                                        </span>
                                    </div>
                                    <span className="text-base md:text-lg font-semibold">
                                        Price : {location.PropertyPrice}
                                    </span>
                                    <p className="text-sm">
                                        Near By : Vijay Army School, Chhatrapati Shivaji Maharaj University
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 justify-end sm:flex-grow-0 h-1/5">
                                    <Button className="rounded-full bg-[#0078db]">
                                        <PhoneCallIcon /> Contact Us</Button>
                                    <Button variant="outline" className="rounded-full border-[#0078db] text-[#0078db]">View Number</Button>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default page
