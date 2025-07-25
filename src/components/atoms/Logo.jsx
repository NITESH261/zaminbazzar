import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = ({ className }) => {
    return (
        <div className={cn("flex h-16 items-center w-fit relative", className)}>
            <Image
                src="/assets/logo/zaminb.png"
                alt="Zamin Wale Logo"
                fill
                className="object-contain"
            />
        </div>
    );
};

export default Logo;
