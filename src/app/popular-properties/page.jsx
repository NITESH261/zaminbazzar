import { getAllProperty } from "@/actions/property";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const page = async () => {

    const properties = await getAllProperty()

    return (
        <div className="flex w-full flex-1">
            <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                        Popular Properties
                    </h2>
                </div>
                <div className="flex w-full overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
                    <div className="flex xl:grid xl:grid-cols-4 gap-4 w-fit xl:w-full">
                        {properties.map((property, i) => (
                            <div
                                key={`property-${i}`}
                                className="w-80 flex-col border border-neutral-200 rounded-lg xl:w-full group flex hover:shadow-lg"
                            >
                                <div className="relative aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt="house"
                                        fill
                                        className="rounded-t-lg group-hover:scale-110 transition-all object-cover"
                                    />
                                </div>
                                <div className=" p-4 space-y-2">
                                    <div className="w-full">
                                        <span className="text-sm">1 BHK Flat</span>
                                        <h2 className="text-lg font-medium">
                                            &#8377; {property.pricing} Lac | {property.sqft} sqft
                                        </h2>
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <p className="text-gray-600 text-sm">
                                            {property.location}
                                        </p>
                                    </div>
                                    <Button asChild className="rounded-full bg-[#0078DB]">
                                        <Link href={`/popular-properties/${property.uniqueId}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page


