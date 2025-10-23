import { CopyPlus, Edit, Trash } from "lucide-react";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "../ui/context-menu";

type NodeContextMenuProps = {
	children: React.ReactNode;
	textareaRef: React.RefObject<HTMLTextAreaElement>;
	id: string;
};

const NodeContextMenu = ({
	children,
	textareaRef,
	id,
}: NodeContextMenuProps) => {
	// has to wait the closing animation
	const handleEdit = () => {
		setTimeout(() => {
			textareaRef.current?.focus();
			textareaRef.current?.select();
		}, 350);
	};

	const handleDelete = () => {};

	const handleDuplicate = () => {};
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
