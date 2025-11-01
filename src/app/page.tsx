// import { HeroSection } from "@/components/home/hero-section";

import { HeroSection } from "@/components/home/section-one";

export const revalidate = 1800;

export default function Page() {
	return (
		<div className="min-h-screen">
			<HeroSection />
		</div>
	);
}