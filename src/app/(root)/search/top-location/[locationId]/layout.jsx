
const SearchLayout = async ({ children }) => {
    return (
        <div className="flex w-full h-[calc(100vh-64px)] bg-neutral-100">
            <div className="flex w-full h-full relative p-4 flex-1 gap-4 lg:gap-8 max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    )
}

export default SearchLayout
