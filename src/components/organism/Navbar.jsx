import { cn } from "@/lib/utils"
import { AlignRightIcon, DockIcon, House, Tag, User } from "lucide-react"
import Link from "next/link"
import Logo from "../atoms/Logo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"


const Navbar = () => {
    return (
        <div className="w-full bg-white sticky top-0 z-20 bg-transparent">
            <div className="flex w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-grow-0">
                    <Logo />
                </div>
                <div className="hidden lg:flex flex-grow items-center justify-center">
                    <div className="flex gap-4">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-4">
                                {NavItems.map((item, i) => (
                                    item.data ? (
                                        <NavigationMenuItem key={i}>
                                            <NavigationMenuTrigger className="bg-transparent text-base gap-2 text-black hover:text-[#0078DB]">
                                                <NavLogo logo={item.icon} /> {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="p-4 space-y-2 rounded-md shadow-lg">
                                                <ul className="flex gap-4">
                                                    {item.data.map((subItem, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="w-full min-w-40 max-w-60"
                                                        >
                                                            <span className="font-medium text-base text-gray-700">
                                                                {subItem.label}
                                                            </span>
                                                            <ul className="mt-2 space-y-1 w-48 min-w-40 max-w-60">
                                                                {subItem.data.map((linkItem, linkIndex) => (
                                                                    <ListItem
                                                                        key={linkIndex}
                                                                        href={linkItem.link}
                                                                    >
                                                                        {linkItem.label}
                                                                    </ListItem>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={i}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.link}
                                                    className="flex w-fit gap-2 items-center font-medium text-black hover:text-[#0078DB]"
                                                >
                                                    <NavLogo logo={item.icon} /> {item.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex flex-grow lg:flex-grow-0 items-center justify-end gap-2">
                    <Button className="rounded-full px-4 bg-[#0078DB] text-white">
                        <User className="mr-2" /> Log In
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="rounded-md px-3 py-2 bg-transparent text-black hover:text-[#0078DB] hover:bg-gray-100">
                                <AlignRightIcon className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className=" px-4">
                                <SheetTitle>
                                    <div className="flex w-fit">
                                        <Logo className={"text-black"} />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex w-full flex-col h-[calc(100%-56px)] overflow-y-auto scrollbar-hide">
                                <ul className="flex flex-col w-full pb-6">
                                    {NavItems.map((item, i) =>
                                        item.data ?
                                            (
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
                                                                {item.data.map((item, i) => (
                                                                    <li
                                                                        key={`sublink-${i}`}
                                                                        className="flex flex-col gap-1 w-full"
                                                                    >
                                                                        <span className="text-sm font-medium">
                                                                            {item.label}
                                                                        </span>
                                                                        <ul className="flex w-full flex-col pl-3">
                                                                            {item?.data.map(
                                                                                (item, i) => (
                                                                                    <li
                                                                                        key={`sublinklist-${i}`}
                                                                                        className="w-full py-2"
                                                                                    >
                                                                                        <Link
                                                                                            href="/"
                                                                                            className="text-sm"
                                                                                        >
                                                                                            {item.label}
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <li key={`link-${i}`} className="flex w-full">
                                                    <Link href={item.link} className="px-4 py-4">
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
    );
};

export default Navbar;

const NavLogo = ({ logo: Logo }) => {
    return (
        <Logo
            className="!size-4"
        />
    )
}

const ListItem = ({ className, children, ...props }, key, ref) => {
    return (
        <li key={key}>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none text-sm space-y-1 rounded-md px-3 py-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {children}
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

const NavItems = [
    {
        label: "For Buyer",
        icon: Tag,
        data: [
            {
                label: "Location :",
                data: [
                    {
                        label: "Thane",
                        link: "/"
                    },
                    {
                        label: "Panvel",
                        link: "/"
                    },
                    {
                        label: "Khalapur",
                        link: "/"
                    }
                ]
            },
            {
                label: "Plot Types :",
                data: [
                    {
                        label: "list1",
                        link: "/"
                    },
                    {
                        label: "list2",
                        link: "/"
                    },
                    {
                        label: "list3",
                        link: "/"
                    }
                ]
            },
            {
                label: "Budget :",
                data: [
                    {
                        label: "₹2Lac - ₹5Lac",
                        link: "/"
                    },
                    {
                        label: "₹10Lac - ₹20Lac",
                        link: "/"
                    },
                    {
                        label: "₹20Lac - ₹1Cr",
                        link: "/"
                    },
                    {
                        label: "Above ₹1Cr",
                        link: "/"
                    }
                ]
            },
            {
                label: "Services :",
                data: [
                    {
                        label: "Land buying & selling",
                        link: "/"
                    },
                    {
                        label: "Legal verification",
                        link: "/"
                    },
                    {
                        label: "Land consulting",
                        link: "/"
                    },
                    {
                        label: "Layout & Demaroation",
                        link: "/"
                    },
                    {
                        label: "EMI with 0% intrest",
                        link: "/"
                    }
                ]
            }
        ]
    },
    {
        label: "For Seller",
        icon: House,
        data: [
            {
                label: "For owner :",
                data: [
                    {
                        label: "Post property",
                        link: "/"
                    },
                ]
            },
            {
                label: "Services :",
                data: [
                    {
                        label: "Property valuation",
                        link: "/"
                    },
                    {
                        label: "Legal assistance",
                        link: "/"
                    },
                    {
                        label: "Land marketing",
                        link: "/"
                    }
                ]
            }
        ]
    },
    {
        label: "Post Property",
        icon: DockIcon,
        link: "/"
    }
]