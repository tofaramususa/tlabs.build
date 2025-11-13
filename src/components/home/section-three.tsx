"use client";

import React from "react";

export function SectionThree() {
	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background pt-8 md:py-16">
			{/* Solutions heading with border */}
			<div className="mb-2 md:mb-16">
				<h2 className="text-left font-light text-[36px] md:text-[40px] lg:text-[48px] text-foreground  border-b border-foreground">
					Solutions
				</h2>
				<div className="text-right font-light text-[48px] md:text-[72px] lg:text-[96px] text-foreground leading-none">
					01
				</div>
			</div>
			{/* Product Engineering header with number */}
			<div className="flex justify-between items-start mb-2 md:mb-8">
				<h3 className="text-left text-[24px] md:text-[36px] lg:text-[44px] text-foreground">
					Product Engineering
				</h3>
			</div>

			{/* Subtitle */}
			<div className="mb-2 md:mb-16">
				<p className="text-left font-light tracking-tight text-lg md:text-xl lg:text-2xl text-foreground">
					Software products, built end to end
				</p>
			</div>

			{/* Description */}
			<div className="mb-4 md:mb-16">
				<p className="text-left tracking-tighter leading-relaxed text-sm md:text-lg lg:text-xl text-foreground">
					We design and build AI-first products that modernize how companies work, compete, and grow. From early concept to full-scale deployment, we combine strategy, data, and engineering to deliver systems that automate processes, reduce costs, and unlock new opportunities.
				</p>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 md:gap-3">
				<span className="px-3 py-1 md:px-4 md:py-1.5 border border-foreground rounded-full text-xs md:text-sm lg:text-base tracking-tighter text-foreground">
					AI Agents
				</span>
				<span className="px-3 py-1 md:px-4 md:py-1.5 border border-foreground rounded-full text-xs md:text-sm lg:text-base tracking-tighter text-foreground">
					Product Design
				</span>
				<span className="px-3 py-1 md:px-4 md:py-1.5 border border-foreground rounded-full text-xs md:text-sm lg:text-base tracking-tighter text-foreground">
					Full-stack development
				</span>
				<span className="px-3 py-1 md:px-4 md:py-1.5 border border-foreground rounded-full text-xs md:text-sm lg:text-base tracking-tighter text-foreground">
					Web Systems
				</span>
			</div>
		</section>
	);
}
