import { createContext, useContext, useState, type ReactNode } from "react";
import type { TList } from "@/types/list.types";
interface IListContextProps {
	lists?: TList[];
	setLists: React.Dispatch<React.SetStateAction<TList[]>>;
	currentList: TList | undefined;
	setCurrentList: (list: TList | undefined) => void;
}

const listContext = createContext<IListContextProps>({} as IListContextProps);

export default function ListProvider({ children }: { children: ReactNode }) {
	const [currentList, setCurrentList] = useState<TList>();
	const [lists, setLists] = useState<TList[]>([]);

	return (
		<>
			<listContext.Provider
				value={{ lists, setLists, currentList, setCurrentList }}
			>
				{children}
			</listContext.Provider>
		</>
	);
}

export const useList = () => {
	const context = useContext(listContext);
	if (!context) throw new Error("useList must be used within ListProvider");
	return context;
};
