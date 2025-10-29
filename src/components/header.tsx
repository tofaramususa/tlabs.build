"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
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
		<header className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
			<nav className="w-full">
				<div className="container mx-auto py-6 md:py-8 flex items-center justify-between">
					{/* Logo - Top Left */}
					<div className="flex-shrink-0">
						<Logo className="text-foreground" width={172} height={67} />
					</div>
					{/* Navigation Items - Right Side */}
					<div className="hidden md:flex items-center gap-5 lg:gap-5">
						{navigationItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className={cn(
									"text-foreground hover:text-foreground transition-colors duration-200 text-[18px] font-[200] flex items-center gap-2",
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
				</div>
			</nav>
		</header>
	);
}

