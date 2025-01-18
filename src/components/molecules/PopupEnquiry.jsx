"use client"

import useZaminwaleStore from "@/store"
import { zodResolver } from "@hookform/resolvers/zod"
import Cookies from "js-cookie"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const EnquireFormSchema = z.object({
    fullname: z.string().min(2, {
        message: "Fullname must be at least 2 characters.",
    }),
    mobile: z.string().min(2, {
        message: "Fullname must be at least 2 characters.",
    }),
    email: z.string().email(),
    message: z.string().optional()
})

const PopupEnquiry = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const dispatch = useZaminwaleStore(store => store.dispatch)
    const popupEnquiry = useZaminwaleStore(store => store.popupEnquiry)

    const form = useForm({
        resolver: zodResolver(EnquireFormSchema),
        defaultValues: {} || ""
    })

    const onSubmit = async (values) => {
        console.log(values);
        dispatch({
            type: "SET_STATE",
            payload: { popupEnquiry: false },
        });
        setOpen(false)
        Cookies.set('popup_closed', 'true', { expires: 1 })
    }

    useEffect(() => {
        let onloadTimer
        const isPopupClosed = Cookies.get('popup_closed') === 'true';

        if (!isPopupClosed) {
            dispatch({
                type: "SET_STATE",
                payload: { popupEnquiry: true },
            });
        }

        if (pathname === "/" && !isPopupClosed) {
            if (popupEnquiry) {
                onloadTimer = setTimeout(() => {
                    setOpen(true);
                }, 1000 * 15);
            }
        }
        return () => clearTimeout(onloadTimer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, popupEnquiry, dispatch])

    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Connect with Us for Enquiry</DialogTitle>
                    </DialogHeader>
                    <div className="w-full p">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="w-full space-y-2 py-2">
                                    <FormField
                                        control={form.control}
                                        name="fullname"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Fullname</FormLabel>
                                                <FormControl className="w-full">
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
                                        name="mobile"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Mobile No.</FormLabel>
                                                <FormControl className="w-full">
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter your Mobile no"
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
                                            <FormItem className="w-full">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl className="w-full">
                                                    <Input
                                                        type="email"
                                                        placeholder="Enter your email id"
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
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Email</FormLabel>
                                                <FormControl className="w-full">
                                                    <Textarea
                                                        placeholder="Enter your Message"
                                                        {...field}
                                                        value={field.value || ""}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button className="rounded-3xl w-full bg-[#0000FF]">
                                    Book Enquiry
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PopupEnquiry
