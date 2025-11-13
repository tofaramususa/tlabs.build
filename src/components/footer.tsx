"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
	return (
		<footer className="w-full mt-12 md:mt-20 lg:mt-28">
			{/* Logo and Tagline Section - White/Light Background */}
			<div className="w-full bg-background">
				<div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-2 md:py-2 lg:py-2">
					<div className="flex flex-row items-end justify-between gap-4 md:gap-6 lg:gap-8">
						{/* Logo */}
						<Link
							href="/"
							aria-label="Go to homepage"
							className="inline-block w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[200px]"
						>
							<Image
								src="/logo.svg"
								alt="TLabs Logo"
								width={200}
								height={78}
								priority
								className="w-full h-auto"
							/>
						</Link>

						{/* Tagline */}
						<p className="text-foreground font-light text-[12px] md:text-lg lg:text-xl xl:text-2xl">
							Take your company to the next level
						</p>
					</div>
				</div>
			</div>

			{/* Black Footer - Contact Section */}
			<div className="w-full bg-black text-white">
				{/* Main Footer Content */}
				<div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
					{/* Contact Section */}
					<div className="flex flex-col gap-8 md:gap-12">
						{/* Heading */}
						<h2 className="text-lg md:text-xl font-light">Let's talk!</h2>

						{/* Contact Info and Button Layout */}
						<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
							{/* Left Side - Contact Information */}
							<div className="flex flex-col gap-4 md:gap-6">
								{/* Email - Large and prominent */}
								<Link
									href="mailto:tofara@tlabs.build"
									className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light underline hover:opacity-80 transition-opacity"
								>
									tofara@tlabs.build
								</Link>

								{/* Location and Phone */}
								<div className="flex flex-row items-center gap-4 md:justify-between text-sm md:text-base lg:text-lg font-light">
									<span>Dubai, UAE</span>
									<Link
										href="tel:+971553880531"
										className="hover:opacity-80 transition-opacity"
									>
										+971 55 388 0531
									</Link>
								</div>
							</div>

							{/* Right Side - CTA Button */}
							<div className="flex md:items-start md:pt-2">
								<Button
									asChild
									variant="outline"
									className="rounded-none border border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors font-light text-base md:text-xl lg:text-2xl px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8"
								>
									<Link href="/contact">Book a meeting</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
					<p className="text-sm md:text-base font-light">
						{new Date().getFullYear()} Tlabs team
					</p>
				</div>
			</div>
		</footer>
	);
}
