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
    <section className="relative py-36 md:py-44 px-4 overflow-hidden bg-transparent flex flex-col items-center justify-center min-h-[580px]">
      {/* Top & Bottom Flawless Background Blend Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      {/* Background Ripple Animation */}
      <Ripple mainCircleSize={200} mainCircleOpacity={0.65} numCircles={8} />

      {/* Subtle center ambient radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Refined Glassmorphism Category Pill Badge */}
        <span className="text-[11px] font-mono tracking-widest uppercase text-purple-200 mb-6 bg-purple-950/80 border border-purple-400/40 px-4.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.3)] font-bold">
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
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-purple-950 shadow-md hover:scale-110 hover:z-30 transition-all duration-200 cursor-pointer"
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

        {/* Cohesive Vibrant Purple-to-Fuchsia CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-saas-purple hover:from-purple-600 hover:to-fuchsia-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(147,51,234,0.45)] hover:shadow-[0_12px_45px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
          <span>Become a Partner</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
