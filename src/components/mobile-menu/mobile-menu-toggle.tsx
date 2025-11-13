"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MobileMenuToggleProps {
	isOpen: boolean;
	onClick: () => void;
	className?: string;
}

export const MobileMenuToggle = React.forwardRef<
	HTMLButtonElement,
	MobileMenuToggleProps
>(({ isOpen, onClick, className }, ref) => {
	return (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			aria-label={isOpen ? "Close menu" : "Open menu"}
			aria-expanded={isOpen}
			aria-controls="mobile-menu"
			className={cn(
				"relative w-12 h-12 flex items-center justify-center",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"transition-colors",
				className
			)}
		>
			{/* Menu Text - Visible when closed */}
			<motion.span
				animate={{
					opacity: isOpen ? 0 : 1,
					x: isOpen ? -5 : 0,
					y: isOpen ? -10 : 0,
					rotate: isOpen ? -5 : 0,
				}}
				transition={{
					duration: 0.5,
					delay: isOpen ? 0.25 : 0.5,
					ease: [0.6, 0, 0.4, 1],
				}}
				style={{ transformOrigin: "top left" }}
				className="absolute text-lg font-light text-black"
			>
				Menu
			</motion.span>

			{/* Close Text - Visible when open */}
			<motion.span
				initial={{ opacity: 0, x: -5, y: 10, rotate: 5 }}
				animate={{
					opacity: isOpen ? 1 : 0,
					x: isOpen ? 0 : 5,
					y: isOpen ? 0 : 10,
					rotate: isOpen ? 0 : 5,
				}}
				transition={{
					duration: 0.5,
					delay: isOpen ? 0.5 : 0.25,
					ease: [0.6, 0, 0.4, 1],
				}}
				style={{ transformOrigin: "top left" }}
				className="absolute text-lg font-light text-white z-10"
			>
				Close
			</motion.span>
		</button>
	);
});

MobileMenuToggle.displayName = "MobileMenuToggle";
