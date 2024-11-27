import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Cards = [
    {
        img: "recomonded-property1.jpeg"
    },
    {
        img: "recomonded-property2.jpeg"
    },
    {
        img: "recomonded-property3.jpeg"
    },
    {
        img: "recomonded-property4.jpeg"
    },
]

const Property = () => {
    // const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                            Popular Properties
                        </h2>
                        <Link href={"/popular-properties"} className="flex items-center gap-2 hover:text-black text-[#0078DB] text-lg md:text-xl">
                            <span className="hidden md:flex">See More Properties</span>
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="flex w-full overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
                        <div className="flex xl:grid xl:grid-cols-4 gap-4 w-fit xl:w-full">
                            {Cards.map((card, i) => (
                                <Link
                                    key={`property-${i}`}
                                    href={"/"}
                                    className="w-80 flex-col border border-neutral-200 rounded-lg xl:w-full group flex hover:shadow-lg"
                                >
                                    <div className="relative aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                                        <Image
                                            src={`/assets/recommonded-property/${card.img}`}
                                            alt="house"
                                            fill
                                            className="rounded-t-lg group-hover:scale-110 transition-all object-cover"
                                        />
                                    </div>
                                    <div className=" p-4 space-y-2">
                                        <div className="w-full">
                                            <span className="text-sm">1 BHK Flat</span>
                                            <h2 className="text-lg font-medium">
                                                &#8377; 30 Lac | 1000 sqft
                                            </h2>
                                        </div>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <p className="text-gray-600 text-sm">
                                                Vinay Nagar, Mumbai
                                            </p>
                                        </div>
                                        <Button className="rounded-full bg-[#0078DB]">
                                            View Details
                                        </Button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;
