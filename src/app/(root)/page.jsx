"use client";

import { getAllProperty } from "@/actions/property";
import About from "@/components/organism/About";
import DreamPlots from "@/components/organism/DreamPlots";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Property from "@/components/organism/Property";
import RecommendedProperty from "@/components/organism/RecommendedProperty";
import TopLocations from "@/components/organism/TopLocations";
import TrendingNews from "@/components/organism/TrendingNews";
import useZaminwaleStore from "@/store";
import { useEffect, useState } from "react";

const page = () => {
    const dispatch = useZaminwaleStore((store) => store.dispatch);

    useEffect(() => {
        const fetchData = async () => {
            const { result = {} } = await getAllProperty();
            dispatch({
                type: "SET_STATE",
                payload: { propertyList: result },
            });
        };
        fetchData();
    }, []);

    return (
        <>
            <Hero />
            <Property />
            <TopLocations />
            <RecommendedProperty />
            <DreamPlots />
            <About />
            <TrendingNews />
            <Footer />
        </>
    );
};

export default page;
