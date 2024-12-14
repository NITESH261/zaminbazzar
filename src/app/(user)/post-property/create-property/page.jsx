"use client";

import StepCard from "@/components/atoms/StepCard";
import AmenitiesSection from "@/components/molecules/post-property/AmenitiesSection";
import BasicDetails from "@/components/molecules/post-property/BasicDetails";
import LocationDetails from "@/components/molecules/post-property/LocationDetails";
import PhotoNVideo from "@/components/molecules/post-property/PhotoNVideo";
import PropertyProfile from "@/components/molecules/post-property/PropertyProfile";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormDataSchema = z.object({
    looking: z.enum(["sell", "rent", "pg"], {
        required_error: "You need to select type.",
    }),
    propertyCategory: z.enum(
        [
            "flat_apartment",
            "independent_house_villa",
            "independent_builder_floor",
            "plot_land",
            "studio_apartment",
            "serviced_apartment",
            "farmhouse",
            "office_space",
            "shop",
            "showroom",
            "warehouse_godown",
            "industrial_building",
            "land_plot",
            "coworking_space",
        ],
        { required_error: "You need to select Property category." }
    ),
    city: z
        .string({
            required_error: "Please select city.",
        }),
    locality: z
        .string({
            required_error: "Please select locality.",
        }),
    plotNo: z
        .string({
            required_error: "Please select plotNo.",
        }),
    area: z
        .string({
            required_error: "Please enter area.",
        }),
    length: z
        .string({
            required_error: "Please enter length.",
        }).optional(),
    breadth: z
        .string({
            required_error: "Please enter breadth.",
        }).optional(),
    boundryWalls: z.enum(["yes", "no"], {
        required_error: "You need to option",
    }),
    openSides: z.enum(["1", "2", "3", "4"], {
        required_error: "You need to option",
    }),
    possessionBy: z.date({
        required_error: "Select possession date",
    }),
    ownership: z.enum(["freehold", "leasehold", "co-operative society", "power of attorney"], {
        required_error: "You need to option",
    }),
    authorityApproved: z.enum(["MMRDA", "MCGM"], {
        required_error: "You need to option",
    }).optional(),
    price: z
        .string({
            required_error: "Please enter Price.",
        }),
    uniqueAboutProperty: z
        .string({
            required_error: "Please enter uniqueness of your property.",
        }),
    photos: z
        .string({
            required_error: "Please add photos of your property",
        }).nullable().optional(),
    amenities: z.enum([
        "maintenance staff",
        "water storage",
        "rain water harvesting",
        "vaastu complaint"
    ], {
        required_error: "You need to option",
    }),
    overlook: z.enum([
        "pool",
        "park",
        "club",
        "main road",
        "others"
    ], {
        required_error: "You need to option",
    }),
    otherFeatures: z.enum(["in a gated society", "corner property"], {
        required_error: "You need to option",
    }),
    propertyFacing: z.enum([
        "north",
        "south",
        "east",
        "west",
        "north-east",
        "north-west",
        "south-east",
        "south-west"
    ], {
        required_error: "You need to option",
    }),
    locationAdvantage: z.enum([
        "close to metro station",
        "close to school",
        "close to hospital",
        "close to market",
        "close to railway station",
    ], {
        required_error: "You need to option",
    }),
});

const Steps = [
    {
        id: "Step 1",
        name: "Basic Details",
        fields: ["looking", "propertyCategory"],
    },
    {
        id: "Step 2",
        name: "Location Details",
        fields: ["city", "locality", "plotNo"],
    },
    {
        id: "Step 3",
        name: "Property Details",
        fields: ["area", "length", "breadth", "boundryWalls", "openSides", "anyConstructionDone", "possessionBy", "ownership", "authorityApproved", "price", "uniqueAboutProperty"]
    },
    {
        id: "Step 4",
        name: "Photos & Videos",
        fields: ["photos"]
    },
    {
        id: "Step 5",
        name: "Amenities Section",
        fields: ["amenities", "overlook", "otherFeatures", "propertyFacing", "locationAdvantage"]
    },
];

const Page = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [previousStep, setPreviousStep] = useState(null);

    const form = useForm({
        resolver: zodResolver(FormDataSchema),
        mode: "onBlur",
    });

    const onSubmit = (values) => {
        console.log(values);

        toast.message(
            "You submitted the following values:",
            {
                description: JSON.stringify(values, null, 2),
            }
        );
    };

    const next = async () => {
        const fields = Steps[currentStep]?.fields || [];
        const isValid = await form.trigger(fields, { shouldFocus: true });

        if (!isValid) {
            return;
        }

        if (currentStep === Steps.length - 1) {
            await form.handleSubmit(onSubmit)();
        } else {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        }
    };


    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    return (
        <div className="flex w-full  bg-neutral-200">
            <div className="grid grid-cols-8 flex-col w-full max-w-7xl mx-auto gap-6 px-4 py-6">
                <div className="flex flex-col flex-1 gap-4 w-full bg-white p-4 rounded-lg col-span-2">
                    {Steps.map((step, index) => {
                        const stepIndex = index;
                        const status =
                            currentStep > stepIndex
                                ? "complete"
                                : currentStep === stepIndex
                                    ? "current"
                                    : "upcoming";
                        return (
                            <StepCard
                                key={step.id}
                                stepNumber={stepIndex + 1}
                                status={status}
                                title={step.name}
                            />
                        );
                    })}
                </div>

                <div className="flex w-full rounded-lg bg-white h-full overflow-y-auto p-6 col-span-6">
                    <div className="flex w-full h-fit">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex w-full h-fit flex-col"
                            >
                                {currentStep === 0 && (
                                    <div className="flex flex-1 gap-10 flex-col w-full">
                                        <div className="flex w-full">
                                            <span className="text-2xl font-semibold">
                                                Welcome back, Akash! <br /> Fill out your basic details
                                            </span>
                                        </div>
                                        <BasicDetails form={form} data={Steps[currentStep]} />
                                    </div>
                                )}
                                {currentStep === 1 && (
                                    <div className="flex flex-1 gap-10 flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <span className="text-2xl font-semibold">
                                                Where is your property located
                                            </span>
                                            <span>An accurate location helps you to connect with buyers</span>
                                        </div>
                                        <LocationDetails form={form} data={Steps[currentStep]} />
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div className="flex flex-1 gap-10 flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <span className="text-2xl font-semibold">
                                                Tell us about your property
                                            </span>
                                        </div>
                                        <PropertyProfile form={form} data={Steps[currentStep]} />
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div className="flex flex-1 gap-10 flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <span className="text-2xl font-semibold">
                                                Add photos of your property
                                            </span>
                                        </div>
                                        <PhotoNVideo form={form} data={Steps[currentStep]} />
                                    </div>
                                )}
                                {currentStep === 4 && (
                                    <div className="flex flex-1 gap-10 flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <span className="text-2xl font-semibold">
                                                Add amenities / unique features
                                            </span>
                                        </div>
                                        <AmenitiesSection form={form} data={Steps[currentStep]} />
                                    </div>
                                )}

                                <div className="flex w-full mt-4">
                                    <Button
                                        onClick={prev}
                                        className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-4"
                                        disabled={currentStep === 0}
                                    >
                                        <ArrowLeft />
                                    </Button>
                                    <Button
                                        onClick={next}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                        disabled={currentStep === Steps.length}
                                    >
                                        {currentStep === Steps.length - 1 ? "Submit" : "Continue"}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
