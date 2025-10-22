import type { TTodo } from "./todo.types";

export type TList = {
	id: string;
	name: string;
	todos: TTodo[];
	createdAt: Date;
};
