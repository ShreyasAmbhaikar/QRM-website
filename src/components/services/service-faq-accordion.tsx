"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFaqAccordionProps {
  faqs: FAQItem[];
  serviceTitle: string;
}

export function ServiceFaqAccordion({ faqs, serviceTitle }: ServiceFaqAccordionProps) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-purple-50/70 border-purple-300 dark:bg-purple-950/20 dark:border-purple-500/40 shadow-sm"
                : "bg-card/80 border-border/80 hover:border-purple-300/80 dark:bg-zinc-950/60 dark:border-white/10 dark:hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen
                      ? "bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/25"
                      : "bg-purple-100 text-purple-700 dark:bg-zinc-900 dark:text-zinc-400 border border-purple-200/60 dark:border-white/10"
                  }`}
                >
                  <span className="font-mono text-xs font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-sans font-bold text-base md:text-lg text-purple-950 dark:text-white tracking-tight">
                  {faq.q}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-purple-700 dark:text-saas-cyan transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base leading-relaxed text-purple-950/80 dark:text-zinc-300 border-t border-purple-200/40 dark:border-white/5">
                <p className="pl-11">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
