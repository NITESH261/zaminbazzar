import { CTA } from "@/components/organism/CTA";
import Discover from "@/components/organism/Discover";
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
        </>
    );
};

export default page;
