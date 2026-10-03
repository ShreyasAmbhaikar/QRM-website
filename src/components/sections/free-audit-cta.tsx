"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart } from "lucide-react";

export function FreeAuditCta() {
  const [url, setUrl] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !contact) return;
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="py-24 relative z-10 flex justify-center">
      <div className="container max-w-5xl mx-auto px-6">
        <GlowCard className="p-8 md:p-14 bg-gradient-to-br from-purple-50 via-purple-100/60 to-white dark:from-zinc-950 dark:via-saas-purple/10 dark:to-zinc-950 border border-purple-300/90 dark:border-white/10 rounded-3xl shadow-[0_20px_70px_rgba(147,51,234,0.18)] relative overflow-hidden">
          
          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/15 dark:bg-saas-purple/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/12 dark:bg-saas-cyan/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md">
              <Sparkles size={13} className="text-purple-600 dark:text-saas-cyan" /> COMPLIMENTARY GROWTH INTELLIGENCE
            </div>

            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-purple-950 dark:text-white leading-tight">
              Get Your Free Competitor &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
                Local SEO Audit in Pune.
              </span>
            </h2>

            <p className="text-purple-950/80 dark:text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Discover why competitors outrank you on Google Map Pack and organic search. We'll analyze your Core Web Vitals, keyword gaps, and local citation signals.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 flex flex-col items-center gap-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-lg">Audit Request Received!</h3>
                <p className="text-xs sm:text-sm text-center max-w-md opacity-90">
                  Our Pune strategy desk is inspecting your domain. You will receive your custom technical breakdown and local competitor matrix within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl mx-auto pt-2">
                <input
                  type="url"
                  required
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white dark:bg-zinc-900/90 border border-purple-200 dark:border-white/15 text-sm text-purple-950 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-saas-cyan transition-all shadow-inner"
                />
                <input
                  type="text"
                  required
                  placeholder="WhatsApp or Email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full sm:w-56 px-5 py-3.5 rounded-full bg-white dark:bg-zinc-900/90 border border-purple-200 dark:border-white/15 text-sm text-purple-950 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-saas-cyan transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-purple-950 hover:bg-purple-900 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-bold text-sm transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Audit Domain</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}

            {/* Proof Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-950/70 dark:text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> 100% Free &amp; Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-500" /> Sub-500ms Speed Benchmark
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart size={14} className="text-purple-600 dark:text-saas-cyan" /> Pune Local Competitor Analysis
              </span>
            </div>

          </div>

        </GlowCard>
      </div>
    </section>
  );
}
