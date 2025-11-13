import { ContactInfo } from "@/components/contact/contact-info";
import { ProjectForm } from "@/components/contact/project-form";

export default function Page() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Main heading */}
			<div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-32 pb-12 md:pb-16">
				<h1 className="text-left font-light text-[36px] leading-tight tracking-tight text-foreground sm:text-[28px] md:text-[52px] lg:text-[64px] xl:text-[100px] max-w-5xl">
					<span className="block">let's create something</span>
					<span className="block">transformative</span>
				</h1>
			</div>

			{/* Two-column layout for desktop, stacked for mobile */}
			<div className="flex flex-col md:flex-row min-h-[600px] bg-[#E5E5E0] dark:bg-[#1D1D1D]">
				{/* Left column - Contact Info */}
				<div className="w-full md:w-[40%] px-6 md:px-12 lg:px-16 py-12 md:py-16">
					<ContactInfo />
				</div>

				{/* Right column - Project Form */}
				<div className="w-full md:w-[60%] px-6 md:px-12 lg:px-16 py-12 md:py-16">
					<ProjectForm />
				</div>
			</div>
		</div>
	);
}
