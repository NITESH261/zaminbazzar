"use client";

import { createPropertyEnquiry } from "@/actions/property";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Loading from "../atoms/Loading";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    mobileNo: z.string().min(10, {
        message: "Mobile No must be at least 10 Digit.",
    }),
    email: z.string().email(),
});

const EnquireForm = ({ propertyId, uid }) => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            let body = { ...values, uid };
            const resp = await createPropertyEnquiry({ body, propertyId });
            setLoading(false);
            form.reset();
            toast.success(resp.message);
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    };

    return (
        <div className="w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fullname</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your fullname"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your Email"
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobileNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your mobile no."
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="rounded-3xl w-full bg-[#581a95]">
                        {loading ? <Loading /> : "Submit"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default EnquireForm;
