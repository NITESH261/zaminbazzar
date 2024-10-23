import React from 'react'
import Logo from '../atoms/Logo'
import { Button } from '../ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex relative w-full '>
            <div className="flex w-full h-12 items-center max-w-7xl mx-auto gap-4 px-4">
                <div className="flex w-fit flex-grow-0">
                    <Logo />
                </div>
                <div className="flex flex-grow items-center justify-between h-full w-full gap-2">
                    <div className="flex w-full h-full justify-end">
                        <ul className='flex w-fit h-full gap-6'>
                            {NavData.map((item, index) => (
                                <li key={index} className='navlink w-fit h-full items-center flex group border-b border-transparent hover:border-black transition-all'>
                                    <Link href={"/"} className='flex'>{item.title}</Link>
                                    <div className="flex group-hover:visible invisible transition-all w-full absolute border border-red-500 top-full z-10 bg-white left-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-red-500 max-w-7xl mx-auto p-4">
                                            {item.categories.map((item, index) => (
                                                <div key={index} className="flex w-full flex-col">
                                                    <strong className='text-base'>{item.title}</strong>
                                                    <ul className='flex w-full flex-col'>

                                                        {item.links.map((item, index) => (
                                                            <li key={index} className='flex w-full'>
                                                                <Link href={"/"}>{item.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex w-fit">
                        <Button variant="ghost" className="font-thin">
                            Log In
                        </Button>
                        <Button variant="default">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

const NavData = [
    {
        "title": "Buy",
        "categories": [
            {
                "title": "Property Types",
                "links": [
                    { "name": "Apartments", "url": "/buy/apartments" },
                    { "name": "Houses", "url": "/buy/houses" },
                    { "name": "Villas", "url": "/buy/villas" },
                    { "name": "Townhouses", "url": "/buy/townhouses" }
                ]
            },
            {
                "title": "Locations",
                "links": [
                    { "name": "New York", "url": "/buy/new-york" },
                    { "name": "Los Angeles", "url": "/buy/los-angeles" },
                    { "name": "Chicago", "url": "/buy/chicago" },
                    { "name": "Miami", "url": "/buy/miami" }
                ]
            },
            {
                "title": "Price Range",
                "links": [
                    { "name": "Under $500K", "url": "/buy/under-500k" },
                    { "name": "$500K - $1M", "url": "/buy/500k-1m" },
                    { "name": "Over $1M", "url": "/buy/over-1m" }
                ]
            }
        ]
    },
    {
        "title": "Rent",
        "categories": [
            {
                "title": "Property Types",
                "links": [
                    { "name": "Apartments", "url": "/rent/apartments" },
                    { "name": "Houses", "url": "/rent/houses" },
                    { "name": "Villas", "url": "/rent/villas" },
                    { "name": "Condos", "url": "/rent/condos" }
                ]
            },
            {
                "title": "Popular Areas",
                "links": [
                    { "name": "Downtown", "url": "/rent/downtown" },
                    { "name": "Suburbs", "url": "/rent/suburbs" },
                    { "name": "Beachfront", "url": "/rent/beachfront" },
                    { "name": "City Center", "url": "/rent/city-center" }
                ]
            },
            {
                "title": "Rent Range",
                "links": [
                    { "name": "Under $1,000", "url": "/rent/under-1000" },
                    { "name": "$1,000 - $2,500", "url": "/rent/1000-2500" },
                    { "name": "Over $2,500", "url": "/rent/over-2500" }
                ]
            }
        ]
    },
    {
        "title": "Commercial",
        "categories": [
            {
                "title": "Property Types",
                "links": [
                    { "name": "Offices", "url": "/commercial/offices" },
                    { "name": "Retail Spaces", "url": "/commercial/retail-spaces" },
                    { "name": "Warehouses", "url": "/commercial/warehouses" },
                    { "name": "Industrial", "url": "/commercial/industrial" }
                ]
            },
            {
                "title": "Locations",
                "links": [
                    { "name": "Business District", "url": "/commercial/business-district" },
                    { "name": "Industrial Zone", "url": "/commercial/industrial-zone" },
                    { "name": "City Center", "url": "/commercial/city-center" },
                    { "name": "Suburban Area", "url": "/commercial/suburban-area" }
                ]
            }
        ]
    },
    {
        "title": "Agents",
        "categories": [
            {
                "title": "Find an Agent",
                "links": [
                    { "name": "Top Agents", "url": "/agents/top" },
                    { "name": "New Agents", "url": "/agents/new" },
                    { "name": "By Location", "url": "/agents/location" }
                ]
            }
        ]
    },
    {
        "title": "Services",
        "categories": [
            {
                "title": "Home Services",
                "links": [
                    { "name": "Home Inspection", "url": "/services/home-inspection" },
                    { "name": "Mortgage Assistance", "url": "/services/mortgage" },
                    { "name": "Legal Services", "url": "/services/legal" },
                    { "name": "Moving Services", "url": "/services/moving" }
                ]
            },
            {
                "title": "Renovation Services",
                "links": [
                    { "name": "Interior Design", "url": "/services/interior-design" },
                    { "name": "Landscaping", "url": "/services/landscaping" },
                    { "name": "Contractors", "url": "/services/contractors" }
                ]
            }
        ]
    },
    {
        "title": "About Us",
        "categories": [
            {
                "title": "Company",
                "links": [
                    { "name": "Our Story", "url": "/about/our-story" },
                    { "name": "Careers", "url": "/about/careers" },
                    { "name": "Press", "url": "/about/press" }
                ]
            },
            {
                "title": "Contact",
                "links": [
                    { "name": "Support", "url": "/contact/support" },
                    { "name": "Offices", "url": "/contact/offices" }
                ]
            }
        ]
    }
]
