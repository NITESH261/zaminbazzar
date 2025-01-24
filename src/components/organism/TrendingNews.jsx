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
import Link from "next/link";
import SectionHeading from "../atoms/SectionHeading";
import { sliceParagraph } from "@/lib/utils";

const TrendingNews = () => {
    // const cards = Array.from({ length: 8 }, (_, i) => i + 1);
    const blogsData = [
        {
            id: 1,
            title: "Mahamumbai - Your Future Investment Opportunity",
            excerpt:
                "MAHAMUMBAI enjoys high property supply, demand is growing due to construction of upcoming sea-link from Sewri to Nhava Sheva, Navi Mumbai Airport, and proximity to the railway station and national highways around. Also, this area benefits from its proximity to prominent commercial parts of the city such as Kopar Khairane, Taloja, and Airoli.",
            image: "/assets/blog/1.png",
        },
        {
            id: 2,
            title: "Why Thane is good for investment in Plots?",
            excerpt:
                "Thane is an emerging cosmopolitan city in the Mumbai Metropolitan Area and the most preferred real estate investment destination. Affordable lifestyle with necessary amenities at value-oriented pricing and Infrastructural development has been the key differentiation factors that set Thane apart from the other real estate markets in the nearby adjoining areas",
            image: "/assets/blog/2.jpg",
        },
        {
            id: 3,
            title: "The Dos and Don’ts of Buying Land",
            excerpt:
                "Buying land is a dream for many people. Purchasing land is also one of the important investments one can make. The Dos and Don’ts of Buying Land Purchasing a plot tailored for your dream home may seem like the perfect investment. Whether you are purchasing a home, ranch property, or farm, there are things to consider that may prevent you from making your land purchase a success.",
            image: "/assets/blog/3.webp",
        },
        {
            id: 4,
            title: "Advantages of owning a Plots.",
            excerpt:
                "There is no doubt that real estate is one of the most fruitful and stable forms of investment. While residential homes have become almost synonymous with real estate investments, they aren’t the only option available. If you are considering making a real estate investment, here’s why purchasing a plot of land should top your list.",
            image: "/assets/blog/4.jpg",
        },
    ];
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-14">
                    <SectionHeading
                        title="News & Blogs"
                        link
                        linkHref="/blogs"
                        linkLabel="See More blogs"
                    />
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
                                {blogsData.map((blog) => (
                                    <CarouselItem
                                        key={`${blog.id}-plot-img`}
                                        className="basis-44 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <Link href={`/blogs/${blog.id}`}>
                                            <Card className="rounded-lg group p-0 h-full w-full transition-all border-none">
                                                <CardHeader className="p-0 flex flex-grow-0 rounded-tl-lg">
                                                    <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
                                                        <Image
                                                            src={blog.image}
                                                            alt={`blog-${blog.id}`}
                                                            fill
                                                            className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
                                                        />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="w-full p-2 sm:p-4">
                                                    <div className="flex flex-col w-full gap-2">
                                                        <span className="text-xs sm:text-sm md:text-base font-medium">
                                                            {blog.title}
                                                        </span>
                                                        <p className="text-[10px] sm:text-xs">
                                                            {sliceParagraph(
                                                                blog.excerpt
                                                            )}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-3 sm:left-0 lg:-left-8" />
                            <CarouselNext className="-right-3 sm:right-0 lg:-right-8" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingNews;
