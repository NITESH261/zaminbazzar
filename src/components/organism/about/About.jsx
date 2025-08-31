import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="flex w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-20">
                <div className="flex flex-col space-y-4 md:space-y-6 w-full justify-center">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                            About Zaminbazzar
                        </h2>
                        {/* <span className="text-sm md:text-base lg:text-lg font-semibold">
                            *Riverhill - With Nature In the Nature!
                        </span> */}
                    </div>
                    <p className="text-sm md:text-base">
                        We introduce yourself as land experts, we don't just
                        sell plots; we offer a gateway to endless possibilities.
                        Our expertise goes beyond transactions, providing you
                        with a comprehensive box of opportunities. Whether
                        you're looking to build your dream home, invest in a
                        future asset, or simply explore new horizons, we guide
                        you every step of the way. Trust us to turn your vision
                        into reality, as we deliver not just land, but a canvas
                        for your dreams.
                    </p>
                    <p className="text-sm md:text-base">
                    At Zaminbazzar, we take pride in being your trusted partner in real estate, specializing in land transactions.
                     With a commitment to integrity, transparency, and excellence, 
                     we provide secure and value-driven property solutions that empower our clients to make confident investment decisions.
                      Our expertise and customer-first approach ensure a seamless journey towards land ownership and long-term growth.
                    </p>
                </div>
                <div className="flex w-full">
                    <div className="flex relative aspect-video w-full rounded-t-lg overflow-hidden">
                        <Image
                            src="/assets/banner-img/1bhkhome.jpeg"
                            alt="plots"
                            fill
                            className="rounded-lg object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
