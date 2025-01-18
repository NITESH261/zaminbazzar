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

                        <div className="mt-4">
                            <p className="text-base">
                                G-Square Buisness Park, 3<sup>rd</sup> Floor
                                Office no 303 & 304, opposite of Sanpada Railway
                                Station, Navi Mumbai, Maharashatra 400703
                            </p>
                            <span>9555599299 / 9555599099</span> <br />
                            <span>info@zaminwale.com</span>
                            <div className="flex space-x-2 mt-4">
                                <a href="https://www.facebook.com/zaminwale2021/">
                                    <FaFacebookSquare className="fab fa-facebook-f text-blue-600 text-2xl" />
                                </a>
                                <a href="https://x.com/ZaminwalePvtLtd">
                                    <FaSquareXTwitter className="fab fa-twitter text-blue-400 text-2xl" />
                                </a>
                                <a href="https://in.linkedin.com/company/zaminwale">
                                    <FaLinkedin className="fab fa-linkedin-in text-blue-700 text-2xl" />
                                </a>
                                <a href="https://www.instagram.com/zaminwale_/?hl=en">
                                    <FaInstagram className="fab fa-instagram text-pink-600 text-2xl" />
                                </a>
                                <a href="https://www.youtube.com/@zaminwale">
                                    <FaYoutube className="fab fa-youtube text-red-600 text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="font-bold text-lg mb-4">Company</h2>
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
                    <div className="lg:col-span-2 md:col-span-1 col-span-1 py-5">
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
                        <p>
                            As the largest platform connecting property buyers
                            and sellers
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
                        respective owners. All Rights Reserved. © Copyright 2024
                        zaminwale Pvt Limited.
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
                label: "Testimonials",
                link: "/testimonials",
            },
            {
                label: "Terms & Conditions",
                link: "/terms-and-conditions",
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy",
            },
            {
                label: "Carrers",
                link: "/carrers",
            },
            {
                label: "Blog",
                link: "/blog",
            },
            {
                label: "Awards & Media",
                link: "/awards-and-media",
            },
            {
                label: "Booking & saledeed",
                link: "/booking-and-saledeed",
            },
        ],
    },
    {
        label: "Projects in Mumbai",
        data: [
            {
                label: "Plot in Thane",
                link: "/thane",
            },
            {
                label: "Plot in Panvel",
                link: "/panvel",
            },
            {
                label: "Plot in Khalapur",
                link: "/khalapur",
            },
            {
                label: "Plot in Ranjanpada",
                link: "/ranjanpada",
            },
            {
                label: "Plot in Vindhane",
                link: "/vindhane",
            },
            {
                label: "Plot in Chirle",
                link: "/chirle",
            },
        ],
    },
];
