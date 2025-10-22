import {
	ReactFlow,
	Background,
	Controls,
	applyNodeChanges,
} from "@xyflow/react";
import { useTheme } from "./theme-provider";
import { useCallback, useState } from "react";

const FlowContainer = () => {
	const { theme } = useTheme();

	const initialNodes = [
		{
			id: "n1",
			position: { x: 0, y: 0 },
			data: { label: "Node 1" },
			type: "input",
		},
		{
			id: "n2",
			position: { x: 100, y: 100 },
			data: { label: "Node 2" },
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

	return (
		<div className="w-full h-full">
			<ReactFlow
				colorMode={theme}
				proOptions={{ hideAttribution: true }}
				nodes={nodes}
				onNodesChange={onNodesChange}
				fitView
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default FlowContainer;
