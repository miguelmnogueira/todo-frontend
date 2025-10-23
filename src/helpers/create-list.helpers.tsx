import type { TList } from "@/types/list.types";

export function createList() {
	let id = crypto.randomUUID().toString();
	const newList: TList = {
		id: id,
		name: "New List",
		createdAt: new Date(Date.now()),
		todos: [
			{
				id: id,
				title: "",
				completed: false,
				createdAt: new Date(Date.now()),
				updatedAt: new Date(Date.now()),
				node: {
					position: { x: 0, y: 0 },
					id: id,
					data: { name: "", checked: false },
					type: "todo",
				},
			},
		],
	};
	return newList;
}
