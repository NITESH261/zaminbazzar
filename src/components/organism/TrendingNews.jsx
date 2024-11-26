import Link from "next/link";

const TrendingNews = () => {
    const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-14">
                    <div className="flex w-full">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                            News & Blogs
                        </h2>
                    </div>
                    <div className="flex w-full overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
                        <div className="flex xl:grid xl:grid-cols-4 gap-4 w-fit xl:w-full">
                            {cards.map((card) => (
                                <Link
                                    key={card}
                                    href={"/"}
                                    className="w-80 flex flex-col  rounded-lg xl:w-full group "
                                >
                                    <div className="flex w-full relative aspect-[4/2] bg-cover rounded-lg bg-[url('/assets/house/house1.webp')]">
                                    </div>
                                    <div className="flex flex-col w-full gap-2 p-4">
                                        <span className="text-sm md:text-base font-medium">
                                            All You Need To Know About Godrej Emerald Thane West
                                        </span>
                                        <p className="text-xs">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error sit consectetur nesciunt magnam harum suscipit nobis animi,...
                                        </p>
                                        <div className="flex text-xs text-neutral-500 justify-between w-full">
                                            <span>By Lorem</span>
                                            <span>17th Aug 18</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingNews;
