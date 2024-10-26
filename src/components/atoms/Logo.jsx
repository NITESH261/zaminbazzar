import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="flex h-10 aspect-square w-fit relative">
            <Image
                src={"/assets/logo/zamin-logo.gif"}
                alt="Zamin Wale Logo"
                fill
                className="object-contain"
            />
        </div>
    );
};

export default Logo;
