"use client"

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const PlotsData = [
    {
        image: "sea view.webp",
        title: "Thane",
        description:
            "A sea view bungalow situated near the coastline or beach, offering a scenic view of the sea or ocean.",
        link: "#enquire-now",
    },
    {
        image: "large-government-warehouse.webp",
        title: "Panvel",
        description:
            "As of the current trend, the inclination of the people has shifted towards investing in commercial land.",
        link: "#enquire-now",
    },
    {
        image: "istockphoto-623754774-612x612.webp",
        title: "Kharghar",
        description:
            "Factories plots are massive plots of land providing space to varied type of Factories and offices under one area.",
        link: "#enquire-now",
    },
    {
        image: "istockphoto-1199749863-612x612.webp",
        title: "Karjat",
        description:
            "The biggest is for the land to be convenient for either travelers or the local population. After that the land needs to be zoned (ie given permission) for that use.",
        link: "#enquire-now",
    },
    {
        image: "investment.webp",
        title: "Pune",
        description:
            "Your future prospects look great when you buy investment plots with regards to profitable returns.",
        link: "#enquire-now",
    },
    {
        image: "commercial.webp",
        title: "Nashik",
        description:
            "Contact us for best returns on plots invested near junctions, stations highways, and busy market places.",
        link: "#enquire-now",
    },
    {
        image: "residential.webp",
        title: "Mumbai",
        description:
            "In case you are a developer yourself and planning to expand your business venture, do contact us for the list of residential plots.",
        link: "#enquire-now",
    },
    {
        image: "353640073_20231016184851.webp",
        title: "Vashi",
        description:
            "If you fancy living in a bungalow or a row-house with your own independent terrace, parking and garden.",
        link: "#enquire-now",
    },
];

const NearByLocations = () => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex w-full">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                        Near By Locations
                    </h2>
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
                        className="w-full h-full"
                    >
                        <CarouselContent>
                            {PlotsData.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="relative rounded-2xl aspect-video md:aspect-square lg:aspect-video flex w-full">
                                        <Image
                                            src={`/assets/property/${card.image}`}
                                            alt="house"
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="w-full space-y-2">
                                        <h2 className="text-base font-medium text-center py-2">
                                            {card.title}
                                        </h2>
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
    )
}

export default NearByLocations
