"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Code2, 
  Search, 
  Compass,
  ArrowUpRight,
  Users
} from "lucide-react";

const puneDistricts = [
  {
    id: "kharadi",
    name: "Kharadi & EON IT Park",
    focus: "IT Parks & Healthcare Clinics",
    badge: "Tech Corridor",
    stats: "+340% Local Calls",
    highlight: "Google 3-Pack Map Dominance near EON Free Zone & WTC Pune.",
    color: "from-purple-500/20 to-purple-950/40 border-purple-500/30 text-purple-300"
  },
  {
    id: "viman-nagar",
    name: "Viman Nagar & Nagar Road",
    focus: "Retail, Dental & Hospitality",
    badge: "Commercial Hub",
    stats: "Top 3 Map Pack",
    highlight: "High-intent patient bookings and retail discovery along Nagar Road.",
    color: "from-cyan-500/20 to-cyan-950/40 border-cyan-500/30 text-cyan-300"
  },
  {
    id: "baner",
    name: "Baner & Balewadi High St",
    focus: "Startups & Corporate Practices",
    badge: "High Growth",
    stats: "4.8x Ad ROAS",
    highlight: "High-ROI Google & Meta ads funnels paired with sub-500ms web apps.",
    color: "from-amber-500/20 to-amber-950/40 border-amber-500/30 text-amber-300"
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi Infotech Park",
    focus: "Phase 1, 2, 3 Tech Firms",
    badge: "Enterprise Tech",
    stats: "Organic #1 Rank",
    highlight: "National and global technical SEO visibility for software consultancies.",
    color: "from-emerald-500/20 to-emerald-950/40 border-emerald-500/30 text-emerald-300"
  },
  {
    id: "koregaon-park",
    name: "Koregaon Park & Kalyani Nagar",
    focus: "Luxury Real Estate & Elite Clinics",
    badge: "High-Ticket Leads",
    stats: "Premium Inbound",
    highlight: "Positioning boutique practices as the undisputed #1 regional choice.",
    color: "from-fuchsia-500/20 to-fuchsia-950/40 border-fuchsia-500/30 text-fuchsia-300"
  },
  {
    id: "hadapsar",
    name: "Hadapsar & Magarpatta City",
    focus: "Cybercity & Industrial Leaders",
    badge: "B2B Expansion",
    stats: "Zero Lead Waste",
    highlight: "Multi-channel PPC advertising capturing commercial enterprise buyers.",
    color: "from-blue-500/20 to-blue-950/40 border-blue-500/30 text-blue-300"
  },
  {
    id: "kothrud",
    name: "Kothrud & Shivaji Nagar",
    focus: "Professional & Healthcare Firms",
    badge: "Central Pune",
    stats: "Page 1 Dominance",
    highlight: "Algorithmic search dominance for established professional institutions.",
    color: "from-rose-500/20 to-rose-950/40 border-rose-500/30 text-rose-300"
  },
  {
    id: "wakad",
    name: "Wakad & PCMC Corridor",
    focus: "Rapid Commercial & Clinic Hub",
    badge: "PCMC Belt",
    stats: "Review Velocity",
    highlight: "Automated Google review acceleration and localized geo-fencing.",
    color: "from-teal-500/20 to-teal-950/40 border-teal-500/30 text-teal-300"
  }
];

const pillars = [
  {
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    badge: "SUB-500MS WEB SPEED",
    title: "90+ Speed Standards",
    desc: "Every platform we build uses Next.js with zero template bloat to guarantee 90+ PageSpeed and flawless mobile Core Web Vitals.",
    chip: "Guaranteed 90+ PageSpeed"
  },
  {
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    badge: "SERVER-SIDE DATA LAKE",
    title: "Revenue-Driven Attribution",
    desc: "We track actual phone calls, booked appointments, and closed sales through server-side CAPI and GA4 telemetry.",
    chip: "100% Attribution Accuracy"
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    badge: "ALGORITHMIC RESILIENCE",
    title: "Core Update Immunity",
    desc: "Entity-based SEO and semantic Knowledge Graph schemas protect your rankings from Google algorithm disruptions.",
    chip: "Entity Schema Protected"
  }
];

const blueprintSteps = [
  {
    num: "01",
    title: "Diagnostic Audit",
    timeframe: "Days 1 – 7",
    desc: "Technical crawl, Core Web Vitals audit, GMB geo-radius mapping, and competitor gap discovery."
  },
  {
    num: "02",
    title: "Entity Blueprint",
    timeframe: "Days 8 – 20",
    desc: "High-converting Next.js UX layout, JSON-LD schema graphs, and server tracking setup."
  },
  {
    num: "03",
    title: "Velocity Launch",
    timeframe: "Days 21 – 50",
    desc: "Fast web deployment, topical authority content publishing, and turning on paid funnels."
  },
  {
    num: "04",
    title: "Revenue Scale",
    timeframe: "Days 51 – 90+",
    desc: "Continuous A/B conversion rate tuning and scaling winning ad sets to maximize monthly profit."
  }
];

export function AboutPageView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDistrict, setActiveDistrict] = useState(puneDistricts[0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".about-fade-up",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".founder-split-row",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founders-container",
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full overflow-hidden text-zinc-100">
      
      {/* ============================================================== */}
      {/* SECTION 1: HERO & MISSION STATEMENT                            */}
      {/* ============================================================== */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
        
        {/* Left and Right Ambient Theme Gradients */}
        <div className="absolute top-12 left-[-8%] w-[480px] h-[480px] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-16 right-[-8%] w-[480px] h-[480px] bg-cyan-600/18 rounded-full blur-[140px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            
            {/* Pill Badge (Clean - No green dot) */}
            <div className="about-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-xs font-mono font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <Sparkles size={13} className="text-saas-cyan" /> 
              <span>PUNE&apos;S GROWTH &amp; SEO ARCHITECTS</span>
            </div>

            {/* H1 Title (Balanced, not overwhelmingly big) */}
            <h1 className="about-fade-up text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Engineering Search Dominance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-saas-cyan">
                Driving Measurable Revenue.
              </span>
            </h1>

            {/* Subtitle / Mission Statement */}
            <p className="about-fade-up text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Quantum Reach Media was founded in Pune by <strong className="text-white">Tushar Tanpure</strong> and <strong className="text-white">Shreyas Ambhaikar</strong> to replace sluggish templates and vanity metrics with verifiable engineering. We combine <strong className="text-white">sub-second Next.js web development</strong> with aggressive <strong className="text-white">Google 3-pack local search dominance</strong> and high-converting paid ad acquisition.
            </p>

            {/* 4 Authority Stats Strip (Vibrant, colorful, beautifully styled) */}
            <div className="about-fade-up grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 pt-4 text-left">
              
              {/* PageSpeed - Purple & Fuchsia Gradient */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-purple-950/60 via-purple-900/25 to-zinc-950 border border-purple-500/40 shadow-[0_8px_25px_rgba(147,51,234,0.18)] hover:border-purple-400 transition-all group">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase text-purple-300 font-bold tracking-wider">PageSpeed</span>
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Zap size={13} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300">
                  90+
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-1">Web Speed Guaranteed</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Sub-500ms Response Time</div>
              </div>

              {/* Map Pack - Emerald & Teal Gradient */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-emerald-950/60 via-emerald-900/25 to-zinc-950 border border-emerald-500/40 shadow-[0_8px_25px_rgba(16,185,129,0.18)] hover:border-emerald-400 transition-all group">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold tracking-wider">Map Pack</span>
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <TrendingUp size={13} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                  +340%
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-1">Organic Call Velocity</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Google 3-Pack Supremacy</div>
              </div>

              {/* ROAS - Amber & Gold Gradient */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/60 via-amber-900/25 to-zinc-950 border border-amber-500/40 shadow-[0_8px_25px_rgba(245,158,11,0.18)] hover:border-amber-400 transition-all group">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase text-amber-300 font-bold tracking-wider">ROAS Scale</span>
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                    <Target size={13} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300">
                  4.8x
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-1">Average Campaign ROAS</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Google &amp; Meta Ad Funnels</div>
              </div>

              {/* Fidelity - Cyan & Blue Gradient */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-cyan-950/60 via-cyan-900/25 to-zinc-950 border border-cyan-500/40 shadow-[0_8px_25px_rgba(6,182,212,0.18)] hover:border-cyan-400 transition-all group">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold tracking-wider">Fidelity</span>
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <ShieldCheck size={13} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300">
                  100%
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-1">Server Data Attribution</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Cookieless CAPI &amp; GA4 Lake</div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: THE FOUNDERS & ARCHITECTS (ALTERNATING SPLIT ROWS)   */}
      {/* ============================================================== */}
      <section className="relative py-16 md:py-20 founders-container">
        
        {/* Left and Right Ambient Flares */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-purple-700/18 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-2/3 -right-20 w-[450px] h-[450px] bg-cyan-600/18 rounded-full blur-[140px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-14 sm:space-y-16">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <Users size={13} className="text-saas-cyan" />
              <span>LEADERSHIP &amp; ARCHITECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">
              Meet The Growth Architects
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Work directly with our founders. No junior middlemen, no generic agency handoffs.
            </p>
          </div>

          {/* FOUNDER 1: TUSHAR TANPURE (Photo Left, Text Right) */}
          <div className="founder-split-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center bg-zinc-950/75 border border-purple-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(147,51,234,0.14)]">
            
            {/* Left Column: Clean Portrait (NO overlay box covering image, NO green dot) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-[280px]">
                
                {/* Purple ambient glow behind portrait */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition-opacity" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-400/40 bg-zinc-900 aspect-square shadow-2xl">
                  <Image 
                    src="/tushar.jpg" 
                    alt="Tushar Tanpure - Founder & Marketing Manager" 
                    fill 
                    className="object-cover object-top contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

              </div>
            </div>

            {/* Right Column: Bio & Core Authority */}
            <div className="md:col-span-7 space-y-3.5 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                <Target size={13} className="text-purple-400" />
                <span>LEAD GENERATION &amp; PAID ACQUISITION</span>
              </div>

              {/* Increased font size for name */}
              <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
                Tushar Tanpure
              </h3>

              {/* Increased font size for title */}
              <div className="text-sm sm:text-base font-mono text-purple-400 font-bold">
                Founder &amp; Marketing Manager
              </div>

              {/* Single concise, authoritative paragraph */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Tushar directs performance marketing, paid acquisition funnels, and lead generation systems at Quantum Reach Media. Specializing in high-intent customer acquisition across Google Search, Performance Max, and Meta (Facebook &amp; Instagram), he crafts direct-response creative assets and scalable conversion architectures that transform marketing spend into predictable, high-ROAS client inquiries for Pune clinics and growing B2B enterprises.
              </p>

              {/* Authority Skill Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {[
                  "Inbound Lead Gen",
                  "Google Search & PMax",
                  "Meta Direct Ads",
                  "Conversion Copywriting",
                  "CAPI Telemetry",
                  "ROAS Maximization"
                ].map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* FOUNDER 2: SHREYAS AMBHAIKAR (Text Left, Photo Right) */}
          <div className="founder-split-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center bg-zinc-950/75 border border-cyan-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(6,182,212,0.14)]">
            
            {/* Left Column: Bio & Core Authority */}
            <div className="md:col-span-7 space-y-3.5 text-left order-2 md:order-1">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                <Code2 size={13} className="text-saas-cyan" />
                <span>TECHNICAL SEO &amp; WEB ARCHITECTURE</span>
              </div>

              {/* Increased font size for name */}
              <h3 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
                Shreyas Ambhaikar
              </h3>

              {/* Increased font size for title */}
              <div className="text-sm sm:text-base font-mono text-cyan-400 font-bold">
                Co-Founder &amp; Technical Architect
              </div>

              {/* Single concise, authoritative paragraph */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Shreyas leads technical SEO systems, sub-second Next.js web application architecture, and Google Business Profile (GMB) 3-pack dominance at Quantum Reach Media. Blending modern computer science engineering with semantic search science, he builds programmatic Knowledge Graph schemas and performance-tuned web platforms that guarantee 90+ PageSpeed scores and propel regional businesses to #1 local rankings across Pune.
              </p>

              {/* Authority Skill Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {[
                  "Local 3-Pack Dominance",
                  "Next.js Web Dev",
                  "90+ PageSpeed",
                  "Schema JSON-LD",
                  "GMB Proximity Ranking",
                  "Programmatic SEO"
                ].map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Column: Clean Portrait (NO overlay box covering image, NO green dot) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2">
              <div className="relative group w-full max-w-[280px]">
                
                {/* Cyan ambient glow behind portrait */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition-opacity" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-zinc-900 aspect-square shadow-2xl">
                  <Image 
                    src="/shreyas.jpg" 
                    alt="Shreyas Ambhaikar - Co-Founder & Technical Architect" 
                    fill 
                    className="object-cover object-top contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: CORE ENGINEERING PILLARS                            */}
      {/* ============================================================== */}
      <section className="relative py-16 md:py-20">
        
        {/* Centered Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/50 text-xs font-mono font-bold uppercase tracking-wider text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
              <ShieldCheck size={13} className="text-purple-400" />
              <span>OUR CORE PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">
              Why Ambitious Brands Choose QRM
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              We replace guesswork and template bloat with verifiable engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 shadow-xl flex flex-col justify-between gap-4 transition-all group hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-saas-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-300">
                  <Check size={13} className="text-emerald-400" />
                  <span>{pillar.chip}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: INTERACTIVE PUNE LOCAL SERVICE COVERAGE             */}
      {/* ============================================================== */}
      <section className="relative py-16 md:py-20">
        
        {/* Dual Corner Ambient Flares */}
        <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-cyan-600/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-purple-600/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-950/50 text-xs font-mono font-bold uppercase tracking-wider text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.15)] backdrop-blur-md">
              <MapPin size={13} className="text-rose-400" />
              <span>PUNE GEOGRAPHIC COVERAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">
              Targeted Local Search Across Pune
            </h2>
            
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Click any district to explore our targeted local search and acquisition focus.
            </p>
          </div>

          {/* Interactive District Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {puneDistricts.map((district) => (
              <button
                key={district.id}
                onClick={() => setActiveDistrict(district)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all border ${
                  activeDistrict.id === district.id
                    ? "bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-105"
                    : "bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {district.name.split(" &")[0]}
              </button>
            ))}
          </div>

          {/* Interactive Active District Feature Card (Clean, minimal, high-impact) */}
          <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-zinc-950/95 via-purple-950/20 to-zinc-950/95 border border-purple-500/30 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin size={15} className="text-rose-400" />
                <h3 className="text-xl font-bold text-white">{activeDistrict.name}</h3>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-saas-cyan">
                  {activeDistrict.badge}
                </span>
              </div>
              <div className="text-xs text-purple-300 font-mono font-semibold">
                {activeDistrict.focus}
              </div>
              <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
                {activeDistrict.highlight}
              </p>
            </div>

            <div className="text-center sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 space-y-2">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Benchmark</div>
              <div className="text-xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
                {activeDistrict.stats}
              </div>
              <Link 
                href="/services/local-seo-gmb"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-saas-cyan hover:underline"
              >
                <span>Target This Hub</span>
                <ArrowRight size={11} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: 4-STEP GROWTH BLUEPRINT                             */}
      {/* ============================================================== */}
      <section className="relative py-16 md:py-20">
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <Zap size={13} className="text-saas-cyan" />
              <span>OUR PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white">
              The 4-Step Growth Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              A systematic 90-day framework to rank and scale your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blueprintSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-saas-cyan/40 transition-all flex flex-col justify-between gap-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-saas-cyan">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {step.timeframe}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: BOTTOM CALL TO ACTION                               */}
      {/* ============================================================== */}
      <section className="relative py-16 md:py-20">
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center relative overflow-hidden bg-gradient-to-r from-purple-950/70 via-zinc-950 to-cyan-950/70 border border-purple-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_50px_rgba(147,51,234,0.25)] space-y-5">
            
            {/* Ambient Background Flares */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-600/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <CheckCircle2 size={13} className="text-saas-cyan" /> 
                <span>Ready to Outrank Competitors in Pune?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white leading-tight">
                Let&apos;s Build Your Search Authority.
              </h2>
              
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed max-w-lg mx-auto">
                Connect directly with our founders, <strong className="text-white">Tushar Tanpure</strong> and <strong className="text-white">Shreyas Ambhaikar</strong>, for a comprehensive 1-on-1 growth audit tailored to your business.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                  Schedule Your Free Strategy Audit
                </Link>

                <Link
                  href="/services"
                  className="px-7 py-3 rounded-full bg-purple-600/70 hover:bg-purple-600 border border-purple-400/40 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  Explore 12 Growth Protocols ↗
                </Link>

                <Link
                  href="/portfolio"
                  className="px-7 py-3 rounded-full bg-zinc-900/90 border border-white/15 text-white hover:bg-white/10 font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  View Verified Pune Case Studies ↗
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
