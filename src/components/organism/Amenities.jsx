"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const PlotsData = [
    {
        image: "sea view.webp",
        title: "Swimming Pool",
        link: "#enquire-now",
    },
    {
        image: "large-government-warehouse.webp",
        title: "24/7 Water & Electric Supply",
        link: "#enquire-now",
    },
    {
        image: "istockphoto-623754774-612x612.webp",
        title: "Parking Space",
        link: "#enquire-now",
    },
    {
        image: "istockphoto-1199749863-612x612.webp",
        title: "24/7 CCTV Surveillance",
        link: "#enquire-now",
    },
    {
        image: "investment.webp",
        title: "Solar Panels",
        link: "#enquire-now",
    },
    {
        image: "commercial.webp",
        title: "Children’s Playing Area",
        link: "#enquire-now",
    },
];

const Amenities = () => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex w-full">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl flex flex-col gap-1">
                        <span>Amenities</span>
                        <span className="h-1.5 w-20 bg-[#0000FF] rounded-full"></span>
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
                        <CarouselContent className="">
                            {PlotsData.map((plot, index) => (
                                <CarouselItem
                                    key={`${index}-plot-img`}
                                    className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <Card className="rounded-lg group hover:shadow-lg p-0 h-full w-full transition-all">
                                        <CardHeader className="p-0 flex flex-grow-0 rounded-tl-lg">
                                            <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
                                                <Image
                                                    src={`/assets/property/${plot.image}`}
                                                    alt="plots"
                                                    fill
                                                    className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="w-full p-4">
                                            <div className="w-full space-y-2">
                                                <span className="text-base font-medium">
                                                    {plot.title}
                                                </span>
                                                <p className="text-sm text-neutral-800">
                                                    {plot.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 lg:-left-8" />
                        <CarouselNext className="right-0 lg:-right-8" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Amenities;
