import { CopyPlus, Edit, Trash } from "lucide-react";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "../ui/context-menu";
import { useList } from "@/providers/list-provider";
import { createTodo } from "@/helpers/create-todo.helpers";

type NodeContextMenuProps = {
	children: React.ReactNode;
	textareaRef: React.RefObject<HTMLTextAreaElement>;
	id: string;
	name: string;
};

const NodeContextMenu = ({
	children,
	textareaRef,
	id,
	name,
}: NodeContextMenuProps) => {
	const { currentList, setLists } = useList();

	// has to wait the closing animation
	const handleEdit = () => {
		setTimeout(() => {
			textareaRef.current?.focus();
			textareaRef.current?.select();
		}, 350);
	};

	const handleDelete = () => {};

	const handleDuplicate = () => {
		if (!currentList) return;
		const newTodo = createTodo(name);
        
		setLists((prevLists) =>
			prevLists.map((list) =>
				list.id === currentList.id
					? { ...list, todos: [...list.todos, newTodo] }
					: list
			)
		);
	};
	return (
		<ContextMenu>
			<ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuLabel>To-do</ContextMenuLabel>
				<ContextMenuSeparator />
				<ContextMenuItem onClick={handleEdit}>
					<Edit /> Edit
				</ContextMenuItem>
				<ContextMenuItem onClick={handleDuplicate}>
					<CopyPlus /> Duplicate
				</ContextMenuItem>
				<ContextMenuItem onClick={handleDelete}>
					<Trash /> Delete
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
};

export default NodeContextMenu;
