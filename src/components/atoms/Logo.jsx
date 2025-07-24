import Image from "next/image"; // ✅ Make sure Image is imported
import { cn } from "@/lib/utils";

const Logo = ({ className }) => {
    return (
        <div className="flex h-16 items-center w-fit relative">
            <Image
                src="/assets/logo/zaminb.png"
                alt="Zamin Bazzar Logo"
                fill
                className={cn("object-contain", className)}
            />
        </div>
    );
};

export default Logo;

