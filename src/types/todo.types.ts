import type { Node } from "@xyflow/react";

export type TTodo = {
	id: string;
	title: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
	node: Node;
};
