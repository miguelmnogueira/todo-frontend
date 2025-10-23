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
import type { Node, NodeChange } from "@xyflow/react";

const FlowContainer = () => {
	const { theme } = useTheme();
	const { currentList, setLists } = useList();
	const [nodes, setNodes] = useState<Node[]>([]);
	const nodeTypes = { todo: TodoNode };

	// snippet do react flow para funcoes como drag do node
	const onNodesChange = useCallback(
		(changes: NodeChange[]) =>
			setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);

	// atualiza os dados de dentro do todo (name e checked)
	const onNodeDataChange = useCallback((id: string, newData: any) => {
		setNodes((nds) =>
			nds.map((n) =>
				n.id === id ? { ...n, data: { ...n.data, ...newData } } : n
			)
		);
	}, []);

	// deleta o todo se o node for deletado
	const onNodeDelete = useCallback(
		(nodes: Node[]) => {
			setLists((prevLists) =>
				prevLists.map((list) =>
					list.id === currentList?.id
						? {
								...list,
								todos: list.todos.filter(
									(todo) =>
										!nodes.some((n) => n.id === todo.id)
								),
						  }
						: list
				)
			);
			console.log(nodes);
		},
		[currentList]
	);

	//TODO automaticamente instanciar novo todo (recarregar esse useeffect)
	// chamada dos nodes de cada to-do da lista atual
	useEffect(() => {
		if (!currentList) return;
		setNodes(
			currentList.todos.map((t) => ({
				...t.node,
				data: { ...t.node.data, onChange: onNodeDataChange },
			}))
		);
	}, [currentList]);

	// sincronizar mudancas dos nodes para o lists
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
	}, [nodes, currentList, setLists]);

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
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default FlowContainer;
