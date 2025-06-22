import Footer from "@/components/organism/Footer";
import WhyChooseZaminWale from "@/components/organism/Privacy-Policy copy/WhyChooseZaminWale";
import SubscriptionPlans from "@/components/organism/Privacy-Policy copy/SubscriptionPlans";
import ClientTestimonials from "@/components/organism/Privacy-Policy copy/ClientTestimonials";
import React from "react";

const page = () => {
    return (
        <>
            <WhyChooseZaminWale/>
            <SubscriptionPlans/>
            <ClientTestimonials/>
            <Footer />
        </>
    );
};

export default page;
