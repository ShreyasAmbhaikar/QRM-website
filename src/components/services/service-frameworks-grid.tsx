import React from "react";
import { type FrameworkItem } from "@/data/service-details-data";
import { ServiceIcon } from "@/components/services/service-icon";
import { GlowCard } from "@/components/ui/glow-card";

interface ServiceFrameworksGridProps {
  title: string;
  titleAccent: string;
  subtitle: string;
  frameworks: FrameworkItem[];
}

const COLOR_STYLES: Record<
  FrameworkItem["color"],
  {
    iconBox: string;
    tagPill: string;
    accentGlow: string;
  }
> = {
  blue: {
    iconBox: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/15 group-hover:border-blue-500/40",
    tagPill: "border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/30",
    accentGlow: "group-hover:border-blue-400/40"
  },
  emerald: {
    iconBox: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40",
    tagPill: "border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/30",
    accentGlow: "group-hover:border-emerald-400/40"
  },
  amber: {
    iconBox: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/15 group-hover:border-amber-500/40",
    tagPill: "border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/30",
    accentGlow: "group-hover:border-amber-400/40"
  },
  rose: {
    iconBox: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 group-hover:bg-rose-500/15 group-hover:border-rose-500/40",
    tagPill: "border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-950/30",
    accentGlow: "group-hover:border-rose-400/40"
  },
  purple: {
    iconBox: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/15 group-hover:border-purple-500/40",
    tagPill: "border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50/50 dark:bg-purple-950/30",
    accentGlow: "group-hover:border-purple-400/40"
  },
  cyan: {
    iconBox: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/40",
    tagPill: "border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-950/30",
    accentGlow: "group-hover:border-cyan-400/40"
  }
};

export function ServiceFrameworksGrid({
  title,
  titleAccent,
  subtitle,
  frameworks
}: ServiceFrameworksGridProps) {
  return (
    <section className="my-16 md:my-20">
      {/* Catchy Editorial Heading with Italic Accent */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-purple-950 dark:text-white tracking-tight mb-4">
          {title}{" "}
          <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400">
            {titleAccent}
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-purple-950/80 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* 6-Framework Grid (3 cols x 2 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        {frameworks.map((fw, idx) => {
          const style = COLOR_STYLES[fw.color] || COLOR_STYLES.purple;

          return (
            <GlowCard
              key={idx}
              className={`p-7 flex flex-col justify-between border-purple-200/60 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.accentGlow}`}
            >
              <div>
                {/* Colorful App Icon Badge */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 shadow-sm ${style.iconBox}`}>
                  <ServiceIcon name={fw.icon} className="w-6 h-6" />
                </div>

                {/* Framework Title */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-purple-950 dark:text-white mb-2.5 tracking-tight">
                  {fw.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-purple-950/75 dark:text-zinc-300 leading-relaxed mb-6">
                  {fw.description}
                </p>
              </div>

              {/* Parameter Outline Badges */}
              <div className="pt-3 border-t border-purple-200/40 dark:border-white/5 flex flex-wrap gap-2">
                {fw.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${style.tagPill}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          );
        })}
      </div>
    </section>
  );
}
