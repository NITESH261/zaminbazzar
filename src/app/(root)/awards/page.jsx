import Award_video from "@/components/organism/awards/Award_video";
import AwardList from "@/components/organism/awards/AwardList";
import Hero from "@/components/organism/awards/Hero";
import Footer from "@/components/organism/Footer";
import React from "react";

const page = () => {
    return (
        <>
            <Hero />
            <AwardList />
            {/* <Award_video /> */}
            <Footer />
        </>
    );
};

export default page;
