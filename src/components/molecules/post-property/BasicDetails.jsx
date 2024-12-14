import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step1Data = [
    {
        label: "I'm looking to",
        data: [
            { value: "sell", label: "Sell" },
            { value: "rent", label: "Rent" },
            { value: "pg", label: "PG" },
        ]
    },
    {
        label: "What kind of property do you have?",
        data: [
            { value: "flat_apartment", label: "Flat/Apartment" },
            { value: "independent_house_villa", label: "Independent House / Villa" },
            { value: "independent_builder_floor", label: "Independent / Builder Floor" },
            { value: "plot_land", label: "Plot / Land" },
            { value: "studio_apartment", label: "1 RK / Studio Apartment" },
            { value: "serviced_apartment", label: "Serviced Apartment" },
            { value: "farmhouse", label: "Farmhouse" },
            { value: "office_space", label: "Office Space" },
            { value: "shop", label: "Shop" },
            { value: "showroom", label: "Showroom" },
            { value: "warehouse_godown", label: "Warehouse / Godown" },
            { value: "industrial_building", label: "Industrial Building" },
            { value: "land_plot", label: "Land / Plot" },
            { value: "coworking_space", label: "Co-working Space" }
        ]
    }

];

const BasicDetails = ({ data, form }) => {

    return (
        <>
            <FormField
                control={form.control}
                name={data.fields[0]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step1Data[0].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step1Data[0].data.map(({ value, label }) => (
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
                        <FormLabel>{Step1Data[1].label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex w-full flex-wrap"
                            >
                                {Step1Data[1].data.map(({ value, label }) => (
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

export default BasicDetails
