"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const SearchData = [
    {
        label: "Property Type",
        data: [
            {
                label: "Buy",
                value: "Buy",
            },
            {
                label: "Residential",
                value: "Residential",
            },
            {
                label: "Commercial",
                value: "Commercial",
            },
            {
                label: "Villa/bungalow",
                value: "Villa/bungalow",
            },
        ],
    },
    {
        label: "Locality",
        data: [
            {
                label: "Thane",
                value: "thane",
            },
            {
                label: "Panvel",
                value: "panvel",
            },
            {
                label: "Uran",
                value: "uran",
            },
            {
                label: "Chirle",
                value: "chirle",
            },
            {
                label: "Ranjanpada",
                value: "ranjanpada",
            },
            {
                label: "Vindhane",
                value: "vindhane",
            },
        ],
    },
];

const FormSchema = z.object({
    location: z.string({
        required_error: "Please select a Location.",
    }),
    propertyType: z
        .string({
            required_error: "Please select a Location.",
        })
        .optional(),
});

const SearchBar = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = (values) => {
        router.push(
            `/search/top-location/${values.location}?propertyType=${
                values.propertyType ?? "Residential"
            }`
        );
    };

    return (
        <>
            <Form {...form} className="w-full">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col w-full items-center justify-center"
                >
                    <div className="flex w-full text-sm md:text-base">
                        <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-2 w-full">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex  gap-1 items-center justify-center md:grid grid-cols-4 h-10 md:h-14 w-full"
                                        >
                                            {SearchData[0].data.map(
                                                ({ value, label }) => (
                                                    <FormItem
                                                        key={value}
                                                        className={`flex items-center justify-center space-y-0 ${
                                                            field.value ===
                                                            value
                                                                ? "bg-[#8661d5] text-white"
                                                                : "bg-white"
                                                        } rounded-full py-1 px-1 md:px-4 md:py-2 md:h-full`}
                                                    >
                                                        <FormControl className="sr-only">
                                                            <RadioGroupItem
                                                                value={value}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            )}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex bg-white border md:border-neutral-200 md:bg-none rounded-3xl md:rounded-2xl w-full px-1 md:px-3 h-12 md:h-14 items-center">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger
                                                icon={false}
                                                className="border-none ring-white focus:ring-white focus:border-none outline-none"
                                            >
                                                <SelectValue placeholder="Select your location" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {SearchData[1].data.map(
                                                (location, i) => (
                                                    <SelectItem
                                                        key={i}
                                                        value={location.value}
                                                    >
                                                        {location.label}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="rounded-full bg-[#8661d5]"
                        >
                            <Search />
                            Search
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};
export default SearchBar;
