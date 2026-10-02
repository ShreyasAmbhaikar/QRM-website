import React from "react";
import { type ConfidenceCard } from "@/data/service-details-data";
import { ServiceIcon } from "@/components/services/service-icon";
import { Star } from "lucide-react";

interface ServiceConfidenceSectionProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  cards: ConfidenceCard[];
  trustRating: string;
}

export function ServiceConfidenceSection({
  title,
  titleAccent,
  subtitle,
  cards,
  trustRating
}: ServiceConfidenceSectionProps) {
  return (
    <section className="relative my-16 md:my-20 py-16 sm:py-20 px-6 sm:px-10 rounded-3xl overflow-hidden bg-gradient-to-b from-[#180527] via-[#28083e] to-[#12021d] border border-purple-500/30 text-white shadow-2xl">
      {/* Background Animated Glows & Radial Lights */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-rose-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight mb-4">
            {title}{" "}
            <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-300">
              {titleAccent}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Vertical Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Circular Gradient Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-purple-600 text-white flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:scale-110 transition-transform">
                  <ServiceIcon name={card.icon} className="w-5 h-5" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-[10px] font-mono font-bold uppercase text-purple-300 mb-2">
                  {card.badge}
                </div>

                <h3 className="font-sans font-bold text-lg text-white mb-2 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-Trust Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center pt-4 border-t border-white/10">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-mono font-medium text-zinc-300">
            {trustRating}
          </span>
        </div>
      </div>
    </section>
  );
}
