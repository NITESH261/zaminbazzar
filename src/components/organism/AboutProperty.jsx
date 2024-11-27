import Image from "next/image"
import { Button } from "../ui/button"

const AboutProperty = () => {
    return (
        <>
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
        </>
    )
}

export default AboutProperty
