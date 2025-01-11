"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ImageScroll from "../molecules/ImageScroll";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import useZaminwaleStore from "@/store";
import { Store } from "lucide-react";
import { IndianRupeeIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const Cards = [
    {
        img: "recomonded-property1.jpeg",
    },
    {
        img: "recomonded-property2.jpeg",
    },
    {
        img: "recomonded-property3.jpeg",
    },
    {
        img: "recomonded-property4.jpeg",
    },
    {
        img: "recomonded-property5.jpeg",
    },
    {
        img: "recomonded-property6.jpeg",
    },
    {
        img: "recomonded-property7.jpeg",
    },
    {
        img: "recomonded-property8.jpeg",
    },
    {
        img: "recomonded-property9.jpeg",
    },
];

const Property = () => {
    // const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const propertyList = useZaminwaleStore((store) => store.propertyList);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl flex  flex-col w-fit">
                            <span>Popular Properties </span>
                            <span className="h-1.5 w-20 bg-[#0000FF] rounded-full"></span>
                        </h2>
                        <Link
                            href={"/properties"}
                            className="flex items-center gap-2 hover:text-black text-[#0000FF] text-lg md:text-xl"
                        >
                            <span className="hidden md:flex">
                                See More Properties
                            </span>
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="flex w-full">
                        <Carousel
                            // plugins={[
                            //     Autoplay({
                            //         delay: 3000,
                            //     })
                            // ]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="flex w-full h-full"
                        >
                            <CarouselContent>
                                {propertyList?.map((card, index) => (
                                    <CarouselItem
                                        key={`${index}-plot-img`}
                                        className="sm:basis-1/3 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <div
                                            className="flex flex-col w-full border border-neutral-200 rounded-lg group hover:shadow-lg"
                                            onMouseEnter={() =>
                                                handleMouseEnter(index)
                                            }
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <ImageScroll
                                                card={card}
                                                isHovered={
                                                    hoveredIndex === index
                                                }
                                            />
                                            <div className="p-4 relative space-y-2">
                                                <div className="w-full">
                                                    <span className="text-sm">
                                                        {card.propertyType}
                                                    </span>
                                                    <h2 className="text-base flex items-center font-medium">
                                                        <IndianRupeeIcon className="!size-4" />{" "}
                                                        {formatCurrency(
                                                            card.priceTotal
                                                        )}
                                                        | {card.plotArea?.value}{" "}
                                                        {card.plotArea?.unit}
                                                    </h2>
                                                    <p className="text-gray-600 gap-2 flex text-sm">
                                                        {card.locality},&nbsp;
                                                        {card.city}
                                                    </p>
                                                </div>
                                                <span className="hidden md:flex">
                                                    Ready Move
                                                </span>
                                                <div className="flex w-full md:absolute md:px-4 pb-3 md:left-0 md:-bottom-40 md:group-hover:bottom-0 md:transition-all">
                                                    <Button
                                                        asChild
                                                        className="w-full h-[unset] rounded-full bg-[#0000FF]"
                                                    >
                                                        <Link
                                                            href={`/properties/${card.propertyId}`}
                                                        >
                                                            View Details
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-0 lg:-left-8" />
                            <CarouselNext className="right-0 lg:-right-8" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;
