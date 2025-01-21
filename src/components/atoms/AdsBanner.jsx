import Image from "next/image";
import React from "react";

const AdsBanner = () => {
    return (
        <div className="max-w-7xl w-full p-4 mx-auto mt-4 md:mt-10">
            <div className="w-full border border-neutral-200 shadow h-32 relative rounded-2xl">
                <Image
                    src={"/assets/property/commercial.webp"}
                    alt="ads banner"
                    fill
                    className="object-cover rounded-2xl object-center"
                />
            </div>
        </div>
    );
};

export default AdsBanner;
