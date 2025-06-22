import Footer from "@/components/organism/Footer";
import WhyChooseZaminWale from "@/components/organism/Privacy-Policy copy/WhyChooseZaminWale";
import SubscriptionPlans from "@/components/organism/Privacy-Policy copy/SubscriptionPlans";
import ClientTestimonials from "@/components/organism/Privacy-Policy copy/ClientTestimonials";
import FAQ from "@/components/organism/Privacy-Policy copy/FAQ";
import React from "react";

const page = () => {
    return (
        <>
            <WhyChooseZaminWale/>
            <SubscriptionPlans/>
            <ClientTestimonials/>
            <FAQ/>
            <Footer />
        </>
    );
};

export default page;
