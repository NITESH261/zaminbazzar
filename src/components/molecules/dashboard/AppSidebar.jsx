import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

const AppSidebar = () => {
    return (
        <Sidebar className="space-y-6 px-4">
            <SidebarHeader className="mt-16 px-4"></SidebarHeader>
            <SidebarContent className="pt-6 px-4 border border-neutral-200 rounded-md">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {SidebarList.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="py-5 px-4"
                                        >
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
};

export default AppSidebar;

const SidebarList = [
    {
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        title: "PropertIes",
        url: "/dashboard/properties",
    },
];
