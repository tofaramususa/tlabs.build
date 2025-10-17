"use client";

import React from "react";
import { ThreeGlobe } from "@/components/home/three-globe";

export function HeroSection() {
	return (
		<div className="w-full">
			{/* Main Content Container */}
			<div className="relative z-10 min-h-screen flex flex-col pt-16">
				{/* Hero Content - Main Layout */}
				<div className="relative z-10 h-full w-full px-4 pt-10 pb-20 contain-paint md:pt-16 md:pb-16">
					<div className="relative flex h-full flex-col">
						{/* Top text - Desktop */}
						<div className="relative hidden lg:block">
							<h1 className="self-start leading-none md:text-[6.25rem] select-none text-black">
								<span className="inline-block -translate-y-[0.135em] opacity-100">
									Craft exceptional
								</span>
							</h1>
						</div>

						{/* Mobile text - stacked */}
						<div className="lg:hidden text-center space-y-4 mb-8">
							<h1 className="text-4xl sm:text-5xl md:text-6xl leading-none select-none text-black font-abc-diatype">
								<span className="inline-block">
									Craft exceptional
								</span>
							</h1>
							<h2 className="text-4xl sm:text-5xl md:text-6xl leading-none select-none text-black font-abc-diatype">
								<span className="inline-block">
									API experiences
								</span>
							</h2>
						</div>
						
						{/* Globe - Center piece */}
						<div className="flex-1 flex items-center justify-center">
							<ThreeGlobe
								size="lg"
								autoRotate={true}
								enableInteraction={true}
								pointColor="#374151"
								className="drop-shadow-lg"
							/>
						</div>

						{/* Bottom text - Desktop only */}
						<div className="hidden lg:block pb-8">
							<h2 className="self-end leading-none md:text-[6.25rem] select-none text-right text-black">
								<span className="inline-block -translate-y-[0.135em]">
									API experiences
								</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
