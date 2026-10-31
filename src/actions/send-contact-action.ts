"use server";

import { resend } from "@/utils/resend";
import { actionClient } from "./safe-action";
import { contactFormSchema } from "./schema";

const HTML_ESCAPES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

function escapeHtml(value: string) {
	return value.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

export const sendContactAction = actionClient
	.inputSchema(contactFormSchema)
	.action(async ({ parsedInput: data }) => {
		const fullName = escapeHtml(data.fullName);
		const email = escapeHtml(data.email);
		const projectDetails = escapeHtml(data.projectDetails).replace(
			/\n/g,
			"<br />",
		);
		const interests = data.interests
			.map((interest) => `<li>${escapeHtml(interest)}</li>`)
			.join("");

		const response = await resend.emails.send({
			from: "TLabs Contact Form <onboarding@resend.dev>", // Update this with your verified domain
			to: "tofara@tlabs.build",
			// Subjects are plain text; strip line breaks so they can't add headers.
			subject: `New Contact Form Submission from ${data.fullName.replace(/[\r\n]+/g, " ")}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${fullName}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Project Details:</strong></p>
				<p>${projectDetails}</p>
				<p><strong>Interests:</strong></p>
				<ul>
					${interests}
				</ul>
			`,
		});

		if (response.error) {
			throw new Error(`Resend error: ${response.error.message}`);
		}

		return { success: true };
	});
