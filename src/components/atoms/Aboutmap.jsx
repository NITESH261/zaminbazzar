import React from "react";
import Image from "next/image";

const Aboutmap = () => {
    return (
        <div className="relative aspect-video h-[450px] lg:h-[calc(100vh-100px)] max-w-7xl w-full flex bg-no-repeat lg:rounded-3xl lg:overflow-hidden">
            <Image
                src="/assets/about/map.PNG"
                alt="banner-img"
                fill
                className="object-cover md:object-fill object-center h-full w-full"
            />
        </div>
    );
};

export default Aboutmap;
