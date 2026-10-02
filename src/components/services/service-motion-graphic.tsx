"use client";

import { MapPin, Bot, TrendingUp, Sparkles } from "lucide-react";

interface ServiceMotionGraphicProps {
  type: "radar" | "code" | "ai" | "search" | "ads" | "analytics" | "content" | "pr";
}

export function ServiceMotionGraphic({ type }: ServiceMotionGraphicProps) {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl border border-white/10 bg-zinc-950/80 p-8 overflow-hidden shadow-2xl flex items-center justify-center group">
      {/* Background Animated Rays & Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_70%)] animate-pulse" />
      
      {type === "radar" && (
        <div className="relative flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-saas-cyan/30 animate-[spin_10s_linear_infinite] flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-saas-cyan/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-saas-cyan/10" />
            </div>
            <div className="absolute top-0 left-1/2 w-0.5 h-32 bg-gradient-to-b from-saas-cyan to-transparent origin-bottom animate-spin" />
          </div>
          <div className="absolute w-12 h-12 rounded-full bg-saas-cyan/20 border border-saas-cyan flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)]">
            <MapPin className="text-saas-cyan" size={24} />
          </div>
          <div className="absolute top-8 right-12 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <div className="absolute bottom-12 left-8 w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
        </div>
      )}

      {type === "code" && (
        <div className="w-full space-y-3 font-mono text-xs text-zinc-300 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] text-saas-purple">page.tsx • 90+</span>
          </div>
          <div className="text-saas-purple font-bold">&lt;NextEngine&gt;</div>
          <div className="pl-4 text-zinc-400">&lt;SEOHead title="Pune SEO Agency" /&gt;</div>
          <div className="pl-4 text-emerald-400">&lt;SchemaType entity="LocalBusiness" /&gt;</div>
          <div className="pl-4 text-saas-cyan">&lt;EdgeCDN cache="sub-50ms" /&gt;</div>
          <div className="text-saas-purple font-bold">&lt;/NextEngine&gt;</div>
          <div className="mt-4 pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-zinc-500">
            <span>Core Web Vitals</span>
            <span className="text-emerald-400 font-bold">LCP 0.4s • INP 12ms</span>
          </div>
        </div>
      )}

      {type === "ai" && (
        <div className="relative flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-[0_0_40px_rgba(52,211,153,0.4)] animate-bounce">
            <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
              <Bot size={40} className="text-emerald-400" />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-zinc-300 font-mono">
            <Sparkles size={14} className="text-emerald-400 animate-spin" />
            <span>Recommended by GPTBot</span>
          </div>
        </div>
      )}

      {(type === "search" || type === "ads" || type === "analytics" || type === "content" || type === "pr") && (
        <div className="w-full space-y-4 relative z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-saas-cyan/10 border border-saas-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-pulse">
            <TrendingUp size={36} className="text-saas-cyan" />
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-sans font-bold text-white">+340% Traffic Surge</div>
            <div className="text-xs text-saas-cyan font-mono">Automated Growth Engine</div>
          </div>
        </div>
      )}
    </div>
  );
}
