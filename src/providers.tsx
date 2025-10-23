import { ReactFlowProvider } from "@xyflow/react";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import ListProvider from "./providers/list-provider";
import SessionProvider from "./providers/session";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ReactFlowProvider>
				<ListProvider>
					<SessionProvider>
						<SidebarProvider>{children}</SidebarProvider>
					</SessionProvider>
				</ListProvider>
			</ReactFlowProvider>
		</ThemeProvider>
	);
}

export default Providers;
