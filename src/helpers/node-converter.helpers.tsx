import { useList } from "@/providers/list-provider";
import type { TList } from "@/types/list.types";
import type { TTodo } from "@/types/todo.types";

export const saveNodetoList = (nodes: Node[]) => {
	const { setLists, lists, currentList } = useList();

	const targetList: TList | undefined = lists?.find(
		(list) => list.id === currentList?.id
	);

    setLists((prev) => prev.map((p) => p.id === targetList?.id ? {targetList} : p ))
    
};

type TodosAndNote = {
    node: Node;
    todo: 
}