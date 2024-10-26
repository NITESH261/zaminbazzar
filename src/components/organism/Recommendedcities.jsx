
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Recommendedcities = () => {
    const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    return (

        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
                    <div className="flex w-full">
                        <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                            Recommended Cities
                        </h2>
                    </div>
                    <div className="flex w-full overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
                        <div className="flex xl:grid xl:grid-cols-4 gap-4 w-fit xl:w-full">
                            {
                                cards.map(card =>
                                    <Link key={card} href={"/"} className="w-80 flex-col rounded-lg xl:w-full group flex ">
                                        <div className='relative aspect-[3/2] bg-cover rounded-lg flex w-full'>
                                            <Image className='rounded-t-lg' src='/assets/house/staticmap.png' alt='house' fill />
                                        </div>
                                        <div className="border rounded-lg p-4">

                                            <h2 className="text-lg font-bold">Panama City Beach</h2>
                                            <p className="text-gray-600">2,400 Listings for sale</p>
                                            <p className="text-gray-600">$475,000 Median Listing Home Price</p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Recommendedcities
