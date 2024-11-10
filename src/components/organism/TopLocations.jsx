"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"


const Locations = [
    {
        label: "Navi Mumbai Plots",
        img: "nm.webp",
        url: "#",
    },
    {
        label: "Dronagiri Plots",
        img: "drona.webp",
        url: "#",
    },
    {
        label: "Ranjanpada Plots",
        img: "ranjan.webp",
        url: "#",
    },
    {
        label: "Chirle Plots",
        img: "chir.webp",
        url: "#",
    },
    {
        label: "Thane Plots",
        img: "tha.webp",
        url: "#",
    },
    {
        label: "Khalapur Plots",
        img: "kha.webp",
        url: "#",
    },
    {
        label: "Vindhane Plots",
        img: "vind.webp",
        url: "#",
    },
    {
        label: "Chowk Panvel Plots",
        img: "pan.webp",
        url: "#",
    },
]

const TopLocations = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
                    <div className="flex w-full">
                        <h2 className="text-lg font-galanoGrotesque font-bold md:text-xl lg:text-2xl">
                            Top Locations
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
                            className="flex w-full h-full"
                        >
                            <CarouselContent>
                                {Locations.map((location, index) => (
                                    <CarouselItem
                                        key={`${index}-location-img`}
                                        className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <Link href={location.url} className="w-full">
                                            <Card className="rounded-lg group hover:shadow-lg p-0 h-full w-full transition-all">
                                                <CardHeader className="p-0 flex flex-grow-0 rounded-tl-lg">
                                                    <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
                                                        <Image
                                                            src={`/assets/top-locations/${location.img}`}
                                                            alt="locations"
                                                            fill
                                                            className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
                                                        />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="w-full p-4">
                                                    <div className="w-full space-y-2">
                                                        <strong className="text-base">
                                                            {location.label}
                                                        </strong>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>

                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-0 lg:-left-8" />
                            <CarouselNext className="right-0 lg:-right-8" />
                        </Carousel>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopLocations
