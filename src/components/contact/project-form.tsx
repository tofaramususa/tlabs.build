"use client";

import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldLabel,
	FieldError,
	FieldGroup,
} from "@/components/ui/field";
import { InterestPill } from "./interest-pill";
import { sendContactAction } from "@/actions/send-contact-action";

const INTERESTS = [
	"product engineering",
	"AI integration",
	"digital transformation",
	"AI agents",
	"automation",
	"cloud migration",
] as const;

const contactFormSchema = z.object({
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

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ProjectForm() {
	const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			fullName: "",
			email: "",
			projectDetails: "",
			interests: [],
		},
	});

	const toggleInterest = (interest: string) => {
		const newInterests = selectedInterests.includes(interest)
			? selectedInterests.filter((i) => i !== interest)
			: [...selectedInterests, interest];

		setSelectedInterests(newInterests);
		// Update form value
		form.setValue("interests", newInterests, { shouldValidate: true });
	};

	const onSubmit = async (data: ContactFormValues) => {
		setIsSubmitting(true);
		try {
			const result = await sendContactAction(data);

			if (result.success) {
				// Reset form on success
				form.reset();
				setSelectedInterests([]);
				alert("Thank you! Your message has been sent successfully.");
			} else {
				alert(`Error: ${result.error || "Failed to send message. Please try again."}`);
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("An unexpected error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full">
			<h2 className="text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground/70 mb-8 md:mb-12">
				Tell us about your project
			</h2>

			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup className="gap-8">
						{/* Full Name */}
						<Controller
							name="fullName"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name} className="text-base md:text-xl lg:text-2xl font-light">
										Full Name
									</FieldLabel>
									<Input
										id={field.name}
										placeholder="Add your name here"
										aria-invalid={fieldState.invalid}
										{...field}
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Email */}
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name} className="text-base md:text-xl lg:text-2xl font-light">
										Email
									</FieldLabel>
									<Input
										id={field.name}
										type="email"
										placeholder="name@domain.com"
										aria-invalid={fieldState.invalid}
										{...field}
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Project Details */}
						<Controller
							name="projectDetails"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name} className="text-base md:text-xl lg:text-2xl font-light">
										Project Details
									</FieldLabel>
									<Textarea
										id={field.name}
										placeholder="Describe your project"
										aria-invalid={fieldState.invalid}
										{...field}
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Interests */}
						<Controller
							name="interests"
							control={form.control}
							render={({ fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel className="text-base md:text-xl lg:text-2xl font-light mb-4 block">
										I'm interested in
									</FieldLabel>
									<div className="flex flex-wrap gap-2 md:gap-3">
										{INTERESTS.map((interest) => (
											<InterestPill
												key={interest}
												label={interest}
												selected={selectedInterests.includes(interest)}
												onClick={() => toggleInterest(interest)}
											/>
										))}
									</div>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Submit Button */}
						<div className="pt-4">
							<Button
								type="submit"
								disabled={isSubmitting}
								className="group inline-flex items-center gap-3 bg-transparent border-none shadow-none p-0 hover:bg-transparent"
							>
								<span className="text-lg md:text-xl lg:text-2xl font-light tracking-tight text-foreground">
									send request
								</span>
								<div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground transition-transform group-hover:scale-105">
									<ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-background" />
								</div>
							</Button>
						</div>
					</FieldGroup>
				</form>
			</FormProvider>
		</div>
	);
}
