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
import type { TList } from "@/types/list.types";

export function AppSidebar() {
    const { setTheme, theme } = useTheme();
    const { state } = useSidebar();
    const { lists, setLists, currentList, setCurrentList } = useList();

    const createList = () => {
        let id = crypto.randomUUID().toString();
        const newList: TList = {
            id: id,
            name: "New List",
            createdAt: new Date(Date.now()),
            todos: [
                {
                    id: id,
                    title: "",
                    completed: false,
                    createdAt: new Date(Date.now()),
                    updatedAt: new Date(Date.now()),
                    node: {
                        position: { x: 0, y: 0 },
                        id: id,
                        data: { name: "", checked: false },
                        type: "todo",
                    },
                },
            ],
        };
        setLists([...(lists || []), newList]);
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
                            onClick={() => createList()}
                            className="cursor-pointer"
                        >
                            <Plus />
                            <span>New List</span>
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
