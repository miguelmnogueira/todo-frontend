import { Plus, Search } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../common/button";

export function AppSidebar() {
    return (
        <Sidebar
            className="font-sans"
            style={{
                "--sidebar-width": "15rem",
            }}
        >
            <SidebarHeader>
                <h1 className="mt-4 ml-1">To-do App</h1>

                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Plus />
                                <span>New List</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Button asChild>
                            <a href="#">
                                <Search />
                                <span>Search</span>
                            </a>
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Lists</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu></SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
