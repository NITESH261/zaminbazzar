"use client";

import { uploadPropertyImage } from "@/actions/property";
import DragNDrop from "@/components/atoms/DragNDrop";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PhotosNVideoSchema = z.object({
    propertyPhotos: z
        .array(z.string().url().nullable())
        .max(10, "You can upload a maximum of 10 photos")
        .optional(),
});

const Step4Data = [
    {
        label: "Upload your photos",
    },
];

const PhotoNVideo = ({ onSubmit, prev, currentStep, loading, formData }) => {
    const [fields, setFields] = useState([]);

    const form = useForm({
        resolver: zodResolver(PhotosNVideoSchema),
        defaultValues: {
            propertyPhotos: formData?.propertyPhotos || [],
        },
    });

    const handleFileChange = async (file, fieldIndex) => {
        const updatedPhotos = [...form.getValues("propertyPhotos")];

        if (!file) {
            updatedPhotos[fieldIndex] = null;
        } else {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const fileResp = await uploadPropertyImage(formData);
                updatedPhotos[fieldIndex] = fileResp?.url || null;
            } catch (error) {
                console.error("File upload failed:", error);
                updatedPhotos[fieldIndex] = null;
            }
        }

        form.setValue("propertyPhotos", updatedPhotos);
    };

    const handleSubmit = (data) => {
        const filteredData = {
            ...data,
            propertyPhotos: data.propertyPhotos?.filter(Boolean) || [],
        };

        onSubmit(filteredData);
    };

    const addField = () => {
        if (fields.length < 10) {
            setFields((prevFields) => [...prevFields, prevFields.length]);
        }
    };

    const removeField = (index) => {
        setFields((prevFields) => prevFields.filter((_, i) => i !== index));
        const updatedPhotos = form
            .getValues("propertyPhotos")
            .filter((_, i) => i !== index);
        form.setValue("propertyPhotos", updatedPhotos);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full flex flex-col gap-10"
                >
                    <div className="flex flex-col w-full">
                        <span className="text-xl md:text-2xl font-semibold">
                            Add photos of your property (Optional)
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 lg:gap-y-20 w-full">
                        {fields.map((fieldIndex, index) => (
                            <div key={fieldIndex} className="relative">
                                <FormField
                                    control={form.control}
                                    name={`propertyPhotos.${index}`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {Step4Data[0].label} (
                                                {index + 1})
                                            </FormLabel>
                                            <FormControl>
                                                <DragNDrop
                                                    src={field.value || ""}
                                                    maxSize="5"
                                                    required={false}
                                                    onFileChange={(file) =>
                                                        handleFileChange(
                                                            file,
                                                            index
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="button"
                                    variant="icon"
                                    className="absolute top-0 right-0 rounded-full"
                                    onClick={() => removeField(index)}
                                    title="Remove Field"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        ))}
                        {fields.length < 10 && (
                            <Button
                                type="button"
                                variant="outline"
                                className="px-4 py-2 h-full my-auto w-full aspect-video rounded-lg"
                                onClick={addField}
                            >
                                {fields.length === 0
                                    ? "Add Photo"
                                    : "Add Another Photo"}
                            </Button>
                        )}
                    </div>
                    <div className="flex w-full mt-4">
                        <Button
                            onClick={prev}
                            className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-4"
                            disabled={currentStep === 0 || loading}
                        >
                            <ArrowLeft />
                        </Button>
                        <Button
                            type="submit"
                            className="px-4 py-2 bg-[#0000FF] text-white rounded-lg"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Continue"}
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default PhotoNVideo;
