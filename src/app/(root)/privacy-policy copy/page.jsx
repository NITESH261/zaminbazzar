import Footer from "@/components/organism/Footer";
import PrivacyPolicy from "@/components/organism/Privacy-Policy/PrivacyPolicy";
import WhyChooseZaminWale from "@/components/organism/Privacy-Policy/WhyChooseZaminWale";
import React from "react";

const page = () => {
    return (
        <>
            <WhyChooseZaminWale/>
            <PrivacyPolicy/>
            <Footer />
        </>
    );
};

export default page;
