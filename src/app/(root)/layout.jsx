import Navbar from "@/components/organism/Navbar"

const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="flex w-full flex-1 flex-col">
                <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default layout
