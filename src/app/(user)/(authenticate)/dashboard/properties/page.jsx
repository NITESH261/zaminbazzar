"use client";

import { getUserProperty } from "@/actions/dashboard";
import DeletePropertyBtn from "@/components/atoms/DeletePropertyBtn";
import ImageScroll from "@/components/molecules/ImageScroll";
import { Button } from "@/components/ui/button";
import { formatCurrency, sliceParagraph } from "@/lib/utils";
import { Edit, Eye, Heart, IndianRupee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
    const [properties, setProperties] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const loadMore = () => {
        setPage(page + 1);
    };

    const fetchData = async () => {
        const { result, pagination = [] } = await getUserProperty({
            page,
            limit: 20,
        });
        setPagination(pagination);
        setProperties((prev) => {
            const processedResult = result.map((item, index) => ({
                ...item,
                id: item.id || `${page}-${index}`,
            }));

            const merged = [...prev, ...processedResult];
            const unique = merged.filter(
                (item, index, self) =>
                    index === self.findIndex((t) => t.id === item.id)
            );

            return unique;
        });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className="flex w-full rounded-lg flex-1 overflow-x-hidden overflow-y-auto scrollbar md:p-4">
            <div className="grid grid-cols-1 gap-4 w-full h-fit">
                {properties.length === 0 ? (
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
                ) : (
                    properties?.map((card, i) => (
                        <div
                            // href={`/properties/${card.propertyId}`}
                            key={i}
                            className="flex flex-col p-4 sm:flex-row xl:grid xl:grid-cols-5 border w-full gap-2 rounded-lg bg-white border-neutral-200 hover:border-[#581a95] hover:shadow-md transition-all"
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex w-full relative sm:w-2/5 xl:w-full xl:col-span-2">
                                <div className="flex relative w-full">
                                    <ImageScroll
                                        card={card.propertyPhotos}
                                        isHovered={hoveredIndex === i}
                                        className="!w-full !h-40 sm:!h-56 sm:!w-80 lg:!w-full !relative !rounded-lg"
                                    />
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-2"
                                >
                                    <Heart className="!size-6 fill-neutral-200" />
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2 w-full sm:w-3/5 md:px-4 xl:col-span-3 xl:w-full">
                                <div className="flex flex-col gap-2 w-full sm:flex-grow">
                                    <div className="flex flex-col w-full space-y-0.5">
                                        <span className="text-base font-bold">
                                            {card.locality}
                                        </span>
                                        <span className="text-sm hover:underline transition-all">
                                            {card.propertyType} Land /{" "}
                                            {card.city}
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
                                                {card.pricePerSQFT} / sqft
                                            </span>
                                        </div>
                                        <div className="flex flex-col w-full pl-4">
                                            <span className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                                {card.plotArea}{" "}
                                                {card.plotAreaUnit}
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
                                    <p className="text-xs md:text-sm h-10">
                                        {sliceParagraph(card.uniqueFeatures)}
                                    </p>
                                    <div className="flex flex-wrap w-full overflow-x-auto scrollbar-hide">
                                        <div className="flex w-fit gap-2 items-center">
                                            <span className="flex w-fit whitespace-nowrap text-sm font-medium text-[#581a95]">
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
                                    <Button
                                        asChild
                                        className="rounded-full h-[unset] w-full md:w-fit text-xs bg-[#581a95]"
                                    >
                                        <Link
                                            href={`/properties/${card.propertyId}`}
                                        >
                                            <Eye />
                                            View
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="rounded-full h-[unset] w-full md:w-fit text-xs bg-[#581a95]"
                                    >
                                        <Link
                                            href={`/properties/${card.propertyId}`}
                                        >
                                            <Eye />
                                            View
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="rounded-full h-[unset] w-full md:w-fit text-xs border-[#581a95] text-[#581a95]"
                                    >
                                        <Link
                                            href={`/dashboard/edit/${card.propertyId}`}
                                        >
                                            <Edit /> Edit
                                        </Link>
                                    </Button>
                                    <DeletePropertyBtn
                                        propertyId={card.propertyId}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {pagination.next ? (
                    <div className="flex w-full mt-6 items-center justify-center">
                        <Button
                            onClick={loadMore}
                            disabled={!properties}
                            className="rounded-full bg-[#581a95]"
                        >
                            Load More Properties
                        </Button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default page;
