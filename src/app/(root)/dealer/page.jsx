import Footer from "@/components/organism/Footer";
import whyc from "@/components/organism/Dealer/whyc";
import subscriptionplan from "@/components/organism/Dealer/subscriptionplan";
import React from "react";

const page = () => {
    return (
        <>
            <whyc/>
            <subscriptionplan/>
            <Footer />
        </>
    );
};

export default page;