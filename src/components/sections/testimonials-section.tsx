"use client";

import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

const partners = [
  "Google", "Amazon", "Netflix", "Microsoft", "Vercel", "Stripe", "Framer"
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden border-t border-white/5 bg-saas-base">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-sm uppercase tracking-[0.2em] font-mono text-zinc-500 font-semibold mb-4">
          Trusted by the best teams
        </h2>
      </div>
      <div className="opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <InfiniteMarquee items={partners} speed="normal" direction="left" className="mb-4" />
        <InfiniteMarquee items={[...partners].reverse()} speed="slow" direction="right" />
      </div>
    </section>
  );
}
