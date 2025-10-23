import {
	ReactFlow,
	Background,
	Controls,
	applyNodeChanges,
	useNodes,
} from "@xyflow/react";
import { useTheme } from "./theme-provider";
import { useCallback, useEffect, useState } from "react";
import TodoNode from "./todo-node";
import { useList } from "@/providers/list-provider";
import type { Node, NodeChange } from "@xyflow/react";

const FlowContainer = () => {
	const { theme } = useTheme();
	const nodes = useNodes();
	const { currentList, setLists } = useList();
	const [arrayNodes, setArrayNodes] = useState<Node[]>([]);

	const nodeTypes = { todo: TodoNode };

	useEffect(() => {
		if (!currentList) return;

		setArrayNodes(currentList.todos.map((t) => t.node));
	}, [currentList]);

	const onNodesChange = useCallback(
		(changes: NodeChange[]) =>
			setArrayNodes((nodesSnapshot) =>
				applyNodeChanges(changes, nodesSnapshot)
			),
		[]
	);

	useEffect(() => {
		if (!currentList) return;

		setLists((prevLists) =>
			prevLists.map((list) =>
				list.id === currentList.id
					? {
							...list,
							todos: list.todos.map((todo) => ({
								...todo,
								node:
									nodes.find((n) => n.id === todo.node.id) ||
									todo.node,
							})),
					  }
					: list
			)
		);
	}, [nodes]);

	return (
		<div className="w-full h-full">
			<ReactFlow
				colorMode={theme}
				proOptions={{ hideAttribution: true }}
				nodes={arrayNodes}
				onNodesChange={onNodesChange}
				nodeTypes={nodeTypes}
				maxZoom={2.5}
				minZoom={1}
				fitView
				fitViewOptions={{ maxZoom: 1.2 }}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default FlowContainer;
