"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlowCard } from "@/components/ui/glow-card";
import { Particles } from "@/components/magicui/particles";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Entrance Animation Sequence
    tl.fromTo(
      badgeRef.current,
      { y: -30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.2 }
    )
    .fromTo(
      headingRef.current,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    )
    .fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      buttonsRef.current,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      mockupRef.current,
      { y: 90, opacity: 0, rotateX: 12, scale: 0.95 },
      { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1.2 },
      "-=0.6"
    );
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden">
      {/* Magic UI Mouse-Interactive Star Particles */}
      <Particles color="#c084fc" quantity={110} ease={40} staticity={30} className="z-0" />

      {/* Targeted Center Ambient Purple Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-saas-purple/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-fuchsia-500/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Magic UI Style Badge Pill */}
        <div 
          ref={badgeRef} 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-white/15 bg-purple-100/80 dark:bg-zinc-900/80 text-xs font-mono font-bold text-purple-950 dark:text-zinc-200 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all hover:scale-105 cursor-pointer"
        >
          <Sparkles size={13} className="text-purple-600 dark:text-purple-400" />
          <span>Introducing Quantum Reach Media 2.0</span>
          <ArrowRight size={13} className="text-purple-600 dark:text-purple-400" />
        </div>
        
        {/* Magic UI Style Headline */}
        <h1 ref={headingRef} className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-purple-950 dark:text-white mb-6 leading-[1.1] max-w-4xl">
          Architecting SEO & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
            AI Search Dominance.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p ref={subtextRef} className="text-base sm:text-lg text-purple-950/80 dark:text-zinc-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          High-performance Next.js platforms, Local GMB Map Pack dominance, and AEO optimization engineered for Pune &amp; global enterprises to rank #1 in Google, ChatGPT, and Gemini.
        </p>
        
        {/* Magic UI CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <MagneticButton className="px-8 py-3.5 rounded-full bg-purple-950 text-white dark:bg-white dark:text-black hover:bg-purple-900 dark:hover:bg-zinc-200 font-bold text-sm shadow-lg inline-flex items-center gap-2 whitespace-nowrap shrink-0">
            <span>Get Started</span>
            <ArrowRight size={15} className="shrink-0" />
          </MagneticButton>
          <MagneticButton className="px-8 py-3.5 rounded-full border border-purple-300 dark:border-white/15 text-purple-950 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10 font-bold text-sm backdrop-blur-sm">
            Book a Demo
          </MagneticButton>
        </div>

        {/* Dashboard Image / Showcase Frame with Smooth Bottom Fade */}
        <div ref={mockupRef} className="w-full max-w-5xl mx-auto mt-6 relative [perspective:1000px]">
          <GlowCard className="p-2 bg-saas-base border-saas-border shadow-[0_0_100px_rgba(147,51,234,0.2)] relative overflow-hidden rounded-2xl">
            <div 
              className="relative rounded-xl overflow-hidden aspect-video border border-white/10 bg-saas-surface"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 98%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 98%)"
              }}
            >
              <Image 
                src="/dashboard-mockup.jpg" 
                alt="SEO Dashboard Demo" 
                fill
                priority
                className="object-cover"
              />
              {/* Soft bottom gradient fade overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
            </div>
          </GlowCard>
          {/* Outer bottom ambient blend overlay */}
          <div className="absolute -bottom-8 inset-x-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
}
