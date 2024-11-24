"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const BannerImages = [
    { img: "banner-img-1.jpg" },
    { img: "banner-img-2.jpg" },
    { img: "banner-img-3.jpg" },
    { img: "banner-img-4.jpg" },
];

const BannerCarousel = () => {
    return (
        <>
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
                className="w-full"
            >
                <CarouselContent className="w-full h-96 lg:h-[24rem] flex ml-0">
                    {BannerImages.map((card, index) => (
                        <CarouselItem
                            key={`${index}-img`}
                            className="flex w-full h-full pl-0"
                        >
                            <div className="relative aspect-video h-full w-full flex">
                                <Image
                                    src={`/assets/banner-img/${card.img}`}
                                    alt={`${index}-img`}
                                    fill
                                    className="object-cover object-center h-full w-full"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default BannerCarousel;
