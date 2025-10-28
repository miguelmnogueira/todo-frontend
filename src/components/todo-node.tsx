import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import Checkbox from "./common/checkbox";
import { cn } from "@/lib/utils";
import NodeContextMenu from "./layout/node-contextmenu";
import { useRef } from "react";

type NumberNode = Node<{
	name: string;
	checked: boolean;
	id: string;
	onChange: (id: string, newData: any) => void;
	selected: boolean;
}>;

export default function NumberNode({
	id,
	data,
	selected,
}: NodeProps<NumberNode>) {
	const textareaRef = useRef<HTMLTextAreaElement>(null!);

	return (
		<NodeContextMenu textareaRef={textareaRef} id={id} name={data.name}>
			<div
				className={cn(
					"bg-(--xy-node-background-color-default) rounded-sm border py-3 px-2.5 flex gap-5 justify-around items-center",
					selected ? "ring-1 ring-ring" : ""
				)}
				onAuxClick={(e) => {
					if (e.button == 1)
						data.onChange(id, { checked: !data.checked });
				}}
			>
				<textarea
					className={cn(
						"line-through text-sm outline-0 placeholder-muted-foreground resize-none max-w-[150px] max-h-24 transition-all duration-200 decoration-transparent",
						data.checked
							? " decoration-white text-muted-foreground"
							: ""
					)}
					spellCheck={false}
					value={data.name}
					placeholder="Untitled Task"
					onChange={(e) =>
						data.onChange(id, { name: e.target.value })
					}
					ref={textareaRef}
				></textarea>
				<Checkbox
					checked={data.checked}
					setChecked={() =>
						data.onChange(id, { checked: !data.checked })
					}
				/>
				{/* <Handle
					className={selected ? "visible" : "invisible"}
					type="source"
					position={Position.Top}
					id={"t"}
				/>
				<Handle
					className={selected ? "visible" : "invisible"}
					type="target"
					position={Position.Right}
					id={"r"}
				/>
				<Handle
					className={selected ? "visible" : "invisible"}
					type="target"
					position={Position.Bottom}
					id={"b"}
				/>
				<Handle
					className={selected ? "visible" : "invisible"}
					type="target"
					position={Position.Left}
					id={"l"}
				/> */}
			</div>
		</NodeContextMenu>
	);
}
