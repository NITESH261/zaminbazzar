import React from 'react';
import Background from '../atoms/Background';
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { LocateIcon } from 'lucide-react';
import { MicIcon } from 'lucide-react';
import { Input } from '../ui/input';

const Hero = () => {
    return (
        <>
            <div className='w-full h-72 flex items-center justify-center relative'>
                <Background />
                <div className="absolute flex flex-col gap-6 items-center justify-center h-full w-full bg-black/20">
                    <h1 className="font-galanoGrotesque text-white w-full max-w-3xl text-3xl md:text-4xl lg:text-5xl  break-normal text-center font-bold">The #1 site real estate professionals trust</h1>
                    <div className="flex absolute top-[80%] shadow-md flex-col divide-y w-full max-w-4xl bg-white rounded-2xl border border-gray-200">
                        <div className="flex w-full text-sm">
                            <ul className="grid grid-cols-7 h-14 w-full">
                                <li className='flex w-full items-center justify-center'>
                                    Buy
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    Rent
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    New Launch
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    Pg/Co-living
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    Commercial
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    Plot/Land
                                </li>
                                <li className='flex w-full items-center justify-center'>
                                    Project
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-5 divide-x w-full h-14">
                            <div className="flex w-full items-center justify-center">
                                <span className='text-sm'>All Residential</span>
                                <ChevronDown className='size-6' />
                            </div>
                            <div className="flex w-full px-5 items-center justify-center col-span-3">
                                <div className="flex w-[10%]">
                                    <Search className='size-5' />
                                </div>
                                <div className="flex w-full">
                                    <Input className="outline-none border-none" placeholder="Searh Your Intrested location Plot" />
                                </div>
                            </div>
                            <div className="flex w-full gap-2 items-center justify-center">
                                <span className='size-8 bg-blue-200 rounded-full items-center justify-center flex'>
                                    <LocateIcon className="size-5 text-blue-500" />
                                </span>
                                <span className='size-8 bg-blue-200 rounded-full items-center justify-center flex'>
                                    <MicIcon className="size-5 text-blue-500" />
                                </span>
                                <Button >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero