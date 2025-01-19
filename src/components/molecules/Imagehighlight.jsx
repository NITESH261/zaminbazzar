import React, { useState } from 'react';
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";

const Cards = [
    { img: "recomonded-property1.jpeg" },
    { img: "recomonded-property2.jpeg" },
    { img: "recomonded-property3.jpeg" },
    { img: "recomonded-property4.jpeg" },
    { img: "recomonded-property5.jpeg" },
    { img: "recomonded-property6.jpeg" },
    { img: "recomonded-property7.jpeg" },
    { img: "recomonded-property8.jpeg" },
    { img: "recomonded-property9.jpeg" },
];

const Imagehighlight = ({ disableAutoplay = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <div
                    className={cn(
                        "relative aspect-video  h-[252px] sm:h-[252px] bg-cover rounded-lg flex w-full overflow-hidden"
                    )}
                >
                    <Image
                        src={`/assets/recommonded-property/${Cards[0]?.img || "recomonded-property1.jpeg"}`}
                        alt="house"
                        fill
                        className="border-4  border-t-[#0000FF] rounded-lg transition-all object-cover"
                    />
                </div>
            ) : (
                <Carousel
                    plugins={
                        disableAutoplay
                            ? []
                            : [
                                Autoplay({
                                    delay: 1000,
                                }),
                            ]
                    }
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
                                <div
                                    className={cn(
                                        "relative h-[252px] sm:h-[252px] aspect-video bg-cover rounded-lg flex w-full overflow-hidden"
                                    )}
                                >
                                    <Image
                                        src={`/assets/recommonded-property/${card.img}`}
                                        alt={`house-${index}`}
                                        fill
                                        className="border-4  border-t-[#0000FF] rounded-lg object-cover"
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

export default Imagehighlight;
