"use client";

import SearchFilter from "@/components/molecules/SearchFilter";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { formatCurrency, sliceParagraph } from "@/lib/utils";
import useZaminwaleStore from "@/store";
import { Filter, Heart, IndianRupee, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const searchList = useZaminwaleStore((store) => store.searchList);

    return (
        <>
            <div className="hidden md:flex md:w-1/3 xl:w-1/4 border border-neutral-200 h-fit md:h-full overflow-y-auto scrollbar-hide bg-white md:rounded-2xl">
                <div className="hidden md:flex w-full">
                    <SearchFilter />
                </div>
            </div>
            <div className="flex flex-1 w-full md:w-2/3 gap-4 xl:w-3/4 flex-col">
                <div className="flex w-full h-fit gap-4 items-center bg-white rounded-md md:rounded-2xl md:p-4">
                    <div className="flex md:hidden w-fit">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="px-3"
                                >
                                    <Filter className="!size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="p-4 space-y-4">
                                <SheetHeader>
                                    <SheetTitle>Search filter</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-1 w-full h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide">
                                    <SearchFilter />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="gap-2 text-sm md:text-lg font-semibold w-full">
                        <span className="">{searchList?.length}</span> Result |{" "}
                        <span className="capitalize">{params.locationId}</span>
                    </div>
                </div>
                {searchList?.length ? (
                    <div className="flex w-full h-[calc(100%-80px)] overflow-y-auto overflow-x-hidden scrollbar">
                        <div className="flex flex-col w-full h-fit gap-6">
                            <div className="flex flex-col w-full h-fit rounded-2xl gap-4">
                                {searchList?.map((card, i) => (
                                    <Link
                                        href={`/properties/${card.propertyId}`}
                                        key={i}
                                        className="flex flex-col p-4 sm:flex-row border w-full gap-2 rounded-3xl bg-white border-neutral-200 hover:border-[#0000FF] hover:shadow-md transition-all"
                                    >
                                        <div className="flex w-full sm:w-2/5 relative aspect-video sm:aspect-[3/2]">
                                            <Image
                                                src="/assets/recommonded-property/recomonded-property9.jpeg"
                                                alt="property img"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-2 top-2"
                                            >
                                                <Heart className="!size-6 fill-neutral-200" />
                                            </Button>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full sm:w-3/5 md:px-4">
                                            <div className="flex flex-col gap-2 w-full sm:flex-grow">
                                                <div className="flex flex-col w-full space-y-0.5">
                                                    <span className="text-base font-bold">
                                                        {card.locality}
                                                    </span>
                                                    <span className="text-sm hover:underline transition-all">
                                                        {card.propertyType} Land
                                                        / {card.city}
                                                    </span>
                                                </div>
                                                <div className="grid divide-x md:divide-x-2 grid-cols-3 lg:grid-cols-3">
                                                    <div className="flex flex-col w-full">
                                                        <span className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                                            <IndianRupee className="!size-4" />
                                                            {formatCurrency(
                                                                card.priceTotal
                                                            )}
                                                        </span>
                                                        <span className="flex items-center text-xs">
                                                            <IndianRupee className="!size-2" />
                                                            {card.pricePerSQFT}{" "}
                                                            / sqft
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col w-full pl-4">
                                                        <span className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                                            {
                                                                card.plotArea
                                                                    ?.value
                                                            }{" "}
                                                            {
                                                                card.plotArea
                                                                    ?.unit
                                                            }
                                                        </span>
                                                        <span className="flex items-center text-xs">
                                                            Plot Area
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col w-full pl-4">
                                                        <span className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                                            {card.propertyType}
                                                        </span>
                                                        <span className="flex items-center text-xs">
                                                            Plot Area
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-xs md:text-sm">
                                                    {sliceParagraph(
                                                        card.uniqueFeatures
                                                    )}
                                                </p>
                                                <div className="flex flex-wrap w-full overflow-x-auto scrollbar-hide">
                                                    <div className="flex w-fit gap-2 items-center">
                                                        <span className="flex w-fit whitespace-nowrap text-sm font-medium text-white">
                                                            Near By:
                                                        </span>
                                                        <ul className="w-fit flex gap-2">
                                                            {card.locationAdvantages?.map(
                                                                (item, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className="w-fit px-3 py-1.5 rounded-full text-xs bg-blue-100 whitespace-nowrap"
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-full gap-2 sm:gap-4 md:justify-end sm:flex-grow-0 h-1/5">
                                                <Button className="rounded-full w-full md:w-fit text-xs bg-[#0000ff]">
                                                    <PhoneCallIcon /> Contact Us
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="rounded-full w-full md:w-fit text-xs border-[#0000ff] text-[#0000ff]"
                                                >
                                                    View Number
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full flex-1">
                        <div className="flex w-full aspect-square max-w-md relative">
                            <Image
                                src={"/assets/helper/404.png"}
                                alt="404"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default page;
