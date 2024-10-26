
import { Link } from 'lucide-react';
import React from 'react'
import { Badge } from '../ui/badge';



const Property = () => {
    const cards = Array.from({ length: 3 }, (_, i) => i + 1);
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
                    <div className="flex w-full">
                        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                            Browse homes in St. Paul, MN
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        {
                            cards.map(card =>
                                <Link key={card} href={"/"} className="w-80 group relative aspect-[3/2] bg-cover rounded-lg flex bg-[url('/assets/house/house1.webp')]">
                                    <div className="flex w-full p-4 bg-gradient-to-b from-black/40 to-transparent rounded-lg">
                                        <div className="flex w-full items-center h-fit justify-between">
                                            <strong className="text-white group-hover:underline">New listing</strong>
                                            <Badge className={"h-fit"}>296</Badge>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Property
