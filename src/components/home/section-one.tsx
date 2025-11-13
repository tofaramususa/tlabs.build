"use client";

import React from "react";
import Image from "next/image";

export function HeroSection() {
	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background py-8 md:py-16">
			{/* Heading - Left aligned on all breakpoints */}
			<div className="mb-8 md:mb-12">
				<h1 className="text-left font-light text-[48px] leading-tight tracking-tight text-foreground sm:text-[38px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
					<span className="block whitespace">We build intelligent digital</span>
					<span className="block whitespace">products that transform</span>
					<span className="block whitespace">companies.</span>
				</h1>
			</div>

			{/* Description - Right aligned on all breakpoints */}
			<div className="mb-8 flex justify-end md:mb-12">
				<p className="w-full max-w-xl md:translate-y-10 text-right font-light leading-relaxed tracking-tighter text-foreground text-base sm:text-lg md:text-xl lg:text-2xl">
					We go beyond building, we transform. From idea to final product, we help companies grow through practical system design and AI-based engineering. We create systems that automate work and unlock insight, turning slow, complex processes into fast, cost-saving solutions.
				</p>
			</div>

			{/* Scroll button - Left aligned on all breakpoints */}
			<div className="flex flex-row gap-2">
				<p className="text-left font-light tracking-tighter text-foreground text-base sm:text-xl lg:text-2xl">
					scroll</p>
				<Image
					src="/icons/arrow-rounded-white.svg"
					alt="Arrow"
					width={30}
					height={30}
					className="rotate-45"
				/>
			</div>
		</section>
	);
}
