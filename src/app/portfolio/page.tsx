"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/our-work");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-sm font-mono text-zinc-400">Redirecting to Our Work...</p>
    </div>
  );
}
