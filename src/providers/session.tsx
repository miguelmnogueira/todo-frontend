import type { TSession } from "@/types/session.types";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, type ReactNode } from "react";

interface ISessionContextProps {
	session?: string;
	setSession: (session: string) => void;
}

const sessionContext = createContext<ISessionContextProps>(
	{} as ISessionContextProps
);

export default function SessionProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState("");
	const decodedSession = session ? jwtDecode<TSession>(session) : {};
	console.log(decodedSession);

	return (
		<>
			<sessionContext.Provider value={{ session, setSession }}>
				{children}
			</sessionContext.Provider>
		</>
	);
}

export const useSession = () => {
	const context = useContext(sessionContext);
	if (!context)
		throw new Error("useSession must be used within sessionProvider");
	return context;
};
