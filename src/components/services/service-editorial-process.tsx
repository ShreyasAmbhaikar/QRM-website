import React from "react";
import { type ProcessStep } from "@/data/service-details-data";

interface ServiceEditorialProcessProps {
  subhead: string;
  title: string;
  titleAccent: string;
  description: string;
  steps: ProcessStep[];
}

export function ServiceEditorialProcess({
  title,
  titleAccent,
  description,
  steps
}: ServiceEditorialProcessProps) {
  return (
    <section className="my-16 md:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-purple-950 dark:text-white tracking-tight leading-[1.15]">
            {title} <br className="hidden sm:inline" />
            <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400">
              {titleAccent}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-purple-950/80 dark:text-zinc-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Vertical Editorial List (NO CARDS!) */}
        <div className="lg:col-span-7 divide-y divide-purple-200/60 dark:divide-white/10">
          {steps.map((step, idx) => (
            <div key={idx} className="py-7 first:pt-0 last:pb-0 flex items-start gap-6 group">
              {/* Bold Italic Number */}
              <div className="font-mono text-3xl sm:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400 flex-shrink-0 w-14">
                {step.num}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-purple-950 dark:text-white tracking-tight group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-950/75 dark:text-zinc-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
