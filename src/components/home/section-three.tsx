"use client";

import React from "react";
import type { Solution } from "@/data/solutions";
import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";

interface SolutionCardProps {
	solution: Solution;
	showSolutionsHeader?: boolean;
}

function SolutionCard({ solution, showSolutionsHeader = false }: SolutionCardProps) {
	const isNumberLeft = solution.numberPosition === "left";

	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background pt-8 md:py-16">
			{/* Solutions heading with border - only show for first card */}
			{showSolutionsHeader && (
				<div className="mb-6 md:mb-16">
					<h2 className="text-left font-light text-[48px] md:text-[40px] lg:text-[72px] text-foreground border-b border-foreground">
						Solutions
					</h2>
				</div>
			)}

			{/* Desktop: Two-column layout for number and content */}
			<div
				className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
					!showSolutionsHeader ? "border-t border-foreground pt-6 md:pt-16" : ""
				}`}
			>
				{/* Number - Position based on numberPosition prop */}
				<div
					className={`${isNumberLeft ? "md:order-1" : "md:order-2 md:ml-auto"} flex-shrink-0`}
				>
					<div
						className={`font-light text-[36px] md:text-[72px] lg:text-[96px] text-foreground leading-none ${
							isNumberLeft ? "text-left" : "text-right"
						}`}
					>
						{solution.number}
					</div>
				</div>

				{/* Content - Title, subtitle, description, tags */}
				<div className={`flex-1 md:max-w-2xl ${isNumberLeft ? "md:order-2 md:ml-auto" : "md:order-1"}`}>
					{/* Title */}
					<div className="mb-2 md:mb-8">
						<h3 className={`text-left ${isNumberLeft ? "md:text-right" : "md:text-left"} text-[24px] md:text-[36px] lg:text-[44px] text-foreground`}>
							{solution.title}
						</h3>
					</div>

					{/* Subtitle */}
					<div className="mb-2 md:mb-8">
						<p className={`text-left ${isNumberLeft ? "md:text-right" : "md:text-left"} font-light tracking-tight text-lg md:text-xl lg:text-2xl text-foreground`}>
							{solution.subtitle}
						</p>
					</div>

					{/* Description */}
					<div className="mb-4 md:mb-8">
						<p className={`text-left ${isNumberLeft ? "md:text-right" : "md:text-left"} tracking-tighter leading-relaxed text-sm md:text-lg lg:text-xl text-foreground`}>
							{solution.description}
						</p>
					</div>

					{/* Tags */}
					<div className={`flex flex-wrap gap-2 md:gap-3 ${isNumberLeft ? "md:justify-end" : "md:justify-start"}`}>
						{solution.tags.map((tag) => (
							<span
								key={tag}
								className="px-3 py-1 md:px-4 md:py-1.5 border border-foreground rounded-full text-xs md:text-sm lg:text-base tracking-tighter text-foreground"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function SectionThree() {
	return (
		<>
			{solutions.map((solution, index) => (
				<SolutionCard
					key={solution.number}
					solution={solution}
					showSolutionsHeader={index === 0}
				/>
			))}

			{/* CTA Button - Centered */}
			<div className="mt-12 md:mt-16 flex justify-center">
				<Button asChild className="rounded-none tracking-tighter border-none bg-foreground text-background hover:bg-foreground/90 font-light text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8">
					<a href="https://calendly.com/tofara-tlabs/30min-with-tofara" target="_blank" rel="noopener noreferrer">
						Talk to our founder
					</a>
				</Button>
			</div>

			{/* Large centered text */}
			<div className="mt-16 md:mt-24 lg:mt-28 flex justify-center">
				<p className="text-center font-extralight text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-tight tracking-tight text-foreground max-w-4xl px-4">
					Our team accompanies you before, during and after the creation and deployment of your software system
				</p>
			</div>
		</>
	);
}
