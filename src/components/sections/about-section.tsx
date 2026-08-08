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
      bio: "SEO savant and full-stack engineer. Ensures every pixel is optimized for 100/100 Lighthouse performance, Google Map Pack dominance, and AI Bot rankings.",
      skills: ["AEO / GEO Engine", "Local GMB Dominance", "Full-Stack Dev"],
      badgeColor: "bg-purple-100 dark:bg-purple-950/70 border-purple-300 dark:border-purple-500/40 text-purple-950 dark:text-purple-300",
      accentGradient: "from-purple-600 via-purple-500 to-indigo-600",
    },
    {
      name: "Shreyas Ambhaikar",
      role: "Co-Founder & CEO",
      title: "Visionary & Design Strategist",
      image: "/shreyas.jpg",
      bio: "Master of crafting high-converting, visually stunning digital architectures. Merges sleek aesthetic design with psychological conversion strategies.",
      skills: ["UI/UX Architecture", "Brand Strategy", "Conversion Design"],
      badgeColor: "bg-purple-100 dark:bg-purple-950/70 border-purple-300 dark:border-purple-500/40 text-purple-950 dark:text-purple-300",
      accentGradient: "from-saas-cyan via-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 relative z-10 flex justify-center">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} className="text-purple-600 dark:text-saas-cyan" /> Leadership Team
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-purple-950 dark:text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">Architects</span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base font-medium">
            Quantum Reach Media bridges the gap between stunning aesthetic design and ruthless search engine performance.
          </p>
        </div>
        
        {/* 2-Column Grid with Increased Spacing & Identical Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
          {architects.map((person, index) => (
            <GlowCard 
              key={index} 
              className="about-card p-6 sm:p-8 group relative overflow-hidden text-center bg-zinc-950 border border-purple-200/50 dark:border-white/10 rounded-3xl shadow-xl hover:border-purple-400/60 dark:hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Card Background Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.12),transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center gap-5">
                {/* Avatar with Gradient Accent Ring */}
                <div className={`p-1 rounded-full bg-gradient-to-br ${person.accentGradient} shadow-xl transition-transform duration-500 group-hover:scale-105`}>
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-zinc-950 bg-zinc-900 shrink-0">
                    <Image 
                      src={person.image} 
                      alt={person.name} 
                      fill 
                      className="object-cover object-top contrast-110 brightness-105" 
                    />
                  </div>
                </div>

                {/* Info Metadata */}
                <div className="space-y-2.5 w-full flex flex-col items-center">
                  <span className={`px-4 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider ${person.badgeColor}`}>
                    {person.role}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight pt-1">
                    {person.name}
                  </h3>
                  
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-saas-cyan text-xs font-mono uppercase tracking-widest font-bold">
                    {person.title}
                  </p>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-medium pt-1">
                    {person.bio}
                  </p>
                  
                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2 pt-3 justify-center">
                    {person.skills.map((skill, i) => (
                      <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium hover:border-purple-400/40 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
