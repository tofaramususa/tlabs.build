import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		// Loops Configuration
		LOOPS_API_KEY: z
			.string()
			.min(1, "LOOPS_API_KEY is required. Get your API key from https://app.loops.so/settings?page=api"),
		LOOPS_WAITLIST_WELCOME_ID: z
			.string()
			.min(1, "LOOPS_WAITLIST_WELCOME_ID is required. Create a transactional email at https://app.loops.so/transactional"),

		// Resend Configuration
		RESEND_API_KEY: z
			.string()
			.min(1, "RESEND_API_KEY is required. Get your API key from https://resend.com"),

		// Node environment
		NODE_ENV: z
			.enum(["development", "production", "test"])
			.optional()
			.default("development"),
	},

	/**
	 * Client-side environment variables (exposed to the browser)
	 * Must be prefixed with NEXT_PUBLIC_
	 */
	client: {},

	/**
	 * Client prefix for public environment variables
	 */
	clientPrefix: "NEXT_PUBLIC_",

	/**
	 * Runtime environment variables
	 * Destructure all variables from `process.env` here
	 */
	runtimeEnv: {
		LOOPS_API_KEY: process.env.LOOPS_API_KEY,
		LOOPS_WAITLIST_WELCOME_ID: process.env.LOOPS_WAITLIST_WELCOME_ID,
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		NODE_ENV: process.env.NODE_ENV,
	},

	/**
	 * Skip validation in certain environments
	 */
	skipValidation:
		process.env.SKIP_ENV_VALIDATION === "true" ||
		process.env.SKIP_ENV_VALIDATION === "1",
});
