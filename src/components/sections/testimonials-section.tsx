"use client";

import { GlowCard } from "@/components/ui/glow-card";
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  metric: string;
  badge: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    name: "Dr. Varun",
    role: "Founder & Chief Surgeon",
    company: "Dr. Varun's Dental Clinic, Viman Nagar",
    avatar: "/dr-varun-preview.jpg",
    rating: 5,
    text: "Quantum Reach Media brought us from page 3 to #1 in the Google 3-Pack Map Pack for Viman Nagar dental searches. Monthly inquiries grew by +340% within 60 days!",
    metric: "+340% Local Calls",
    badge: "Verified Partner ✓"
  },
  {
    name: "Dr. Poonam",
    role: "Lead Cosmetic Dentist",
    company: "Dr. Poonam's Cosmetic & Dental Clinic",
    avatar: "/dr-varun-preview.jpg",
    rating: 5,
    text: "Their Next.js web development is incredible. Sub-second page loads and our Google Business profile now generates patient bookings on autopilot.",
    metric: "100/100 Speed Score",
    badge: "Verified Partner ✓"
  },
  {
    name: "Rajiv Kulkarni",
    role: "Head of Marketing",
    company: "Rayya Pharma",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "The AEO strategy they engineered put Rayya Pharma as the top recommended pharmaceutical distributor inside ChatGPT and Gemini searches.",
    metric: "Top GPTBot Citation",
    badge: "Verified Enterprise ✓"
  }
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "Dr. Meera June",
    role: "Medical Director",
    company: "June Women's Health Clinic",
    avatar: "/shreyas.jpg",
    rating: 5,
    text: "Tushar and Shreyas built a stunning website scoring 100/100 on Google Lighthouse. Professional, highly responsive, and ultra-knowledgeable in SEO.",
    metric: "+210% Organic Leads",
    badge: "Verified Partner ✓"
  },
  {
    name: "Vikramaditya Shinde",
    role: "Operations Lead",
    company: "Ariix Hair & Skin Clinic",
    avatar: "/tushar.jpg",
    rating: 5,
    text: "Our Meta ad campaigns delivered a 4.2x ROAS within the first month. Quantum Reach Media is by far the best digital growth agency in Pune.",
    metric: "4.2x ROAS",
    badge: "Verified Partner ✓"
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Director of Operations",
    company: "Apollo Dental Partner Clinic",
    avatar: "/shreyas.jpg",
    rating: 5,
    text: "Flawless analytics tracking and GMB optimization. We now track every phone call and patient appointment back to its exact Google keyword.",
    metric: "100% Attribution",
    badge: "Verified Enterprise ✓"
  }
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <GlowCard className="w-[360px] md:w-[400px] p-6 transition-all flex flex-col justify-between shrink-0">
      <div>
        {/* Rating Stars & Metric Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-500 dark:fill-yellow-400 text-yellow-500 dark:text-yellow-400" />
            ))}
          </div>
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-saas-cyan/10 border border-purple-300 dark:border-saas-cyan/30 text-purple-900 dark:text-saas-cyan">
            {item.metric}
          </span>
        </div>

        {/* Quote text */}
        <p className="text-purple-950 dark:text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 italic font-medium">
          "{item.text}"
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-4 border-t border-purple-200 dark:border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-400 dark:border-saas-cyan/40 bg-zinc-900 flex-shrink-0">
            <Image src={item.avatar} alt={item.name} fill className="object-cover" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-purple-950 dark:text-white">{item.name}</div>
            <div className="text-[11px] text-purple-900/80 dark:text-zinc-400 leading-none mt-0.5 font-medium">{item.company}</div>
          </div>
        </div>

        <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 px-2 py-0.5 rounded">
          {item.badge}
        </span>
      </div>
    </GlowCard>
  );
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-28 relative z-10 overflow-hidden flex flex-col items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-saas-purple/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-saas-cyan/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-900 dark:text-saas-cyan mb-4 shadow-[0_0_20px_rgba(147,51,234,0.15)]">
          <Sparkles size={14} /> CLIENT PROOF & VERIFIED REVIEWS
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          What Industry Leaders & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
            Doctors Say About Us.
          </span>
        </h2>
        <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-medium">
          Verified growth benchmarks from Pune's premier dental clinics, medical centers, and commercial enterprises.
        </p>

        {/* Rating Trust Bar */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-purple-950 dark:text-white font-bold text-sm">
            <span className="text-yellow-600 dark:text-yellow-400 font-extrabold text-lg">4.9/5.0</span>
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
      </div>

      {/* Dual Row Marquee Carousels */}
      <div className="w-full relative space-y-6">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-saas-base to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-saas-base to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="group/row1 flex gap-6 overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee shrink-0 group-hover/row1:[animation-play-state:paused]">
            {testimonialsRow1.map((item, idx) => (
              <TestimonialCard key={`r1-1-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex gap-6 animate-marquee shrink-0 group-hover/row1:[animation-play-state:paused]" aria-hidden="true">
            {testimonialsRow1.map((item, idx) => (
              <TestimonialCard key={`r1-2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="group/row2 flex gap-6 overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee-reverse shrink-0 group-hover/row2:[animation-play-state:paused]">
            {testimonialsRow2.map((item, idx) => (
              <TestimonialCard key={`r2-1-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex gap-6 animate-marquee-reverse shrink-0 group-hover/row2:[animation-play-state:paused]" aria-hidden="true">
            {testimonialsRow2.map((item, idx) => (
              <TestimonialCard key={`r2-2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
