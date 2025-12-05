"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLyraPage = pathname?.startsWith("/lyra-ai");

  if (isLyraPage) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <Header />
        <main className="min-h-screen w-full pt-20 md:pt-24">{children}</main>
      </div>
      <Footer />
    </>
  );
}
