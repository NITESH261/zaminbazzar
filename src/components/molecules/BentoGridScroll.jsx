"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { formatCurrency } from "@/lib/utils";
import { IndianRupee } from "lucide-react";

const BentoGridScroll = ({ cards }) => {
    return (
        <>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2 w-full">
                    <span className="size-3 bg-green-500 rounded-full"></span>
                    <span>{cards.propertyType} Property</span>
                </div>
                <div className="flex w-full md:gap-4 flex-col md:flex-row">
                    <div className="flex gap-2 items-end w-fit">
                        <span className="flex text-xl font-medium items-center">
                            <IndianRupee className="size-4" />{" "}
                            {formatCurrency(cards.priceTotal)}
                        </span>
                        <span className="text-xs lg:text-sm">
                            {cards.plotArea?.value} sqft
                        </span>
                    </div>
                    <div className="flex w-fit">
                        <p className="text-xl font-medium">
                            {cards.locality}/{cards.city}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row h-fit w-full ">
                <div className="flex w-full lg:w-3/4">
                    <div className="flex h-full w-full border border-white rounded-l-lg">
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
                                {cards.propertyPhotos.map((card, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative rounded-lg lg:rounded-r-none lg:rounded-l-lg aspect-video flex w-full">
                                            <Image
                                                src={card}
                                                alt="house"
                                                fill
                                                className="object-cover rounded-lg lg:rounded-r-none lg:rounded-l-lg"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-3 sm:left-0" />
                            <CarouselNext className="-right-3 sm:right-0" />
                        </Carousel>
                    </div>
                </div>
                <div className="hidden md:flex lg:flex-col w-full lg:w-1/4">
                    <div className="flex relative aspect-video border border-white rounded-bl-lg lg:rounded-bl-none lg:rounded-tr-lg w-1/3 lg:w-full">
                        <Image
                            src={cards.propertyPhotos[1]}
                            alt="house"
                            fill
                            className="object-cover rounded-bl-lg lg:rounded-bl-none lg:rounded-tr-lg"
                        />
                    </div>
                    <div className="flex relative aspect-video border border-white w-1/3 lg:w-full">
                        <Image
                            src={cards.propertyPhotos[2]}
                            alt="house"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex relative aspect-video border border-white rounded-br-lg w-1/3 lg:w-full">
                        <Image
                            src={cards.propertyPhotos[3]}
                            alt="house"
                            fill
                            className="object-cover rounded-br-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BentoGridScroll;
