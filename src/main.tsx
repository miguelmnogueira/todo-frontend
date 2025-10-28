import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./pages/App";
import { AppSidebar } from "./components/layout/sidebar";
import Providers from "./providers";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<AppSidebar />
			<App />
		</Providers>
	</StrictMode>
);
