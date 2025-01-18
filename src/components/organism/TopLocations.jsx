"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import SectionHeading from "../atoms/SectionHeading";

const Locations = [
    {
        label: "Thane Plots",
        img: "img4.jpg",
        url: "#",
    },
    {
        label: "Panvel Plots",
        img: "img3.jpg",
        url: "#",
    },
    {
        label: "Uran Plots",
        img: "img2.jpg",
        url: "#",
    },
    {
        label: "Third Mumbai",
        img: "img1.jpg",
        url: "#",
    },
    // {
    //     label: "Thane Plots",
    //     img: "tha.webp",
    //     url: "#",
    // },
    // {
    //     label: "Khalapur Plots",
    //     img: "kha.webp",
    //     url: "#",
    // },
    // {
    //     label: "Vindhane Plots",
    //     img: "vind.webp",
    //     url: "#",
    // },
    // {
    //     label: "Chowk Panvel Plots",
    //     img: "pan.webp",
    //     url: "#",
    // },
];

const TopLocations = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                    <SectionHeading title="Top Locations" />
                    <div className="flex w-full overflow-auto scrollbar-hide">
                        <div className="flex w-fit md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-full gap-2 md:gap-4">
                            {Locations.map((location, index) => (
                                <Link
                                    key={index}
                                    href={location.url}
                                    className="w-[166px] sm:w-72 md:w-full"
                                >
                                    <Card className="rounded-lg group hover:shadow-lg p-0 h-full w-full transition-all">
                                        <CardHeader className="p-0 flex flex-grow-0 rounded-tl-lg">
                                            <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
                                                <Image
                                                    src={`/assets/top-location/${location.img}`}
                                                    alt="locations"
                                                    fill
                                                    className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="w-full p-2 sm:p-4">
                                            <div className="w-full space-y-2">
                                                <span className="text-sm sm:text-base font-medium">
                                                    {location.label}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopLocations;
