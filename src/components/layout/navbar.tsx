"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
          "mx-auto transition-all duration-500 border pointer-events-auto flex items-center justify-between",
          scrolled
            ? "max-w-4xl rounded-full bg-card/90 dark:bg-saas-surface/85 backdrop-blur-xl border-purple-200 dark:border-white/15 shadow-[0_10px_30px_rgba(147,51,234,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-5 py-2.5"
            : "max-w-6xl rounded-full bg-transparent border-transparent px-6 py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-300 dark:border-white/20 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-shadow">
            <Image src="/qrm-logo.jpg" alt="Quantum Reach Media Logo" fill className="object-cover" />
          </div>
          <span className="font-sans font-extrabold text-base tracking-tight bg-gradient-to-r from-purple-950 via-purple-700 to-saas-purple dark:from-white dark:via-zinc-100 dark:to-saas-cyan bg-clip-text text-transparent hidden sm:block">
            Quantum Reach Media
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/#services" className="text-sm font-bold text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-bold text-purple-700 dark:text-saas-cyan hover:text-purple-950 dark:hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="text-sm font-bold text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-bold text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/#about" className="text-sm font-bold text-purple-950/80 dark:text-zinc-400 hover:text-purple-950 dark:hover:text-white transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="px-4 py-2 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-colors shadow-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
