import { z } from "zod";

export const featureRequestSchema = z.object({
	email: z.string().email(),
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	description: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
	category: z.string(),
});

export const sendSupportSchema = z.object({
	email: z.string().email(),
	fullName: z.string(),
	subject: z.string(),
	priority: z.string(),
	type: z.string(),
	message: z.string(),
});

export const contactFormSchema = z.object({
	fullName: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	projectDetails: z.string().min(10, {
		message: "Please provide at least 10 characters about your project.",
	}),
	interests: z.array(z.string()).min(1, {
		message: "Please select at least one interest.",
	}),
});

export const waitlistSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
});
