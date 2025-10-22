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
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
	const { state } = useSidebar();
	return (
		<Sidebar className="font-sans relative" collapsible="icon">
			<SidebarHeader>
				<SidebarTrigger className="absolute right-1 top-1" />

				{state == "collapsed" ? (
					<div className="mt-4"></div>
				) : (
					<h1 className="mt-4 ml-1">To-do App</h1>
				)}

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
						<SidebarMenuButton asChild>
							<a href="#">
								<Search />
								<span>Search</span>
							</a>
						</SidebarMenuButton>
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
