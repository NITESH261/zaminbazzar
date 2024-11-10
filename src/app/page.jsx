import Connectivity from "@/components/organism/Connectivity";
import DreamPlots from "@/components/organism/DreamPlots";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Property from "@/components/organism/Property";
import TopLocations from "@/components/organism/TopLocations";
import TrendingNews from "@/components/organism/TrendingNews";

const page = () => {
    return (
        <>
            <Hero />
            <Property />
            <TopLocations />
            <DreamPlots />
            <Connectivity />
            <TrendingNews />
            <Footer />
        </>
    );
};

export default page;
