import { logOut } from "@/actions/user"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { DropdownMenuItem } from "../ui/dropdown-menu"

const LogoutBtn = () => {

    const router = useRouter()

    const handleLogout = () => {
        logOut()
            .then(result => {
                toast.success("User Logout successfully")
                router.push("/")
            })
            .catch(err => {
                toast.error("Failed to logout user")
            })
    }

    return (
        <>
            <DropdownMenuItem asChild>
                <span onClick={() => handleLogout()} className="w-full justify-between">
                    Logout <LogOut className="!size-3" />
                </span>
            </DropdownMenuItem>
        </>
    )
}

export default LogoutBtn
