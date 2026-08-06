"use client";

import { GlowCard } from "@/components/ui/glow-card";
import { Settings, PenTool, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "1. Technical Foundation",
    desc: "We engineer your site for maximum crawlability, speed, and clean architecture, ensuring perfect indexing for Google and AI Bots.",
    color: "from-violet-500/20 to-transparent",
    border: "border-violet-500/20",
    icon: <Settings size={28} className="text-violet-400" />
  },
  {
    title: "2. Content & Entity Architecture",
    desc: "Structuring content for semantic understanding, so LLMs (ChatGPT, Gemini) and local search engines recommend your business first.",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/20",
    icon: <PenTool size={28} className="text-purple-400" />
  },
  {
    title: "3. Authority & Local Dominance",
    desc: "Earning high-quality backlinks, digital PR, and GMB optimization to dominate search engine and AI trust signals.",
    color: "from-fuchsia-500/20 to-transparent",
    border: "border-fuchsia-500/20",
    icon: <TrendingUp size={28} className="text-fuchsia-400" />
  }
];

export function SEOPipelineSection() {
  return (
    <section className="py-32 relative z-10 bg-black">
      {/* Background Mesh Gradient Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-saas-cyan/30 via-saas-purple/20 to-saas-cyan/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
            The Growth Pipeline
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our proprietary AEO and SEO framework is designed to turn your platform into an organic traffic engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className={`w-16 h-16 rounded-full bg-black border ${step.border} flex items-center justify-center text-2xl mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 bg-gradient-to-b ${step.color}`}>
                {step.icon}
              </div>
              <GlowCard className="p-8 text-center bg-black/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
