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

import propertyData from "../data/property.json";
import Sectionheadhighlight from "../atoms/Sectionheadhighlight";
import Imagehighlight from "../molecules/Imagehighlight";

const Property = () => {
    const [property, setProperty] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setProperty(propertyData);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            <div className="flex w-full ">
                <div className="flex flex-col gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <SectionHeading
                        title="Top highlighted projects"
                        // subtitle="Noteworthy projects to watch"
                        link
                        linkHref="/properties"
                        linkLabel="See More Properties"
                    />
                    <div className="flex w-full">
                        {loading ? (
                            <SkeletonCard />
                        ) : (
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="flex w-full h-full"
                            >
                                <CarouselContent>
                                    {property.slice(0, 4).map((card, index) => (
                                        <CarouselItem
                                            key={`${index}-plot-img`}
                                            className="basis-44 sm:basis-1/2 md:basis-1/3"
                                        >
                                            <Link href={"/properties"}>
                                                <div className="flex flex-col relative w-full h-[200px] lg:h-[314px] rounded-3xl group hover:shadow-lg">
                                                    <Imagehighlight
                                                        disableAutoplay={true}
                                                    />
                                                    <div className="w-full rounded-b-2xl bg-gradient-to-t from-gray-950 to-transparent absolute bottom-0 ">
                                                        <div className="p-2 flex flex-col md:flex-row justify-between sm:p-4 space-y-2">
                                                            <div className="w-fit">
                                                                <span className="lg:text-2xl font-medium text-white text-base">
                                                                    {
                                                                        card.propertyType
                                                                    }
                                                                </span>
                                                                <p className="gap-2 text-white flex text-xs font-thin sm:text-sm">
                                                                    {
                                                                        card.locality
                                                                    }
                                                                    ,&nbsp;
                                                                    {card.city}
                                                                </p>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-1 sm:gap-2">
                                                                <div className="flex w-full md:w-fit">
                                                                    <IndianRupeeIcon className="text-white !size-4 md:!size-6" />
                                                                    <h4 className="lg:text-xl text-sm text-white lg:font-medium font-normal">
                                                                        {formatCurrency(
                                                                            card.priceTotal
                                                                        )}
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
