import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Step5Data = [
    {
        label: "Amenities",
        data: [
            { value: "maintenance staff", label: "Maintenance Staff" },
            { value: "water storage", label: "Water Storage" },
            { value: "rain water harvesting", label: "Rain Water Harvesting" },
            { value: "vaastu complaint", label: "Vaastu Complaint" },
        ]
    },
    {
        label: "Overlooking",
        data: [
            { value: "pool", label: "Pool" },
            { value: "park", label: "Park/Garden" },
            { value: "club", label: "Club" },
            { value: "main road", label: "Main Road" },
            { value: "others", label: "Others" },
        ]
    },
    {
        label: "Other Features",
        data: [
            { value: "in a gated society", label: "In a gated society" },
            { value: "corner property", label: "Corner Property" },
        ]
    },
    {
        label: "Property Facing",
        data: [
            { value: "north", label: "North" },
            { value: "south", label: "South" },
            { value: "east", label: "East" },
            { value: "west", label: "West" },
            { value: "north-east", label: "North-East" },
            { value: "north-west", label: "North-west" },
            { value: "south-east", label: "South-East" },
            { value: "south-west", label: "South-West" },
        ]
    },
    {
        label: "Location Advantages",
        data: [
            { value: "close to metro station", label: "Close to metro station" },
            { value: "close to school", label: "Close to metro station" },
            { value: "close to hospital", label: "Close to metro station" },
            { value: "close to market", label: "Close to metro station" },
            { value: "close to railway station", label: "Close to metro station" },
        ]
    },
]

const AmenitiesSection = ({ form, data }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={data.fields[0]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step5Data[0].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step5Data[0].data.map(({ value, label }) => (
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
                name={data.fields[1]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step5Data[1].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step5Data[1].data.map(({ value, label }) => (
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
                name={data.fields[2]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step5Data[2].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className=""
                            >
                                {Step5Data[2].data.map(({ value, label }) => (
                                    <FormItem
                                        key={value}
                                        className="space-x-2"
                                    >
                                        <FormControl>
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
                name={data.fields[3]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step5Data[3].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step5Data[3].data.map(({ value, label }) => (
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
                        <FormLabel>{Step5Data[4].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step5Data[4].data.map(({ value, label }) => (
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
        </>
    )
}

export default AmenitiesSection
