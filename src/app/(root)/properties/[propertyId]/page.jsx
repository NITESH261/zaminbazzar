import BentoGridScroll from "@/components/molecules/BentoGridScroll";
import EnquireForm from "@/components/molecules/EnquireForm";
import SimilarExterior from "@/components/molecules/SimilarExterior";
import SimilarProperty from "@/components/molecules/SimilarProperty";
import Footer from "@/components/organism/Footer";
import NearByLocations from "@/components/organism/NearByLocations";
import SendEnquiry from "@/components/organism/SendEnquiry";
import { Button } from "@/components/ui/button";
import { AiTwotoneCompass } from "react-icons/ai";
import { BiSolidDirections } from "react-icons/bi";
import { GiGate, GiParkBench } from "react-icons/gi";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { ImPriceTags } from "react-icons/im";
import { RxAllSides, RxDimensions } from "react-icons/rx";
import About_accordion from "@/components/molecules/post-property/About_accordion";
import { getOneProperty } from "@/actions/property";
import { formatCurrency } from "@/lib/utils";

const page = async ({ params }) => {
    const PropertyId = (await params).propertyId;
    const { result = {} } = await getOneProperty(PropertyId);

    return (
        <div className="flex flex-col w-full h-[calc(100vh-64px)] overflow-y-auto">
            <div className="grid grid-cols-1 xl:grid-cols-8 gap-4 px-4 py-6 md:py-8 lg:py-10 xl:py-12 w-full max-w-7xl mx-auto h-auto relative">
                <div className="flex w-full lg:col-span-6 h-auto">
                    <div className="flex w-full h-full gap-8 flex-col">
                        <BentoGridScroll />
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-3 w-full">
                            <div className="flex flex-col gap-4 w-full xl:col-span-2">
                                <div className="flex items-center gap-2 w-full">
                                    <span className="size-4 bg-green-500 rounded-full"></span>
                                    <span>Property For Sale</span>
                                </div>
                                <div className="flex gap-4 text-2xl md:text-3xl items-center w-full">
                                    <strong className="">
                                        {result.priceTotal} Lakh
                                    </strong>
                                    <span className="">|</span>
                                    <span className="text-xl md:text-2xl lg:text-3xl">
                                        {result.plotArea?.value} sqft
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <RxDimensions className="!size-4 text-green-400" />
                                            <span className="text-lg font-medium">
                                                Dimensions:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <span className="font-medium">
                                                {result.plotArea?.value} sqft
                                            </span>{" "}
                                            |
                                            <span className="font-medium">
                                                {result.length} cm
                                            </span>{" "}
                                            |
                                            <span className="font-medium">
                                                {result.breadth} cm
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <ImPriceTags className="!size-4 text-yellow-400" />
                                            <span className="text-lg font-medium">
                                                Price:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <span className="font-medium">
                                                {result.pricePerSQFT}
                                            </span>
                                            /sqft
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <BiSolidDirections className="!size-4 text-green-400" />
                                            <span className="text-lg font-medium">
                                                location:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
                                                {result.locality} |{" "}
                                                {result.city}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <AiTwotoneCompass className="!size-4 text-yellow-400" />
                                            <span className="text-lg font-medium">
                                                Possession:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
                                                {result.possessionBy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <HiMiniClipboardDocumentCheck className="!size-4 text-green-400" />
                                            <span className="text-lg font-medium">
                                                Authority approved:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
                                                Yes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <GiGate className="!size-4 text-yellow-400" />
                                            <span className="text-lg font-medium">
                                                Gated Society:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
                                                Yes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <GiParkBench className="!size-4 text-green-400" />
                                            <span className="text-lg font-medium">
                                                No. of Open Sides:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
                                                {result.openSides}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex gap-2 items-center w-fit">
                                            <RxAllSides className="!size-4 text-[#0000FF]" />
                                            <span className="text-lg font-medium">
                                                Overlooking:
                                            </span>
                                        </div>
                                        <div className="flex w-fit gap-1">
                                            <p className="text-sm md:text-base">
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
                                    <Button className="rounded-3xl bg-[#0078DB]">
                                        Contact Owner
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-3xl border-[#0078DB] text-[#0078DB]"
                                    >
                                        Get Callback
                                    </Button>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="flex aspect-square h-1/2 relative w-full">
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
            {/* <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 py-6 md:py-8 lg:py-10 xl:py-12 w-full max-w-7xl mx-auto h-auto relative bg-blue-100 rounded-2xl">
                <div className="flex w-full items-center justify-center">
                    <h2 className="text-lg font-medium md:text-xl text-center lg:text-2xl">
                        Why You Should Consider This Property
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full max-w-6xl mx-auto">
                    <div className="gap-2 rounded-lg flex w-full items-center justify-center flex-col">
                        <GiArcheryTarget className="!size-10 md:!size-14 lg:!size-16 text-orange-400" />
                        <span className="font-semibold text-lg md:text-xl lg:text-2xl">
                            Key Highlights
                        </span>
                        <p className="text-sm md:text-base">
                            of the property
                        </p>
                    </div>
                    <div className="md:col-span-2 xl:col-span-4 bg-white rounded-2xl w-full h-full flex justify-center items-center py-6">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-fit gap-4 md:gap-8 h-fit">
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">North-East Facing</span>
                            </li>
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">Close to School</span>
                            </li>
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">Close to Hospital</span>
                            </li>
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">Close to Market</span>
                            </li>
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">North-East Facing</span>
                            </li>
                            <li className="w-full gap-4 flex">
                                <Check className="text-[#0000FF] !size-6" />
                                <span className="text-lg font-medium">Close to School</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <SendEnquiry />

            {/* <AboutProperty /> */}

            <SimilarProperty />

            {/* <SimilarExterior /> */}

            <NearByLocations />

            <Footer />
        </div>
    );
};

export default page;
