import React from "react";
import Aboutconnectivity from "@/components/organism/Aboutconnectivity";
import Aboutmap from "@/components/atoms/Aboutmap";
import Amenities from "@/components/organism/Amenities";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/99villa/Hero";
import About from "@/components/organism/99villa/About";
import Property from "@/components/organism/99villa/Property";

const metadata = {
    title: "Zaminwale – Buying and Selling of Land",
    description:
        "Zaminwale.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
    keywords: [
        "buy land",
        "sell land",
        "real estate",
        "land marketplace",
        "property for sale",
        "farmland",
        "commercial land",
        "residential plots",
        "Zaminwale",
    ],
    openGraph: {
        title: "Zaminwale – Buying and Selling of Land",
        description:
            "Zaminwale.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
        siteName: "LetsUpgrade",
        images: [
            {
                url: "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/f5eab6fc-6526-4a31-bfa3-2f1acc4ea435.png",
                width: 1200,
                height: 628,
                alt: "Zaminwale",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Zaminwale – Buying and Selling of Land",
        description:
            "Zaminwale.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
        images: [
            "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/f5eab6fc-6526-4a31-bfa3-2f1acc4ea435.png",
        ],
    },
};

const page = () => {
    return (
        <>
            <Hero />
            <About />
            <Aboutconnectivity />
            <Aboutmap />
            <Amenities />
            <Property />
            <Footer />
        </>
    );
};

export default page;
