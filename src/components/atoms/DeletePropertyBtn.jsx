import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog";
import { deleteProperty } from "@/actions/property";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeletePropertyBtn = ({ propertyId }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const resp = await deleteProperty(propertyId);
            toast.success(resp.message);
            router.push("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="rounded-full h-[unset] w-full md:w-fit text-xs border-[#0000ff] text-[#0000ff]"
                    >
                        <Trash2 /> Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your uploaded property.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-full">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            className="rounded-full h-[unset] bg-[#0000ff] w-full md:w-fit text-xs text-white"
                        >
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default DeletePropertyBtn;
