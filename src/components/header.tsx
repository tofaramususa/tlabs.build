"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import Image from "next/image";

interface NavigationItem {
	label: string;
	href: string;
}

const navigationItems: NavigationItem[] = [
	{ label: "home", href: "/" },
	{ label: "about", href: "/about" },
	{ label: "contact", href: "/contact" },
	{ label: "get in touch", href: "/contact" },
];

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
			<nav className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20" aria-label="Main navigation">
				<div className="py-3 sm:py-4 md:py-6 lg:py-8 flex items-center justify-between transition-all duration-300">
					{/* Logo - Top Left */}
					<Link href="/" className="flex-shrink-0">
						<Logo className="text-foreground" />
					</Link>

					{/* Desktop Navigation - Hidden on Mobile */}
					<div className="hidden md:flex items-center gap-5 lg:gap-5">
						{navigationItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className={cn(
									"text-foreground hover:text-foreground transition-colors duration-200 text-[22px] font-[200] flex items-center gap-2",
									item.label === "get in touch" && "ml-20"
								)}
							>
								{item.label}
								{item.label === "get in touch" && (
									<Image
										src="/icons/arrow-rounded-white.svg"
										alt="Arrow"
										width={32}
										height={32}
										className="inline-block"
									/>
								)}
							</a>
						))}
					</div>

					{/* Mobile Menu - Visible on Mobile Only */}
					<div className="md:hidden">
						{/* TODO: Add custom hamburger menu trigger here */}
						{/* This button will open your custom mobile menu */}
						{/* Example structure:
						<button
							type="button"
							aria-label="Open menu"
							aria-expanded="false"
							aria-controls="mobile-menu"
							className="..."
						>
							Custom Hamburger Icon
						</button>
						*/}
					</div>
				</div>
			</nav>

			{/* Mobile Menu Panel - Hidden by default */}
			{/* TODO: Add custom mobile menu panel here */}
			{/* This will be your custom menu implementation with navigationItems */}
			{/* Export navigationItems if needed: */}
		</header>
	);
}

// Export navigationItems for use in mobile menu component
export { navigationItems };
export type { NavigationItem };

