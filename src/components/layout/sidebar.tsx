import { Plus, Search } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
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
import { useTheme } from "../theme-provider";

export function AppSidebar() {
	const { setTheme, theme } = useTheme();
	const { state } = useSidebar();
	return (
		<Sidebar className="font-sans relative" collapsible="icon">
			<SidebarHeader>
				<SidebarTrigger className="absolute right-[0.6rem] top-1" />

				{state == "collapsed" ? (
					<div className="mt-6"></div>
				) : (
					<h1 className="mt-6 ml-1">To-do App</h1>
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
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							onClick={() => {
								theme == "light"
									? setTheme("dark")
									: setTheme("light");
							}}
						></SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
