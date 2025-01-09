"use client"

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const TrendingNews = () => {
    const cards = Array.from({ length: 8 }, (_, i) => i + 1);
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-14">
                    <div className="flex w-full">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl flex flex-col gap-1">
                            <span>News & Blogs</span>
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
                            className="flex w-full h-full"
                        >
                            <CarouselContent>
                                {cards.map((index) => (
                                    <CarouselItem
                                        key={`${index}-plot-img`}
                                        className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <Card className="rounded-lg group p-0 h-full w-full transition-all border-none">
                                            <CardHeader className="p-0 flex flex-grow-0 rounded-tl-lg">
                                                <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
                                                    <Image
                                                        src={"/assets/house/house1.webp"}
                                                        alt="plots"
                                                        fill
                                                        className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
                                                    />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="w-full p-4">
                                                <div className="flex flex-col w-full gap-2 p-4">
                                                    <span className="text-sm md:text-base font-medium">
                                                        All You Need To Know About Godrej Emerald Thane West
                                                    </span>
                                                    <p className="text-xs">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error sit consectetur nesciunt magnam harum suscipit nobis animi,...
                                                    </p>
                                                    <div className="flex text-xs text-neutral-500 justify-between w-full">
                                                        <span>By Lorem</span>
                                                        <span>17th Aug 18</span>
                                                    </div>
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
        </>
    );
};

export default TrendingNews;
