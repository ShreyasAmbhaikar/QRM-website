"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { MessageSquare, CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <GlowCard className="p-8 md:p-10 bg-saas-surface border border-white/10">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest mb-2">
        <MessageSquare size={14} /> INITIATE STRATEGY DISPATCH
      </div>
      <h2 className="text-2xl font-sans font-bold text-white mb-6">
        Request Your SEO &amp; AI Growth Audit
      </h2>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-saas-cyan/10 border border-saas-cyan/30 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-saas-cyan mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-white">Strategy Dispatch Received!</h3>
          <p className="text-zinc-300 text-xs leading-relaxed max-w-sm mx-auto">
            Thank you! Shreyas or Tushar will review your domain metrics and reach out to you within 2 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="Dr. Varun"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-saas-cyan/50"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-saas-cyan/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Work Email *</label>
              <input
                type="email"
                required
                placeholder="doctor@clinic.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-saas-cyan/50"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Business / Practice Name</label>
              <input
                type="text"
                placeholder="Dental Clinic Viman Nagar"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-saas-cyan/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Service Needed *</label>
            <select
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-zinc-300 focus:outline-none focus:border-saas-cyan/50"
            >
              <option value="local-seo">Local SEO &amp; GMB Map Pack Dominance</option>
              <option value="web-dev">SEO Web Development (Next.js)</option>
              <option value="aeo-ai">AEO / GEO (ChatGPT &amp; Gemini Search)</option>
              <option value="meta-ads">Meta Facebook &amp; Instagram Ads</option>
              <option value="analytics">Analytics &amp; Conversion Tracking</option>
              <option value="full-audit">Complete Growth Audit</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Project Details / Goals</label>
            <textarea
              rows={4}
              placeholder="Tell us about your current Google ranking goals or website speed needs..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-saas-cyan/50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Strategy Request</span>
            <Send size={14} />
          </button>
        </form>
      )}
    </GlowCard>
  );
}
