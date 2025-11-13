"use client";

import React from "react";

export function AboutMission() {
	return (
		<section className="flex w-full max-w-full flex-col overflow-hidden bg-background py-8 md:py-16">
			{/* Large centered heading */}
			<div className="mb-4 md:mb-8 flex justify-center">
				<h2 className="text-center font-light text-[36px] leading-tight tracking-tight text-foreground sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px]">
					Engineering that moves companies
				</h2>
			</div>

			{/* Centered subtitle */}
			<div className="flex justify-center">
				<p className="text-center font-light leading-relaxed tracking-tighter text-foreground text-xl md:text-lg lg:text-2xl max-w-4xl px-4">
					We build digital products that make companies more profit and make
					lasting impact
				</p>
			</div>
		</section>
	);
}
