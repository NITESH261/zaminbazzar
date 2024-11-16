import About from "@/components/organism/About";
import Connectivity from "@/components/organism/Connectivity";
import DreamPlots from "@/components/organism/DreamPlots";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Property from "@/components/organism/Property";
import RecommendedProperty from "@/components/organism/RecommendedProperty";
import TopLocations from "@/components/organism/TopLocations";
import TrendingNews from "@/components/organism/TrendingNews";

const page = () => {
    return (
        <>
            <Hero />
            <Property />
            <TopLocations />
            <RecommendedProperty />
            <DreamPlots />
            <Connectivity />
            <About />
            <TrendingNews />
            <Footer />
        </>
    );
};

export default page;
