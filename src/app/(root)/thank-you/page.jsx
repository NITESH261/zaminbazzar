import Footer from "@/components/organism/Footer";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <>
            <div className="flex w-full h-96">
                <div className="flex flex-col w-full max-w-7xl items-center justify-center mx-auto">
                    <div className="flex aspect-square w-52 relative">
                        <Image
                            src={"/assets/thank/thank.png"}
                            alt="thank-you-logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex w-full text-center gap-4 flex-col">
                        <h1 className="text-5xl font-extrabold text-[#6f272b]">
                            Thank You
                        </h1>
                        <p className="text-center text-base">
                            We have received your enquiry. Our team will get
                            back to you soon.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default page;
