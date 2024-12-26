import Navbar from "@/components/organism/Navbar"

const UserLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="flex w-screen h-screen relative">
                {children}
            </div>
        </>
    )
}

export default UserLayout
