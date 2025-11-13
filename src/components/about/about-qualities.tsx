"use client";

import React from "react";
import type { Quality } from "@/data/qualities";
import { qualities } from "@/data/qualities";
import { Button } from "@/components/ui/button";

interface QualityCardProps {
	quality: Quality;
}

function QualityCard({ quality }: QualityCardProps) {
	return (
		<div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-32 md:mb-48 lg:mb-56">
			{/* Number - Left side */}
			<div className="flex-shrink-0">
				<div className="font-medium text-[80px] md:text-[120px] lg:text-[160px] xl:text-[180px] text-foreground leading-none">
					{quality.number}
				</div>
			</div>

			{/* Content - Title and description */}
			<div className="flex-1 max-w-2xl">
				{/* Title */}
				<div className="mb-4 md:mb-6 lg:mb-8">
					<h3 className="text-left text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-normal text-foreground leading-tight">
						{quality.title}
					</h3>
				</div>

				{/* Description */}
				<div>
					<p className="text-left font-light leading-relaxed tracking-tight text-base md:text-lg lg:text-xl xl:text-2xl text-foreground">
						{quality.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export function AboutQualities() {
	return (
		<section className="flex w-full max-w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32 justify-center">
			<div className="flex flex-col w-full max-w-7xl px-4 md:px-8 items-center">
				{qualities.map((quality) => (
					<QualityCard key={quality.number} quality={quality} />
				))}

				{/* CTA Button - Centered */}
				<div className="mt-8 md:mt-16 flex justify-center">
					<Button asChild className="rounded-none tracking-tighter border-none bg-foreground text-background hover:bg-foreground/90 font-light text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8">
						<a href="https://calendly.com/tofara-tlabs/30min-with-tofara" target="_blank" rel="noopener noreferrer">
							Talk to our founder
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
