import Footer from "@/components/organism/Footer";
import PrivacyPolicy from "@/components/organism/Privacy-Policy copy/PrivacyPolicy";
import WhyChooseZaminWale from "@/components/organism/Privacy-Policy copy/WhyChooseZaminWale";
import SubscriptionPlans from "@/components/organism/Privacy-Policy copy/SubscriptionPlans";
import React from "react";

const page = () => {
    return (
        <>
            <WhyChooseZaminWale/>
            <SubscriptionPlans/>
            <PrivacyPolicy/>
            <Footer />
        </>
    );
};

export default page;
