"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { CheckIcon, PlusIcon, X } from "lucide-react"
import { useParams } from "next/navigation"

const SearchLayout = ({ children }) => {

    const params = useParams()

    return (
        <div className="flex w-full h-[calc(100vh-64px)] bg-neutral-100">
            <div className="flex w-full h-full p-4 flex-1 gap-4 max-w-7xl mx-auto">
                <div className="hidden md:flex md:w-1/3 xl:w-1/4 h-full overflow-y-auto scrollbar-hide bg-white rounded-2xl">
                    <div className="flex flex-col h-fit space-y-4 divide-y w-full p-4">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Applied Filters</span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear All
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-wrap">
                                <li className="w-fit flex">
                                    <Badge variant={"outline"} className="gap-1 text-sm border-[#0078db] bg-blue-100 font-medium">
                                        {params.locationId}
                                        <Button variant="ghost" className="h-[unset] px-1 py-1">
                                            <X className="!size-4" />
                                        </Button>
                                    </Badge>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Budget</span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <div className="flex w-full">
                                <Input type="range" min="0" max="10000000" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Type of property</span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-col">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        Residential Apartment
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full border-blue-200 bg-blue-50">
                                        <CheckIcon className="!size-4" />
                                        Residential Land
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        1 RK/ Studio Apartment
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        Independent House/Villa
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        Independent/Builder Floor
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        Farm House
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Area
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <div className="flex w-full">
                                <Input type="range" min="0" max="10000000" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Preferred Plot / Land type
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-col">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full border-blue-200 bg-blue-50">
                                        <CheckIcon className="!size-4" />
                                        Corner Property
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        In Gated Society
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Localities
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-col">
                                <li className="w-fit gap-2 flex items-center">
                                    <Checkbox />
                                    <span>Navi Mumbai</span>
                                </li>
                                <li className="w-fit gap-2 flex items-center">
                                    <Checkbox />
                                    <span>Thane</span>
                                </li>
                                <li className="w-fit gap-2 flex items-center">
                                    <Checkbox />
                                    <span>Panvel</span>
                                </li>
                                <li className="w-fit gap-2 flex items-center">
                                    <Checkbox />
                                    <span>Khalapur</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Approved by Authority
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-wrap">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full border-blue-200 bg-blue-50">
                                        <CheckIcon className="!size-4" />
                                        CIDC
                                    </Button>
                                </li>
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        NMMC
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Ownership Type
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-wrap">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full border-blue-200 bg-blue-50">
                                        <CheckIcon className="!size-4" />
                                        CIDC
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Facing Direction
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-wrap">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        East
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 w-full pt-4">
                            <div className="flex w-full items-center justify-between">
                                <span className="text-sm lg:text-base font-medium">Width of Facing Road
                                </span>
                                <Button variant="ghost" className="h-[unset] text-sm rounded-full px-2.5 py-1.5 text-[#0078db]">
                                    Clear
                                </Button>
                            </div>
                            <ul className="flex w-full gap-2 flex-wrap">
                                <li className="w-fit flex">
                                    <Button variant="outline" className="h-[unset] text-sm px-2.5 py-1.5 rounded-full">
                                        <PlusIcon className="!size-4" />
                                        50+ ft
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 md:2/3 gap-4 xl:w-3/4 flex-col">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SearchLayout
