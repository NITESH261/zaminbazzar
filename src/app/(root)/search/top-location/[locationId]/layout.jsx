
const SEARCH_RESULT = 44789

const SearchLayout = async ({ children, params }) => {

    const LocationId = (await params).locationId

    return (
        <div className="flex w-full h-[calc(100vh-64px)] bg-neutral-100">
            <div className="flex w-full h-full relative p-4 flex-1 gap-4 max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    )
}

export default SearchLayout
