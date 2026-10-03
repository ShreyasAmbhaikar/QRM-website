"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Flame, 
  History, 
  ShieldAlert, 
  Zap, 
  Info,
  Layers,
  ArrowRight
} from "lucide-react";
import { GOOGLE_ALGORITHM_UPDATES, type GoogleAlgorithmUpdate } from "@/data/blog-data";

export function GoogleAlgorithmTracker() {
  const [expandedId, setExpandedId] = useState<string | null>(GOOGLE_ALGORITHM_UPDATES[0].id);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Core Update", "Helpful Content", "Spam & Scaled Content", "Core Web Vitals"];

  const filteredUpdates = GOOGLE_ALGORITHM_UPDATES.filter(
    update => filterCategory === "All" || update.category === filterCategory
  );

  const getImpactBadge = (level: GoogleAlgorithmUpdate["impactLevel"]) => {
    switch (level) {
      case "Critical":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <Flame size={12} className="text-rose-400" /> Critical Impact
          </span>
        );
      case "High":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <AlertTriangle size={12} className="text-amber-400" /> High Volatility
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-saas-cyan/15 text-saas-cyan border border-saas-cyan/30">
            <Zap size={12} className="text-saas-cyan" /> Architectural
          </span>
        );
    }
  };

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-3 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Activity size={13} className="text-purple-400 animate-pulse" />
            LIVE RADAR &amp; ALGORITHMIC DISPATCH
          </div>
          <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tight">
            Google Search Algorithm &amp; Core Updates Tracker
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm mt-1 max-w-2xl">
            Live telemetry, official deployment timelines, volatility impact scores, and technical recovery protocols for enterprise websites and local brands.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                filterCategory === cat
                  ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Updates Accordion Grid */}
      <div className="space-y-4">
        {filteredUpdates.map((update) => {
          const isExpanded = expandedId === update.id;

          return (
            <div 
              key={update.id}
              className={`rounded-2xl transition-all duration-300 border ${
                isExpanded 
                  ? "bg-gradient-to-b from-[#130b29] to-[#0c071d] border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.15)]" 
                  : "bg-[#0c071a]/80 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Header Bar */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : update.id)}
                className="w-full text-left p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start md:items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 ${
                    update.impactLevel === "Critical"
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                      : update.impactLevel === "High"
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      : "bg-saas-cyan/10 border-saas-cyan/30 text-saas-cyan"
                  }`}>
                    {update.impactLevel === "Critical" ? <ShieldAlert size={18} /> : <Activity size={18} />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        {update.releaseDate}
                      </span>
                      <span className="text-zinc-600 text-xs">•</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-purple-500/20">
                        {update.category}
                      </span>
                      {getImpactBadge(update.impactLevel)}
                    </div>
                    <h3 className="text-base md:text-lg font-sans font-bold text-white leading-snug">
                      {update.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 size={12} /> {update.status}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-white transition-colors">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </button>

              {/* Collapsible Details Drawer */}
              {isExpanded && (
                <div className="px-5 pb-6 md:px-6 md:pb-6 pt-2 border-t border-white/10 space-y-6">
                  {/* Overview Paragraph */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-saas-cyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info size={13} /> Update Overview &amp; Deployment Scope
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {update.overview}
                    </p>
                  </div>

                  {/* Two Column Technical Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Key Algorithmic Changes */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5">
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider block">
                        Verified Algorithmic Shifts:
                      </span>
                      <ul className="space-y-2">
                        {update.keyChanges.map((change, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                            <span className="text-purple-400 mt-0.5 font-bold">›</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Affected Websites & Target Criteria */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider block mb-1">
                          Most Impacted Verticals:
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {update.affectedWebsites}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                          Recommended Recovery Protocol:
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {update.recommendedAction}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
