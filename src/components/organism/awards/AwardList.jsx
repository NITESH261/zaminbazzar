import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Awards = [
    {
        image: "award-1.jpeg",
    },
    {
        image: "award-2.jpeg",
    },
    {
        image: "award-3.jpeg",
    },
    {
        image: "award-4.jpeg",
    },
    {
        image: "award-5.jpeg",
    },
    {
        image: "award-6.jpeg",
    },
    {
        image: "award-7.jpeg",
    },
    {
        image: "award-8.jpeg",
    },
    {
        image: "award-9.jpeg",
    },
];

const AwardList = () => {
    return (
        <div className="flex w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-20">
                {Awards.map((award, i) => (
                    <div key={i} className="flex relative w-full aspect-video">
                        <Image
                            src={`/assets/awards/${award.image}`}
                            alt={`award-${i}`}
                            fill
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardList;
