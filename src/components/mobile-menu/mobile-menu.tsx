"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/components/header";

export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	navigationItems: NavigationItem[];
	className?: string;
}

// Footer contact information
const CONTACT_EMAIL = "tofara@tlabs.build";
const CONTACT_PHONE = "+971 55 388 0531";
const CONTACT_LOCATION = "Dubai, UAE";
const CALENDLY_URL = "https://calendly.com/tofara-tlabs/30min-with-tofara";

export const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(
	({ isOpen, onClose, navigationItems, className }, ref) => {
		// Reset links to hidden state after menu closes (matches original gsap.set behavior)
		React.useEffect(() => {
			if (!isOpen) {
				// After exit animation completes, reset links instantly
				const timer = setTimeout(() => {
					// This ensures links snap back to initial position after close
				}, 1250); // Match overlay exit duration
				return () => clearTimeout(timer);
			}
		}, [isOpen]);

		return (
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						ref={ref}
						id="mobile-menu"
						initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
						animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)" }}
						exit={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
						transition={{
							duration: 1.25,
							ease: [0.76, 0, 0.24, 1], // power4.inOut
						}}
						className={cn(
							"fixed inset-0 z-40 bg-[#0f0f0f] dark:bg-[#0f0f0f]",
							"flex items-center justify-center",
							"overflow-hidden",
							className
						)}
					>
						<motion.div
							initial={{
								rotate: -15,
								x: -100,
								y: -100,
								scale: 1.5,
								opacity: 0.25,
							}}
							animate={{
								rotate: 0,
								x: 0,
								y: 0,
								scale: 1,
								opacity: 1,
							}}
							exit={{
								rotate: -15,
								x: -100,
								y: -100,
								scale: 1.5,
								opacity: 0.25,
							}}
							transition={{
								duration: 1.25,
								ease: [0.76, 0, 0.24, 1],
							}}
							className="relative w-full h-full flex flex-col justify-between p-10"
							style={{ transformOrigin: "left bottom" }}
						>
							{/* Main Menu Links */}
							<div className="flex-1 flex flex-col justify-center gap-1">
								{navigationItems.map((item, index) => (
									<motion.div
										key={item.label}
										initial={{ y: "120%", opacity: 0.25 }}
										animate={{ y: "0%", opacity: 1 }}
										transition={{
											duration: 1,
											delay: 0.75 + index * 0.1,
											ease: [0.33, 1, 0.68, 1], // power3.out
										}}
										className="overflow-hidden pb-1.5"
									>
										<Link
											href={item.href}
											onClick={onClose}
											className={cn(
												"block text-white font-light",
												"transition-colors duration-500",
												"hover:text-white/80",
												"relative group"
											)}
											style={{ fontSize: "3.5rem", letterSpacing: "-0.02rem" }}
										>
											{item.label}
											<span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 max-[900px]:hidden" />
										</Link>
									</motion.div>
								))}
							</div>

							{/* Footer Contact Section */}
							<div className="flex flex-col gap-6 pb-4">
								{/* Email - Large and Underlined */}
								<motion.div
									initial={{ y: "120%", opacity: 0.25 }}
									animate={{ y: "0%", opacity: 1 }}
									transition={{
										duration: 1,
										delay: 0.75 + navigationItems.length * 0.1,
										ease: [0.33, 1, 0.68, 1],
									}}
									className="overflow-hidden pb-1.5"
								>
									<a
										href={`mailto:${CONTACT_EMAIL}`}
										className={cn(
											"block text-white font-light text-2xl sm:text-3xl md:text-4xl",
											"underline hover:opacity-80 transition-opacity"
										)}
									>
										{CONTACT_EMAIL}
									</a>
								</motion.div>

								{/* Location and Phone - Same Line */}
								<motion.div
									initial={{ y: "120%", opacity: 0.25 }}
									animate={{ y: "0%", opacity: 1 }}
									transition={{
										duration: 1,
										delay: 0.75 + (navigationItems.length + 1) * 0.1,
										ease: [0.33, 1, 0.68, 1],
									}}
									className="overflow-hidden pb-1.5"
								>
									<div className="flex flex-row items-center gap-6 text-white font-light text-sm sm:text-base">
										<span>{CONTACT_LOCATION}</span>
										<a
											href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
											className="hover:opacity-80 transition-opacity"
										>
											{CONTACT_PHONE}
										</a>
									</div>
								</motion.div>

								{/* CTA Button */}
								<motion.div
									initial={{ y: "120%", opacity: 0.25 }}
									animate={{ y: "0%", opacity: 1 }}
									transition={{
										duration: 1,
										delay: 0.75 + (navigationItems.length + 2) * 0.1,
										ease: [0.33, 1, 0.68, 1],
									}}
									className="overflow-hidden pb-1.5"
								>
									<a
										href={CALENDLY_URL}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											"inline-block w-fit border border-white bg-transparent text-white",
											"hover:bg-white hover:text-black transition-colors",
											"font-light text-base sm:text-lg px-8 py-3 sm:px-12 sm:py-4"
										)}
									>
										Book a meeting
									</a>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		);
	}
);

MobileMenu.displayName = "MobileMenu";
