"use server";

import { actionClient } from "./safe-action";
import { waitlistSchema } from "./schema";
import { addToWaitlist, sendWaitlistWelcomeEmail } from "@/lib/loops";

export const joinWaitlistAction = actionClient
	.schema(waitlistSchema)
	.action(async ({ parsedInput: data }) => {
		// Add contact to Loops (creates contact)
		const result = await addToWaitlist({
			email: data.email,
			source: "website",
		});

		if (!result.success) {
			// Handle duplicate email case with a friendly message
			if (result.error === "already_exists") {
				return {
					success: false,
					alreadyExists: true,
					message: result.message || "You're already on the waitlist!",
				};
			}
			throw new Error(result.error || "Failed to join waitlist");
		}

		// Send welcome email via Loops transactional email
		// Note: You can also use Loops' automated email sequences instead
		// by triggering an event with triggerWaitlistLoop()
		try {
			await sendWaitlistWelcomeEmail(data.email);
		} catch (error) {
			console.error("Failed to send welcome email:", error);
			// Don't fail the whole operation if email fails
		}

		return { success: true, message: "Successfully joined the waitlist!" };
	});
