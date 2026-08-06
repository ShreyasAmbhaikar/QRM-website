"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { MapPin, Phone, Clock, Star, Send, Sparkles, CheckCircle2, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} /> HEADQUARTERS & STRATEGY LAB
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Connect With The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Growth Architects.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Visit our Wadgaon Sheri lab in Pune, call our lead strategy desk, or schedule a direct consultation.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <GlowCard className="p-8 bg-saas-surface border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-saas-cyan/10 border border-saas-cyan/30 flex items-center justify-center text-saas-cyan mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pune Headquarters</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Quantum+Reach+Media,+Pune/@18.5558427,73.9214858,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c194ca38c183:0xe9c0270609fb909b!8m2!3d18.5558427!4d73.9214858!16s%2Fg%2F11nhhnyhdy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-saas-cyan hover:underline"
            >
              <span>Open in Google Maps</span>
              <Globe size={14} />
            </a>
          </GlowCard>

          {/* Phone & Direct Support Card */}
          <GlowCard className="p-8 bg-saas-surface border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-saas-purple/10 border border-saas-purple/30 flex items-center justify-center text-saas-purple mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Strategy Hotline</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-1">
                Speak directly with Tushar or Shreyas for urgent campaigns.
              </p>
              <div className="text-xl font-mono font-bold text-white mt-3">
                077388 12028
              </div>
            </div>
            <a
              href="tel:07738812028"
              className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs hover:bg-white hover:text-black transition-all"
            >
              Call Strategy Desk Now 📞
            </a>
          </GlowCard>

          {/* Ratings & Operating Hours Card */}
          <GlowCard className="p-8 bg-saas-surface border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Operating Hours</h3>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>24/7 Digital Operations</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Always open to serve you & engineer your market dominance across Google, ChatGPT & Gemini.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[11px] font-mono text-zinc-400 font-bold">5.0 (6 Google Reviews)</span>
            </div>
          </GlowCard>
        </div>

        {/* Contact Form & Google Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <GlowCard className="p-8 md:p-10 bg-saas-surface border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest mb-2">
                <MessageSquare size={14} /> INITIATE STRATEGY DISPATCH
              </div>
              <h2 className="text-2xl font-sans font-bold text-white mb-6">
                Request Your SEO & AI Growth Audit
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
                        placeholder="Dr. Varun / John Doe"
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
                      <option value="local-seo">Local SEO & GMB Map Pack Dominance</option>
                      <option value="web-dev">SEO Web Development (Next.js)</option>
                      <option value="aeo-ai">AEO / GEO (ChatGPT & Gemini Search)</option>
                      <option value="meta-ads">Meta Facebook & Instagram Ads</option>
                      <option value="analytics">Analytics & Conversion Tracking</option>
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
                    className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Submit Strategy Request</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </GlowCard>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-5 h-full">
            <GlowCard className="p-3 bg-saas-surface border border-white/10 h-full flex flex-col justify-between min-h-[480px]">
              <div className="w-full h-full min-h-[420px] rounded-xl overflow-hidden relative border border-white/10">
                <iframe
                  title="Quantum Reach Media Pune Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4239846200785!2d73.9214858!3d18.5558427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c194ca38c183%3A0xe9c0270609fb909b!2sQuantum%20Reach%20Media%2C%20Pune!5e0!3m2!1sen!2sin!4v1786024371663!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                />
              </div>
              <div className="pt-3 px-2 flex justify-between items-center text-[11px] font-mono text-zinc-400">
                <span>Quantum Reach Media, Pune</span>
                <span className="text-saas-cyan">Wadgaon Sheri • MH 411014</span>
              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </main>
  );
}
