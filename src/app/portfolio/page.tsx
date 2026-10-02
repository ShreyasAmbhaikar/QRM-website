"use client";

import { useRef, useState, useEffect } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { ExternalLink, Lock, Sparkles } from "lucide-react";
import Link from "next/link";

function PortfolioCardIframe({ url, name, isHovered }: { url: string; name: string; isHovered: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const width = container.getBoundingClientRect().width;
      if (width > 0) {
        setScale(width / 1440);
      }
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-zinc-950">
      <div
        className="absolute top-0 left-0 w-[1440px] h-[3600px] origin-top-left transition-transform duration-[7s] ease-in-out"
        style={{
          transform: `scale(${scale}) translateY(${isHovered ? "-1200px" : "0px"})`,
          willChange: "transform"
        }}
      >
        <iframe
          src={url}
          className="w-[1440px] h-[3600px] border-none pointer-events-none"
          scrolling="no"
          title={name}
        />
      </div>
    </div>
  );
}

const portfolioSites = [
  {
    name: "Dr. Varun's Dental Clinic",
    domain: "drvarunsdental.com",
    url: "https://www.drvarunsdental.com/dental-clinic-viman-nagar/",
    type: "Dental Clinic & Local GMB",
    location: "Viman Nagar, Pune",
  },
  {
    name: "Dr. Poonam's Women's Clinic",
    domain: "drpoonamswomensclinic.vercel.app",
    url: "https://drpoonamswomensclinic.vercel.app/best-gynecologist-in-keshav-nagar/",
    type: "Gynecology & Obstetrics Portal",
    location: "Keshav Nagar, Pune",
  },
  {
    name: "Rayya Pharma",
    domain: "rayyapharma.vercel.app",
    url: "https://rayyapharma.vercel.app/",
    type: "Pharmaceutical Brand",
    location: "Global & India",
  },
  {
    name: "June Women's Health",
    domain: "junewomenshealth.pages.dev",
    url: "https://junewomenshealth.pages.dev/best-gynecologist-in-lucknow/",
    type: "Women's Health & Multi-City SEO",
    location: "Lucknow",
  },
  {
    name: "Dr. Deepika Lalwani",
    domain: "drdeepikalalwani.pages.dev",
    url: "https://drdeepikalalwani.pages.dev/best-gynecologist-in-kalyani-nagar/",
    type: "Gynecology & Women's Health",
    location: "Kalyani Nagar, Pune",
  },
  {
    name: "Ariix Hair & Skin Clinic",
    domain: "ariixhairandskinclinic.pages.dev",
    url: "https://ariixhairandskinclinic.pages.dev/best-skin-care-clinic-in-pune/",
    type: "Skin Care & Aesthetics",
    location: "Pune",
  }
];

function PortfolioCardItem({ site }: { site: (typeof portfolioSites)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowCard className="bg-saas-surface border border-purple-200/50 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-md transition-all duration-300 hover:border-purple-300 dark:hover:border-saas-cyan/40">
        
        {/* Mac Chrome Browser Mockup Top Header */}
        <div className="bg-zinc-950 px-3 py-2 border-b border-white/10 flex items-center justify-between z-20 gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          
          {/* Browser Address Bar */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 w-1/2 max-w-[130px] truncate justify-center">
            <Lock size={9} className="text-emerald-400 flex-shrink-0" />
            <span className="truncate">{site.domain}</span>
          </div>

          {/* Visit Live Site Button */}
          <Link 
            href={site.url} 
            target="_blank"
            className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 dark:text-saas-cyan hover:text-white bg-purple-100 dark:bg-saas-cyan/10 hover:bg-purple-700 dark:hover:bg-saas-cyan border border-purple-300 dark:border-saas-cyan/30 px-2 py-0.5 rounded-full transition-all group/btn flex-shrink-0 whitespace-nowrap"
          >
            <span>Visit Live Site</span>
            <ExternalLink size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Slightly Taller 16:11 Aspect Desktop Viewport */}
        <div className="relative w-full aspect-[16/11] overflow-hidden bg-zinc-950">
          <PortfolioCardIframe url={site.url} name={site.name} isHovered={isHovered} />
        </div>
      </GlowCard>

      {/* Metadata Below Card */}
      <div className="flex items-center justify-between px-1 pt-1">
        <div className="min-w-0 pr-2">
          <h3 className="text-sm font-sans font-bold text-purple-950 dark:text-white tracking-tight truncate">
            {site.name}
          </h3>
          <p className="text-purple-700 dark:text-saas-cyan text-[11px] font-semibold mt-0.5 truncate">
            {site.type} • <span className="text-purple-950/70 dark:text-zinc-400 font-normal">{site.location}</span>
          </p>
        </div>
        <Link 
          href={site.url}
          target="_blank"
          className="w-7 h-7 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 flex items-center justify-center text-purple-900 dark:text-zinc-400 hover:text-white hover:bg-purple-700 dark:hover:bg-saas-cyan/20 dark:hover:border-saas-cyan/50 transition-colors shrink-0"
        >
          <ExternalLink size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-36 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Hero Banner Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} className="text-purple-600 dark:text-saas-cyan" /> Featured Case Studies
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-purple-950 dark:text-white leading-tight">
            Digital Architectures That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Dominate Markets.
            </span>
          </h1>
          <p className="text-purple-950/80 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
            Hover over any desktop preview to auto-scroll fast all the way to the footer. Click <span className="text-purple-700 dark:text-saas-cyan font-bold">Visit Live Site ↗</span> to launch the live site in full view.
          </p>
        </div>

        {/* 3-Column Grid Maintaining Exact 16:9 Aspect-Video Desktop Ratio & Sleek Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {portfolioSites.map((site, index) => (
            <PortfolioCardItem key={index} site={site} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-100/80 via-purple-50/80 to-purple-100/80 dark:from-saas-cyan/10 dark:via-saas-purple/10 dark:to-saas-cyan/10 border border-purple-200/60 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-purple-950 dark:text-white mb-3">Ready to dominate your local market?</h2>
          <p className="text-purple-950/80 dark:text-zinc-400 max-w-xl mx-auto mb-6 text-sm sm:text-base font-medium">
            We build custom, high-speed architectures engineered to capture top Google Map Pack rankings and AI search recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-950 text-white dark:bg-white dark:text-black font-bold text-sm hover:bg-purple-900 dark:hover:bg-zinc-200 transition-colors shadow-md hover:scale-105"
          >
            Get In Touch With The Architects
          </Link>
        </div>

      </div>
    </main>
  );
}
