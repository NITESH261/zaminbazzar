import { AlignRightIcon, House, Tag, User } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
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
        <div className="flex sticky top-0 font-nunito z-20 w-full bg-[#0078DB]">
            <div className="flex w-full h-16 items-center max-w-7xl mx-auto gap-4 px-4">
                <div className="flex w-fit">
                    <Logo />
                </div>
                <div className="flex flex-1 items-center justify-end h-full w-full gap-2">
                    <div className="hidden lg:flex w-full h-full justify-end">
                        <ul className='flex w-fit h-full gap-6'>
                            {NavData.map((item, index) => (
                                item.data ?
                                    (<li key={index} className='navlink w-fit h-full items-center flex group border-b-2 border-transparent hover:border-white transition-all'>
                                        <Link href={"/"} className='flex w-full text-lg pt-1.5 px-2 transition-all items-center gap-2 font-semibold text-white'>
                                            <NavLogo logo={item.icon} />  {item.label}
                                        </Link>
                                        <div className="flex group-hover:visible invisible transition-all w-full absolute top-full z-10 bg-white left-0 rounded-b-3xl border border-gray-200">
                                            <div className="grid grid-cols-1 divide-x gap-4 md:grid-cols-2 lg:grid-cols-3 w-full h-72 max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                                                {item.data?.map((item, index) => (
                                                    <div key={index} className="flex w-full flex-col pl-4 gap-4">
                                                        <strong className='text-base'>{item.title}</strong>
                                                        <ul className='flex w-full flex-col pl-3 gap-1 text-sm'>
                                                            {item.links.map((item, index) => (
                                                                <li key={index} className='flex w-full'>
                                                                    <Link href={"/"} className='hover:font-normal py-1 hover:underline transition-all'>{item.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                    ) : (
                                        <li key={index} className='navlink w-fit h-full items-center flex group border-b-2 border-transparent hover:border-white transition-all'>
                                            <Link href={"/"} className='flex w-full text-lg pt-1.5 px-2 transition-all items-center gap-2 font-semibold text-white'>
                                                <NavLogo logo={item.icon} />  {item.label}
                                            </Link>
                                        </li>
                                    )))}
                        </ul>
                    </div>
                    <div className="flex flex-grow items-center gap-4 justify-end">
                        <Button variant="" className="font-medium rounded-3xl py-1 text-base bg-white text-[#0078DB] hover:bg-white">
                            <User className="!size-4" />
                            Log In
                        </Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    className="rounded-md px-3 py-0 bg-transparent hover:text-[#0078DB] hover:bg-white"
                                >
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
                                        {NavData.map((item, i) =>
                                            item.data ?
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
                                                                                {item.links.map(
                                                                                    (
                                                                                        item,
                                                                                        i
                                                                                    ) => (
                                                                                        <li
                                                                                            key={`sublinklist-${i}`}
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
                                                </Accordion>
                                                :
                                                <li key={`link-${i}`} className="flex w-full">
                                                    <Link href={item.url} className="px-4 py-4">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                        )}
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

const NavLogo = ({ logo: Logo }) => {
    return (
        <Logo
            className="!size-5 text-white"
        />
    )
}

const NavData = [
    {
        label: "Buyer",
        url: "#",
        active: "active",
        icon: Tag,
        data: [
            {
                label: "Property Types",
                links: [
                    { name: "Apartments", url: "/buy/apartments" },
                    { name: "Houses", url: "/buy/houses" },
                    { name: "Villas", url: "/buy/villas" },
                    { name: "Townhouses", url: "/buy/townhouses" },
                ],
            },
            {
                label: "Locations",
                links: [
                    { name: "New York", url: "/buy/new-york" },
                    { name: "Los Angeles", url: "/buy/los-angeles" },
                    { name: "Chicago", url: "/buy/chicago" },
                    { name: "Miami", url: "/buy/miami" },
                ],
            },
            {
                label: "Price Range",
                links: [
                    { name: "Under $500K", url: "/buy/under-500k" },
                    { name: "$500K - $1M", url: "/buy/500k-1m" },
                    { name: "Over $1M", url: "/buy/over-1m" },
                ],
            },
        ],
    },
    {
        label: "Sell/Rent Property",
        url: "#",
        active: "active",
        icon: House,
    },
];
