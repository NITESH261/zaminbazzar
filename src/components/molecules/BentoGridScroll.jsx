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

const BentoGridScroll = ({ cards }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-fit w-full">
                <div className="flex w-full lg:w-3/4">
                    <div className="flex h-full w-full border border-white rounded-l-2xl">
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
                                {cards.map((card, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative rounded-2xl lg:rounded-r-none lg:rounded-l-2xl aspect-video flex w-full">
                                            <Image
                                                src={card}
                                                alt="house"
                                                fill
                                                className="object-cover rounded-2xl lg:rounded-r-none lg:rounded-l-2xl"
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
                    <div className="flex relative aspect-video border border-white rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl w-1/3 lg:w-full">
                        <Image
                            src={cards[1]}
                            alt="house"
                            fill
                            className="object-cover rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl"
                        />
                    </div>
                    <div className="flex relative aspect-video border border-white w-1/3 lg:w-full">
                        <Image
                            src={cards[2]}
                            alt="house"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex relative aspect-video border border-white rounded-br-2xl w-1/3 lg:w-full">
                        <Image
                            src={cards[3]}
                            alt="house"
                            fill
                            className="object-cover rounded-br-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BentoGridScroll;
