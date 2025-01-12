"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const PropertyLocations = [
    { label: "Thane", value: "thane" },
    { label: "Panvel", value: "panvel" },
    { label: "Uran", value: "uran" },
    { label: "Third Mumbai", value: "third-mumbai" },
];

const FormSchema = z.object({
    location: z.string({
        required_error: "Please select a Location.",
    }),
});

const SearchBar = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = (values) => {
        router.push(`/search/top-location/${values.location}`);
    };

    return (
        <>
            <Form {...form} className="w-full">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full gap-4 items-center justify-center"
                >
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
                                        {PropertyLocations.map(
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
                    <Button type="submit" className="rounded-full bg-[#0000FF]">
                        <Search />
                        Search
                    </Button>
                </form>
            </Form>
        </>
    );
};
export default SearchBar;
