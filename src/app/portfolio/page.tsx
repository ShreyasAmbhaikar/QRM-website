"use client";

import { GlowCard } from "@/components/ui/glow-card";
import { ExternalLink, Lock, Sparkles } from "lucide-react";
import Link from "next/link";

const portfolioSites = [
  {
    name: "Dr. Varun's Dental Clinic",
    domain: "drvarunsdental.com",
    url: "https://www.drvarunsdental.com/dental-clinic-viman-nagar/",
    type: "Dental Clinic & Local GMB Dominance",
    location: "Viman Nagar, Pune",
    isImagePreview: true,
    previewImg: "/dr-varun-preview.jpg"
  },
  {
    name: "Dr. Poonam's Women's Clinic",
    domain: "drpoonamswomensclinic.vercel.app",
    url: "https://drpoonamswomensclinic.vercel.app/best-gynecologist-in-keshav-nagar/",
    type: "Gynecology & Obstetrics Portal",
    location: "Keshav Nagar, Pune",
    isImagePreview: false
  },
  {
    name: "Rayya Pharma",
    domain: "rayyapharma.vercel.app",
    url: "https://rayyapharma.vercel.app/",
    type: "Pharmaceutical Brand Architecture",
    location: "Global & India",
    isImagePreview: false
  },
  {
    name: "June Women's Health",
    domain: "junewomenshealth.pages.dev",
    url: "https://junewomenshealth.pages.dev/best-gynecologist-in-lucknow/",
    type: "Women's Health & Multi-City SEO",
    location: "Lucknow",
    isImagePreview: false
  },
  {
    name: "Ariix Hair & Skin Clinic",
    domain: "ariixhairandskinclinic.pages.dev",
    url: "https://ariixhairandskinclinic.pages.dev/best-skin-care-clinic-in-pune/",
    type: "Skin Care & Aesthetics Architecture",
    location: "Pune",
    isImagePreview: false
  }
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-36 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Hero Banner Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} className="text-saas-cyan" /> Featured Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white">
            Digital Architectures That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-400 to-saas-purple">
              Dominate Markets.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Hover over any desktop preview to auto-scroll fast all the way to the footer. Click <span className="text-saas-cyan font-bold">Visit Live Site ↗</span> to launch the live site in full view.
          </p>
        </div>

        {/* Grid of Rectangular Widescreen (16:9 Desktop Aspect Ratio) Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {portfolioSites.map((site, index) => (
            <div key={index} className="flex flex-col gap-4">
              <GlowCard className="bg-saas-surface border border-white/10 rounded-2xl overflow-hidden group flex flex-col shadow-2xl">
                
                {/* Mac Chrome Browser Mockup Top Header */}
                <div className="bg-zinc-950 px-4 py-3 border-b border-white/10 flex items-center justify-between z-20 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 bg-zinc-900 border border-white/10 px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 w-1/2 max-w-xs truncate justify-center">
                    <Lock size={10} className="text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{site.domain}</span>
                  </div>

                  {/* Visit Live Site Button */}
                  <Link 
                    href={site.url} 
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-saas-cyan hover:text-white bg-saas-cyan/10 hover:bg-saas-cyan border border-saas-cyan/30 px-3.5 py-1 rounded-full transition-all group/btn flex-shrink-0"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Widescreen Rectangular Desktop Viewport (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video overflow-hidden bg-zinc-950">
                  
                  {site.isImagePreview ? (
                    /* Image fallback preview for sites that block iframes via X-Frame-Options */
                    <div className="absolute top-0 left-0 w-full transition-transform duration-[6s] ease-in-out group-hover:-translate-y-[68%]">
                      <img 
                        src={site.previewImg} 
                        alt={site.name} 
                        className="w-full h-auto object-top"
                      />
                    </div>
                  ) : (
                    /* Scaled Widescreen Desktop Iframe Viewport */
                    <div 
                      className="absolute top-0 left-0 w-[1440px] h-[3600px] origin-top-left transition-transform duration-[6s] ease-in-out group-hover:-translate-y-[1020px]"
                      style={{ transform: "scale(0.382)" }}
                    >
                      <iframe 
                        src={site.url}
                        className="w-[1440px] h-[3600px] border-none pointer-events-none"
                        scrolling="no"
                        title={site.name}
                      />
                    </div>
                  )}

                </div>
              </GlowCard>

              {/* Clean Metadata Below Card */}
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                    {site.name}
                  </h3>
                  <p className="text-saas-cyan text-xs font-medium mt-0.5">
                    {site.type} • <span className="text-zinc-400">{site.location}</span>
                  </p>
                </div>
                <Link 
                  href={site.url}
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-saas-cyan/20 hover:border-saas-cyan/50 transition-colors"
                >
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-saas-cyan/10 via-saas-purple/10 to-saas-cyan/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-sans font-bold text-white mb-4">Ready to dominate your local market?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            We build custom, high-speed architectures engineered to capture top Google Map Pack rankings and AI search recommendations.
          </p>
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            Get In Touch With The Architects
          </Link>
        </div>

      </div>
    </main>
  );
}
