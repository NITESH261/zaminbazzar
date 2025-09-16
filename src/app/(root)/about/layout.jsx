import React from "react";

export const metadata = {
    title: "Zaminbazzar – Buying and Selling of Land",
    description:
        "Zaminbazzar.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
    keywords: [
        "buy land",
        "sell land",
        "real estate",
        "land marketplace",
        "property for sale",
        "farmland",
        "commercial land",
        "residential plots",
        "Zaminbazzar",
    ],
    openGraph: {
        title: "Zaminbazzar – Buying and Selling of Land",
        description:
            "Zaminbazzar.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
        siteName: "LetsUpgrade",
        images: [
            {
                url: "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/f5eab6fc-6526-4a31-bfa3-2f1acc4ea435.png",
                width: 1200,
                height: 628,
                alt: "Zaminbazzar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Zaminbazzar – Buying and Selling of Land",
        description:
            "Zaminbazzar.com is India's leading online platform for buying and selling land. Find verified listings, trusted sellers, and the best real estate deals.",
        images: [
            "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/f5eab6fc-6526-4a31-bfa3-2f1acc4ea435.png",
        ],
    },
};

const AboutLayout = ({ children }) => {
    return <>{children}</>;
};

export default AboutLayout;
