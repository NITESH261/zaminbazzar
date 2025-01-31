"use client"

import { getPropertyEnquiry } from "@/actions/property";
import Loading from "@/components/atoms/Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {

    const [loading, setLoading] = useState(false)
    const [enquires, setEnquires] = useState()
    const { enquiryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchEnquiry = async () => {
            const { result = [] } = await getPropertyEnquiry(enquiryId)
            setEnquires(result)
            setLoading(false)
        }
        fetchEnquiry()
    }, [enquiryId])

    return (
        <>
            {
                loading ? (
                    <div className="flex items-center h-fit justify-center w-full">
                        <Loading />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                        {enquires?.length > 0 ?
                            enquires.map((enquiry, i) =>
                                <Card key={i} className="bg-purple-50">
                                    <CardHeader>
                                        <CardTitle className="flex gap-4 items-center">
                                            <span className="relative flex size-10 aspect-square rounded-md">
                                                <Image
                                                    src={`https://api.dicebear.com/9.x/initials/png?seed=${enquiry.name}&backgroundType=gradientLinear`}
                                                    alt={enquiry.name}
                                                    fill
                                                    className="object-contain rounded-md"
                                                />
                                            </span>
                                            <div className="flex flex-col flex-grow">
                                                <span className="text-lg md:text-xl font-semibold"> {enquiry.name}
                                                </span>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col gap-2 w-full">
                                            <span className="text-sm md:text-base">
                                                <strong>Mobile :</strong>&nbsp;{enquiry.mobileNo}
                                            </span>
                                            <span className="text-sm md:text-base">
                                                <strong>Email :</strong>&nbsp;{enquiry.email}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                <div className="flex items-center justify-center w-full col-span-full">
                                    <div className="flex w-full aspect-square max-w-md relative">
                                        <Image
                                            src={"/assets/helper/404.png"}
                                            alt="404"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default page
