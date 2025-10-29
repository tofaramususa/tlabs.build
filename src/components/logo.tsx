import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 180, height = 60 }: LogoProps) {
  return (
    <Link href="/" aria-label="Go to homepage" className={cn("inline-block", className)}>
      <Image
        src="/logo.svg"
        alt="TLabs Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}