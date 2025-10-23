import { List, Plus, Search } from "lucide-react";

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
import { useList } from "@/providers/list-provider";
import { createList } from "@/helpers/create-list.helpers";
import { createTodo } from "@/helpers/create-todo.helpers";

export function AppSidebar() {
	const { setTheme, theme } = useTheme();
	const { state } = useSidebar();
	const { lists, setLists, currentList, setCurrentList } = useList();

	const addTodo = () => {
		if (!currentList) return;

		const newTodo = createTodo();
		setLists((prevLists) =>
			prevLists.map((list) =>
				list.id === currentList.id
					? { ...list, todos: [...list.todos, newTodo] }
					: list
			)
		);
	};

	return (
		<Sidebar className="font-sans relative" collapsible="icon">
			<SidebarHeader>
				<SidebarTrigger className="absolute right-[0.6rem] top-1 cursor-pointer" />

				{state == "collapsed" ? (
					<div className="mt-6"></div>
				) : (
					<h1 className="mt-6 ml-1">To-do App</h1>
				)}

				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							onClick={() => {
								setLists([...(lists || []), createList()]);
							}}
							className="cursor-pointer"
						>
							<Plus />
							<span>New List</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton onClick={() => addTodo()}>
							<Search />
							<span>Search</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Lists</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{lists?.map((list) => (
								<SidebarMenuItem key={list.id}>
									<SidebarMenuButton
										className={
											currentList?.id == list.id
												? "bg-muted"
												: "" +
												  "flex-nowrap text-nowrap whitespace-nowrap!"
										}
										onClick={() => {
											setCurrentList(list);
											console.log(currentList);
										}}
									>
										<List />
										{list.name}
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
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
						>
							Theming Switch
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
