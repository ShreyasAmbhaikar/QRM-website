"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";
import Link from "next/link";
import { MapPin, Code, Bot, Search, Megaphone, LineChart, FileText, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    slug: "local-seo-gmb",
    title: "Local SEO & GMB Optimization",
    description: "Dominate the map pack and capture local leads in Pune and beyond.",
    icon: <MapPin className="w-5 h-5 text-saas-cyan" />
  },
  {
    slug: "seo-web-development",
    title: "SEO Website Development",
    description: "High-performance React/Next.js websites scoring 100/100 on Lighthouse.",
    icon: <Code className="w-5 h-5 text-saas-purple" />
  },
  {
    slug: "aeo-geo-optimization",
    title: "AEO / GEO Optimization",
    description: "Structure data to rank your brand inside LLMs like ChatGPT, Claude, and Gemini.",
    icon: <Bot className="w-5 h-5 text-emerald-400" />
  },
  {
    slug: "traditional-seo",
    title: "Traditional SEO Mastery",
    description: "Comprehensive technical and on-page SEO to dominate standard search algorithms.",
    icon: <Search className="w-5 h-5 text-yellow-400" />
  },
  {
    slug: "meta-advertisements",
    title: "Meta Advertisements",
    description: "Data-driven ad campaigns on Facebook & Instagram for high-intent leads.",
    icon: <Megaphone className="w-5 h-5 text-saas-cyan" />
  },
  {
    slug: "analytics-tracking",
    title: "Analytics & Tracking",
    description: "Real-time dashboards and data insights to track ROI and conversions flawlessly.",
    icon: <LineChart className="w-5 h-5 text-saas-purple" />
  },
  {
    slug: "content-architecture",
    title: "Content Architecture",
    description: "High-value, intent-driven content optimized for human readers and AI crawlers.",
    icon: <FileText className="w-5 h-5 text-emerald-400" />
  },
  {
    slug: "authority-building",
    title: "Authority Building",
    description: "High-quality backlinks and digital PR to skyrocket your domain authority.",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">
            Architectural Capabilities <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">Engineered for Dominance.</span>
          </h2>
          <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base font-medium">Click any service to view dedicated technical workflows, motion graphics, and ROI metrics.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Link key={i} href={`/services/${service.slug}`}>
              <GlowCard className="p-6 service-card flex flex-col items-start group transition-all cursor-pointer h-full justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-extrabold mb-2 text-purple-950 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">{service.title}</h3>
                  <p className="text-purple-900/80 dark:text-zinc-400 text-xs leading-relaxed mb-4 font-medium">{service.description}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-purple-700 dark:text-saas-cyan group-hover:translate-x-1 transition-transform">
                  <span>Explore Workflow</span>
                  <ArrowRight size={12} />
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
