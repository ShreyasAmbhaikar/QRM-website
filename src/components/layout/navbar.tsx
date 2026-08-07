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
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Image 
            src="/qrm-logo-transparent.webp" 
            alt="QRM Logo" 
            width={65} 
            height={24} 
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(126,34,206,0.15)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] dark:brightness-110",
              scrolled ? "h-5" : "h-6"
            )}
            priority
          />
          <span className="font-sans font-extrabold text-base tracking-tight text-purple-950 dark:text-white hidden lg:inline-block">
            Quantum Reach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7E22CE] dark:from-[#38BDF8] dark:to-[#A855F7]">
              Media
            </span>
          </span>
          <span className="font-sans font-extrabold text-base tracking-tight text-purple-950 dark:text-white inline-block lg:hidden">
            QR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7E22CE] dark:from-[#38BDF8] dark:to-[#A855F7]">
              M
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-8 mx-auto">
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
