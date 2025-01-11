import { CiCircleCheck } from "react-icons/ci";

const AuthLayout = ({ children }) => {
    return (
        <div className="flex w-full h-full">
            <div className="flex w-full max-w-7xl mx-auto px-4 py-2 overflow-y-hidden md:py-2 lg:py-1 xl:py-1">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                    <div className="flex flex-col items-center justify-center w-full order-2 md:order-1">
                        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
                            <div className="md:w-1/2 flex justify-center">
                                <img src="/assets/top-location/login.png" alt="Man sitting at a table with a laptop and a cup, smiling and holding a stress ball" className="rounded-lg shadow-lg" />
                            </div>
                            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 text-center md:text-left">
                                <h1 className="text-3xl font-bold text-gray-800">
                                    Post property Ad to sell or rent online for <span className="text-green-500">Free!</span>
                                </h1>
                                <ul className="mt-4 space-y-2 text-lg text-gray-700">
                                    <li className="flex items-center">
                                        <CiCircleCheck className=" text-green-600 mr-2" />

                                        Get Access to 4 Lakh + Buyers
                                    </li>
                                    <li className="flex items-center">
                                        <CiCircleCheck className=" text-green-600 mr-2" />
                                        Sell Faster with Premium Service
                                    </li>
                                    <li className="flex items-center">
                                        <CiCircleCheck className=" text-green-600 mr-2" />
                                        Get Expert Advice on Market Trends
                                    </li>
                                </ul>
                            </div>
                        </div>``
                    </div>
                    <div className="flex w-full items-center justify-center md:justify-end order-1 md:order-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
