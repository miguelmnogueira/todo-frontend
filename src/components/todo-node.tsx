// import { useCallback, useState } from "react";
// import Checkbox from "./common/checkbox";

// function TodoNode(props: any) {

// 	return (
// 		<div className="bg-(--xy-node-background-color-default) rounded-sm border py-3 px-2.5 flex gap-5 justify-around items-center ">
// 			<input
// 				type="text"
// 				className="text-sm outline-0 wrap-break-word text-wrap max-w-[150px] placeholder-muted-foreground"
// 				contentEditable
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}
// 				placeholder="Untitled Task"
// 			></input>
// 			<Checkbox />
// 		</div>
// 	);
// }

// export default TodoNode;

import type { Node, NodeProps } from "@xyflow/react";
import Checkbox from "./common/checkbox";
import { useState } from "react";

type NumberNode = Node<{ name: string }, "name">;

export default function NumberNode({ data }: NodeProps<NumberNode>) {
	const [name, setName] = useState(data.name);

	return (
		<div className="bg-(--xy-node-background-color-default) rounded-sm border py-3 px-2.5 flex gap-5 justify-around items-center ">
			<input
				type="text"
				className="text-sm outline-0 wrap-break-word text-wrap max-w-[150px] placeholder-muted-foreground"
				spellCheck={false}
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Untitled Task"
			></input>
			<Checkbox />
		</div>
	);
}
