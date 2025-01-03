import React from 'react'
import Image from "next/image";

const Aboutmap = () => {
    return (
        <div className="relative aspect-video h-[400px] w-full flex">
            <Image
                src="/assets/about/map.png"
                alt="banner-img"
                fill
                className="object-cover lg:object-cover object-center h-full w-full"
            />
        </div>
    )
}

export default Aboutmap
