import { logOut } from "@/actions/user"
import useAuth from "@/hooks/useAuth"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { DropdownMenuItem } from "../ui/dropdown-menu"

const LogoutBtn = () => {

    const { isAuthenticated } = useAuth()
    const router = useRouter()

    const handleLogout = async () => {
        await logOut()
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

            {
                isAuthenticated ?
                    <DropdownMenuItem asChild>
                        <span onClick={() => handleLogout()} className="w-full justify-between cursor-pointer">
                            Logout <LogOut className="!size-3" />
                        </span>
                    </DropdownMenuItem> :
                    <>
                        <DropdownMenuItem asChild>
                            <Link href={"/auth/login"} className="cursor-pointer">
                                Login
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"/auth/register"} className="cursor-pointer">
                                Register
                            </Link>
                        </DropdownMenuItem>
                    </>
            }

        </>

    )
}

export default LogoutBtn
