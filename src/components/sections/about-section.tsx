"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";
import { Sparkles } from "lucide-react";

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

  const architects = [
    {
      name: "Tushar Tanpure",
      role: "Co-Founder & CTO",
      title: "Technical & SEO Mastermind",
      image: "/tushar.jpg",
      bio: "SEO savant & full-stack engineer. Optimizes platforms for 100/100 Lighthouse speed, GMB map dominance, and AI search engine rankings.",
      skills: ["AEO / GEO Engine", "Local GMB Dominance", "Full-Stack Dev"],
      ringGradient: "from-purple-500 via-purple-600 to-indigo-500",
    },
    {
      name: "Shreyas Ambhaikar",
      role: "Co-Founder & CEO",
      title: "Visionary & Design Strategist",
      image: "/shreyas.jpg",
      bio: "Crafts high-converting, visually stunning digital architectures. Merges sleek aesthetic design with psychological conversion strategies.",
      skills: ["UI/UX Architecture", "Brand Strategy", "Conversion Design"],
      ringGradient: "from-saas-purple via-fuchsia-500 to-purple-500",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10 flex justify-center">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles size={13} className="text-purple-600 dark:text-saas-cyan" /> Leadership Team
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-purple-950 dark:text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">Architects</span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-xs sm:text-sm font-medium">
            Bridging stunning aesthetic design with ruthless search engine performance.
          </p>
        </div>
        
        {/* 2-Column Grid with Compact Proportions & Modern Glassmorphism Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-[920px] mx-auto">
          {architects.map((person, index) => (
            <GlowCard 
              key={index} 
              className="about-card p-7 sm:p-8 group relative overflow-hidden text-center bg-zinc-950/90 dark:bg-zinc-950/90 border border-purple-500/20 dark:border-white/10 rounded-3xl shadow-xl hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-between"
            >
              {/* Subtle Center Glass Glow */}
              <div className="absolute inset-x-6 top-8 h-56 rounded-[2rem] bg-[radial-gradient(circle_at_50%_28%,rgba(168,85,247,0.07),transparent_62%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full">
                {/* Double-Ring Glowing Profile Frame */}
                <div className="relative isolate rounded-full bg-black p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_18px_45px_rgba(0,0,0,0.5)]">
                  <div className={`p-1 rounded-full bg-gradient-to-r ${person.ringGradient} shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform duration-500 group-hover:scale-105`}>
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-zinc-950 bg-zinc-900 shrink-0">
                      <Image 
                        src={person.image} 
                        alt={person.name} 
                        fill 
                        className="object-cover object-top contrast-105 brightness-105" 
                      />
                    </div>
                  </div>
                </div>

                {/* Role Pill Badge */}
                <span className="px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                  {person.role}
                </span>

                {/* Info Metadata */}
                <div className="space-y-1.5 w-full flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                    {person.name}
                  </h3>
                  
                  <p className="text-saas-cyan text-[11px] font-mono uppercase tracking-widest font-bold">
                    {person.title}
                  </p>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium max-w-[290px] pt-1">
                    {person.bio}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 justify-center">
                  {person.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
