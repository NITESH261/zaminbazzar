import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

const TrendingNews = () => {
    const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    return (
        <>
            <div className="flex w-full bg-gray-200">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-14">
                    <div className="flex w-full overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
                        <div className="flex xl:grid xl:grid-cols-4 gap-4 w-fit xl:w-full">
                            {cards.map((card) => (
                                <Link
                                    key={card}
                                    href={"/"}
                                    className="w-80 flex flex-col bg-white rounded-lg xl:w-full group "
                                >
                                    <div className="flex w-full relative aspect-[3/2] bg-cover rounded-lg bg-[url('/assets/house/house1.webp')]">
                                        <div className="flex w-full p-4  bg-gradient-to-b from-black/40 to-transparent rounded-lg">
                                            <Badge className="h-fit bg-blue-500 text-white">
                                                Trend
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex w-full p-4">
                                        <p className="text-sm md:text-base text-neutral-700">
                                            There Are Now 30 Renters for Every
                                            Home for Sale in the U.S.
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingNews;
