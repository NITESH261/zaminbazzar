import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Step2Data = [
    {
        label: "City",
        data: [
            { value: "navi-mumbai", label: "Navi Mumbai" },
            { value: "thane", label: "Thane" },
            { value: "panvel", label: "Panvel" },
            { value: "khalapur", label: "Khalapur" },
        ]
    },
    {
        label: "Locality",
    },
    {
        label: "Plot no",
    }
];

const LocationDetails = ({ form, data }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={data.fields[0]}
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                        <FormLabel>{Step2Data[0].label}</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value ?? ""}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select City" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {Step2Data[0].data.map(({ value, label }) => (
                                        <SelectItem key={label} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
                        <FormLabel>{Step2Data[1].label}</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Locality" {...field} value={field.value ?? ""} />
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
                        <FormLabel>{Step2Data[2].label}</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Plot no " {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export default LocationDetails;
