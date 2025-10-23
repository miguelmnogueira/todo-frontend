import type { TTodo } from "@/types/todo.types";

export function createTodo(id: string) {
	const todoId = crypto.randomUUID();
	const newTodo: TTodo = {
		id: id,
		title: "",
		completed: false,
		createdAt: new Date(Date.now()),
		updatedAt: new Date(Date.now()),
		node: {
			position: { x: 0, y: 0 },
			id: todoId,
			data: {
				name: "",
				checked: false,
				id: todoId,
				onChange: () => {}, // substituido no flow-container
			},
			type: "todo",
		},
	};
	return newTodo;
}
