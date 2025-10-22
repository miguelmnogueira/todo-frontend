import {
	ReactFlow,
	Background,
	Controls,
	applyNodeChanges,
} from "@xyflow/react";
import { useTheme } from "./theme-provider";
import { useCallback, useState } from "react";
import TodoNode from "./todo-node";

const FlowContainer = () => {
	const { theme } = useTheme();

	const initialNodes = [
		{
			id: "n1",
			position: { x: 0, y: 0 },
			data: { name: "teste" },
			type: "todo",
		},
		{
			id: "n2",
			position: { x: 0, y: 60 },
			data: { name: "teste" },
			type: "todo",
		},
		{
			id: "n3",
			position: { x: 0, y: 120 },
			data: { name: "teste" },
			type: "todo",
		},
		{
			id: "n4",
			position: { x: 0, y: 180 },
			data: { name: "teste" },
			type: "todo",
		},
	];

	const [nodes, setNodes] = useState(initialNodes);

	const onNodesChange = useCallback(
		(changes: any) =>
			setNodes((nodesSnapshot) =>
				applyNodeChanges(changes, nodesSnapshot)
			),
		[]
	);

	const nodeTypes = { todo: TodoNode };

	return (
		<div className="w-full h-full">
			<ReactFlow
				colorMode={theme}
				proOptions={{ hideAttribution: true }}
				nodes={nodes}
				onNodesChange={onNodesChange}
				fitView
				nodeTypes={nodeTypes}
				maxZoom={2.5}
				minZoom={1}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default FlowContainer;
