"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".about-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10 flex justify-center">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">
            The <span className="text-purple-700 dark:text-saas-cyan">Architects</span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base font-medium">
            Founded by Shreyas Ambhaikar and Tushar Tanpure, Quantum Reach Media bridges the gap between stunning aesthetic design and ruthless search engine performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Tushar Tanpure (Co-Founder & CTO) */}
          <GlowCard className="p-8 about-card group relative overflow-hidden text-center">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border border-purple-300 dark:border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105 mx-auto flex-shrink-0">
                <Image 
                  src="/tushar.jpg" 
                  alt="Tushar Tanpure" 
                  fill 
                  className="object-cover object-top contrast-110 brightness-105" 
                />
              </div>
              <div className="space-y-3 w-full flex flex-col items-center">
                <span className="px-3.5 py-1 rounded-full bg-purple-100 dark:bg-saas-purple/10 border border-purple-300 dark:border-saas-purple/30 text-purple-900 dark:text-saas-purple text-xs font-mono font-bold uppercase tracking-wider">
                  Co-Founder & CTO
                </span>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-zinc-900 dark:text-white tracking-tight">Tushar Tanpure</h3>
                <p className="text-purple-700 dark:text-saas-purple text-xs font-mono uppercase tracking-widest font-bold">Technical & SEO Mastermind</p>
                <p className="text-purple-950/80 dark:text-zinc-400 text-sm leading-relaxed max-w-md font-medium">
                  SEO savant and full-stack engineer. Ensures every pixel is optimized for 100/100 Lighthouse performance, Google Map Pack dominance, and AI Bot rankings.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center">
                  {["AEO / GEO Engine", "Local GMB Dominance", "Full-Stack Dev"].map((skill, i) => (
                    <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-950 dark:text-zinc-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>

          {/* 2. Shreyas Ambhaikar (Co-Founder & CEO) */}
          <GlowCard className="p-8 about-card group relative overflow-hidden text-center">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border border-purple-300 dark:border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105 mx-auto flex-shrink-0">
                <Image 
                  src="/shreyas.jpg" 
                  alt="Shreyas Ambhaikar" 
                  fill 
                  className="object-cover object-top contrast-110 brightness-105" 
                />
              </div>
              <div className="space-y-3 w-full flex flex-col items-center">
                <span className="px-3.5 py-1 rounded-full bg-purple-100 dark:bg-saas-cyan/10 border border-purple-300 dark:border-saas-cyan/30 text-purple-900 dark:text-saas-cyan text-xs font-mono font-bold uppercase tracking-wider">
                  Co-Founder & CEO
                </span>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-zinc-900 dark:text-white tracking-tight">Shreyas Ambhaikar</h3>
                <p className="text-purple-700 dark:text-saas-cyan text-xs font-mono uppercase tracking-widest font-bold">Visionary & Design Strategist</p>
                <p className="text-purple-950/80 dark:text-zinc-400 text-sm leading-relaxed max-w-md font-medium">
                  Master of crafting high-converting, visually stunning digital architectures. Merges sleek aesthetic design with psychological conversion strategies.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center">
                  {["UI/UX Architecture", "Brand Strategy", "Conversion Design"].map((skill, i) => (
                    <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-950 dark:text-zinc-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
