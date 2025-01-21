"use client";

import { AlignRightIcon, House, Tag } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import LogoutBtn from "../atoms/LogoutBtn";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
    return (
        <header className="flex sticky top-0 z-20 w-full bg-[#0000FF]">
            <div className="flex w-full h-16 items-center max-w-[1480px] mx-auto gap-4 px-4">
                <div className="flex h-fit w-fit">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end h-full w-full gap-4">
                    <div className="hidden lg:flex w-full h-full justify-end">
                        <ul className="flex w-fit h-full gap-6">
                            {NavItems.map((item, index) =>
                                item.data ? (
                                    <li
                                        key={index}
                                        className="navlink w-fit h-full items-center justify-center flex group border-b-2 border-transparent hover:border-white transition-all"
                                    >
                                        <Link
                                            href={"/"}
                                            className="flex w-full text-lg pt-1.5 px-2 transition-all items-center gap-2 font-semibold text-white"
                                        >
                                            <NavLogo logo={item.icon} />{" "}
                                            {item.label}
                                        </Link>
                                        <div className="flex group-hover:visible invisible transition-all w-fit absolute top-full z-10 bg-white left-[2/4] shadow-lg rounded-b-3xl border border-gray-200">
                                            <div
                                                className={`grid divide-x gap-4 w-fit h-fit max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 grid-cols-${item.data.length}`}
                                            >
                                                {item.data?.map(
                                                    (item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex w-52 flex-col px-4 gap-4"
                                                        >
                                                            <strong className="text-base">
                                                                {item.label}
                                                            </strong>
                                                            <ul className="flex w-full flex-col gap-1 text-sm">
                                                                {item.data.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex w-full"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    item.link
                                                                                }
                                                                                className="hover:font-normal py-1 hover:underline transition-all"
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ) : (
                                    <li
                                        key={index}
                                        className="navlink w-fit h-full items-center flex group border-b-2 border-transparent hover:border-white transition-all"
                                    >
                                        <Link
                                            href={item.link}
                                            className="flex w-full text-lg pt-1.5 px-2 transition-all items-center gap-2 font-semibold text-white"
                                        >
                                            <NavLogo logo={item.icon} />{" "}
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="flex flex-grow items-center  md:gap-4 justify-end">
                        <Button
                            asChild
                            className="bg-white text-black hover:text-white rounded-full"
                        >
                            <Link
                                href={"/post-property/create-property"}
                                className="py-1 h-[unset] gap-2"
                            >
                                <span>Post Property</span>
                                <span className="text-[10px] bg-green-500 text-white font-semibold px-2 py-0 rounded-sm">
                                    FREE
                                </span>
                            </Link>
                        </Button>
                        <LogoutBtn />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="rounded-md px-3 py-0 bg-transparent hover:text-[#0000FF] hover:bg-white">
                                    <AlignRightIcon className="!size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="divide-y">
                                <SheetHeader className=" px-4">
                                    <SheetTitle>
                                        <div className="flex w-fit">
                                            <Logo className={"text-black"} />
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex w-full flex-col h-[calc(100%-56px)] overflow-y-auto scrollbar-hide">
                                    <ul className="flex flex-col w-full">
                                        {NavItems.map((item, i) =>
                                            item.data ? (
                                                <Accordion
                                                    key={`items-${i}`}
                                                    type="single"
                                                    collapsible
                                                    className="w-full "
                                                >
                                                    <AccordionItem
                                                        key={i}
                                                        value={`item-${i}`}
                                                    >
                                                        <AccordionTrigger className="text-base px-4">
                                                            {item.label}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4">
                                                            <ul className="flex w-full flex-col gap-4 pl-3">
                                                                {item.data.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={`sublink-${i}`}
                                                                            className="flex flex-col gap-1 w-full"
                                                                        >
                                                                            <span className="text-sm font-medium">
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </span>
                                                                            <ul className="flex w-full flex-col pl-3">
                                                                                {item.data.map(
                                                                                    (
                                                                                        item,
                                                                                        i
                                                                                    ) => (
                                                                                        <li
                                                                                            key={`sublinklist-${i}`}
                                                                                            className="w-full py-2"
                                                                                        >
                                                                                            <Link
                                                                                                href={
                                                                                                    item.link
                                                                                                }
                                                                                                className="text-sm"
                                                                                            >
                                                                                                {
                                                                                                    item.label
                                                                                                }
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <li
                                                    key={`link-${i}`}
                                                    className="flex w-full"
                                                >
                                                    <Link
                                                        href={item.link}
                                                        className="px-4 py-4"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <ul className="flex flex-col w-full">
                                        {SideNav.map((item, i) =>
                                            item.data ? (
                                                <Accordion
                                                    key={`items-${i}`}
                                                    type="single"
                                                    collapsible
                                                    className="w-full "
                                                >
                                                    <AccordionItem
                                                        key={i}
                                                        value={`item-${i}`}
                                                    >
                                                        <AccordionTrigger className="text-base px-4">
                                                            {item.label}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4">
                                                            <ul className="flex w-full flex-col gap-4 pl-3">
                                                                {item?.data.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={`sublinklist-${i}`}
                                                                            className="w-full"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    item.link
                                                                                }
                                                                                className="text-sm"
                                                                            >
                                                                                {
                                                                                    item.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <li
                                                    key={`link-${i}`}
                                                    className="flex w-full"
                                                >
                                                    <Link
                                                        href={item.link}
                                                        className="px-4 py-4"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const NavLogo = ({ logo: Logo }) => {
    return <Logo className="!size-5 text-white" />;
};

const NavItems = [
    {
        label: "For Buyer",
        icon: Tag,
        data: [
            {
                label: "Location",
                data: [
                    {
                        label: "Thane",
                        link: "/search/top-location/thane",
                    },
                    {
                        label: "Panvel",
                        link: "/search/top-location/panvel",
                    },
                    {
                        label: "Uran",
                        link: "/search/top-location/uran",
                    },
                    {
                        label: "Third Mumbai",
                        link: "/search/top-location/third-mumbai",
                    },
                ],
            },
            {
                label: "Plot Types",
                data: [
                    {
                        label: "Residential Plots",
                        link: "/",
                    },
                    {
                        label: "Commercial Plots",
                        link: "/",
                    },
                    {
                        label: "Investment Plots",
                        link: "/",
                    },
                    {
                        label: "Hill View Bunglow",
                        link: "/",
                    },
                    {
                        label: "Plots for Petrolpump",
                        link: "/",
                    },
                    {
                        label: "Plots for Factories",
                        link: "/",
                    },
                    {
                        label: "Plots for Warehouse",
                        link: "/",
                    },
                    {
                        label: "Sea View Bunglow",
                        link: "/",
                    },
                ],
            },
            {
                label: "Budget",
                data: [
                    {
                        label: "₹2Lac - ₹5Lac",
                        link: "/",
                    },
                    {
                        label: "₹10Lac - ₹20Lac",
                        link: "/",
                    },
                    {
                        label: "₹20Lac - ₹1Cr",
                        link: "/",
                    },
                    {
                        label: "Above ₹1Cr",
                        link: "/",
                    },
                ],
            },
            {
                label: "Services",
                data: [
                    {
                        label: "Land buying & selling",
                        link: "/",
                    },
                    {
                        label: "Legal verification",
                        link: "/",
                    },
                    {
                        label: "Land consulting",
                        link: "/",
                    },
                    {
                        label: "Layout & Demaroation",
                        link: "/",
                    },
                    {
                        label: "EMI with 0% intrest",
                        link: "/",
                    },
                ],
            },
        ],
    },
    {
        label: "For Seller",
        icon: House,
        data: [
            {
                label: "For owner ",
                data: [
                    {
                        label: "Post property",
                        link: "/post-property/create-property",
                    },
                    {
                        label: "My Dashboard",
                        link: "/post-property/",
                    },
                    {
                        label: "Sell / Rent Ad Packages",
                        link: "/post-property/",
                    },
                    {
                        label: "+91 9870 260 930 / Email Us",
                        link: "/",
                    },
                ],
            },
            {
                label: "Services",
                data: [
                    {
                        label: "Property valuation",
                        link: "/",
                    },
                    {
                        label: "Legal assistance",
                        link: "/",
                    },
                    {
                        label: "Land marketing",
                        link: "/",
                    },
                ],
            },
        ],
    },
];

const SideNav = [
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
];
