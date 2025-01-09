import BannerCarousel from "../atoms/BannerCarousel";
import SearchBar from "../molecules/SearchBar";

const Hero = () => {
    return (
        <>
            <div className="w-full h-[350px] md:mb-16 flex items-center justify-center relative ">
                <BannerCarousel />
                <div className="absolute flex flex-col gap-6 items-center px-4 justify-center h-full w-full bg-black/0">
                    {/* <h1 className="font-galanoGrotesque text-white w-full max-w-3xl text-3xl md:text-4xl lg:text-5xl  break-normal text-center font-bold">
                        The #1 site real estate professionals trust
                    </h1> */}
                    <div className="flex absolute top-1/2 md:top-[90%] shadow-md flex-col divide-y w-[90%] sm:w-full max-w-3xl md:bg-white rounded-2xl md:border md:border-gray-200">
                        <div className="flex w-full text-sm md:text-base">
                            <ul className="flex gap-4 md:gap-0 items-center justify-center md:grid grid-cols-4 h-14 w-full">
                                <li className="flex w-fit md:w-full items-center justify-center text-white md:text-black cursor-pointer hover:text-[#0000FF] transition-all">
                                    Buy
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-white md:text-black cursor-pointer hover:text-[#0000FF] transition-all">
                                    Resindential
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-white md:text-black cursor-pointer hover:text-[#0000FF] transition-all">
                                    Commercial
                                </li>
                                <li className="flex w-fit md:w-full items-center justify-center text-white md:text-black cursor-pointer hover:text-[#0000FF] transition-all">
                                    Villa/Banglow
                                </li>
                            </ul>
                        </div>
                        <div className="flex bg-white md:bg-none rounded-2xl w-full px-4 h-14">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
