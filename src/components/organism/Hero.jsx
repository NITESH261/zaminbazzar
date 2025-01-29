import BannerCarousel from "../atoms/BannerCarousel";
import SearchBar from "../molecules/SearchBar";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div className="w-full h-[300px] md:mb-16 flex items-center justify-center relative ">
                <BannerCarousel />
                <div className="absolute flex flex-col gap-6 items-center px-4 justify-center h-full w-full bg-black/0">
                    <div className="flex absolute top-[70%] md:top-[90%] md:shadow-md flex-col divide-y w-[90%] sm:w-full max-w-3xl bg-white rounded-2xl md:border md:border-gray-200">
                        <div className="flex w-full text-sm md:text-base">
                            <ul className="flex gap-4 md:gap-0 items-center justify-center md:grid grid-cols-4 h-10 md:h-14 w-full">
                                <li className="flex w-fit md:w-full items-center justify-center text-black md:text-black cursor-pointer hover:text-[#581a95] transition-all">
                                    Buy
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-black md:text-black cursor-pointer hover:text-[#581a95] transition-all">
                                    <Link href={`/search/top-location/Villa/resindential}`} >
                                        Resindential
                                    </Link>
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-black md:text-black cursor-pointer hover:text-[#581a95] transition-all">
                                    <Link href={`/search/top-location/Villa/commercial}`} >
                                        Commercial
                                    </Link>
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-black md:text-black cursor-pointer hover:text-[#581a95] transition-all">
                                    <Link href={`/search/top-location/villa/banglow}`} >
                                        Villa / Banglow
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex bg-white border md:border-neutral-200 md:bg-none rounded-3xl md:rounded-2xl w-full px-3 h-14">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;
