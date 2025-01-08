import { getAllProperty } from "@/actions/property";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const page = async () => {

    const { result = [] } = await getAllProperty()

    return (
        <div className="flex w-full flex-1">
            <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                        All Properties
                    </h2>
                </div>
                <div className="flex w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                        {result.map((property, i) => (
                            <div
                                key={property.propertyId}
                                className="flex-col border border-neutral-200 rounded-lg w-full group flex hover:shadow-lg"
                            >
                                <div className="relative aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                                    <Image
                                        src={property.propertyPhotos[0] ?? "/assets/property/commercial.webp"}
                                        alt="house"
                                        fill
                                        className="rounded-t-lg group-hover:scale-110 transition-all object-cover"
                                    />
                                </div>
                                <div className="flex flex-col p-4 relative w-full overflow-hidden space-y-2">
                                    <div className="w-full">
                                        <span className="text-sm">1 BHK Flat</span>
                                        <h2 className="text-base font-medium">
                                            &#8377; {property.priceTotal} Lac | {property.plotArea}
                                        </h2>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <p className="text-gray-600 text-sm">
                                                {property.locality} | {property.city}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="hidden md:flex">
                                        Ready Move
                                    </span>
                                    <div className="flex w-full md:absolute md:px-4 pb-3 md:left-0 md:-bottom-40 md:group-hover:bottom-0 md:transition-all">
                                        <Button asChild className="w-full h-[unset] rounded-full bg-[#0078DB]">
                                            <Link href={`/properties/${property.propertyId}`}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </div>
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


