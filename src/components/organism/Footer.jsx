import Link from "next/link";
import Logo from "../atoms/Logo";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col w-full bg-blue-50 border-t border-neutral-200">
                <div className="flex w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                        <div className="flex flex-col gap-4 md:gap-6 w-full">
                            <span className="text-lg font-medium">Contact Info:</span>
                            <div className="flex w-full flex-col gap-2 lg:gap-4">
                                <p className="text-base">
                                    G-Square Buisness Park,
                                    3<sup>rd</sup> Floor Office no 303 & 304,
                                    opposite of Sanpada Railway Station,
                                    Navi Mumbai, Maharashatra 400703

                                </p>
                                <span>9555599299 / 9555599099</span>
                                <span>info@zaminwale.com</span>
                                <Logo />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <span className="text-lg font-medium">Company :</span>
                            <ul className="flex w-full flex-col gap-2">
                                {
                                    NavItems[0].data.map((item, i) =>
                                        <li key={`company-${i}`} className="w-fit">
                                            <Link
                                                href={item.link}
                                                className="text-base"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-4 w-full">
                                <span className="text-lg font-medium">About Zaminwale :</span>
                                <div className="flex w-full flex-col gap-2 lg:gap-4">
                                    <p className="text-base">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolore ullam id labore doloremque. Vero et quae tempora facilis illo aliquid, commodi nesciunt illum debitis asperiores qui odio, eius deleniti.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <span className="text-lg font-medium">Projects in Mumbai :</span>
                                <ul className="flex w-full gap-1 flex-wrap">
                                    {
                                        NavItems[1].data.map((item, i) =>
                                            <li key={`project-${i}`} className="w-fit">
                                                <Link
                                                    href={item.link}
                                                    className="text-base"
                                                >
                                                    {item.label}
                                                </Link>
                                                <span className="px-2">|</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center bg-neutral-800 text-white justify-center py-6 lg:py-8 px-4">
                    <p className="text-base md:text-lg text-center font-medium items-center justify-center">
                        Copyright {new Date().getFullYear()} &copy; Zaminwale All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;


const NavItems = [
    {
        label: "Company",
        data: [
            {
                label: "About Us",
                link: "/about-us"
            },
            {
                label: "Testimonials",
                link: "/testimonials"
            },
            {
                label: "Terms & Conditions",
                link: "/terms-and-conditions"
            },
            {
                label: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                label: "Carrers",
                link: "/carrers"
            },
            {
                label: "Carrers",
                link: "/carrers"
            },
            {
                label: "Blog",
                link: "/blog"
            },
            {
                label: "Awards & Media",
                link: "/awards-and-media"
            },
            {
                label: "Booking & saledeed",
                link: "/booking-and-saledeed"
            },
        ]
    },
    {
        label: "Projects in Mumbai",
        data: [
            {
                label: "Plot in Thane",
                link: "/thane"
            },
            {
                label: "Plot in Panvel",
                link: "/panvel"
            },
            {
                label: "Plot in Khalapur",
                link: "/khalapur"
            },
            {
                label: "Plot in Ranjanpada",
                link: "/ranjanpada"
            },
            {
                label: "Plot in Vindhane",
                link: "/vindhane"
            },
            {
                label: "Plot in Chirle",
                link: "/chirle"
            },
        ]
    }
]