"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2 } from "lucide-react";

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".feature-row",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 relative z-10 flex justify-center overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Feature Row 1 */}
        <div className="feature-row flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-purple-100 dark:bg-saas-cyan/10 border border-purple-300 dark:border-saas-cyan/30 text-purple-900 dark:text-saas-cyan text-xs font-bold uppercase tracking-widest">
              Real-Time Analytics
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white">
              Unlock SEO power <br/> with deep insights.
            </h2>
            <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
              Unlock the best SEO power with real-time insights, driving success and enhancing your online visibility efficiently without guessing.
            </p>
            <ul className="space-y-3 pt-4">
              {["Built-in real-time web search", "Chat with your PDFs and docs", "Agent Mode for in-depth research"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-purple-950 dark:text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 dark:text-saas-cyan" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <GlowCard className="p-2 w-full aspect-square md:aspect-video relative overflow-hidden flex items-center justify-center">
              {/* Abstract Visual */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
              <div className="w-3/4 h-3/4 border border-purple-200 dark:border-white/5 bg-card/80 dark:bg-black/50 rounded-xl p-6 shadow-xl relative z-10 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-purple-200 dark:border-white/5 pb-4">
                  <div className="text-xs text-purple-900 dark:text-zinc-500 font-mono font-bold">Content Score</div>
                  <div className="text-purple-700 dark:text-saas-cyan font-bold text-xl">98/100</div>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="h-2 w-full bg-purple-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 dark:bg-saas-cyan w-[98%]" />
                  </div>
                  <div className="h-2 w-full bg-purple-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-800 dark:bg-saas-purple w-[85%]" />
                  </div>
                  <div className="h-2 w-full bg-purple-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 dark:bg-emerald-400 w-[92%]" />
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Feature Row 2 */}
        <div className="feature-row flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-purple-100 dark:bg-saas-purple/10 border border-purple-300 dark:border-saas-purple/30 text-purple-900 dark:text-saas-purple text-xs font-bold uppercase tracking-widest">
              Audio & Visuals
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white">
              Enhance immersive <br/> digital experiences.
            </h2>
            <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
              Quantum's advanced visual features transform static text into captivating layouts and motion graphics seamlessly.
            </p>
            <ul className="space-y-3 pt-4">
              {["High-fidelity 60fps animations", "GSAP ScrollTrigger integrations", "Customizable WebGL Shaders"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-purple-950 dark:text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 dark:text-saas-purple" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <GlowCard className="p-2 w-full aspect-square md:aspect-video relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
              <div className="w-3/4 h-3/4 border border-purple-200 dark:border-white/5 bg-card/80 dark:bg-black/50 rounded-xl p-4 shadow-xl relative z-10 flex gap-4">
                {/* Mockup Sidebar */}
                <div className="w-1/3 h-full border-r border-purple-200 dark:border-white/5 space-y-3 pr-4 py-2">
                  <div className="h-3 w-1/2 bg-purple-200 dark:bg-white/10 rounded-sm" />
                  <div className="h-3 w-3/4 bg-purple-100 dark:bg-white/5 rounded-sm" />
                  <div className="h-3 w-2/3 bg-purple-100 dark:bg-white/5 rounded-sm" />
                  <div className="h-3 w-4/5 bg-purple-100 dark:bg-white/5 rounded-sm" />
                </div>
                {/* Mockup Chat/Feed */}
                <div className="flex-1 h-full flex flex-col gap-3 justify-end py-2">
                  <div className="h-12 w-3/4 bg-purple-100 dark:bg-white/5 rounded-lg rounded-tl-none self-start" />
                  <div className="h-16 w-3/4 bg-purple-200 dark:bg-saas-purple/20 rounded-lg rounded-tr-none self-end border border-purple-300 dark:border-saas-purple/30" />
                  <div className="h-10 w-full bg-purple-100 dark:bg-white/5 rounded-full mt-auto" />
                </div>
              </div>
            </GlowCard>
          </div>
        </div>

      </div>
    </section>
  );
}
