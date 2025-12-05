import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { baseUrl } from "./sitemap";
import { ppNeueMontreal, instrumentSerif } from "./fonts";
import { LayoutContent } from "@/components/layout-content";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "TLabs",
		template: "%s | TLabs",
	},
	description:
		"",
	openGraph: {
		title: "TLabs",
		description: "",
		url: baseUrl,
		siteName: "TLabs",
		locale: "en_US",
		type: "website",
		images: [],
	},
	twitter: {
		title: "TLabs",
		description:
			"A software consultancy — We build at the edge of tech (AI, modern web, infrastructure), translating emerging tools into real solutions.",
		images: [
			{
				url: "/opengraph-image.jpg",
				width: 800,
				height: 600,
			},
			{
				url: "/opengraph-image.jpg",
				width: 1800,
				height: 1600,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)" },
		{ media: "(prefers-color-scheme: dark)" },
	],
};

export default async function Layout({ children }: { children: ReactElement }) {
	// const themePreferences = await getServerThemePreferences();

	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn("light", ppNeueMontreal.variable, instrumentSerif.variable)}
			// data-theme-preset={themePreferences.preset}
		>
			<body
				className={cn(
					"font-pp-neue",
					"bg-background text-foreground antialiased",
				)}
			>
				<LayoutContent>{children}</LayoutContent>
			</body>
		</html>
	);
}
