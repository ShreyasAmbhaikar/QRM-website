"use client";

import Link from "next/link";
import Image from "next/image";
import { Ripple } from "@/components/magicui/ripple";
import { Sparkles, ArrowRight } from "lucide-react";

export function RippleCtaSection() {
  const avatars = [
    { src: "/shreyas.jpg", name: "Shreyas Ambhaikar" },
    { src: "/tushar.jpg", name: "Tushar Tanpure" },
    { src: "/dr-varun-preview.jpg", name: "Dr. Varun" },
    { src: "/shreyas.jpg", name: "Growth Partner" },
    { src: "/tushar.jpg", name: "Media Partner" },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-transparent flex flex-col items-center justify-center min-h-[520px]">
      {/* Background Ripple Animation */}
      <Ripple mainCircleSize={210} mainCircleOpacity={0.7} numCircles={8} />

      {/* Subtle center ambient radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Glowing Vibrant Category Pill Badge */}
        <span className="text-[11px] font-mono tracking-widest uppercase text-purple-700 dark:text-purple-300 mb-6 bg-purple-100/90 dark:bg-purple-950/70 border border-purple-300 dark:border-purple-500/40 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.25)] font-bold">
          COMMUNITY & PARTNERS
        </span>

        {/* Main Heading */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-purple-950 dark:text-white mb-8 max-w-xl leading-snug">
          We&apos;re grateful for the amazing brands and founders that scale with us every day.
        </h2>

        {/* Overlapping Avatars Stack */}
        <div className="flex items-center justify-center -space-x-3 mb-10">
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-zinc-900 shadow-md hover:scale-110 hover:z-20 transition-all duration-200 cursor-pointer"
              title={avatar.name}
            >
              <Image
                src={avatar.src}
                alt={avatar.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* High-Contrast Glowing CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0052FF] via-[#7E22CE] to-[#9333EA] text-white font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(147,51,234,0.4)] hover:shadow-[0_12px_45px_rgba(147,51,234,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
          <span>Become a Partner</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
