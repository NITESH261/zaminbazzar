import Footer from "@/components/organism/Footer";
import Whyc from "@/components/organism/Dealer/whyc";
import SubscriptionPlan from "@/components/organism/Dealer/subscriptionplan";
import React from "react";

const page = () => {
    return (
        <>
            <Whyc/>
            <Subscriptionplan/>
            <Footer />
        </>
    );
};

export default page;