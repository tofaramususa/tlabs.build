"use client";

import React from "react";

export function AboutIntro() {
	return (
		<section className="flex w-full max-w-full min-h-screen flex-col justify-center overflow-hidden bg-background">
			{/* Left-aligned intro paragraph with max-width constraint */}
			<div className="w-full max-w-5xl">
				<p className="text-left font-medium leading-tight tracking-tight text-foreground text-[28px] md:text-[44px] lg:text-[60px] xl:text-[72px]">
					We build AI-first products that modernize how companies operate —
					merging intelligent automation, streamlined design, and scalable
					engineering to create lasting business impact.
				</p>
			</div>
		</section>
	);
}
