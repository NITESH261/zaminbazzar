import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gray-100 text-gray-800 w-full">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="font-bold text-lg">About ZaminWale</h2>
                        <p>As the largest platform connecting property buyers and sellers</p>
                        <div className="mt-4">
                            <h2 className="font-bold text-lg">More from our Network</h2>
                            <p className="mt-2">Times Now &nbsp;&nbsp; ET Now</p>
                            {/* <div className="flex space-x-2 mt-2">
                                <a href="#"><img src="https://placehold.co/100x40" alt="Google Play" className="h-10" /></a>
                                <a href="#"><img src="https://placehold.co/100x40" alt="App Store" className="h-10" /></a>
                            </div> */}
                            <div className="flex space-x-2 mt-4">
                                <a href="#"><FaFacebookSquare className="fab fa-facebook-f text-blue-600 text-2xl" /></a>
                                <a href="#"><FaSquareXTwitter className="fab fa-twitter text-blue-400 text-2xl" /></a>
                                <a href="#"><FaLinkedin className="fab fa-linkedin-in text-blue-700 text-2xl" /></a>
                                <a href="#"><FaInstagram className="fab fa-instagram text-pink-600 text-2xl" /></a>
                                <a href="#"><FaYoutube className="fab fa-youtube text-red-600 text-2xl" /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Properties in India</h2>
                        <p>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</p>
                        <h2 className="font-bold text-lg mt-4">New Projects in India</h2>
                        <p>New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-4">
                <div className="container mx-auto text-center">
                    <a href="#" className="text-gray-600 mx-2">Sitemap</a>
                    <a href="#" className="text-gray-600 mx-2">Terms & Conditions</a>
                    <a href="#" className="text-gray-600 mx-2">Privacy Policy</a>
                    <a href="#" className="text-gray-600 mx-2">Whistle Blower Policy</a>
                    <a href="#" className="text-gray-600 mx-2">Blog</a>
                    <a href="#" className="text-gray-600 mx-2">Careers</a>
                    <a href="#" className="text-gray-600 mx-2">Testimonials</a>
                    <a href="#" className="text-gray-600 mx-2">Unsubscribe</a>
                    <a href="#" className="text-gray-600 mx-2">Help Center</a>
                    <a href="#" className="text-gray-600 mx-2">Sales Enquiry</a>
                    <a href="#" className="text-gray-600 mx-2">Buy Our Services</a>
                </div>
            </div>
            <div className="bg-gray-300 py-4">
                <div className="container mx-auto text-center text-sm text-gray-600">
                    <p>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by <a href="#" className="text-blue-500">Read more</a></p>
                </div>
            </div>
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto text-center text-sm text-gray-400">
                    <p>All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 ZaminWale Pvt Limited.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;