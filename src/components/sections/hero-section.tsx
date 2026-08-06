"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlowCard } from "@/components/ui/glow-card";
import Image from "next/image";

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      mockupRef.current,
      { y: 100, opacity: 0, rotateX: 10 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden">
      {/* Targeted Center Glow - Purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saas-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-saas-border bg-saas-surface/50 text-xs font-medium text-saas-cyan mb-8 backdrop-blur-sm">
          🏆 Best SEO Agency in Pune
        </div>
        
        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
          Architecting SEO & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">AI Search Dominance.</span>
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 font-medium">
          We build high-performance websites and engineer SEO, Local GMB, and AEO strategies that put your business at the top of Google, GPTBot, Claude, and Gemini.
        </p>
        
        <div className="flex gap-4 mb-20">
          <MagneticButton className="bg-white text-black hover:bg-zinc-200 shadow-none border-none">
            Get Started
          </MagneticButton>
          <MagneticButton>
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
