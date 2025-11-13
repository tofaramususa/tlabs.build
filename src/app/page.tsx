import { HeroSection } from "@/components/home/section-one";
import { SectionThree } from "@/components/home/section-three";
import { SectionTwo } from "@/components/home/section-two";

export const revalidate = 1800;

export default function Page() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<SectionTwo />
			<SectionThree />
		</div>
	);
}