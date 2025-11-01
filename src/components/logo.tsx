import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={cn(
        "inline-block w-auto h-auto",
        // Responsive sizing: mobile to desktop
        "max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[172px]",
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt="TLabs Logo"
        width={172}
        height={67}
        priority
        className="w-full h-auto"
      />
    </Link>
  );
}