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
  },
  {
    slug: "authority-building-in-pune",
    title: "Authority Building & PR",
    description: "Tier-1 editorial backlinks, digital PR outreach, and high-DA placements that permanently elevate domain trust.",
    tag: "High-DA Backlinks",
    icon: <TrendingUp className="w-5 h-5 text-yellow-400" />
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
            <Link key={i} href={`/services/${service.slug}`}>
              <GlowCard className="p-6 service-card flex flex-col items-start group transition-all cursor-pointer h-full justify-between">
                <div>
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
                <div className="flex items-center gap-1 text-[11px] font-bold text-purple-700 dark:text-saas-cyan group-hover:translate-x-1 transition-transform pt-2 border-t border-purple-100 dark:border-white/5 w-full">
                  <span>Explore Technical Workflow</span>
                  <ArrowRight size={12} />
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        {/* Full Protocols Directory CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_25px_rgba(147,51,234,0.35)] transition-all group"
          >
            <span>Explore All 12 Growth Protocols &amp; Deliverables</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-purple-900/70 dark:text-zinc-400 mt-3 font-medium">
            Next.js Web Speed Guarantee, GMB 3-Pack Framework, AEO / GEO AI Search, Meta CAPI &amp; GA4 Telemetry.
          </p>
        </div>
      </div>
    </section>
  );
}
