import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import SessionProvider from "./providers/session";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SessionProvider>
				<SidebarProvider>{children}</SidebarProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}

export default Providers;
