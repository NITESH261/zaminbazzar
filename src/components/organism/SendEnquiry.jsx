"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Cards = [
    {
        img: "recomonded-property1.jpeg"
    },
    {
        img: "recomonded-property2.jpeg"
    },
    {
        img: "recomonded-property3.jpeg"
    },
    {
        img: "recomonded-property4.jpeg"
    },
    {
        img: "recomonded-property5.jpeg"
    },
    {
        img: "recomonded-property6.jpeg"
    },
    {
        img: "recomonded-property7.jpeg"
    },
    {
        img: "recomonded-property8.jpeg"
    },
    {
        img: "recomonded-property9.jpeg"
    }
]

const SendEnquiry = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    function onSubmit(values) {
        console.log(values)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 bg-white w-full max-w-5xl mx-auto border border-neutral-200 rounded-2xl">
            <div className="flex flex-col space-y-2 items-center justify-center w-full p-6">
                <div className="flex w-full">
                    <span className="text-lg font-semibold">Know More About This Property</span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fullname</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your fullname"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your mobile no."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="rounded-3xl w-full bg-[#0078DB]">Send Enquiry</Button>
                    </form>
                </Form>
            </div>
            <div className="flex w-full xl:col-span-2">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent>
                        {Cards.map((card, index) => (
                            <CarouselItem key={index}>
                                <div className="relative rounded-2xl aspect-video md:aspect-square lg:aspect-video flex w-full">
                                    <Image
                                        src={`/assets/recommonded-property/${card.img}`}
                                        alt="house"
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </div>
    )
}

export default SendEnquiry
