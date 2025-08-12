import Link from "next/link";
import React from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../atoms/Logo";

const Footer = () => {
    return (
        <div className="bg-gray-100 text-gray-800 w-full">
            <div className="max-w-7xl mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div>
                        <Logo className={"text-black"} />

                        <div className="mt-2">
                            <p className="text-base">
                                G-Square Buisness Park, 3<sup>rd</sup> Floor
                                Office no 303 & 304, opposite of Sanpada Railway
                                Station, Navi Mumbai, Maharashatra 400703
                            </p>
                            <div className="mt-3">
                                <span>9920320300</span>
                            </div>
                            <div className="mt-3">
                                <span>info@zaminbazzar.com</span>
                            </div>
                            <div className="flex space-x-2 mt-4">
                                <a href="https://www.facebook.com/profile.php?id=61579299836270#">
                                    <FaFacebookSquare className="fab fa-facebook-f text-blue-600 text-2xl" />
                                </a>
                                
                                <a href="https://www.instagram.com/zaminbazzar/?fbclid=IwY2xjawMH3ppleHRuA2FlbQIxMQBicmlkETFNQ215UWRNRTNHY3VKQVNjAR46Kp22VpwkQaEIxCObXrtqnV7R9Gh9cn0uU_1178yIBIX00j2qBlp6Stpkgw_aem_a2ag0L0rjoYzNGLE7D8VKQ">
                                    <FaInstagram className="fab fa-instagram text-pink-600 text-2xl" />
                                </a>
                                <a href="https://www.youtube.com/@zaminwale">
                                    <FaYoutube className="fab fa-youtube text-red-600 text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="font-bold text-lg mt-4 mb-4">Company</h2>
                        <div className="flex flex-col gap-4  w-full">
                            <p className="text-base flex flex-col gap-2">
                                {NavItems[0].data.map((item, i) => (
                                    <Link
                                        key={`company-${i}`}
                                        href={item.link}
                                        className="text-black hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-1 col-span-1 py-4">
                        {/* <h2 className="font-bold text-lg mb-4">Company</h2>
                        <div className="flex flex-col gap-4 w-full">
                            <p className="text-base">
                                {
                                    NavItems[0].data.map((item, i) => (
                                        <React.Fragment key={`company-${i}`}>
                                            <Link href={item.link} className="text-blue-600 hover:underline">
                                                {item.label}
                                            </Link>
                                            {i < NavItems[0].data.length - 1 && " | "}
                                        </React.Fragment>
                                    ))
                                }
                            </p>
                        </div> */}
                        <h2 className="font-bold text-lg">About zaminwale</h2>
                        <p className="text-justify mt-2">
                        At ZaminBazzar, we are redefining the way people buy, sell, and discover property. Whether you are a first-time buyer, an experienced investor, or a seller looking to reach the right audience, ZaminBazzar offers a seamless platform to connect with genuine opportunities.

Specializing in residential, commercial, and land listings, we bring you verified properties from across India, ensuring transparency, trust, and ease in every transaction. Our mission is simple — to make real estate dealings more accessible, reliable, and hassle-free for everyone.
                        </p>

                        <h2 className="font-bold text-lg mt-4 mb-4">
                            Projects in Mumbai
                        </h2>
                        <div className="flex flex-col gap-4 w-full">
                            <p className="text-base flex flex-wrap gap-1">
                                {NavItems[1].data.map((item, i) => (
                                    <React.Fragment key={`project-${i}`}>
                                        <Link
                                            href={item.link}
                                            className="text-black hover:underline"
                                        >
                                            {item.label}
                                        </Link>
                                        {i < NavItems[1].data.length - 1 && (
                                            <span className="px-2">|</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4">
                <div className="mx-auto text-center text-sm text-gray-400">
                    <p>
                        All trademarks, logos and names are properties of their
                        respective owners. All Rights Reserved. © Copyright&nbsp;{new Date().getFullYear()}&nbsp;
                        Zaminbazzar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

const NavItems = [
    {
        label: "Company",
        data: [
            {
                label: "For Dealer",
                link: "/DealerPackages",
            },
            {
                label: "About Us",
                link: "/about",
            },
            {
                label: "Testimonials",
                link: "/testimonials",
            },
            {
                label: "Awards & Media",
                link: "/awards",
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy",
            },
            {
                label: "Blog",
                link: "/blogs",
            },
        ],
    },
    {
        label: "Projects in Mumbai",
        data: [
            {
                label: "Plot in Thane",
                link: "/search/top-location/thane",
            },
            {
                label: "Plot in Panvel",
                link: "/search/top-location/panvel",
            },
            {
                label: "Plot in Uran",
                link: "/search/top-location/uran",
            },
            {
                label: "Plot in Chirle",
                link: "/search/top-location/chirle",
            },
            {
                label: "Plot in Vindhane",
                link: "/search/top-location/vindhane",
            },
            {
                label: "Plot in Ranjanpada",
                link: "/search/top-location/ranjanpada",
            },
            {
                label: "Plot in Karjat",
                link: "/search/top-location/Karjat",
            },
        ],
    },
];
