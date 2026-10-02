"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
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
    text: "Quantum Reach Media brought us from page 3 to #1 in Google Map Pack. Inquiries grew +340%!",
    metric: "+340% Local Calls",
  },
  {
    name: "Dr. Poonam",
    role: "Cosmetic Dentist",
    company: "Cosmetic Dental Clinic",
    avatar: "/dr-varun-preview.jpg",
    rating: 5,
    text: "Sub-second page loads and patient bookings on autopilot. Best web development team.",
    metric: "90+ Web Speed Score",
  },
  {
    name: "Rajiv Kulkarni",
    role: "Marketing Head",
    company: "Rayya Pharma",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "Put us as top recommended distributor in ChatGPT and Gemini searches.",
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
    text: "Stunning website scoring 90+ on Google PageSpeed. Professional and highly responsive.",
    metric: "+210% Organic Leads",
  },
  {
    name: "Vikramaditya S.",
    role: "Operations Lead",
    company: "Ariix Hair & Skin Clinic",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "Our Meta ad campaigns delivered a 4.2x ROAS within the first month.",
    metric: "4.2x ROAS",
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Operations Director",
    company: "Apollo Dental Partner",
    avatar: "/shreyas.jpg",
    rating: 5,
    text: "Flawless call tracking and GMB optimization. Every lead is mapped to keywords.",
    metric: "100% Attribution",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] p-4 sm:p-5 flex flex-col justify-between shrink-0 bg-zinc-50 text-zinc-700 border border-zinc-200/80 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08),0_12px_48px_rgba(0,0,0,0.06)] hover:border-purple-300 transition-all duration-300">
      {/* Header Row: Avatar, Name, Rating */}
      <div className="flex items-center justify-between mb-2.5 gap-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-200 bg-zinc-100 shrink-0">
            <Image src={item.avatar} alt={item.name} fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-800 truncate">
              {item.name}
            </h4>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-500 truncate font-medium">
              {item.company}
            </p>
          </div>
        </div>

        <div className="flex text-yellow-500 shrink-0">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} size={13} className="fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>

      {/* Review Text - Always dark text on white card */}
      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-700 leading-relaxed font-medium mb-3 italic line-clamp-2">
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Bottom Metric Badge */}
      <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px]">
        <span className="font-mono font-bold text-purple-800 dark:text-purple-800 bg-purple-100 dark:bg-purple-100 border border-purple-200 dark:border-purple-200 px-2.5 py-0.5 rounded-full text-[10px]">
          {item.metric}
        </span>
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
                Get Started
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
