"use client";

import Footer from "@/components/organism/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
    const blogsData = [
        {
            id: 1,
            title: "Mahamumbai - Your Future Investment Opportunity",
            excerpt:
                "MAHAMUMBAI enjoys high property supply, demand is growing due to construction of upcoming sea-link from Sewri to Nhava Sheva, Navi Mumbai Airport, and proximity to the railway station and national highways around. Also, this area benefits from its proximity to prominent commercial parts of the city such as Kopar Khairane, Taloja, and Airoli.",
            image: "/assets/blog/1.png",
        },
        {
            id: 2,
            title: "Why Thane is good for investment in Plots?",
            excerpt:
                "Thane is an emerging cosmopolitan city in the Mumbai Metropolitan Area and the most preferred real estate investment destination. Affordable lifestyle with necessary amenities at value-oriented pricing and Infrastructural development has been the key differentiation factors that set Thane apart from the other real estate markets in the nearby adjoining areas",
            image: "/assets/blog/2.jpg",
        },
        {
            id: 3,
            title: "The Dos and Don’ts of Buying Land",
            excerpt:
                "Buying land is a dream for many people. Purchasing land is also one of the important investments one can make. The Dos and Don’ts of Buying Land Purchasing a plot tailored for your dream home may seem like the perfect investment. Whether you are purchasing a home, ranch property, or farm, there are things to consider that may prevent you from making your land purchase a success.",
            image: "/assets/blog/3.webp",
        },
        {
            id: 4,
            title: "Advantages of owning a Plots.",
            excerpt:
                "There is no doubt that real estate is one of the most fruitful and stable forms of investment. While residential homes have become almost synonymous with real estate investments, they aren’t the only option available. If you are considering making a real estate investment, here’s why purchasing a plot of land should top your list.",
            image: "/assets/blog/4.jpg",
        },
    ];

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const blogsPerPage = 3;
    const paginatedBlogs = blogsData.slice(0, page * blogsPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setPage((prev) => prev + 1);
            setLoading(false);
        }, 1000); // Simulate a loading delay
    };

    return (
        <>
            <div className="flex w-full flex-1">
                <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                        Blog Posts
                    </h2>
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Skeleton cards for loading state */}
                            {[...Array(3)].map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="flex flex-col border border-neutral-200 rounded-lg overflow-hidden group hover:shadow-lg"
                                >
                                    <div className="relative aspect-video w-full">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col p-4 space-y-2">
                                        <h3 className="text-base font-medium">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {blog.excerpt}
                                        </p>
                                        <Button
                                            asChild
                                            className="mt-2 w-full bg-[#0000ff] text-white rounded-full py-1.5 text-sm"
                                        >
                                            <Link href={`/blogs/${blog.id}`}>
                                                Read More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {paginatedBlogs.length < blogsData.length && (
                        <div className="flex justify-center mt-6">
                            <Button
                                onClick={loadMore}
                                disabled={loading}
                                className="bg-[#0000ff] text-white rounded-full py-2 px-4"
                            >
                                {loading ? "Loading..." : "Load More"}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

const SkeletonCard = () => (
    <div className="flex flex-col border border-neutral-200 rounded-lg overflow-hidden">
        <Skeleton className="aspect-video w-full" />
        <div className="flex flex-col p-4 space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-full" />
        </div>
    </div>
);

export default BlogPage;
