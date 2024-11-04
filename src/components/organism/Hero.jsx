import React from "react";
import SearchBar from "../molecules/SearchBar";
import BannerCarousel from "../atoms/BannerCarousel";

const Hero = () => {
    return (
        <>
            <div className="w-full h-96 md:mb-14 flex items-center justify-center relative">
                <BannerCarousel />
                <div className="absolute flex flex-col gap-6 items-center justify-center h-full w-full bg-black/25">
                    <h1 className="font-galanoGrotesque text-white w-full max-w-3xl text-3xl md:text-4xl lg:text-5xl  break-normal text-center font-bold">
                        The #1 site real estate professionals trust
                    </h1>
                    <div className="flex absolute top-[80%] shadow-md flex-col divide-y w-full max-w-4xl bg-white rounded-2xl md:border md:border-gray-200">
                        <div className="hidden md:flex w-full text-sm">
                            <ul className="grid grid-cols-7 h-14 w-full">
                                <li className="flex w-full items-center justify-center">
                                    Buy
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    Rent
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    New Launch
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    Pg/Co-living
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    Commercial
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    Plot/Land
                                </li>
                                <li className="flex w-full items-center justify-center">
                                    Project
                                </li>
                            </ul>
                        </div>
                        <div className="flex w-full px-4 h-14">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
