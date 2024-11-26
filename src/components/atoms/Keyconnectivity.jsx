"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Image array for the carousel
const BannerImages = [
    { img: "banner-img-1.jpg", alt: "First banner image" },
    { img: "banner-img-2.jpg", alt: "Second banner image" },
    { img: "banner-img-3.jpg", alt: "Third banner image" },
    { img: "banner-img-4.jpg", alt: "Fourth banner image" },
    { img: "banner-img-5.jpg", alt: "Fifth banner image" },
    { img: "banner-img-6.jpg", alt: "Sixth banner image" },
];

const BannerCarousel = () => {
    return (
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
            <CarouselContent className="-ml-1">
                {BannerImages.map((card, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3" // 1, 2, or 3 items depending on screen size
                    >
                        <Card className="w-full h-full">
                            <CardContent className="relative aspect-video w-full p-0">
                                <Image
                                    src={`/assets/banner-img/${card.img}`}
                                    alt={card.alt}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default BannerCarousel;
