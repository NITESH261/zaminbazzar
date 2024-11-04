import React from "react";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const Navbar = () => {
    return (
        <div className="flex sticky top-0 z-20 w-full bg-white border-b border-gray-200">
            <div className="flex w-full h-12 items-center max-w-7xl mx-auto gap-4 px-4">
                <div className="flex w-fit flex-grow-0">
                    <Logo />
                </div>
                <div className="flex flex-grow items-center gap-4 justify-end">
                    <Button variant="ghost" className="font-thin">
                        Log In
                    </Button>
                    <Button variant="default">Sign Up</Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                className="rounded-md px-3 py-1"
                            >
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="divide-y">
                            <SheetHeader className="py-2 px-4">
                                <SheetTitle>
                                    <div className="flex w-fit">
                                        <Logo />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex w-full flex-col h-[calc(100%-56px)] overflow-y-auto scrollbar-hide">
                                <ul className="flex w-full">
                                    <li className="flex w-full">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full "
                                        >
                                            {NavData.map((item, index) => (
                                                <AccordionItem
                                                    key={index}
                                                    value={`item-${index}`}
                                                >
                                                    <AccordionTrigger className="text-base px-4">
                                                        {item.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4">
                                                        <ul className="flex w-full flex-col gap-4 pl-3">
                                                            {item.categories.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex flex-col gap-1 w-full"
                                                                    >
                                                                        <span className="text-sm font-medium">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </span>
                                                                        <ul className="flex w-full flex-col pl-3">
                                                                            {item.links.map(
                                                                                (
                                                                                    item,
                                                                                    index
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className="w-full py-2"
                                                                                    >
                                                                                        <Link
                                                                                            href="/"
                                                                                            className="text-sm"
                                                                                        >
                                                                                            {
                                                                                                item.name
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
                                            ))}
                                        </Accordion>
                                    </li>
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

const NavData = [
    {
        title: "Buy",
        categories: [
            {
                title: "Property Types",
                links: [
                    { name: "Apartments", url: "/buy/apartments" },
                    { name: "Houses", url: "/buy/houses" },
                    { name: "Villas", url: "/buy/villas" },
                    { name: "Townhouses", url: "/buy/townhouses" },
                ],
            },
            {
                title: "Locations",
                links: [
                    { name: "New York", url: "/buy/new-york" },
                    { name: "Los Angeles", url: "/buy/los-angeles" },
                    { name: "Chicago", url: "/buy/chicago" },
                    { name: "Miami", url: "/buy/miami" },
                ],
            },
            {
                title: "Price Range",
                links: [
                    { name: "Under $500K", url: "/buy/under-500k" },
                    { name: "$500K - $1M", url: "/buy/500k-1m" },
                    { name: "Over $1M", url: "/buy/over-1m" },
                ],
            },
        ],
    },
    {
        title: "Rent",
        categories: [
            {
                title: "Property Types",
                links: [
                    { name: "Apartments", url: "/rent/apartments" },
                    { name: "Houses", url: "/rent/houses" },
                    { name: "Villas", url: "/rent/villas" },
                    { name: "Condos", url: "/rent/condos" },
                ],
            },
            {
                title: "Popular Areas",
                links: [
                    { name: "Downtown", url: "/rent/downtown" },
                    { name: "Suburbs", url: "/rent/suburbs" },
                    { name: "Beachfront", url: "/rent/beachfront" },
                    { name: "City Center", url: "/rent/city-center" },
                ],
            },
            {
                title: "Rent Range",
                links: [
                    { name: "Under $1,000", url: "/rent/under-1000" },
                    { name: "$1,000 - $2,500", url: "/rent/1000-2500" },
                    { name: "Over $2,500", url: "/rent/over-2500" },
                ],
            },
        ],
    },
    {
        title: "Commercial",
        categories: [
            {
                title: "Property Types",
                links: [
                    { name: "Offices", url: "/commercial/offices" },
                    { name: "Retail Spaces", url: "/commercial/retail-spaces" },
                    { name: "Warehouses", url: "/commercial/warehouses" },
                    { name: "Industrial", url: "/commercial/industrial" },
                ],
            },
            {
                title: "Locations",
                links: [
                    {
                        name: "Business District",
                        url: "/commercial/business-district",
                    },
                    {
                        name: "Industrial Zone",
                        url: "/commercial/industrial-zone",
                    },
                    { name: "City Center", url: "/commercial/city-center" },
                    { name: "Suburban Area", url: "/commercial/suburban-area" },
                ],
            },
        ],
    },
    {
        title: "Agents",
        categories: [
            {
                title: "Find an Agent",
                links: [
                    { name: "Top Agents", url: "/agents/top" },
                    { name: "New Agents", url: "/agents/new" },
                    { name: "By Location", url: "/agents/location" },
                ],
            },
        ],
    },
    {
        title: "Services",
        categories: [
            {
                title: "Home Services",
                links: [
                    {
                        name: "Home Inspection",
                        url: "/services/home-inspection",
                    },
                    { name: "Mortgage Assistance", url: "/services/mortgage" },
                    { name: "Legal Services", url: "/services/legal" },
                    { name: "Moving Services", url: "/services/moving" },
                ],
            },
            {
                title: "Renovation Services",
                links: [
                    {
                        name: "Interior Design",
                        url: "/services/interior-design",
                    },
                    { name: "Landscaping", url: "/services/landscaping" },
                    { name: "Contractors", url: "/services/contractors" },
                ],
            },
        ],
    },
    {
        title: "About Us",
        categories: [
            {
                title: "Company",
                links: [
                    { name: "Our Story", url: "/about/our-story" },
                    { name: "Careers", url: "/about/careers" },
                    { name: "Press", url: "/about/press" },
                ],
            },
            {
                title: "Contact",
                links: [
                    { name: "Support", url: "/contact/support" },
                    { name: "Offices", url: "/contact/offices" },
                ],
            },
        ],
    },
];
