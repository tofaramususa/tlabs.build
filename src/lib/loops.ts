import "server-only";
import { LoopsClient } from "loops";

// Initialize Loops client
export const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

export interface WaitlistEntry {
	email: string;
	source?: string;
}

/**
 * Check if a contact already exists in the waitlist
 */
export async function checkIfEmailExists(email: string) {
	try {
		const contacts = await loops.findContact({ email });
		return contacts.length > 0;
	} catch (error) {
		console.error("Loops findContact error:", error);
		return false;
	}
}

/**
 * Add a contact to the Loops waitlist
 * This will create or update the contact and trigger any associated loops
 */
export async function addToWaitlist(entry: WaitlistEntry) {
	try {
		// Check if email already exists
		const exists = await checkIfEmailExists(entry.email);
		if (exists) {
			return {
				success: false,
				error: "already_exists",
				message: "You're already on the waitlist!",
			};
		}

		// Create contact in Loops with custom properties
		const contactProperties: Record<string, string> = {
			source: entry.source || "website",
			waitlistJoinedAt: new Date().toISOString(),
		};

		const resp = await loops.createContact({
			email: entry.email,
			properties: contactProperties,
		});

		if (!resp.success) {
			console.error("Loops createContact error:", resp);
			return { success: false, error: "Failed to add to waitlist" };
		}

		return { success: true, id: resp.id };
	} catch (error) {
		console.error("Loops error:", error);
		return { success: false, error: "Failed to add to waitlist" };
	}
}

/**
 * Send the waitlist welcome email via Loops transactional email
 */
export async function sendWaitlistWelcomeEmail(email: string) {
	try {
		const resp = await loops.sendTransactionalEmail({
			transactionalId: process.env.LOOPS_WAITLIST_WELCOME_ID as string,
			email,
			dataVariables: {},
		});

		if (!resp.success) {
			console.error("Loops sendTransactionalEmail error:", resp);
			return { success: false, error: "Failed to send welcome email" };
		}

		return { success: true };
	} catch (error) {
		console.error("Loops send email error:", error);
		return { success: false, error: "Failed to send welcome email" };
	}
}

/**
 * Trigger a loop (automated email sequence) for a contact
 */
export async function triggerWaitlistLoop(
	email: string,
	eventName = "joinedWaitlist",
) {
	try {
		const resp = await loops.sendEvent({
			email,
			eventName,
		});

		if (!resp.success) {
			console.error("Loops sendEvent error:", resp);
			return { success: false };
		}

		return { success: true };
	} catch (error) {
		console.error("Loops trigger loop error:", error);
		return { success: false };
	}
}
