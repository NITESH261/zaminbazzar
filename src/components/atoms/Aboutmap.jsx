import React from "react";
import Image from "next/image";

const Aboutmap = () => {
    return (
        <div className="relative aspect-video h-[450px] w-full flex bg-no-repeat">
            <Image
                src="/assets/about/map.png"
                alt="banner-img"
                fill
                className="object-cover object-center h-full w-full"
            />
        </div>
    );
};

export default Aboutmap;
