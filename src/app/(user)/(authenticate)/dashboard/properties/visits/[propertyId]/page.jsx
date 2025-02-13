"use client";

import { downloadPropertyVisit, getPropertyVisits } from "@/actions/property";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const [enquires, setEnquires] = useState([]);
    const { propertyId } = useParams();
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    const handleDownloadEnquiry = () => {
        downloadPropertyVisit(propertyId).then((resp) => {
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

    const loadMore = () => {
        setPage(page + 1);
    };

    const fetchEnquiry = async () => {
        const { result = [], pagination = [] } = await getPropertyVisits({
            propertyId,
            page,
            limit: 20,
        });
        setPagination(pagination);
        setEnquires((prev) => {
            const newItems = result.filter(
                (item) => !prev.some((prevItem) => prevItem._id === item._id)
            );
            return [...prev, ...newItems];
        });
    };

    useEffect(() => {
        fetchEnquiry();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [propertyId, page]);

    return (
        <div className="flex w-full flex-col flex-1 overflow-y-auto scrollbar">
            <div className="flex w-full flex-col gap-4">
                <div className="flex w-full">
                    <Button
                        onClick={handleDownloadEnquiry}
                        className="w-full bg-[#6f272b]"
                    >
                        Click to Download all Property Visits
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
                                            <span className="text-xs font-normal">
                                                {format(enquiry.visitAt, "P")}
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
                {pagination.next ? (
                    <div className="flex w-full mt-6 items-center justify-center">
                        <Button
                            onClick={loadMore}
                            disabled={!enquires}
                            className="rounded-full bg-[#6f272b]"
                        >
                            Load More
                        </Button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default page;
