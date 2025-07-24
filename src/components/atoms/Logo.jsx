import { cn } from "@/lib/utils";

const Logo = ({ className }) => {
    return (
        <div className="flex items-center gap-2">
  <Image
    src="/assets/logo/zaminb.png"
    alt="Zamin Bazzar Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <span className="text-white text-xl md:text-2xl font-bold">zaminbazzar.com</span>
</div>
    );
};

export default Logo;

