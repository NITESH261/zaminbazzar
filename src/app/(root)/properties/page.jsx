"use client";

import { getAllProperty } from "@/actions/property";
import SectionHeading from "@/components/atoms/SectionHeading";
import SkeletonCard from "@/components/atoms/SkeletonCard";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
    const [page, setPage] = useState(1);
    const [properties, setProperties] = useState([]);
    const [pagination, setPagination] = useState([]);

    const loadMore = () => {
        setPage(page + 1);
    };

    const fetchData = async () => {
        const { result, pagination = [] } = await getAllProperty({
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
        <div className="flex w-full flex-1">
            <div className="flex flex-col gap-4 md:gap-8 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                <SectionHeading title="All Properties" />
                {properties.length == 0 ? (
                    <SkeletonCard />
                ) : (
                    <div className="flex w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 w-full">
                            {properties.map((property, i) => (
                                <div
                                    key={property.propertyId}
                                    className="flex-col border border-neutral-200 rounded-lg w-full group flex hover:shadow-lg"
                                >
                                    <div className="relative aspect-video bg-cover rounded-t-lg flex w-full overflow-hidden">
                                        <Image
                                            src={
                                                property.propertyPhotos[0] ??
                                                "/assets/property/commercial.webp"
                                            }
                                            alt="house"
                                            fill
                                            className="rounded-t-lg group-hover:scale-110 transition-all object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col p-2 sm:p-4 relative w-full overflow-hidden space-y-2">
                                        <div className="w-full space-y-1">
                                            <span className="text-xs sm:text-sm">
                                                {property.propertyType}
                                            </span>
                                            <h2 className="text-sm sm:text-base font-medium">
                                                <span>
                                                    &#8377;{" "}
                                                    {formatCurrency(
                                                        property.priceTotal
                                                    )}{" "}
                                                </span>
                                                |
                                                <span>
                                                    {" "}
                                                    {
                                                        property.plotArea?.value
                                                    }{" "}
                                                    {property.plotArea?.unit}
                                                </span>
                                            </h2>
                                            <div className="flex flex-col space-y-1 w-full">
                                                <p className="text-gray-600 text-xs sm:text-sm">
                                                    {property.locality} |{" "}
                                                    {property.city}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="hidden md:flex">
                                            Ready Move
                                        </span>
                                        <div className="flex w-full md:absolute md:px-4 pb-1 sm:pb-3 md:left-0 md:-bottom-40 md:group-hover:bottom-0 md:transition-all">
                                            <Button
                                                asChild
                                                className="w-full h-[unset] py-1 sm:py-1.5 text-xs sm:text-base rounded-full bg-[#0000ff]"
                                            >
                                                <Link
                                                    href={`/properties/${property.propertyId}`}
                                                >
                                                    View Details
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {pagination.next ? (
                    <div className="flex w-full mt-6 items-center justify-center">
                        <Button
                            onClick={loadMore}
                            disabled={!properties}
                            className="rounded-full bg-[#0000ff]"
                        >
                            Load More Properties
                        </Button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default page;
