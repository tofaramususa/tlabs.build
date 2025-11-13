export interface ProcessStep {
	day: string;
	title: string;
	description: string;
	deliverables: string[];
}

export const processSteps: ProcessStep[] = [
	{
		day: "Day 0",
		title: "Kickoff & Research",
		description:
			"You meet our project team for a strategy session. We explore your goals, constraints, and opportunities. We dig into your company's current data, market positioning & audit your digital footprint",
		deliverables: [
			"Project brief & kickoff questionnaire",
			"Access to collaborative workspace",
			"Moodboard",
		],
	},
	{
		day: "Day 2",
		title: "Product Strategy Workshop",
		description:
			"We work together to define your users, journeys, and messaging. This shapes what product you build and why.",
		deliverables: [
			"User personas",
			"Sitemap / Information architecture",
			"Tone of voice / messaging draft",
			"Sample wireframes or landing-page flows",
		],
	},
	{
		day: "Day 5",
		title: "Design & Prototype",
		description:
			"We translate strategy into user experience: visual design, UI layouts + interactive mockups. Early prototypes let you see & test how the product looks & works.",
		deliverables: [
			"Product Interface & Interaction Design",
			"AI Agent Workflows & Behavior Maps",
			"Iterative Prototypes",
		],
	},
	{
		day: "Day 10",
		title: "Technical Architecture",
		description:
			"We design the technical foundation: system architecture, database schemas, API specifications, and infrastructure setup. This ensures scalability and maintainability from day one.",
		deliverables: [
			"System architecture diagrams",
			"Database schema & data models",
			"API documentation & endpoints",
			"Technology stack recommendations",
		],
	},
	{
		day: "Day 15",
		title: "Development Sprint 1",
		description:
			"Core features come to life. We build the foundational components, integrate AI capabilities, and establish development workflows. Regular demos keep you in the loop.",
		deliverables: [
			"Core feature implementations",
			"CI/CD pipeline setup",
			"Testing infrastructure",
			"Sprint demo & feedback session",
		],
	},
	{
		day: "Day 25",
		title: "Testing & Refinement",
		description:
			"Rigorous testing across devices, browsers, and user scenarios. We refine interactions, optimize performance, and ensure everything works seamlessly before launch.",
		deliverables: [
			"Quality assurance reports",
			"Performance optimization",
			"Bug fixes & refinements",
			"User acceptance testing",
		],
	},
	{
		day: "Day 30",
		title: "Launch & Support",
		description:
			"Your product goes live. We handle deployment, monitor systems, and provide ongoing support. Post-launch analytics help us optimize and iterate based on real user data.",
		deliverables: [
			"Production deployment",
			"Monitoring & analytics setup",
			"Documentation & training materials",
			"30-day post-launch support",
		],
	},
];
