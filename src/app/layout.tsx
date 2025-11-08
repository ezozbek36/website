import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ezozbek Rasulov - Software Engineer",
	description: "Results-driven Software Engineer specializing in enterprise-grade applications across web, mobile, and desktop platforms.",
	icons: [{ url: "/favicon.svg", rel: "icon", type: "image/svg+xml" }],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="en" className={ibmPlexMono.variable}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
