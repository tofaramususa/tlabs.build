import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lyra - AI Customer Conversations",
  description:
    "Your AI teammate that takes care of customer conversations, freeing your team to focus on delivering product value. Automating up to 95% of conversations, 24/7.",
  openGraph: {
    title: "Lyra - AI Customer Conversations",
    description:
      "Your AI teammate that takes care of customer conversations, freeing your team to focus on delivering product value.",
    type: "website",
  },
  twitter: {
    title: "Lyra - AI Customer Conversations",
    description:
      "Your AI teammate that takes care of customer conversations, freeing your team to focus on delivering product value.",
  },
};

export default function LyraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/download.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
