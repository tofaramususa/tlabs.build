"use client";

import React from "react";

export function HeroSection() {
	return (
		<section className="hero-section h-[calc(100vh-5rem)] bg-white flex flex-col">
			<h1
				className="hero-title font-[150] leading-[1.1] tracking-[-0.02em] text-black flex-1 flex items-center justify-center text-center"
				style={{ fontSize: 'clamp(2.2rem, 6.6vw, 6rem)' }}
			>
				<span className="block">
					<span className="block whitespace-nowrap">We build intelligent digital</span>
					<span className="block whitespace-nowrap">products that transform</span>
					<span className="block whitespace-nowrap">companies.</span>
				</span>
			</h1>
			<div className="hero-content flex-1 flex">
				<div className="scroll-container flex-1 flex items-end">
					<p
						className="scroll-text"
						style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.25rem)' }}
					>
						scroll
					</p>
				</div>
				<div className="description-container flex-1 flex items-end">
					<p
						className="description-text font-[200]"
						style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}
					>
						We go beyond building, we transform. From idea to final product, we help companies grow through  practical system design and AI-based engineering. We create systems that automate work and unlock insight, turning slow, complex processes into fast, cost-saving solutions.
					</p>
				</div>
			</div>
		</section>
	);
}
