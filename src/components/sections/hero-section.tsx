"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Particles } from "@/components/magicui/particles";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Step-by-Step Entrance Animation Sequence on Page Load / Refresh
    tl.fromTo(
      badgeRef.current,
      { y: -30, opacity: 0, scale: 0.92 },
      { y: 0, opacity: 1, scale: 1, duration: 0.75, delay: 0.15 }
    )
    .fromTo(
      headingRef.current,
      { y: 35, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9 },
      "-=0.4"
    )
    .fromTo(
      subtextRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75 },
      "-=0.5"
    )
    .fromTo(
      buttonsRef.current,
      { y: 25, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7 },
      "-=0.5"
    )
    .fromTo(
      trustStripRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75 },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={container} className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
      {/* Magic UI Mouse-Interactive Star Particles */}
      <Particles color="#c084fc" quantity={120} ease={40} staticity={30} className="z-0" />

      {/* Subtle, Moody Ambient Purple Glows - Centered Directly Behind the Headline */}
      <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[460px] bg-purple-400/20 dark:bg-purple-900/28 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-purple-300/25 dark:bg-saas-purple/20 blur-[115px] rounded-full pointer-events-none" />
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[220px] bg-fuchsia-400/15 dark:bg-fuchsia-600/12 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Magic UI Style Badge Pill with Moving Glare Shimmer */}
        <div 
          ref={badgeRef} 
          className="relative overflow-hidden inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-purple-300 dark:border-white/15 bg-purple-100/80 dark:bg-zinc-900/80 text-xs font-mono font-bold text-purple-950 dark:text-zinc-200 mb-6 sm:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.18)] transition-all hover:scale-105 cursor-pointer group"
        >
          {/* Moving Glare Shimmer Streak */}
          <div className="absolute inset-0 -translate-x-full animate-chip-shimmer bg-gradient-to-r from-transparent via-white/30 dark:via-purple-300/25 to-transparent pointer-events-none" />
          
          <Trophy size={14} className="text-yellow-500 dark:text-yellow-400 shrink-0 relative z-10" />
          <span className="relative z-10">#1 Rated Digital Marketing &amp; SEO Agency in Pune</span>
        </div>
        
        {/* Magic UI Style Headline */}
        <h1 ref={headingRef} className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-purple-950 dark:text-white mb-6 leading-[1.1] max-w-5xl drop-shadow-[0_2px_15px_rgba(147,51,234,0.18)]">
          Best SEO &amp; Digital Marketing <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
            Agency in Pune.
          </span>
        </h1>
        
        {/* Subtitle with High-Converting Clarity */}
        <p ref={subtextRef} className="text-base sm:text-lg text-purple-950/80 dark:text-zinc-300 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          Engineering #1 Google organic rankings, Google Map Pack 3-Pack dominance, and high-ROI performance ads for ambitious Pune businesses and global brands. Sub-second Next.js engineering meets algorithmic search architecture to turn high-intent clicks into verified client revenue.
        </p>
        
        {/* Magic UI CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#free-audit">
            <MagneticButton className="px-8 py-3.5 rounded-full bg-purple-950 text-white dark:bg-white dark:text-black hover:bg-purple-900 dark:hover:bg-zinc-200 font-bold text-sm shadow-[0_4px_25px_rgba(147,51,234,0.3)] whitespace-nowrap inline-flex flex-row items-center justify-center gap-2.5 shrink-0 min-w-[160px]">
              <span className="whitespace-nowrap">Get Free SEO Audit</span>
              <ArrowRight size={16} className="shrink-0 inline-block" />
            </MagneticButton>
          </Link>
          <Link href="/our-work">
            <MagneticButton className="px-8 py-3.5 rounded-full border border-purple-300 dark:border-white/20 text-purple-950 dark:text-white hover:bg-purple-100/60 dark:hover:bg-white/10 font-bold text-sm backdrop-blur-sm shadow-sm">
              View Client Results
            </MagneticButton>
          </Link>
        </div>

        {/* E-E-A-T Trust & Performance Highlights Strip - Sequential Entrance Animated */}
        <div 
          ref={trustStripRef}
          className="mt-10 sm:mt-12 pt-7 border-t border-purple-200/40 dark:border-white/10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-purple-950/70 dark:text-zinc-400 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <span className="flex text-amber-500">★★★★★</span>
            <span className="font-bold text-purple-950 dark:text-white">5.0 Rating</span>
            <span>(Google Verified)</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-purple-400/40" />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-purple-950 dark:text-white">100+</span>
            <span>Pune Brands Scaled</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-purple-400/40" />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-purple-950 dark:text-white">90+</span>
            <span>Web Speed Guaranteed</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-purple-400/40" />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-purple-950 dark:text-white">Zero</span>
            <span>Lock-In Contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
