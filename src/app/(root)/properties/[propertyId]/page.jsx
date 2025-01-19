import { getOneProperty } from "@/actions/property";
import BentoGridScroll from "@/components/molecules/BentoGridScroll";
import EnquireForm from "@/components/molecules/EnquireForm";
import About_accordion from "@/components/molecules/post-property/About_accordion";
import SimilarProperty from "@/components/molecules/SimilarProperty";
import Footer from "@/components/organism/Footer";
import NearByLocations from "@/components/organism/NearByLocations";
import SendEnquiry from "@/components/organism/SendEnquiry";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import { AiTwotoneCompass } from "react-icons/ai";
import { BiSolidDirections } from "react-icons/bi";
import { GiGate, GiParkBench } from "react-icons/gi";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { ImPriceTags } from "react-icons/im";
import { RxAllSides } from "react-icons/rx";

const page = async ({ params }) => {
    const PropertyId = (await params).propertyId;
    const { result = [] } = await getOneProperty(PropertyId);

    return (
        <div className="flex flex-col w-full h-[calc(100vh-64px)] overflow-y-auto scrollbar">
            <div className="grid grid-cols-1 xl:grid-cols-8 gap-4 px-4 py-6 md:py-8 lg:py-10 xl:py-12 w-full max-w-7xl mx-auto h-auto relative">
                <div className="flex w-full lg:col-span-6 h-auto">
                    <div className="flex w-full h-full gap-8 flex-col">
                        <BentoGridScroll cards={result.propertyPhotos} />
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-3 w-full">
                            <div className="flex flex-col gap-4 w-full xl:col-span-2">
                                <div className="flex items-center gap-2 w-full">
                                    <span className="size-3 bg-green-500 rounded-full"></span>
                                    <span>{result.propertyType} Property</span>
                                </div>
                                <div className="flex gap-2 text-xl sm:text-2xl md:text-3xl items-center w-full">
                                    <strong className="flex items-center">
                                        <IndianRupee className="size-6" />{" "}
                                        {formatCurrency(result.priceTotal)}
                                    </strong>
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex w-fit gap-1">
                                        <span className="font-medium">
                                            <b>{result.plotArea?.value}</b> sqft
                                        </span>{" "}
                                        |
                                        <span className="font-medium">
                                            <b>{result.length || "-"}</b> cm
                                        </span>{" "}
                                        |
                                        <span className="font-medium">
                                            <b> {result.breadth || "-"} </b> cm
                                        </span>
                                    </div>
                                    <p className="text-sm">
                                        {result.locality}/{result.city}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <ImPriceTags className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Price:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                {result.pricePerSQFT}/sqft
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <BiSolidDirections className="!size-6 text-green-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                location:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                {result.locality} |{" "}
                                                {result.city}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <AiTwotoneCompass className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Possession:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                {result.possessionBy}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <HiMiniClipboardDocumentCheck className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Authority:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                Yes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <GiGate className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Gated Society:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                Yes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full">
                                        <div className="flex gap-2 items-center w-10">
                                            <GiParkBench className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Open Sides:
                                            </span>
                                            <span className="text-xs md:text-sm">
                                                Yes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 w-full col-span-2 sm:col-span-1">
                                        <div className="flex gap-2 items-center w-10">
                                            <RxAllSides className="!size-6 text-yellow-400" />
                                        </div>
                                        <div className="flex flex-col w-fit">
                                            <span className="font-semibold text-sm md:text-base">
                                                Overlooking:
                                            </span>
                                            <p className="text-xs md:text-sm">
                                                {result.overlooking.map(
                                                    (item, i) => (
                                                        <span key={i}>
                                                            {item}
                                                        </span>
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <Button className="rounded-3xl text-sm bg-[#0000ff]">
                                        Contact Owner
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-3xl text-sm border-[#0000ff] text-[#0000ff]"
                                    >
                                        Get Callback
                                    </Button>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="flex aspect-square sm:h-1/2 relative w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60305.33779055373!2d72.9259711216797!3d19.14781700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x3be7bf535f7a0159%3A0x75f95209b8033881!2sNatural%20Ice%20Cream%2C%20Mercury%20Tower%2C%20Plot%20No.%204%2C%20Mulund%20-%20Airoli%20Bridge%20Rd%2C%20Sec%20-8%2C%20Sector%206%2C%20Airoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!3m2!1d19.1478584!2d72.99807!5e0!3m2!1sen!2sin!4v1732642581562!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <About_accordion {...result} />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex xl:col-span-2 sticky top-2 h-full max-h-[calc(100vh-80px)] w-full">
                    <div className="flex flex-col w-full gap-4 border border-gray-200 rounded-2xl h-fit px-4 py-6">
                        <div className="flex w-full justify-center">
                            <span className="font-semibold text-lg">
                                Fill Form To Get More Details
                            </span>
                        </div>
                        <EnquireForm />
                    </div>
                </div>
            </div>

            <SendEnquiry cards={result.propertyPhotos} />

            <SimilarProperty />

            <NearByLocations />

            <Footer />
        </div>
    );
};

export default page;
