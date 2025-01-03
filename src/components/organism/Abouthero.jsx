import BannerCarousel from "../atoms/BannerCarousel";
import SearchBar from "../molecules/SearchBar";

const Abouthero = () => {
    return (
        <>
            <div className="w-full h-[350px] md:mb-16 flex items-center justify-center relative">
                <BannerCarousel />
            </div>
        </>
    );
};

export default Abouthero;
