"use client";

import { downloadWebsiteEnquiry, getWebsiteEnquiry } from "@/actions/property";
import Loading from "@/components/atoms/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useZaminwaleStore from "@/store";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const [loading, setLoading] = useState(false);
    const [enquires, setEnquires] = useState();
    const user = useZaminwaleStore((store) => store.user);
    const router = useRouter();

    const handleDownloadEnquiry = () => {
        downloadWebsiteEnquiry().then((resp) => {
            const blob = new Blob([resp], { type: "text/csv" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "property-enquiry.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
    };

    useEffect(() => {
        setLoading(true);
        if (user.isAdmin === true) {
            const fetchEnquiry = async () => {
                const { result = [] } = await getWebsiteEnquiry();
                setEnquires(result);
                setLoading(false);
            };
            fetchEnquiry();
        } else router.push("/dashboard");
    }, []);

    return (
        <div className="flex w-full flex-col flex-1 overflow-y-auto scrollbar">
            {loading ? (
                <div className="flex items-center h-fit justify-center w-full">
                    <Loading />
                </div>
            ) : (
                <div className="flex w-full flex-col gap-4">
                    <div className="flex w-full">
                        <Button
                            onClick={handleDownloadEnquiry}
                            className="w-full bg-[#581a95]"
                        >
                            Click to Download all Website Enquiry
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                        {enquires?.length > 0 ? (
                            enquires.map((enquiry, i) => (
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
                                                <span className="text-lg md:text-xl font-semibold">
                                                    {" "}
                                                    {enquiry.name}
                                                </span>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col gap-2 w-full">
                                            <span className="text-sm md:text-base">
                                                <strong>Mobile :</strong>&nbsp;
                                                {enquiry.mobileNo}
                                            </span>
                                            <span className="text-sm md:text-base">
                                                <strong>Email :</strong>&nbsp;
                                                {enquiry.email}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
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
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;
