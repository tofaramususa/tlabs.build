import { AboutIntro } from "@/components/about/about-intro";
import { AboutMission } from "@/components/about/about-mission";
import { AboutQualities } from "@/components/about/about-qualities";

export default function Page() {
	return (
		<div className="min-h-screen">
			<AboutIntro />
			<AboutMission />
			<AboutQualities />
		</div>
	);
}
