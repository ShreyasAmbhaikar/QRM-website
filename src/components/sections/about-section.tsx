"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/glow-card";
import { Sparkles, Trophy, Users, Star, Zap } from "lucide-react";

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
      role: "Founder & Marketing Manager",
      title: "Lead Generation & Client Acquisition",
      image: "/tushar.jpg",
      bio: "Directs performance marketing, paid acquisition, and lead generation at Quantum Reach Media. Specializes in multi-channel paid ad campaigns across Google and Meta, conversion funnels, and scaling qualified client pipelines.",
      skills: ["Client Lead Gen", "Marketing Strategy", "Google & Meta Ads", "Funnel Architecture"],
      theme: {
        cardBg: "from-[#130924]/95 via-[#0b0517]/95 to-[#04020a]/98",
        border: "border-purple-500/30 hover:border-purple-400/60",
        shadow: "shadow-[0_12px_45px_rgba(147,51,234,0.18)]",
        flare: "bg-purple-600/25",
        badge: "bg-purple-950/90 border-purple-400/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
        title: "text-purple-400",
        ring: "from-purple-500 via-fuchsia-500 to-indigo-500",
        chip: "bg-purple-500/10 border-purple-400/30 text-purple-200",
        dots: "rgba(168,85,247,0.12)"
      }
    },
    {
      name: "Shreyas Ambhaikar",
      role: "Co-Founder & Technical Architect",
      title: "SEO Strategist & Website Developer",
      image: "/shreyas.jpg",
      bio: "Heads technical SEO architecture, sub-second Next.js web engineering, and Google Business Profile (GMB) local 3-pack optimization for maximum search visibility, 90+ Core Web Vitals, and organic revenue conversion.",
      skills: ["SEO Strategy", "Next.js Web Dev", "GMB Optimization", "90+ Web Speed"],
      theme: {
        cardBg: "from-[#081526]/95 via-[#040d18]/95 to-[#02050b]/98",
        border: "border-cyan-500/30 hover:border-cyan-400/60",
        shadow: "shadow-[0_12px_45px_rgba(6,182,212,0.18)]",
        flare: "bg-cyan-600/25",
        badge: "bg-cyan-950/90 border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
        title: "text-saas-cyan",
        ring: "from-cyan-400 via-blue-500 to-purple-500",
        chip: "bg-cyan-500/10 border-cyan-400/30 text-cyan-200",
        dots: "rgba(6,182,212,0.12)"
      }
    },
  ];

  const stats = [
    { 
      label: "Brands Ranked in Top 3", 
      value: "100+", 
      icon: <Trophy size={18} className="text-amber-400" />,
      gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
      border: "border-amber-500/30 dark:border-amber-500/20 hover:border-amber-400/50",
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.12)]",
      numberColor: "from-amber-300 via-amber-200 to-yellow-100",
      iconBg: "bg-amber-500/15 border-amber-500/30",
    },
    { 
      label: "Client Revenue Generated", 
      value: "₹5Cr+", 
      icon: <Zap size={18} className="text-cyan-400" />,
      gradient: "from-cyan-500/15 via-blue-500/5 to-transparent",
      border: "border-cyan-500/30 dark:border-cyan-500/20 hover:border-cyan-400/50",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.12)]",
      numberColor: "from-cyan-300 via-sky-200 to-blue-100",
      iconBg: "bg-cyan-500/15 border-cyan-500/30",
    },
    { 
      label: "Google Map Pack Rating", 
      value: "5.0 ★", 
      icon: <Star size={18} className="text-purple-400 fill-purple-400" />,
      gradient: "from-purple-500/15 via-fuchsia-500/5 to-transparent",
      border: "border-purple-500/30 dark:border-purple-500/20 hover:border-purple-400/50",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.12)]",
      numberColor: "from-purple-300 via-fuchsia-200 to-pink-100",
      iconBg: "bg-purple-500/15 border-purple-500/30",
    },
    { 
      label: "Web Speed Standard", 
      value: "90+", 
      icon: <Sparkles size={18} className="text-emerald-400" />,
      gradient: "from-emerald-500/15 via-teal-500/5 to-transparent",
      border: "border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-400/50",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.12)]",
      numberColor: "from-emerald-300 via-teal-200 to-green-100",
      iconBg: "bg-emerald-500/15 border-emerald-500/30",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10 flex justify-center overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_65%)] pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles size={13} className="text-purple-600 dark:text-saas-cyan" /> PUNE HEADQUARTERS • LEADERSHIP &amp; ARCHITECTS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-purple-950 dark:text-white">
            The Growth Architects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Behind Quantum Reach Media.
            </span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed">
            Headquartered in Wadgaon Sheri, Pune, we bridge sub-second Next.js web performance with algorithmic search optimization and data-backed performance advertising.
          </p>
        </div>

        {/* E-E-A-T Authority Stats Strip - Creative, Colored & Interactive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-14 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={cn(
                "group relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-gradient-to-b border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
                stat.gradient,
                stat.border,
                stat.glow
              )}
            >
              {/* Corner Ambient Flare */}
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className={cn("mb-2.5 p-2 rounded-xl border flex items-center justify-center", stat.iconBg)}>
                  {stat.icon}
                </div>
                <span className={cn("text-2xl sm:text-3xl font-sans font-extrabold tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-r", stat.numberColor)}>
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-purple-900/80 dark:text-zinc-300 leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* 2-Column Founder Cards - Proportional, Compact & Graphic Enriched */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[860px] mx-auto">
          {architects.map((person, index) => (
            <div 
              key={index} 
              className={cn(
                "about-card group relative overflow-hidden p-6 sm:p-7 rounded-3xl border bg-gradient-to-b backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between",
                person.theme.cardBg,
                person.theme.border,
                person.theme.shadow
              )}
            >
              {/* Atmospheric Corner Ambient Flare Graphic */}
              <div className={cn("absolute -top-14 -right-14 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-75 transition-opacity", person.theme.flare)} />

              {/* Architectural Grid Micro-Pattern Texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
                style={{
                  backgroundImage: `radial-gradient(${person.theme.dots} 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center gap-3.5 w-full">
                {/* Glowing Profile Frame */}
                <div className="relative isolate rounded-full bg-black/80 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.6)]">
                  <div className={`p-1 rounded-full bg-gradient-to-r ${person.theme.ring} shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform duration-500 group-hover:scale-105`}>
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-zinc-950 bg-zinc-900 shrink-0">
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
                <span className={cn("px-3.5 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider", person.theme.badge)}>
                  {person.role}
                </span>

                {/* Info Metadata */}
                <div className="space-y-1 w-full flex flex-col items-center">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                    {person.name}
                  </h3>
                  
                  <p className={cn("text-xs font-mono uppercase tracking-widest font-bold", person.theme.title)}>
                    {person.title}
                  </p>
                  
                  <p className="text-zinc-300/90 text-xs sm:text-sm leading-relaxed font-medium max-w-[340px] pt-1">
                    {person.bio}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 justify-center">
                  {person.skills.map((skill, i) => (
                    <span key={i} className={cn("text-[10px] px-2.5 py-0.5 rounded-full border font-medium", person.theme.chip)}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
