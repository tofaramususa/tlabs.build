import {
	createSafeActionClient,
	DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export const actionClient = createSafeActionClient({
	// Log the real error on the server; never send internals to the browser.
	handleServerError(e: unknown) {
		console.error("Server action error:", e);
		return DEFAULT_SERVER_ERROR_MESSAGE;
	},
});
