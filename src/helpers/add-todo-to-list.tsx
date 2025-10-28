import { useList } from "@/providers/list-provider";
import type { TTodo } from "@/types/todo.types";

export function UseAddTodoToList() {
	const { currentList, setCurrentList, setLists } = useList();
	function addTodoToList(newTodo: TTodo) {
		if (!currentList) return;

		setLists((prevLists) => {
			const updatedLists = prevLists.map((list) =>
				list.id === currentList.id
					? { ...list, todos: [...list.todos, newTodo] }
					: list
			);

			const updatedList = updatedLists.find(
				(list) => list.id === currentList.id
			);
			if (updatedList) setCurrentList(updatedList);

			return updatedLists;
		});
	}
	return { addTodoToList };
}
