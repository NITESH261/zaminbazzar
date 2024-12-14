import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";


const Step3Data = [
    {
        label: "Area",
    },
    {
        label: "Property Dimesions",
    },
    {
        label: "Is there boundry walls around the property",
        data: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
        ]
    },
    {
        label: "No. of open sides",
        data: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
        ]
    },
    {
        label: "Any construction done on this property",
        data: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
        ]
    },
    {
        label: "Possession by",
    },
    {
        label: "Ownership",
        data: [
            { value: "freehold", label: "Freehold" },
            { value: "leasehold", label: "Leasehold" },
            { value: "co-operative society", label: "Co-operative Society" },
            { value: "power of attorney", label: "Power of Attorney" },
        ]
    },
    {
        label: "Which authority the property is approved by",
        data: [
            { value: "MMRDA", label: "MMRDA" },
            { value: "MCGM", label: "MCGM" },
        ]
    },
    {
        label: "Price Details",
    },
    {
        label: "What makes your property unique",
    },
];

const PropertyProfile = ({ form, data }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={data.fields[0]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[0].label}</FormLabel>
                        <FormControl>
                            <Input placeholder="Plot Area " {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex w-full gap-4 flex-col">
                <FormLabel>{Step3Data[1].label}</FormLabel>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <FormField
                        control={form.control}
                        name={data.fields[1]}
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">
                                {/* <FormLabel>{Step3Data[s1].label}</FormLabel> */}
                                <FormControl>
                                    <Input placeholder="Plot Length " {...field} value={field.value ?? ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={data.fields[2]}
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">
                                {/* <FormLabel>{Step3Data[1].label}</FormLabel> */}
                                <FormControl>
                                    <Input placeholder="Plot Breadth " {...field} value={field.value ?? ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
            <FormField
                control={form.control}
                name={data.fields[3]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[2].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step3Data[2].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className={`flex items-center space-y-0 ${field.value === value ? "bg-blue-100 border-blue-400" : "bg-white border"
                                            } rounded-full px-4 py-2`}
                                    >
                                        <FormControl className="sr-only">
                                            <RadioGroupItem value={value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{label}</FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[4]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[3].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step3Data[3].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className={`flex items-center space-y-0 ${field.value === value ? "bg-blue-100 border-blue-400" : "bg-white border"
                                            } rounded-full px-4 py-2`}
                                    >
                                        <FormControl className="sr-only">
                                            <RadioGroupItem value={value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{label}</FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[5]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[4].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step3Data[4].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className={`flex items-center space-y-0 ${field.value === value ? "bg-blue-100 border-blue-400" : "bg-white border"
                                            } rounded-full px-4 py-2`}
                                    >
                                        <FormControl className="sr-only">
                                            <RadioGroupItem value={value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{label}</FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[6]}
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>{Step3Data[5].label}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[7]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[6].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step3Data[6].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className={`flex items-center space-y-0 ${field.value === value ? "bg-blue-100 border-blue-400" : "bg-white border"
                                            } rounded-full px-4 py-2`}
                                    >
                                        <FormControl className="sr-only">
                                            <RadioGroupItem value={value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{label}</FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[8]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[7].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step3Data[7].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className={`flex items-center space-y-0 ${field.value === value ? "bg-blue-100 border-blue-400" : "bg-white border"
                                            } rounded-full px-4 py-2`}
                                    >
                                        <FormControl className="sr-only">
                                            <RadioGroupItem value={value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">{label}</FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[9]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[8].label}</FormLabel>
                        <FormControl>
                            <Input placeholder="Expected Price" {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={data.fields[10]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step3Data[9].label}</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Share some details about your property" {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default PropertyProfile
