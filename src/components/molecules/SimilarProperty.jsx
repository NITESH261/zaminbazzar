"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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

const SimilarProperty = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                            Similar Property
                        </h2>
                        <Link
                            href={"/"}
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
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}
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
                                        <div className="flex flex-col w-full border border-neutral-200 rounded-lg group hover:shadow-lg">
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
                                                    <span className="text-sm">
                                                        1 BHK Flat
                                                    </span>
                                                    <h2 className="text-lg font-medium">
                                                        &#8377; 30 Lac | 1000
                                                        sqft
                                                    </h2>
                                                </div>
                                                <div className="flex flex-col space-y-1 w-full">
                                                    <p className="text-gray-600 text-sm">
                                                        Vinay Nagar, Mumbai
                                                    </p>
                                                </div>
                                                <Button className="rounded-full bg-[#0000FF]">
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-3 sm:left-0 lg:-left-8" />
                            <CarouselNext className="-right-3 sm:right-0 lg:-right-8" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimilarProperty;
