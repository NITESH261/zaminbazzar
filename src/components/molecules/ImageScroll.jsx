import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const ImageScroll = ({ card, isHovered }) => {
    return (
        <div>
            {!isHovered ? (
                <div className="relative aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                    <Image
                        src={`/assets/recommonded-property/${card.img}`}
                        alt={"house"}
                        fill
                        className="rounded-t-lg transition-all object-cover"
                    />
                </div>
            ) : (
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 1000,
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
                                key={`${index}-image`}
                                className="basis-full"
                            >
                                <div className="relative h-[168px] aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                                    <Image
                                        src={`/assets/recommonded-property/${card.img}`}
                                        alt={`house-${index}`}
                                        fill
                                        className="rounded-t-lg object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
        </div>
    );
};

export default ImageScroll;
