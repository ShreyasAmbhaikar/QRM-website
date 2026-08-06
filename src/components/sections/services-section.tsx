"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowCard } from "@/components/ui/glow-card";
import { MapPin, Code, Bot, Search, Megaphone, LineChart, FileText, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Local SEO & GMB Optimization",
    description: "Dominate the map pack and capture local leads in Pune and beyond.",
    icon: <MapPin className="w-5 h-5 text-saas-cyan" />
  },
  {
    title: "SEO Website Development",
    description: "High-performance React/Next.js websites scoring 100/100 on Lighthouse.",
    icon: <Code className="w-5 h-5 text-saas-purple" />
  },
  {
    title: "AEO / GEO Optimization",
    description: "Structure data to rank your brand inside LLMs like ChatGPT, Claude, and Gemini.",
    icon: <Bot className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Traditional SEO Mastery",
    description: "Comprehensive technical and on-page SEO to dominate standard search algorithms.",
    icon: <Search className="w-5 h-5 text-yellow-400" />
  },
  {
    title: "Meta Advertisements",
    description: "Data-driven ad campaigns on Facebook & Instagram for high-intent leads.",
    icon: <Megaphone className="w-5 h-5 text-saas-cyan" />
  },
  {
    title: "Analytics & Tracking",
    description: "Real-time dashboards and data insights to track ROI and conversions flawlessly.",
    icon: <LineChart className="w-5 h-5 text-saas-purple" />
  },
  {
    title: "Content Architecture",
    description: "High-value, intent-driven content optimized for human readers and AI crawlers.",
    icon: <FileText className="w-5 h-5 text-emerald-400" />
  },
  {
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
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-4 tracking-tight">
            Prioritizing <span className="text-white">performance</span><br/>
            your foundation for scaling
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">Data remains secure without extensive user training.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <GlowCard key={i} className="p-6 service-card flex flex-col items-start bg-saas-surface">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 text-zinc-100">{service.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{service.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
