import type { Node, NodeProps } from "@xyflow/react";
import Checkbox from "./common/checkbox";

type NumberNode = Node<
	{
		name: string;
		checked: boolean;
		id: string;
		onChange: (id: string, newData: any) => void;
	},
	"todo"
>;

export default function NumberNode({ id, data }: NodeProps<NumberNode>) {
	return (
		<div className="bg-(--xy-node-background-color-default) rounded-sm border py-3 px-2.5 flex gap-5 justify-around items-center">
			<textarea
				className="text-sm outline-0 placeholder-muted-foreground resize-none max-w-[150px] max-h-24"
				spellCheck={false}
				value={data.name}
				placeholder="Untitled Task"
				onChange={(e) => data.onChange(id, { name: e.target.value })}
			></textarea>
			<Checkbox
				checked={data.checked}
				setChecked={() => data.onChange(id, { checked: !data.checked })}
			/>
		</div>
	);
}
