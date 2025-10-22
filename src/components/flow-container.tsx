import {
	ReactFlow,
	Background,
	Controls,
	applyNodeChanges,
} from "@xyflow/react";
import { useTheme } from "./theme-provider";
import { useCallback, useEffect, useState } from "react";
import TodoNode from "./todo-node";
import { useList } from "@/providers/list-provider";
import type { Node } from "@xyflow/react";
import type { TList } from "@/types/list.types";

const FlowContainer = () => {
	const { theme } = useTheme();

	const { currentList, setLists, lists } = useList();
	const [listNodes, setListNodes] = useState<Node[]>([]);

	const nodeTypes = { todo: TodoNode };

	useEffect(() => {
		if (!currentList) return;

		const nodes: Node[] = currentList.todos.map((todo) => ({
			id: todo.id,
			position: todo.position,
			data: { name: todo.title },
			type: "todo",
		}));

		setListNodes(nodes);
	}, [currentList]);

	const onNodesChange = useCallback(
		(changes: any) =>
			setListNodes((nodesSnapshot) =>
				applyNodeChanges(changes, nodesSnapshot || [])
			),
		[]
	);

	const nodeDragHandler = (draggedNode: Node) => {
		if (!currentList) return;

		const updatedTodos = currentList.todos.map((todo) =>
			todo.id === draggedNode.id
				? { ...todo, position: draggedNode.position }
				: todo
		);

		const updatedList: TList = { ...currentList, todos: updatedTodos };

		setLists((prevLists) =>
			prevLists.map((list) =>
				list.id === updatedList.id ? updatedList : list
			)
		);
	};

	return (
		<div className="w-full h-full">
			<ReactFlow
				colorMode={theme}
				proOptions={{ hideAttribution: true }}
				nodes={listNodes}
				onNodesChange={onNodesChange}
				nodeTypes={nodeTypes}
				maxZoom={2.5}
				minZoom={1}
				onNodeDrag={(
					_event: React.MouseEvent<Element, MouseEvent>,
					node: Node
				) => {
					nodeDragHandler(node);
				}}
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
