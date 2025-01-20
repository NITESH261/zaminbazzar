"use client";

import { formatCurrency } from "@/lib/utils";
import { IndianRupeeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionHeading from "../atoms/SectionHeading";
import SkeletonCard from "../atoms/SkeletonCard";
import ImageScroll from "../molecules/ImageScroll";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

// Import static JSON data
import propertyData from "../data/property.json";
import Sectionheadhighlight from "../atoms/Sectionheadhighlight";
import Imagehighlight from "../molecules/Imagehighlight";

const Property = () => {
    const [property, setProperty] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    useEffect(() => {
        // Simulate loading and use static JSON data
        setLoading(true);
        setTimeout(() => {
            setProperty(propertyData); // Set the static JSON data
            setLoading(false);
        }, 500); // Simulated loading delay
    }, []);

    return (
        <>
            <div className="flex w-full ">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <Sectionheadhighlight
                        title="Top highlighted projects"
                        subtitle="Noteworthy projects to watch"
                        link
                        linkHref="/properties"
                        linkLabel="See More Properties"
                    />
                    <div className="flex px-6 lg:w-full sm:w-52 h-[314px]">
                        {loading ? (
                            <SkeletonCard />
                        ) : (
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="flex w-full h-full "
                            >
                                <CarouselContent>
                                    {property.slice(0, 4).map((card, index) => (
                                        <CarouselItem
                                            key={`${index}-plot-img`}
                                            className="basis-44 sm:basis-1/2"
                                        >
                                            <Link href={'/propertie'}>
                                                <div
                                                    className="flex flex-col w-full rounded-2xl group hover:shadow-lg"
                                                    onMouseEnter={() =>
                                                        handleMouseEnter(index)
                                                    }
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <Imagehighlight
                                                        disableAutoplay={true}
                                                    />
                                                    <div className=" w-[97%] rounded-b-2xl bg-gradient-to-t from-gray-900 to-transparent absolute bottom-0 ">
                                                        <div className="p-2 flex justify-between sm:p-4 space-y-2">
                                                            <div className="w-fit">
                                                                <span className="text-lg font-bold text-white sm:text-lg">
                                                                    {card.propertyType}
                                                                </span>
                                                                <p className="gap-2 text-white flex text-xs font-thin sm:text-sm">
                                                                    {card.locality}
                                                                    ,&nbsp;
                                                                    {card.city}
                                                                </p>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-1 sm:gap-2">
                                                                <div className="flex">
                                                                    <IndianRupeeIcon className="!w-6 pt-1 text-white !h-6 sm:!w-6 sm:!h-6" />
                                                                    <h4 className="text-sm sm:text-xl text-white font-medium">
                                                                        {formatCurrency(card.priceTotal)}
                                                                    </h4>
                                                                </div>
                                                                {/* <p className="text-sm sm:text-sm text-white ">
                                                                    {card.plotArea.value}{""}|
                                                                    {card.plotArea.unit}
                                                                </p> */}
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="-left-3 sm:left-0 lg:-left-8" />
                                <CarouselNext className="-right-3 sm:right-0 lg:-right-8" />
                            </Carousel>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;
