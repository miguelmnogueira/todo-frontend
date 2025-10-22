import type { XYPosition } from "@xyflow/react";

export type TTodo = {
	id: string;
	title: string;
    position: XYPosition;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
};
