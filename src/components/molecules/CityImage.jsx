import Image from "next/image";

const CityImage = ({ city }) => {
    console.log(city);

    const cityImages = {
        Panvel: "/assets/ads/panvel-ads.jpeg",
        Thane: "/assets/ads/thane-ads.jpeg",
        "Third Mumbai": "/assets/ads/third-mumbai-ads.jpeg",
    };

    const imageUrl = cityImages[city] || "/assets/ads/main-ads.jpeg";

    return (
        <div className="max-w-7xl w-full p-4 mx-auto mb-4 md:mb-6">
            <div className="w-full border border-neutral-200 shadow h-40 relative rounded-2xl">
                <Image
                    src={imageUrl}
                    alt={`${city} banner`}
                    fill
                    className="object-cover rounded-2xl object-center"
                />
            </div>
        </div>
    );
};

export default CityImage;
