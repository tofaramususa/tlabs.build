export interface Quality {
	number: string;
	title: string;
	description: string;
}

export const qualities: Quality[] = [
	{
		number: "1",
		title: "AI-first engineering",
		description:
			"We build intelligent systems from the ground up. Every product we create integrates AI capabilities that automate workflows, unlock insights, and adapt to your business needs—transforming how your team works.",
	},
	{
		number: "2",
		title: "Built to scale",
		description:
			"Our engineering approach prioritizes scalability and performance. We design systems that grow with your business, handling increased load, complexity, and user demands without compromise.",
	},
	{
		number: "3",
		title: "Real business impact",
		description:
			"We measure success by outcomes—reduced costs, faster processes, and new revenue opportunities. Our solutions deliver measurable ROI, not just modern technology.",
	},
];
