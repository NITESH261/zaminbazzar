import { CTA } from "@/components/organism/CTA";
import Discover from "@/components/organism/Discover";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Property from "@/components/organism/Property";
import Recommendedcities from "@/components/organism/Recommendedcities";
import TrendingNews from "@/components/organism/TrendingNews";
import React from "react";

const page = () => {
    return (
        <>
            <Hero />
            <Property />
            <Discover />
            <Recommendedcities />
            <CTA />
            <TrendingNews />
            <Footer />
        </>
    );
};

export default page;
