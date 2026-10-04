"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Sparkles, Quote, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  metric: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    name: "Dr. Varun",
    role: "Chief Surgeon",
    company: "Dr. Varun's Dental, Viman Nagar",
    avatar: "/dr-varun-preview.jpg",
    rating: 5,
    text: "Quantum Reach Media took our clinic from page 3 to #1 in the Google Map Pack in 45 days. High-intent patient calls grew +340%.",
    metric: "+340% Local Calls",
  },
  {
    name: "Dr. Poonam",
    role: "Cosmetic Dentist",
    company: "Cosmetic Dental Clinic",
    avatar: "/dr-varun-preview.jpg",
    rating: 5,
    text: "Sub-second Next.js page loads with a 98 PageSpeed score. Inbound patient appointment bookings are on complete autopilot.",
    metric: "90+ Web Speed Score",
  },
  {
    name: "Rajiv Kulkarni",
    role: "Marketing Head",
    company: "Rayya Pharma",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "Positioned Rayya Pharma as the top cited pharmaceutical distributor across ChatGPT, Claude, and Gemini AI engines.",
    metric: "Top AEO Citation",
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "Dr. Meera June",
    role: "Medical Director",
    company: "June Women's Health",
    avatar: "/shreyas.jpg",
    rating: 5,
    text: "Stunning web architecture scoring 90+ on Google Core Web Vitals. Organic high-intent inquiries increased +210%.",
    metric: "+210% Organic Leads",
  },
  {
    name: "Vikramaditya S.",
    role: "Operations Lead",
    company: "Ariix Hair & Skin Clinic",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "Targeted Meta ad funnels and CAPI tracking delivered a 4.2x ROAS within our first month of scaling patient acquisition.",
    metric: "4.2x ROAS",
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Operations Director",
    company: "Apollo Dental Partner",
    avatar: "/shreyas.jpg",
    rating: 5,
    text: "Flawless server-side GA4 attribution and GMB optimization. Every phone lead is mapped directly to high-margin treatments.",
    metric: "100% Attribution",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative overflow-hidden w-full max-w-[340px] sm:max-w-[380px] p-5 sm:p-6 flex flex-col justify-between shrink-0 bg-white text-zinc-900 border border-purple-200/80 rounded-2xl shadow-[0_10px_30px_-5px_rgba(147,51,234,0.12),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-8px_rgba(147,51,234,0.22)] hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 group select-none">
      {/* Luminous Top Purple Horizon Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* Decorative Subtle Quote Mark Background Watermark */}
      <Quote className="absolute top-4 right-4 w-9 h-9 text-purple-100/90 -rotate-6 pointer-events-none group-hover:text-purple-200/80 transition-colors" />

      {/* Header Row: Avatar, Name, Company & Rating */}
      <div className="relative z-10 flex items-start justify-between mb-3.5 gap-2">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar with Gradient Border Ring & Verified Badge */}
          <div className="relative shrink-0">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 shadow-sm">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white border border-white">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-xs">
              <CheckCircle2 size={10} className="stroke-[3]" />
            </span>
          </div>

          <div className="min-w-0">
            <h4 className="font-sans font-extrabold text-sm sm:text-[15px] text-zinc-900 tracking-tight leading-tight truncate">
              {item.name}
            </h4>
            <p className="text-[11px] font-medium text-purple-900/80 truncate mt-0.5">
              {item.company}
            </p>
          </div>
        </div>

        {/* 5.0 Star Rating Pill */}
        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-full shrink-0 shadow-xs">
          <div className="flex text-amber-500">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-800">5.0</span>
        </div>
      </div>

      {/* Review Text Body */}
      <p className="relative z-10 text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-sans font-medium mb-4 line-clamp-3">
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Bottom Row: Verified Metric Outcome Tag & Live Trust Signal */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-purple-100/70 gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50/90 border border-purple-200/80 text-purple-900 font-mono font-bold text-[10px] sm:text-[11px] shadow-xs">
          <TrendingUp size={12} className="text-purple-600 shrink-0" />
          <span className="truncate">{item.metric}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-zinc-400 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Google Verified</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 150,
  });

  // Left Column moves UPWARDS as page scrolls down (starts shifted down +140px)
  const y1 = useTransform(smoothProgress, [0, 1], [140, -100]);

  // Right Column moves DOWNWARDS as page scrolls down (starts shifted up -120px)
  const y2 = useTransform(smoothProgress, [0, 1], [-120, 120]);

  return (
    <section id="reviews" ref={sectionRef} className="py-32 relative z-10 overflow-hidden flex flex-col items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-saas-purple/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-saas-cyan/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Shortened 2-Line Heading */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-900 dark:text-saas-cyan shadow-[0_0_20px_rgba(147,51,234,0.15)]">
              <Sparkles size={14} /> VERIFIED CLIENT RESULTS &amp; 5.0★ REVIEWS
            </div>
            
            <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-purple-950 dark:text-white leading-tight">
              Trusted by Ambitious Brands <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
                Across Pune &amp; Beyond.
              </span>
            </h2>
            
            <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
              Verified growth benchmarks from Pune&apos;s leading medical clinics, B2B distributors, and high-growth startups dominating Google Search and Google Map Pack.
            </p>

            {/* Rating Trust Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 text-purple-950 dark:text-white font-bold text-sm">
                <span className="text-yellow-600 dark:text-yellow-400 font-extrabold text-lg">5.0/5.0</span>
                <div className="flex text-yellow-500 dark:text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 dark:fill-yellow-400 text-yellow-500 dark:text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="h-4 w-px bg-purple-300 dark:bg-white/10" />
              <div className="text-xs text-purple-950/80 dark:text-zinc-400 font-mono font-medium">
                Over <span className="text-purple-900 dark:text-saas-cyan font-bold">45+ Pune Brands</span> Scaled
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-sm transition-all shadow-md hover:scale-105"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Right Column: Scroll-Driven Cards Container */}
          <div className="lg:col-span-7 relative h-[600px]">

            {/* 
              Single CSS mask handles the top & bottom fade-out.
              Using the page background color (transparent → visible → transparent) ensures 
              the card edges dissolve seamlessly into whatever is behind — purple glow, 
              dark background, etc. No opaque overlays that create visible bands.
            */}
            <div
              className="relative h-full overflow-hidden rounded-2xl bg-transparent p-3"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="grid h-full grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Column 1: Left column moves UPWARDS */}
                <div className="relative h-full overflow-visible">
                  <motion.div
                    className="flex flex-col gap-6"
                    style={{ y: y1 }}
                  >
                    {testimonialsRow1.map((item, idx) => (
                      <TestimonialCard key={`col1-${idx}`} item={item} />
                    ))}
                  </motion.div>
                </div>

                {/* Column 2: Right column moves DOWNWARDS */}
                <div className="relative h-full overflow-visible">
                  <motion.div
                    className="flex flex-col gap-6"
                    style={{ y: y2 }}
                  >
                    {testimonialsRow2.map((item, idx) => (
                      <TestimonialCard key={`col2-${idx}`} item={item} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
