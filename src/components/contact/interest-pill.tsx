"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InterestPillProps {
	label: string;
	selected: boolean;
	onClick: () => void;
}

export function InterestPill({ label, selected, onClick }: InterestPillProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-light tracking-tight transition-all",
				"border border-foreground/30",
				"hover:border-foreground/60",
				selected
					? "bg-foreground text-background border-foreground"
					: "bg-transparent text-foreground"
			)}
		>
			{label}
		</button>
	);
}
