import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command";
import { Skeleton } from "../ui/skeleton";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

const SearchBar = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="gap-2 w-full justify-start outline-none border-none"
                    >
                        <SearchIcon className="size-5 text-gray-500" />
                        <span className="text-gray-500">Search</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-2 top-[20%] max-w-xl">
                    <DialogHeader className={"sr-only"}>
                        <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <Command>
                        <CommandInput placeholder="Type to search..." />
                        <CommandList>
                            <CommandEmpty>Search your plpt</CommandEmpty>
                            <CommandGroup heading="Result">
                                <CommandItem>
                                    <Skeleton className="w-full" />
                                </CommandItem>
                                <CommandItem className="gap-5 rounded-md text-balance justify-between">
                                    <span>plots</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default SearchBar;
