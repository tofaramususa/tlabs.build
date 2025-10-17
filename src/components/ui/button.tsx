"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap text-sm font-medium font-tobias transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"rounded-lg bg-white text-black hover:bg-gray-100 focus-visible:ring-gray-300",
				outline:
					"rounded-lg border border-gray-300 text-gray-300 hover:text-white hover:border-white focus-visible:ring-gray-300",
				ghost: "rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50",
				pill: "rounded-full bg-white text-black hover:bg-gray-100 focus-visible:ring-gray-300",
				"pill-outline": "rounded-full border border-gray-300 text-gray-300 hover:text-white hover:border-white focus-visible:ring-gray-300",
				special: "",
			},
			size: {
				default: "h-12 px-6 py-3",
				sm: "h-10 px-4 py-2",
				lg: "h-14 px-8 py-4",
				pill: "h-12 px-4 py-3",
				special: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export { Button, buttonVariants };
