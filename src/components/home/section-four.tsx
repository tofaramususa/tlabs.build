"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { Button } from "@/components/ui/button";

export function SectionFour() {
	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background py-8 md:py-16 mt-16">
			{/* Our Process heading */}
			<div className="mb-8 md:mb-12">
				<h2 className="text-left font-light text-[36px] md:text-[48px] lg:text-[56px] text-foreground">
					Our Process
				</h2>
			</div>

			{/* Horizontal scroll for all screen sizes */}
			<div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 -mx-4 md:-mx-0 px-4 md:px-0 scrollbar-hide">
				{processSteps.map((step) => (
					<div
						key={step.day}
						className="flex-shrink-0 w-[80vw] md:w-[400px] lg:w-[450px] border-l border-foreground pl-4 md:pl-6 flex flex-col min-h-[400px] md:min-h-[500px]"
					>
						{/* Day number */}
						<div className="mb-4 md:mb-6">
							<p className="text-left font-light text-base md:text-lg text-foreground">
								{step.day}
							</p>
						</div>

						{/* Title */}
						<div className="mb-4 md:mb-6">
							<h3 className="text-left font-light text-[24px] md:text-[28px] lg:text-[32px] text-foreground">
								{step.title}
							</h3>
						</div>

						{/* Description */}
						<div className="mb-6 md:mb-8 flex-grow tracking-tighter">
							<p className="text-left font-light text-sm md:text-base leading-relaxed text-foreground">
								{step.description}
							</p>
						</div>

						{/* Deliverables */}
						<div>
							<p className="text-left font-light tracking-tighter text-sm md:text-base text-foreground mb-2">
								Deliverables:
							</p>
							<ul className="space-y-1">
								{step.deliverables.map((deliverable, index) => (
									<li
										key={index}
										className="text-left font-light tracking-tighter text-sm md:text-base text-foreground"
									>
										{deliverable}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>

			{/* CTA Button - Centered */}
			<div className="mt-12 md:mt-16 flex justify-center">
				<Button className="rounded-none tracking-tighter border-none bg-foreground text-background hover:bg-foreground/90 font-light text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8">
					Book a consultation
				</Button>
			</div>
		</section>
	);
}
