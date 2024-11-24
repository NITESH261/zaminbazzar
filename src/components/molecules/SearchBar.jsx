"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const PropertyLocations = [
    { label: "Navi Mumbai", value: "Navi Mumbai" },
    { label: "Thane", value: "Thane" },
    { label: "Panvel", value: "Panvel" },
    { label: "Khalapur", value: "Khalapur" },
];

const FormSchema = z.object({
    location: z.string({
        required_error: "Please select a Location.",
    }),
});

const SearchBar = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = (values) => {
        console.log(values);
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
                        className="w-full flex"
                        render={({ field }) => (
                            <FormItem className="flex flex-col w-full relative ">
                                <Popover className="w-full flex">
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="ghost"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between",
                                                    !field.value &&
                                                    "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? PropertyLocations.find(
                                                        (location) =>
                                                            location.value ===
                                                            field.value
                                                    )?.label
                                                    : "Select location"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent align="center" className="w-full relative flex z-10 p-0">
                                        <Command className="w-[615px] max-w-3xl flex">
                                            <CommandInput
                                                placeholder="Search location..."
                                                className=" w-full"
                                            />
                                            <CommandList className="w-full">
                                                <CommandEmpty>
                                                    No location found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {PropertyLocations.map(
                                                        (location) => (
                                                            <CommandItem
                                                                value={
                                                                    location.label
                                                                }
                                                                key={
                                                                    location.value
                                                                }
                                                                onSelect={() => {
                                                                    form.setValue(
                                                                        "location",
                                                                        location.value
                                                                    );
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        location.value ===
                                                                            field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {location.label}
                                                            </CommandItem>
                                                        )
                                                    )}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage className="-bottom-2 absolute left-4 text-xs" />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="rounded-full bg-[#0078DB]">
                        <Search />
                        Search</Button>
                </form>
            </Form>
        </>
    );
};
export default SearchBar;
