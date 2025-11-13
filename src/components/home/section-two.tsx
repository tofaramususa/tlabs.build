"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SectionTwo() {
	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background py-8 md:py-16 md:px-8">
			{/* Right-aligned content container */}
			<div className="ml-auto max-w-[260px] md:max-w-xl">
				{/* Small italic heading */}
				<div className="flex mb-2 md:mb-4">
					<h2 className="instrument text-left italic font-light text-xl sm:text-2xl md:text-3xl text-foreground">
						A new era
					</h2>
				</div>

				{/* Main content text */}
				<div className="mb-8 flex md:mb-12">
					<p className="text-left font-light leading-relaxed tracking-tighter text-foreground text-lg md:text-4xl lg:text-4xl">
						We're in the AI decade — where digital transformation defines who leads and who follows. The winners are rethinking how they operate, automate, and deliver value. The rest are modernizing yesterday's systems, hoping they'll still work tomorrow
					</p>
				</div>
			</div>

			{/* CTA Button - Left aligned, no border, smaller */}
			<div className="mt-4 flex md:mt-16">
				<Button
					className="rounded-none border-none bg-foreground text-background hover:bg-foreground/90 font-light text-sm md:text-base lg:text-lg px-2 py-1 md:px-3 md:py-1 lg:px-3 lg:py-1"
				>
					Let's get started
				</Button>
			</div>

			{/* Two column layout - Heading (60%) and Find out more (40%) */}
			<div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-12">
				{/* Large heading - Left side, 60% width */}
				<div className="w-full md:w-[60%]">
					<h2 className="text-left text-[28px] leading-tight tracking-tight text-foreground sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]">
						We build AI-first products that modernize how companies operate — merging intelligent automation, streamlined design, and scalable engineering to create lasting business impact.
					</h2>
				</div>

				{/* Find out more - Right side, 40% width */}
				<div className="w-full md:w-[40%] flex justify-end items-end">
					<div className="flex flex-row gap-2 items-center">
							<Image
								src="/icons/arrow-rounded-white.svg"
								alt="Arrow"
								width={30}
								height={30}
								className="rotate-135"
							/>
						<p className="text-right font-light tracking-tighter text-foreground text-base sm:text-lg md:text-xl lg:text-2xl">
							find out more
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
