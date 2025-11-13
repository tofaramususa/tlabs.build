"use server";

import { z } from "zod";
import { resend } from "@/utils/resend";
import { contactFormSchema } from "./schema";

export async function sendContactAction(
	data: z.infer<typeof contactFormSchema>
) {
	try {
		// Validate the data
		const validatedData = contactFormSchema.parse(data);

		// Send email using Resend
		const response = await resend.emails.send({
			from: "TLabs Contact Form <onboarding@resend.dev>", // Update this with your verified domain
			to: "tofara@tlabs.build",
			subject: `New Contact Form Submission from ${validatedData.fullName}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${validatedData.fullName}</p>
				<p><strong>Email:</strong> ${validatedData.email}</p>
				<p><strong>Project Details:</strong></p>
				<p>${validatedData.projectDetails}</p>
				<p><strong>Interests:</strong></p>
				<ul>
					${validatedData.interests.map((interest) => `<li>${interest}</li>`).join("")}
				</ul>
			`,
		});

		if (response.error) {
			return {
				success: false,
				error: response.error.message,
			};
		}

		return {
			success: true,
			data: response.data,
		};
	} catch (error) {
		console.error("Error sending contact email:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to send message",
		};
	}
}
