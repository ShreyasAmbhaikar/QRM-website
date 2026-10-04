"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Scale, 
  FileCheck2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  CreditCard, 
  Receipt, 
  Lock, 
  ExternalLink, 
  ChevronRight, 
  Sparkles, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  HelpCircle,
  Clock,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: "section-01", number: "01", title: "The Services & Agency Scope" },
  { id: "section-02", number: "02", title: "Eligibility & Engagements" },
  { id: "section-03", number: "03", title: "Acceptable Use & Conduct" },
  { id: "section-04", number: "04", title: "Retainers, Billing & Refunds" },
  { id: "section-05", number: "05", title: "Third-Party Search Platforms" },
  { id: "section-06", number: "06", title: "Client Data & Confidentiality" },
  { id: "section-07", number: "07", title: "Intellectual Property & Deliverables" },
  { id: "section-08", number: "08", title: "Service Availability & Standards" },
  { id: "section-09", number: "09", title: "Suspension & Termination" },
  { id: "section-10", number: "10", title: "Warranties & SEO Disclaimers" },
  { id: "section-11", number: "11", title: "Limitation of Liability" },
  { id: "section-12", number: "12", title: "Mutual Indemnification" },
  { id: "section-13", number: "13", title: "Governing Law & Jurisdiction" },
  { id: "section-14", number: "14", title: "Modifications to Terms" },
  { id: "section-15", number: "15", title: "Grievance Redressal & Contact" },
];

export function TermsOfServiceView() {
  const [activeSection, setActiveSection] = useState<string>("section-01");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-x-clip">
      {/* Ambient background glows matching site architecture */}
      <div className="absolute top-12 left-[-10%] w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-28 right-[-10%] w-[520px] h-[520px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold tracking-wider uppercase mb-2 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
            <Scale size={13} className="text-saas-cyan" />
            <span>Commercial Terms &amp; Agency Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Service
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2.5 text-xs font-mono text-zinc-400">
            <span>Effective: October 2026</span>
            <span className="text-zinc-600">•</span>
            <span>Version 2.4</span>
            <span className="text-zinc-600">•</span>
            <span>Quantum Reach Media, Pune</span>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            These Terms of Service govern your access to our website, diagnostic audit services, bespoke Next.js web architectures, and performance digital marketing retainers provided by <strong>Quantum Reach Media</strong>.
          </p>
        </div>

        {/* Main Two-Column Layout (4 Cols TOC / 8 Cols Content - Perfectly Balanced) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Sticky Table of Contents (4 Cols) */}
          <aside className="lg:col-span-4 sticky top-28 self-start z-20 space-y-6">
            <div 
              data-lenis-prevent
              onWheel={(e) => {
                if (navRef.current) {
                  navRef.current.scrollTop += e.deltaY;
                }
              }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 shrink-0">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <FileText size={14} className="text-saas-cyan" /> On This Page
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {SECTIONS.length} Sections
                </span>
              </div>

              <nav 
                ref={navRef}
                className="space-y-1 max-h-[380px] overflow-y-auto overscroll-contain pr-1.5 scrollbar-thin scrollbar-thumb-purple-500/40 hover:scrollbar-thumb-purple-500/70 scrollbar-track-white/5"
              >
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={cn(
                        "w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono transition-all flex items-start gap-2.5 group cursor-pointer",
                        isActive
                          ? "bg-white/10 text-white font-bold border border-saas-cyan/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span
                        className={cn(
                          "text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors shrink-0 mt-0.5",
                          isActive
                            ? "bg-saas-cyan text-black font-extrabold"
                            : "bg-white/5 text-zinc-500 group-hover:text-zinc-300"
                        )}
                      >
                        {sec.number}
                      </span>
                      <span className="flex-1 leading-snug break-words">{sec.title}</span>
                      <ChevronRight
                        size={12}
                        className={cn(
                          "opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1",
                          isActive && "opacity-100 text-saas-cyan"
                        )}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact Card - Purple Gradient Aesthetic */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 via-purple-950/60 to-[#0A0A0A] border border-purple-500/40 text-xs text-zinc-300 space-y-3.5 shadow-[0_10px_30px_rgba(147,51,234,0.18)] backdrop-blur-xl group">
              {/* Ambient inner purple glow highlight */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-fuchsia-600/15 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0 shadow-inner">
                  <Briefcase size={14} className="text-purple-300" />
                </div>
                <span className="font-bold text-white font-mono text-sm tracking-tight">
                  Commercial Desk
                </span>
              </div>

              <p className="relative z-10 leading-relaxed text-[12px] text-purple-200/80">
                Questions regarding client engagement retainers, custom enterprise scopes, or service level agreements?
              </p>

              <a
                href="mailto:contact@quantumreachmedia.com"
                className="relative z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-100 hover:text-white transition-all font-mono font-bold text-xs shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:border-purple-300/50"
              >
                <span>contact@quantumreachmedia.com</span>
                <ArrowRight size={13} className="text-purple-300 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </aside>

          {/* Right Column: Distinct Modular Section Cards (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 01 The Services & Agency Scope */}
            <section id="section-01" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  The Services &amp; Agency Scope
                </h2>
              </div>
              
              <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-4">
                <p>
                  <strong>Quantum Reach Media</strong> ("we", "our", or "us") operates a specialized digital marketing, Search Engine Optimization (SEO), Generative Engine Optimization (GEO/AEO), high-performance web architecture, and paid customer acquisition consultancy based in Pune, Maharashtra.
                </p>
                
                <p>
                  Our client engagements encompass strategic diagnostic audits, Google 3-Pack Map Pack prominence engineering, edge-rendered Next.js web application development, high-ROI paid media management (Google Ads and Meta Ads), and conversion rate optimization (CRO).
                </p>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs space-y-2 text-zinc-300">
                  <div className="text-white font-bold flex items-center gap-2">
                    <Layers size={14} className="text-saas-cyan" /> Independent Agency Standing:
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Quantum Reach Media is an independent marketing engineering and web technology agency. We are not Google LLC, Meta Platforms, OpenAI, or Microsoft Bing, nor do we control their proprietary search indices, algorithmic update rollouts, auction rates, or platform policies. Our work operates on top of these public ecosystems in strict accordance with their official quality and technical guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* 02 Eligibility & Client Engagements */}
            <section id="section-02" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Eligibility &amp; Client Engagements
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>By engaging Quantum Reach Media or submitting inquiries on our website, you represent and warrant that:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Legal Capacity &amp; Majority</strong>
                    <p className="text-[11px] text-zinc-400">
                      You are at least 18 years old and possess the legal power to form a binding contract under Indian and international law.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Corporate Authority</strong>
                    <p className="text-[11px] text-zinc-400">
                      You are an authorized executive, founder, or marketing director empowered to contract on behalf of your brand.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Accurate Information</strong>
                    <p className="text-[11px] text-zinc-400">
                      You provide truthful, current, and verifiable domain credentials, GST details, and business contact information.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Credential Stewardship</strong>
                    <p className="text-[11px] text-zinc-400">
                      You maintain secure administrative control over passwords and access tokens shared with our technical team.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 03 Acceptable Use & Client Conduct */}
            <section id="section-03" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Acceptable Use &amp; Client Conduct
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>You agree not to utilize our web architectures, services, or advisory frameworks to:</p>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <AlertTriangle size={15} className="text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Black-Hat &amp; Manipulative SEO Practices</strong>
                      <span className="text-[11px] text-zinc-400">
                        Deploying automated comment spam, manipulative private blog networks (PBNs), hidden cloaked text, or parasite link schemes violating Google Search Essentials.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <AlertTriangle size={15} className="text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Deceptive or Prohibited Advertising</strong>
                      <span className="text-[11px] text-zinc-400">
                        Running ad campaigns promoting counterfeit goods, deceptive medical claims, multi-level marketing scams, or materials prohibited by Google Ads or Meta Ads policies.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <AlertTriangle size={15} className="text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">System Probing &amp; Infrastructure Abuse</strong>
                      <span className="text-[11px] text-zinc-400">
                        Attempting unauthorized penetration testing, scraping, reverse-engineering proprietary Next.js component blueprints, or launching DDoS traffic at our infrastructure.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-zinc-400 font-mono">
                  <strong>Client Responsibility:</strong> Clients bear full legal liability for the veracity of marketing claims, medical/dental licensing credentials, product warranties, and customer contact data published across their domain.
                </div>
              </div>
            </section>

            {/* 04 Retainers, Commercial Fees, Invoicing & Refunds */}
            <section id="section-04" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  04
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                    Retainers, Commercial Fees, Invoicing &amp; Refunds
                  </h2>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Clear commercial terms governing agency engagements, taxes, and transparent fee structures.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* 4.1 Retainer Models */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-saas-cyan/15 text-saas-cyan flex items-center justify-center font-mono font-bold text-xs">
                      4.1
                    </span>
                    <span>Retainer Engagements &amp; Milestone Scopes</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Our agency deliverables operate on transparent monthly retainers, fixed project milestones, or customized Service Level Agreements (SLAs). All deliverables, sprint schedules, and key performance indicators (KPIs) are formalized in mutual written project proposals prior to work commencement.
                  </p>
                </div>

                {/* 4.2 Payments via Razorpay & Banking */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-purple-500/15 text-purple-300 flex items-center justify-center font-mono font-bold text-xs">
                      4.2
                    </span>
                    <span>Payment Processing &amp; Gateway Verification</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    All transactions are denominated in Indian Rupees (INR) or agreed foreign currency (USD/EUR for overseas clients). Retainers are payable via certified gateways (Razorpay Software Private Limited) or direct RTGS/NEFT wire transfers. Work commences once payments are captured and verified.
                  </p>
                </div>

                {/* 4.3 Taxes & GST */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                      4.3
                    </span>
                    <span>Taxes &amp; Goods &amp; Services Tax (GST)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Quantum Reach Media is GST-registered in India. Applicable GST (18%) is levied on all domestic commercial transactions. Formal B2B GST tax invoices with valid GSTIN identifiers are issued for each billing cycle, enabling clients to claim statutory Input Tax Credit (ITC).
                  </p>
                </div>

                {/* 4.4 Refund Policy */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                      4.4
                    </span>
                    <span>Transparent Refund Policy</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Due to the highly bespoke engineering, manual technical auditing, and strategic hours allocated to each client sprint:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-[11px] pl-2">
                    <li><strong>Diagnostic Audits:</strong> Initial strategy discovery sessions and preliminary audits are complimentary with zero financial obligation.</li>
                    <li><strong>Retainer Services:</strong> Monthly retainer fees are non-refundable once the technical billing period commences and engineering or campaign deployment has begun.</li>
                    <li><strong>Erroneous Charges:</strong> In the rare event of duplicate or erroneous billing, contact our billing desk within 7 business days with your invoice ID for verification and full refund via Razorpay within 7–10 banking days.</li>
                    <li><strong>Exclusions:</strong> We do not issue refunds for ad spend paid directly to ad platforms (Google/Meta), or ranking shifts resulting from unannounced global Google core algorithm rollouts.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 05 Third-Party Search Platforms & APIs */}
            <section id="section-05" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Third-Party Search Platforms &amp; APIs
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  Our implementations interface with independent third-party ecosystems including Google (Google Search, Google Ads, GMB), Meta (Facebook, Instagram Ads, CAPI), Vercel (Edge web hosting), and payment gateways.
                </p>
                <p className="text-zinc-400">
                  Your engagement with these platforms is independently governed by their respective Terms of Service and Privacy Policies. Quantum Reach Media has no control over third-party price increases, API rate limits, feature deprecations, or account suspensions initiated by Meta or Google against a client's historical policy violations.
                </p>
              </div>
            </section>

            {/* 06 Client Data, Marketing Assets & Confidentiality */}
            <section id="section-06" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Client Data, Marketing Assets &amp; Confidentiality
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  You retain exclusive ownership of all brand trademarks, logos, proprietary customer databases, and copy assets provided to us ("Client Data").
                </p>
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <strong className="text-white text-xs block flex items-center gap-2">
                    <ShieldCheck size={14} className="text-saas-cyan" /> Bilateral Non-Disclosure (NDA):
                  </strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    We treat all campaign data, conversion statistics, margin structures, and strategic roadmaps as strictly confidential. We grant access only to authorized technical personnel required to execute deliverables, and we never disclose client conversion figures without explicit written consent.
                  </p>
                </div>
              </div>
            </section>

            {/* 07 Intellectual Property & Deliverables */}
            <section id="section-07" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Intellectual Property &amp; Deliverables
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <strong className="text-white text-xs block">Client Deliverables Ownership</strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Upon full settlement of all commercial fees, clients acquire full ownership rights to bespoke website design assets, written marketing copy, custom graphics, and specific production web applications engineered exclusively for their brand.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <strong className="text-white text-xs block">Agency Proprietary IP</strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Quantum Reach Media retains full ownership over internal agency frameworks, algorithmic tracking scripts, pre-existing Next.js UI component libraries, diagnostic software tools, and strategic growth playbooks.
                  </p>
                </div>
              </div>
            </section>

            {/* 08 Service Availability & Standards */}
            <section id="section-08" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Service Availability &amp; Standards
                </h2>
              </div>
              
              <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  We strive to engineer web platforms that maintain sub-second response times, 90+ Google Lighthouse scores, and 99.9% uptime architectures via Vercel edge infrastructure.
                </p>
                <p className="text-zinc-400">
                  However, we do not warrant that third-party hosting networks, telecommunication routes, or search engine crawlers will operate uninterrupted or error-free at all times. Scheduled infrastructure upgrades and maintenance windows are communicated in advance whenever feasible.
                </p>
              </div>
            </section>

            {/* 09 Suspension & Termination */}
            <section id="section-09" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Suspension &amp; Termination
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Termination by Client</strong>
                    <p className="text-[11px] text-zinc-400">
                      Clients may terminate monthly retainers with 30 days written notice prior to the start of the next billing cycle.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Termination by Agency</strong>
                    <p className="text-[11px] text-zinc-400">
                      We reserve the right to suspend or terminate services immediately for invoice defaults, hostile conduct, or black-hat policy breaches.
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs">
                  Upon contract conclusion and complete settlement of accounts, all client administrative credentials, codebase repositories, and assets are formally transferred back to the client.
                </p>
              </div>
            </section>

            {/* 10 Warranties & Performance Disclaimers */}
            <section id="section-10" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Warranties &amp; Performance Disclaimers
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  Quantum Reach Media delivers all services using high-caliber engineering, certified technical talent, and verified white-hat methodologies.
                </p>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2 font-sans">
                  <div className="font-bold text-white flex items-center gap-2">
                    <AlertTriangle size={15} className="text-amber-400" />
                    Essential Search Engine Algorithm Disclaimer:
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-300">
                    Search engine algorithms (Google Broad Core Updates, Helpful Content Systems, AI Overviews, Gemini Search) and ad auction bidding mechanics are governed autonomously by external third parties. While Quantum Reach Media deploys cutting-edge schema architectures, entity graphs, and performance funnels designed to achieve search leadership, <strong>no marketing agency can legally guarantee a permanent #1 ranking on Google</strong>. Services are provided on an "as is" and "as available" basis without implied guarantees of specific commercial turnover.
                  </p>
                </div>
              </div>
            </section>

            {/* 11 Limitation of Liability */}
            <section id="section-011" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Limitation of Liability
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  To the maximum extent permitted by applicable law, Quantum Reach Media, its partners, founders, and engineers shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of revenue, profits, organic traffic shifts, or goodwill.
                </p>
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-zinc-300">
                  <strong>Total Aggregate Liability Cap:</strong> Our total liability arising out of or related to any client engagement, under any legal theory, shall not exceed the total fees actually received by Quantum Reach Media from the client in the <strong>three (3) months</strong> immediately preceding the event giving rise to the claim.
                </div>
              </div>
            </section>

            {/* 12 Mutual Indemnification */}
            <section id="section-12" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Mutual Indemnification
                </h2>
              </div>
              
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  You agree to defend, indemnify, and hold harmless Quantum Reach Media, its founders, and contractors from and against any third-party claims, liabilities, damages, and legal expenses arising out of:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-[11px] pl-2">
                  <li>Client content, unlicensed imagery or materials provided by client for campaign publication.</li>
                  <li>Client's breach of these Terms of Service or violation of applicable advertising laws.</li>
                  <li>Client's failure to maintain lawful licensing for professional services marketed (e.g. healthcare credentials).</li>
                </ul>
              </div>
            </section>

            {/* 13 Governing Law & Jurisdiction */}
            <section id="section-13" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Governing Law &amp; Jurisdiction
                </h2>
              </div>
              
              <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  These Terms of Service and all client agreements shall be governed by, construed, and enforced in accordance with the substantive laws of the <strong>Republic of India</strong>, without regard to conflict of law principles.
                </p>
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-zinc-300">
                  <strong>Exclusive Judicial Jurisdiction:</strong> The competent courts situated exclusively in <strong>Pune, Maharashtra, India</strong> shall have sole jurisdiction over any dispute, claim, or controversy arising out of or relating to these Terms or agency services.
                </div>
              </div>
            </section>

            {/* 14 Modifications to Terms */}
            <section id="section-14" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  14
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Modifications to Terms
                </h2>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Quantum Reach Media reserves the right to amend these Terms from time to time. The updated version will be published on this page with an updated "Effective Date." Continued use of our site and retained services following publication constitutes binding acceptance of the updated Terms.
              </p>
            </section>

            {/* 15 Grievance Redressal & Contact */}
            <section id="section-15" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  15
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Grievance Redressal &amp; Contact
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-zinc-400 text-xs sm:text-sm">
                  For legal notices, contract questions, or formal communications regarding these Terms:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Mail size={13} className="text-saas-cyan" /> Direct Legal Email
                    </span>
                    <a href="mailto:contact@quantumreachmedia.com" className="text-xs font-mono font-bold text-saas-cyan hover:underline block pt-1">
                      contact@quantumreachmedia.com
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Phone size={13} className="text-saas-cyan" /> Strategy Desk Phone
                    </span>
                    <a href="tel:07738812028" className="text-xs font-mono font-bold text-saas-cyan hover:underline block pt-1">
                      +91 077388 12028
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-3">
                  <MapPin size={16} className="text-saas-cyan shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-300 font-mono">
                    Quantum Reach Media · Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
