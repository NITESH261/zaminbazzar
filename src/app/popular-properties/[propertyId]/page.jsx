
import Keyconnectivity from "@/components/atoms/Keyconnectivity"
import SimilarProperty from "@/components/molecules/SimilarProperty"
import BentoGridScroll from "@/components/molecules/BentoGridScroll"
import EnquireForm from "@/components/molecules/EnquireForm"
import { Button } from "@/components/ui/button"
import Image from "next/image"




const page = async ({ params }) => {

    const PropertyId = (await params).propertyId

    return (
        <div className="flex flex-col w-full h-[calc(100vh-64px)] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 px-4 py-6 md:py-8 lg:py-10 xl:py-12 w-full max-w-7xl mx-auto h-auto relative">
                <div className="flex w-full lg:col-span-6 h-auto">
                    <div className="flex w-full h-full gap-8 flex-col">
                        <BentoGridScroll />
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-3 w-full">
                            <div className="flex flex-col gap-4 w-full xl:col-span-2">
                                <div className="flex items-center gap-2 w-full">
                                    <span className="size-4 bg-green-500 rounded-full"></span>
                                    <span>Property For Sale</span>
                                </div>
                                <div className="flex gap-4 text-2xl md:text-3xl lg:text-4xl items-center w-full">
                                    <strong className="">₹8,06,950</strong>
                                    <span className="">|</span>
                                    <span className="text-xl md:text-2xl lg:text-3xl"> <span className="font-medium">2,894</span>{" "} sqft </span>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-lg font-medium">Dimensions</span>
                                        <div className="flex w-fit gap-1">
                                            Plot Area
                                            <span className="font-medium">1084</span>sqft
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-lg font-medium">Price</span>
                                        <div className="flex w-fit gap-1"><span className="font-medium">5 Lakh</span>(1084 sqft)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="flex aspect-video w-full">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60305.33779055373!2d72.9259711216797!3d19.14781700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x3be7bf535f7a0159%3A0x75f95209b8033881!2sNatural%20Ice%20Cream%2C%20Mercury%20Tower%2C%20Plot%20No.%204%2C%20Mulund%20-%20Airoli%20Bridge%20Rd%2C%20Sec%20-8%2C%20Sector%206%2C%20Airoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!3m2!1d19.1478584!2d72.99807!5e0!3m2!1sen!2sin!4v1732642581562!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <Button className="rounded-3xl bg-[#0078DB]">
                                    Contact Owner
                                </Button>
                                <Button variant="outline" className="rounded-3xl border-[#0078DB] text-[#0078DB]">
                                    Callback
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidde lg:flex lg:col-span-2 sticky top-2 h-full max-h-[calc(100vh-80px)] w-full">
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
            <div className=" px-4 py-6 md:py-8 lg:py-10 xl:py-12 w-full max-w-7xl mx-auto h-auto relative">
                <h3 className=" text-2xl font-semibold text-center">Why You Should Consider This Property</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">

                    <div className="bg-white p-6 rounded-lg items-center flex flex-col justify-center">

                        <p className="text-gray-700">This is the content for the first section. It will take up half the width on medium and larger screens, and the full width on smaller screens.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsum accusantium consequuntur.
                        </p>
                    </div>
                    <div className="bg-white p-6 xl:col-span-2 rounded-lg  w-full h-full flex justify-center items-center">
                        <Keyconnectivity />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-20">
                        <div className="flex flex-col space-y-4 md:space-y-6 w-full justify-center order-2">
                            <div className="space-y-2 w-full">

                                <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                    "Welcome to Zamin Wale, <br />
                                    Experience eco-friendly solutions designed to enrich your daily journey!"
                                </h2>
                            </div>
                            <p className="text-sm md:text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, minima temporibus recusandae voluptatem laudantium quis obcaecati suscipit, eos consequuntur ab nisi, fuga pariatur illo porro distinctio deserunt. Facere, est alias.
                            </p>
                            <div className="w-full space-x-4">
                                <Button variant="outline" className="border-[#0078DB]">Know More</Button>
                                <Button className="bg-[#0078DB]" >See Property Details</Button>
                            </div>
                        </div>
                        <div className="flex w-full order-1">
                            <div className="flex relative aspect-video w-full rounded-t-lg overflow-hidden">
                                <Image
                                    src="/assets/banner-img/about-img.webp"
                                    alt="plots"
                                    fill
                                    className="rounded-lg object-cover object-center hover:scale-125 hover:transition-all hover:rotate-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarProperty />
        </div>
    )
}

export default page