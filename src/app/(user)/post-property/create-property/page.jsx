"use client";

import { createProperty } from "@/actions/property";
import StepCard from "@/components/atoms/StepCard";
import AmenitiesSection from "@/components/molecules/post-property/AmenitiesSection";
import BasicDetails from "@/components/molecules/post-property/BasicDetails";
import LocationDetails from "@/components/molecules/post-property/LocationDetails";
import PhotoNVideo from "@/components/molecules/post-property/PhotoNVideo";
import PropertyProfile from "@/components/molecules/post-property/PropertyProfile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Steps = [
    { id: "Step 1", name: "Basic Details" },
    { id: "Step 2", name: "Location Details" },
    { id: "Step 3", name: "Property Details" },
    { id: "Step 4", name: "Photos & Videos" },
    { id: "Step 5", name: "Amenities Section" },
];

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const router = useRouter()

    const onSubmit = (values) => {
        const handleFormData = () => {
            setFormData((prev) => ({
                ...prev,
                ...values,
            }));
            console.log("Form Values:", values);
            toast.message("You submitted the following values:", {
                description: JSON.stringify(values, null, 2),
            });
        };

        const handleAPICall = async () => {
            setLoading(true);
            const body = { ...formData, ...values };
            console.log("Submitting:", body);
            await createProperty(body)
                .then(resp => {
                    setLoading(false)
                    toast.success(resp.message)
                    router.push("/")
                })
                .catch(error => {
                    toast.error(error.message)
                })
        };

        if (step < 4) {
            handleFormData();
            setStep((prev) => prev + 1);
        } else {
            handleAPICall();
        }
    };

    const prevStep = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    };

    const Form = [
        BasicDetails,
        LocationDetails,
        PropertyProfile,
        PhotoNVideo,
        AmenitiesSection,
    ][step];

    return (
        <div className="flex w-screen h-full overflow-hidden bg-neutral-200">
            <div className="grid grid-cols-8 h-full flex-col w-full max-w-7xl mx-auto gap-6 px-4 py-6 relative">
                <div className="flex flex-col flex-1 gap-4 w-full bg-white p-4 rounded-lg col-span-2">
                    {Steps.map((stepData, index) => {
                        const status =
                            step > index
                                ? "complete"
                                : step === index
                                    ? "current"
                                    : "upcoming";

                        return (
                            <StepCard
                                key={stepData.id}
                                stepNumber={index + 1}
                                status={status}
                                title={stepData.name}
                            />
                        );
                    })}
                </div>

                <div className="relative flex w-full rounded-lg bg-white h-full overflow-y-auto col-span-6">
                    <div className="flex absolute p-6 w-full">
                        <Form
                            onSubmit={onSubmit}
                            prev={prevStep}
                            currentStep={step}
                            loading={loading}
                            formData={formData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
