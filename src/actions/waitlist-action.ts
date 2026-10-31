"use server";

import { addToWaitlist, sendWaitlistWelcomeEmail } from "@/lib/loops";
import { actionClient } from "./safe-action";
import { waitlistSchema } from "./schema";

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
		// sendWaitlistWelcomeEmail never throws; it reports failure in its result.
		// Don't fail the signup if only the email fails, but make it visible.
		const emailResult = await sendWaitlistWelcomeEmail(data.email);
		if (!emailResult.success) {
			console.error(
				`Waitlist welcome email failed for a new signup: ${emailResult.error}`,
			);
		}

		return { success: true, message: "Successfully joined the waitlist!" };
	});
