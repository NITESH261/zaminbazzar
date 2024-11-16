import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex size-16 aspect-square w-fit relative">
            <Image
                src={"/assets/logo/zamin-logo.gif"}
                alt="Zamin Wale Logo"
                fill
                className="object-contain"
            />
        </div>
    );
};

export default Logo;
