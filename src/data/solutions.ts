export interface Solution {
	number: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	numberPosition: "left" | "right";
}

export const solutions: Solution[] = [
	{
		number: "01",
		title: "Product Engineering",
		subtitle: "Software products, built end to end",
		description:
			"We design and build AI-first products that modernize how companies work, compete, and grow. From early concept to full-scale deployment, we combine strategy, data, and engineering to deliver systems that automate processes, reduce costs, and unlock new opportunities.",
		tags: ["AI Agents", "Product Design", "Full-stack development", "Web Systems"],
		numberPosition: "right",
	},
	{
		number: "02",
		title: "AI Integration",
		subtitle: "Intelligent automation for your business",
		description:
			"Transform your operations with custom AI solutions that integrate seamlessly into your existing workflows. We implement machine learning models, natural language processing, and intelligent automation to help you make data-driven decisions and scale efficiently.",
		tags: ["Machine Learning", "NLP", "Automation", "Data Analytics"],
		numberPosition: "left",
	},
	{
		number: "03",
		title: "Digital Transformation",
		subtitle: "Modernize your legacy systems",
		description:
			"Bridge the gap between legacy infrastructure and modern technology. We help companies migrate to cloud-native architectures, implement microservices, and build scalable systems that support rapid growth and innovation.",
		tags: ["Cloud Migration", "Microservices", "DevOps", "System Architecture"],
		numberPosition: "right",
	},
];
