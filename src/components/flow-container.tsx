import {
	ReactFlow,
	Background,
	Controls,
	applyNodeChanges,
	ConnectionMode,
} from "@xyflow/react";
import { useTheme } from "./theme-provider";
import { useCallback, useEffect, useState } from "react";
import TodoNode from "./todo-node";
import { useList } from "@/providers/list-provider";
import type { Node, NodeChange } from "@xyflow/react";

const FlowContainer = () => {
	const { theme } = useTheme();
	const { currentList, setLists } = useList();
	const [nodes, setNodes] = useState<Node[]>([]);
	const nodeTypes = { todo: TodoNode };

	// snippet do react flow para funcoes como drag do node
	const onNodesChange = useCallback(
		(changes: NodeChange[]) => {
			setNodes((nds) => {
				const updated = applyNodeChanges(changes, nds);

				// atualiza o node para lists qnd ele muda
				setLists((prevLists) =>
					prevLists.map((list) =>
						list.id === currentList?.id
							? {
									...list,
									todos: list.todos.map((todo) => ({
										...todo,
										node:
											updated.find(
												(n) => n.id === todo.node.id
											) || todo.node,
									})),
							  }
							: list
					)
				);

				return updated;
			});
		},
		[currentList?.id, setLists]
	);
	// atualiza os dados de dentro do to-do (name e checked)
	const onNodeDataChange = useCallback((id: string, newData: any) => {
		setNodes((nds) =>
			nds.map((n) =>
				n.id === id ? { ...n, data: { ...n.data, ...newData } } : n
			)
		);
	}, []);

	// deleta o to-do se o node for deletado
	const onNodeDelete = useCallback(
		(deletedNodes: Node[]) => {
			// previnir deleted nodes de voltarem
			const deletedIds = new Set(deletedNodes.map((n) => n.id));

			setNodes((nds) => nds.filter((n) => !deletedIds.has(n.id)));

			setLists((prevLists) =>
				prevLists.map((list) =>
					list.id === currentList?.id
						? {
								...list,
								todos: list.todos.filter(
									(todo) => !deletedIds.has(todo.node.id)
								),
						  }
						: list
				)
			);
		},
		[currentList?.id]
	);

	// chamada dos nodes de cada to-do da lista atual
	useEffect(() => {
		if (!currentList) return;
		setNodes(
			currentList.todos.map((t) => ({
				...t.node,
				data: { ...t.node.data, onChange: onNodeDataChange },
			}))
		);
	}, [currentList?.todos]);

	// sincronizar mudancas dos nodes para o lists
	useEffect(() => {
		if (!currentList) return;
		setNodes(
			currentList.todos.map((t) => ({
				...t.node,
				data: { ...t.node.data, onChange: onNodeDataChange },
			}))
		);
	}, [currentList?.todos]);

	return (
		<div className="w-full h-full">
			<ReactFlow
				colorMode={theme}
				proOptions={{ hideAttribution: true }}
				nodes={nodes}
				onNodesChange={onNodesChange}
				nodeTypes={nodeTypes}
				maxZoom={2.5}
				minZoom={1}
				fitView
				onDelete={({ nodes }) => onNodeDelete(nodes)}
				fitViewOptions={{ maxZoom: 1.2 }}
				connectionMode={ConnectionMode.Loose}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default FlowContainer;
