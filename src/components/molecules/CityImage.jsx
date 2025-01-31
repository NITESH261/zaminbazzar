import Image from "next/image";

const CityImage = ({ city }) => {
    const cityImages = {
        Panvel: "/assets/ads/panvel-ads.jpeg",
        Thane: "/assets/ads/thane-ads.jpeg",
        "Third Mumbai": "/assets/ads/third-mumbai-ads.jpeg",
    };

    const cityImagesMobile = {
        Panvel: "/assets/ads/panvel-mobile.jpg",
        Thane: "/assets/ads/thane-mobile.jpg",
        "Third Mumbai": "/assets/ads/third-mumbai-mobile.jpg",
    };

    const imageUrl = cityImages[city] || "/assets/ads/main-ads.jpeg";
    const imageUrlMobile = cityImagesMobile[city] || "/assets/ads/main-ads-mobile.jpeg";

    return (
        <div className="max-w-7xl w-full p-4 mx-auto mb-4 md:mb-6">
            <div className="w-full border border-neutral-200 shadow h-40 relative rounded-2xl">
                <Image
                    src={imageUrl}
                    alt={`${city} banner`}
                    fill
                    className="object-cover rounded-2xl object-center hidden md:flex"
                />
                <Image
                    src={imageUrlMobile}
                    alt={`${city} mobile banner`}
                    fill
                    className="md:object-cover sm:object-contain rounded-2xl object-center flex md:hidden"
                />
            </div>
        </div>
    );
};

export default CityImage;



//panvel-mobile