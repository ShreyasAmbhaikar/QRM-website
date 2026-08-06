"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 pt-6 px-4 md:px-0 pointer-events-none">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-full transition-all duration-300 border pointer-events-auto flex items-center justify-between px-6 py-3",
          scrolled
            ? "bg-saas-surface/80 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-shadow">
            <Image src="/qrm-logo.jpg" alt="Quantum Reach Media Logo" fill className="object-cover" />
          </div>
          <span className="font-sans font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-100 to-saas-cyan bg-clip-text text-transparent hidden sm:block">
            Quantum Reach Media
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Process
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-saas-cyan hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/portfolio" className="text-sm font-medium text-saas-cyan hover:text-saas-purple transition-colors hidden sm:block">
            View Work
          </Link>
          <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
