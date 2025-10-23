import type { TTodo } from "@/types/todo.types";

export function createTodo(id: string) {
	const newTodo: TTodo = {
		id: id,
		title: "",
		completed: false,
		createdAt: new Date(Date.now()),
		updatedAt: new Date(Date.now()),
		node: {
			position: { x: 0, y: 0 },
			id: id,
			data: {
				name: "",
				checked: false,
				id: id,
				onChange: () => {}, // substituido no flow-container
			},
			type: "todo",
		},
	};
	return newTodo;
}
