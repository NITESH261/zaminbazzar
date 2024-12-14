import SearchFilter from "@/components/molecules/SearchFilter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

const SEARCH_RESULT = 44789

const SearchLayout = async ({ children, params }) => {

    const LocationId = (await params).locationId

    return (
        <div className="flex w-full h-[calc(100vh-64px)] bg-neutral-100">
            <div className="flex w-full h-full relative p-4 flex-1 gap-4 max-w-7xl mx-auto">
                <div className="hidden md:flex md:w-1/3 xl:w-1/4 h-fit md:h-full overflow-y-auto scrollbar-hide bg-white md:rounded-2xl">
                    <div className="hidden md:flex w-full">
                        <SearchFilter />
                    </div>
                </div>
                <div className="flex flex-1 w-full md:w-2/3 gap-4 xl:w-3/4 flex-col">
                    <div className="flex w-full h-fit gap-4 items-center bg-white rounded-md md:rounded-2xl md:p-4">
                        <div className="flex md:hidden w-fit">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="px-3">
                                        <Filter className="!size-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="p-4 space-y-4">
                                    <SheetHeader>
                                        <SheetTitle>
                                            Search filter
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-1 w-full h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide">
                                        <SearchFilter />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="gap-2 text-sm md:text-lg font-semibold w-full">
                            <span className="">{SEARCH_RESULT}</span> Result | <span className="capitalize">{LocationId}</span>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SearchLayout
