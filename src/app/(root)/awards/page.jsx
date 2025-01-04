import AwardList from "@/components/organism/awards/AwardList";
import Hero from "@/components/organism/awards/Hero";
import Footer from "@/components/organism/Footer";
import React from "react";

const page = () => {
    return (
        <>
            <Hero />
            <AwardList />
            <Footer />
        </>
    );
};

export default page;
