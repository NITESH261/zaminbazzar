import { Circle, CircleCheck, CircleDot } from "lucide-react";

const StepCard = ({ stepNumber, status, title }) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center justify-center w-fit md:w-full border rounded-lg gap-2 p-2 md:p-4 ${status === "complete"
                ? "border-blue-500 bg-blue-500 text-white"
                : status === "current"
                    ? "border-blue-400 bg-blue-50 text-black"
                    : "border-neutral-200"
                }`}
        >
            {status === "complete" ? (
                <CircleCheck className="text-white" />
            ) : status === "current" ? (
                <CircleDot className="text-black" />
            ) : (
                <Circle className="text-neutral-400" />
            )}
            {/* <span className="flex md:hidden text-sm">{stepNumber}</span> */}
            <div className="hidden md:flex w-full flex-col">
                <span className="text-sm">Step {stepNumber}</span>
                <span className="text-base font-bold">{title}</span>
            </div>
        </div>
    );
};

export default StepCard;
