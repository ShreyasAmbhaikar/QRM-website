"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";
import Link from "next/link";
import { MapPin, Code, Bot, Search, Megaphone, LineChart, FileText, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    slug: "local-seo-gmb-in-pune",
    title: "Local SEO & GMB Optimization",
    description: "Capture the #1 spot in Google 3-Pack Map Results across Pune, Wadgaon Sheri, Viman Nagar, and Baner with geo-tagged schema.",
    tag: "+340% Local Calls",
    icon: <MapPin className="w-5 h-5 text-saas-cyan" />
  },
  {
    slug: "seo-web-development-in-pune",
    title: "SEO Website Development",
    description: "Lightning-fast Next.js architectures scoring 90+ on Google PageSpeed with sub-500ms Core Web Vitals for maximum crawlability.",
    tag: "90+ Web Speed",
    icon: <Code className="w-5 h-5 text-saas-purple" />
  },
  {
    slug: "aeo-geo-optimization-in-pune",
    title: "AEO & GEO AI Optimization",
    description: "Train generative LLMs (ChatGPT, Gemini, Perplexity) to cite your brand as the canonical authority for industry searches.",
    tag: "AI Engine Citations",
    icon: <Bot className="w-5 h-5 text-emerald-400" />
  },
  {
    slug: "traditional-seo-in-pune",
    title: "Traditional SEO Mastery",
    description: "Technical audits, crawl budget optimization, and keyword clustering to dominate competitive Pune & national search results.",
    tag: "Top 3 Rankings",
    icon: <Search className="w-5 h-5 text-yellow-400" />
  },
  {
    slug: "meta-advertisements-in-pune",
    title: "Meta & Instagram Ads",
    description: "High-converting creative funnels and CAPI tracking delivering predictable ROAS and qualified B2B/B2C leads.",
    tag: "4.8x Avg ROAS",
    icon: <Megaphone className="w-5 h-5 text-saas-cyan" />
  },
  {
    slug: "analytics-tracking-in-pune",
    title: "Analytics & Conversion Tracking",
    description: "Server-side GTM, GA4 attribution, and custom revenue dashboards to track true CAC, LTV, and pipeline ROI.",
    tag: "100% Attribution",
    icon: <LineChart className="w-5 h-5 text-saas-purple" />
  },
  {
    slug: "content-architecture-in-pune",
    title: "Semantic Content Architecture",
    description: "Intent-driven editorial clusters optimized for both human decision-makers and Google search NLP algorithms.",
    tag: "Topic Authority",
    icon: <FileText className="w-5 h-5 text-emerald-400" />
  }
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".service-card",
      { scale: 0.9, opacity: 0, y: 20 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative z-10 flex justify-center">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles size={13} className="text-purple-600 dark:text-saas-cyan" /> COMPREHENSIVE DIGITAL GROWTH &amp; SEO
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white">
            Growth Architecture <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">
              Engineered for Pune &amp; Global Dominance.
            </span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
            From #1 Google Map Pack rankings in Pune to multi-channel paid acquisition, our data-backed systems turn search intent into measurable pipeline and revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Link key={i} href={`/services/${service.slug}`} className="h-full flex flex-col block">
              <GlowCard
                className="service-card group transition-all cursor-pointer h-full flex flex-col"
                innerClassName="p-6 flex flex-col justify-between h-full flex-1"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between w-full mb-5">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-200/60 dark:bg-white/10 text-purple-950 dark:text-zinc-300">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold mb-2 text-purple-950 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">{service.title}</h3>
                  <p className="text-purple-900/80 dark:text-zinc-400 text-xs leading-relaxed mb-4 font-medium">{service.description}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-purple-100 dark:border-white/5 w-full flex items-center gap-1 text-[11px] font-bold text-purple-700 dark:text-saas-cyan group-hover:translate-x-1 transition-transform">
                  <span>Explore Technical Workflow</span>
                  <ArrowRight size={12} />
                </div>
              </GlowCard>
            </Link>
          ))}

          {/* 8th Card: Creative Luminous Purple "Explore All Services" Gateway Card */}
          <Link href="/services" className="h-full flex flex-col block group/gateway">
            <div className="service-card relative h-full rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-purple-400/80 dark:border-purple-500/50 bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-950 dark:from-[#1c0836] dark:via-[#110325] dark:to-[#070110] text-white shadow-[0_10px_30px_rgba(147,51,234,0.3)] dark:shadow-[0_0_35px_rgba(168,85,247,0.25)] hover:shadow-[0_15px_40px_rgba(147,51,234,0.45)] dark:hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] hover:border-purple-300 dark:hover:border-purple-400 transition-all duration-300 cursor-pointer">
              {/* Luminous Ambient Background Glows */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-400/25 dark:bg-purple-500/20 rounded-full blur-[40px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-fuchsia-500/20 dark:bg-fuchsia-600/15 rounded-full blur-[40px] pointer-events-none" />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Top Bar with Icon & 12 Protocols Badge */}
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/15 dark:bg-purple-500/20 border border-white/20 dark:border-purple-400/30 flex items-center justify-center group-hover/gateway:scale-110 transition-transform shadow-inner">
                    <Sparkles className="w-5 h-5 text-white dark:text-purple-300" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/20 dark:bg-purple-400/20 text-white dark:text-purple-200 border border-white/20 dark:border-purple-300/30">
                    12 Protocols
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-sm font-extrabold mb-2 text-white group-hover/gateway:text-purple-200 transition-colors flex items-center gap-1.5">
                  Explore All Services
                </h3>
                <p className="text-white/85 dark:text-purple-200/80 text-xs leading-relaxed mb-4 font-medium">
                  Access our full directory of 12 full-stack SEO, web performance, and paid media architectures engineered for Pune.
                </p>
              </div>

              {/* Bottom Bar: Pinned to bottom, perfectly matching other cards' baseline */}
              <div className="relative z-10 mt-auto pt-3 border-t border-white/20 dark:border-purple-500/25 w-full flex items-center justify-between text-[11px] font-bold text-white group-hover/gateway:text-purple-200 transition-colors">
                <span>View All 12 Services</span>
                <ArrowRight size={13} className="group-hover/gateway:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
