"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlowCard } from "@/components/ui/glow-card";
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
      {/* Targeted Center Glow - Purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saas-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div ref={badgeRef} className="inline-block px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-border bg-purple-100/80 dark:bg-saas-surface/50 text-xs font-bold text-purple-900 dark:text-saas-cyan mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.15)]">
          🏆 Best SEO Agency in Pune
        </div>
        
        <h1 ref={headingRef} className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Architecting SEO & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">AI Search Dominance.</span>
        </h1>
        
        <p ref={subtextRef} className="text-lg text-purple-950/80 dark:text-zinc-400 max-w-xl mx-auto mb-10 font-medium">
          We build high-performance websites and engineer SEO, Local GMB, and AEO strategies that put your business at the top of Google, GPTBot, Claude, and Gemini.
        </p>
        
        <div ref={buttonsRef} className="flex gap-4 mb-20">
          <MagneticButton className="bg-purple-900 text-white dark:bg-white dark:text-black hover:bg-purple-800 dark:hover:bg-zinc-200 shadow-md border-none font-bold">
            Get Started
          </MagneticButton>
          <MagneticButton className="border border-purple-300 dark:border-white/10 text-purple-900 dark:text-white hover:bg-purple-100/50 dark:hover:bg-white/10">
            Book a Demo
          </MagneticButton>
        </div>

        {/* Dashboard Image */}
        <div ref={mockupRef} className="w-full max-w-5xl mx-auto mt-10 [perspective:1000px]">
          <GlowCard className="p-2 bg-saas-base border-saas-border shadow-[0_0_100px_rgba(147,51,234,0.15)] relative overflow-hidden rounded-2xl">
            <div className="relative rounded-xl overflow-hidden aspect-video border border-white/10 bg-saas-surface">
              <Image 
                src="/dashboard-mockup.jpg" 
                alt="SEO Dashboard Demo" 
                fill
                priority
                className="object-cover"
              />
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
