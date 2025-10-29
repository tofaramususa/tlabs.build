"use client";

import React from "react";
// import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

interface NavigationItem {
	label: string;
	href: string;
}

const navigationItems: NavigationItem[] = [
	{ label: "Our Story", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export function NavigationHeader() {
	return (
		<header className="absolute top-0 left-0 right-0 z-50 w-full">
			<nav className="w-full py-4">
				<div className="px-6 flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Logo className="text-foreground" width={100} height={30} />
					</div>
					{/* Navigation Items - Centered */}
					<div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
						{navigationItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-[#1e293b] hover:text-muted-foreground transition-colors duration-200 font-[500]"
							>
								{item.label}
							</a>
						))}
					</div>
					{/* Schedule a Call Button */}
					<div className="flex items-center">
						<Button
							variant="special"
							size="special"
							className="button-special"
							asChild
						>
							<a href="/schedule">
								Schedule a Call
							</a>
						</Button>
						
						{/* Mobile Menu Button */}
						<button className="md:hidden ml-4 text-foreground p-2">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
