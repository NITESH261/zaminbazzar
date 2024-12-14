import DragNDrop from "@/components/atoms/DragNDrop"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const Step4Data = [
    {
        label: "Upload your photos",
    },
]

const PhotoNVideo = ({ form, data }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={data.fields[0]}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{Step4Data[0].label}</FormLabel>
                        <FormControl>
                            <DragNDrop
                                maxWidth="max-w-full"
                                src={field.value}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default PhotoNVideo
