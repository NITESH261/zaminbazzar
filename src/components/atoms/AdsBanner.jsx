"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const AdsBanner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="max-w-7xl w-full p-4 mx-auto mt-4 md:mt-10">
            <div className="w-full border border-neutral-200 shadow h-32 relative rounded-2xl">
                <Image
                    src={isMobile ? "/assets/ads/main_mobileads.jpg" : "/assets/ads/main-ads.jpeg"}
                    alt="ads banner"
                    fill
                    className="md:object-cover sm:object-contain rounded-2xl object-center"
                />
            </div>
        </div>
    );
};

export default AdsBanner;
