import type { Node, NodeProps } from "@xyflow/react";
import Checkbox from "./common/checkbox";
import { cn } from "@/lib/utils";
import NodeContextMenu from "./layout/node-contextmenu";
import { useRef } from "react";

type NumberNode = Node<{
	name: string;
	checked: boolean;
	id: string;
	onChange: (id: string, newData: any) => void;
}>;

export default function NumberNode({ id, data }: NodeProps<NumberNode>) {
	const textareaRef = useRef<HTMLTextAreaElement>(null!);

	return (
		<NodeContextMenu textareaRef={textareaRef} id={id}>
			<div
				className="bg-(--xy-node-background-color-default) rounded-sm border py-3 px-2.5 flex gap-5 justify-around items-center"
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
			</div>
		</NodeContextMenu>
	);
}
