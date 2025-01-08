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
                            <span className="h-1.5 w-20 bg-[#0078DB] rounded-full"></span>
                        </h2>
                        <Link
                            href={"/properties"}
                            className="flex items-center gap-2 hover:text-black text-[#0078DB] text-lg md:text-xl"
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
                                {Cards.map((card, index) => (
                                    <CarouselItem
                                        key={`${index}-plot-img`}
                                        className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
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
                                                        1 BHK Flat
                                                    </span>
                                                    <h2 className="text-base font-medium">
                                                        &#8377; 30 Lac | 1000
                                                        sqft
                                                    </h2>
                                                    <p className="text-gray-600 text-sm">
                                                        Vinay Nagar, Mumbai
                                                    </p>
                                                </div>
                                                <span className="hidden md:flex">
                                                    Ready Move
                                                </span>
                                                <div className="flex w-full md:absolute md:px-4 pb-3 md:left-0 md:-bottom-40 md:group-hover:bottom-0 md:transition-all">
                                                    <Button asChild className="w-full h-[unset] rounded-full bg-[#0078DB]">
                                                        <Link href={"/"}>
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
