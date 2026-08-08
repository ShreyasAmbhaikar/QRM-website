"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          "mx-auto transition-all duration-500 border pointer-events-auto flex items-center justify-between relative",
          scrolled
            ? "max-w-4xl rounded-full bg-card/90 dark:bg-saas-surface/85 backdrop-blur-xl border-purple-200 dark:border-white/15 shadow-[0_10px_30px_rgba(147,51,234,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-5 py-2.5"
            : "max-w-6xl rounded-full bg-transparent border-transparent px-6 py-3"
        )}
      >
        {/* Brand Logo Link - Hide text on smallest screens to prevent double logo issues */}
        <Link href="/" className="flex items-center gap-3.5 sm:gap-4 group flex-shrink-0">
          <Image 
            src="/qrm-logo-transparent.webp" 
            alt="QRM Logo" 
            width={50} 
            height={18} 
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(126,34,206,0.15)] dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] dark:brightness-110",
              scrolled ? "h-4.5" : "h-5"
            )}
            priority
          />
          {/* Desktop/Tablet name */}
          <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-purple-950 dark:text-white hidden sm:inline-block">
            Quantum Reach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#7E22CE] dark:from-[#38BDF8] dark:to-[#A855F7]">
              Media
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="px-4 py-2 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-colors shadow-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 rounded-full border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 transition-all duration-300 pointer-events-auto"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile Navigation Dropdown Card */}
        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] left-4 right-4 p-5 rounded-3xl border border-purple-200 dark:border-white/10 bg-card/95 dark:bg-saas-surface/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(147,51,234,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden pointer-events-auto">
            <Link 
              href="/#services" 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white py-1 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold text-purple-700 dark:text-saas-cyan hover:text-purple-950 dark:hover:text-white py-1 transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white py-1 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white py-1 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/#about" 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold text-purple-950/80 dark:text-zinc-300 hover:text-purple-950 dark:hover:text-white py-1 transition-colors"
            >
              About
            </Link>
            <div className="h-px bg-purple-100 dark:bg-white/10 my-1" />
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-bold text-purple-950/60 dark:text-zinc-500">Theme Mode</span>
              <ThemeToggle />
            </div>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full text-center py-2.5 bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-xs font-bold rounded-full transition-all shadow-sm mt-1"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
