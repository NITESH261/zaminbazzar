
const page = async ({ params }) => {

    const PropertyId = (await params).propertyId

    return (
        <div className="flex w-full flex-1">
            <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-10">
                <div className="grid relative grid-cols-1 lg:grid-cols-8 w-full gap-4">
                    <div className="flex w-full col-span-6 lg:h-full border border-red-500">
                        <div className="flex w-full h-fit gap-8 flex-col">
                            <div className="flex flex-col lg:flex-row h-fit gap-2 w-full">
                                <div className="flex w-full lg:w-3/4 border">
                                    <div className="flex relative aspect-video rounded-lg w-full bg-black">
                                        {/* iamge will be added here */}
                                    </div>
                                </div>
                                <div className="flex lg:flex-col w-full gap-2 lg:w-1/4 border">
                                    <div className="flex relative aspect-video rounded-lg w-1/3 lg:w-full bg-black">
                                        {/* iamge will be added here */}
                                    </div>
                                    <div className="flex relative aspect-video rounded-lg w-1/3 lg:w-full bg-black">
                                        {/* iamge will be added here */}
                                    </div>
                                    <div className="flex relative aspect-video rounded-lg w-1/3 lg:w-full bg-black">
                                        {/* iamge will be added here */}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                                <div className="flex flex-col gap-8 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                        <span className="size-4 bg-green-500 rounded-full"></span>
                                        <span>Property For Sale</span>
                                    </div>
                                    <div className="flex gap-4 text-2xl md:text-3xl lg:text-4xl items-center w-full">
                                        <strong className="">$806,950</strong>
                                        <span className="">|</span>
                                        <span className="text-xl md:text-2xl lg:text-3xl">
                                            <span className="font-medium">2,894</span>{" "}
                                            sqft
                                        </span>
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
                                            <div className="flex w-fit gap-1">
                                                <span className="font-medium">5 Lakh</span>(1084 sqft)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                                <div className="flex flex-col gap-8 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                        <span className="size-4 bg-green-500 rounded-full"></span>
                                        <span>Property For Sale</span>
                                    </div>
                                    <div className="flex gap-4 text-2xl md:text-3xl lg:text-4xl items-center w-full">
                                        <strong className="">$806,950</strong>
                                        <span className="">|</span>
                                        <span className="text-xl md:text-2xl lg:text-3xl">
                                            <span className="font-medium">2,894</span>{" "}
                                            sqft
                                        </span>
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
                                            <div className="flex w-fit gap-1">
                                                <span className="font-medium">5 Lakh</span>(1084 sqft)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex w-full col-span-2">
                        <div className="flex sticky top-20 h-96 pt-4 w-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
