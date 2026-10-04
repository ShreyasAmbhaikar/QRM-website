"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Shield, 
  Clock, 
  Building2, 
  Lock, 
  Cookie, 
  Scale, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileText,
  UserCheck,
  Key,
  CreditCard,
  Cpu,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Receipt,
  ShieldCheck,
  BarChart3,
  Server,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: "section-01", number: "01", title: "Who We Are" },
  { id: "section-02", number: "02", title: "The Information We Collect" },
  { id: "section-03", number: "03", title: "How We Use Information" },
  { id: "section-04", number: "04", title: "Legal Bases for Processing" },
  { id: "section-05", number: "05", title: "How We Share Information" },
  { id: "section-06", number: "06", title: "Google AdSense & Advertising" },
  { id: "section-07", number: "07", title: "Analytics, Cookies & Tracking" },
  { id: "section-08", number: "08", title: "Data Retention & Storage" },
  { id: "section-09", number: "09", title: "Data Security Architecture" },
  { id: "section-10", number: "10", title: "Your Rights & Choices" },
  { id: "section-11", number: "11", title: "Children's Privacy" },
  { id: "section-12", number: "12", title: "International Data Transfers" },
  { id: "section-13", number: "13", title: "Grievance Officer (India)" },
  { id: "section-14", number: "14", title: "Modifications to This Policy" },
  { id: "section-15", number: "15", title: "Contact Us" },
];

export function PrivacyPolicyView() {
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
            <Shield size={13} className="text-saas-cyan" />
            <span>Data Protection &amp; Regulatory Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Policy
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
            This Privacy Policy sets forth how <strong>Quantum Reach Media</strong> collects, processes, and protects personal information when you access our website, request algorithmic audits, explore our digital growth playbooks, or engage our web engineering solutions.
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
                  <Mail size={14} className="text-purple-300" />
                </div>
                <span className="font-bold text-white font-mono text-sm tracking-tight">
                  Privacy Office
                </span>
              </div>

              <p className="relative z-10 leading-relaxed text-[12px] text-purple-200/80">
                Have questions regarding our data practices or need to exercise statutory privacy rights under Indian DPDP or GDPR?
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
            {/* 01 Who We Are */}
            <section id="section-01" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Who We Are
                </h2>
              </div>
              
              <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-4">
                <p>
                  <strong>Quantum Reach Media</strong> ("we", "our", or "us") is an elite performance digital marketing, Search Engine Optimization (SEO), Generative Engine Optimization (GEO/AEO), and high-performance Next.js web architecture agency operating from Pune, Maharashtra, India.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2 text-zinc-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Registered Agency:</span>
                    <strong className="text-white">Quantum Reach Media</strong>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Headquarters Lab:</span>
                    <strong className="text-zinc-200">Wadgaon Sheri, Pune, MH 411014</strong>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-white/5">
                    <span className="text-zinc-400">Official Email:</span>
                    <a href="mailto:contact@quantumreachmedia.com" className="text-saas-cyan hover:underline font-bold">
                      contact@quantumreachmedia.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-zinc-400">Strategy Hotline:</span>
                    <a href="tel:07738812028" className="text-saas-cyan hover:underline font-bold">
                      +91 077388 12028
                    </a>
                  </div>
                </div>

                <p className="text-zinc-400">
                  Under the Indian <em>Digital Personal Data Protection Act, 2023 (DPDP)</em>, the European Union <em>General Data Protection Regulation (GDPR)</em>, and applicable international privacy guidelines, Quantum Reach Media acts as the <strong>Data Fiduciary (Data Controller)</strong> for the information processed across our digital properties, consultation scheduling workflows, and client management operations.
                </p>
              </div>
            </section>

            {/* 02 The Information We Collect (Richly Structured Subsections) */}
            <section id="section-02" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  02
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                    The Information We Collect
                  </h2>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Structured breakdown of data categories collected across our digital operations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Subsection 2.1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-saas-cyan/40 transition-all space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-saas-cyan/15 border border-saas-cyan/30 flex items-center justify-center text-saas-cyan font-mono font-bold text-xs shrink-0">
                      2.1
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Direct Client &amp; Inquiry Submissions
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Information provided voluntarily when submitting audit requests or scheduling calls.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <span className="w-2 h-2 rounded-full bg-saas-cyan" />
                        Contact Identifiers
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed pl-4">
                        Full legal name, corporate business email address, direct phone hotline, and job title.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <span className="w-2 h-2 rounded-full bg-saas-cyan" />
                        Business &amp; Domain Assets
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed pl-4">
                        Target website URL, brand name, market vertical, and current monthly ad budget.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <span className="w-2 h-2 rounded-full bg-saas-cyan" />
                        Diagnostic Objectives
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed pl-4">
                        High-intent search targets, Google Map Pack locations, and technical obstacles.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <span className="w-2 h-2 rounded-full bg-saas-cyan" />
                        Consultation Records
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed pl-4">
                        Meeting notes, strategy session records, and email correspondence history.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subsection 2.2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/40 transition-all space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono font-bold text-xs shrink-0">
                      2.2
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Client Campaign &amp; Credential Data ("Engagement Assets")
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Authorized privileges shared for campaign execution under bilateral non-disclosure.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">Search &amp; Web Analytics Portals</strong>
                        <span className="text-zinc-400 text-[11px] leading-relaxed">
                          Delegated access to Google Search Console (GSC), Google Analytics (GA4), and Google Business Profile (GMB).
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">Paid Advertising Accounts &amp; Conversion APIs</strong>
                        <span className="text-zinc-400 text-[11px] leading-relaxed">
                          Partner permissions for Google Ads Manager, Meta Business Suite, and server-side Meta Conversions API (CAPI).
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">Code Repositories &amp; CMS Deployment</strong>
                        <span className="text-zinc-400 text-[11px] leading-relaxed">
                          GitHub repository access or staging CMS administrative accounts to execute on-page performance architectures.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-[11px] font-mono text-purple-200 flex items-center gap-2">
                    <Lock size={12} className="text-purple-400 shrink-0" />
                    <span>All client credentials are stored in encrypted vaults and never committed into public version control.</span>
                  </div>
                </div>

                {/* Subsection 2.3 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs shrink-0">
                      2.3
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Financial &amp; Invoicing Information
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Commercial billing and taxation records processed for retained services.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Receipt size={13} className="text-emerald-400" />
                        Invoicing Details
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Commercial invoice ID, corporate billing address, and Goods &amp; Services Tax Identification Number (GSTIN).
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <CreditCard size={13} className="text-emerald-400" />
                        PCI-DSS Payment Gateways
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Payments are cleared through certified third-party gateways (e.g. Razorpay or direct bank wire).
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono flex items-center gap-2">
                    <ShieldCheck size={13} className="shrink-0" />
                    <span>Zero Card Storage Guarantee: We never store full card numbers, CVVs, or UPI PINs on our servers.</span>
                  </div>
                </div>

                {/* Subsection 2.4 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-sky-500/40 transition-all space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-xs shrink-0">
                      2.4
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        Information Collected Automatically
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Technical telemetry generated during your visit to maintain performance and security.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Cpu size={13} className="text-sky-400" />
                        Device &amp; Network Telemetry
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        IP address (with geographic masking), browser engine, device model, and operating system.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <BarChart3 size={13} className="text-sky-400" />
                        Engagement Analytics
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Pages visited, session duration, scroll milestones, and referring search engine parameters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 03 How We Use Information */}
            <section id="section-03" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  How We Use Information
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  We deploy collected information exclusively for verified operational, engineering, and customer support purposes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-white text-xs">
                      <TrendingUp size={14} className="text-saas-cyan" />
                      Deliver Growth Frameworks
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Executing algorithmic SEO audits, Core Web Vitals optimization, local Google 3-Pack rank tracking, and paid media funnels.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-white text-xs">
                      <MessageSquare size={14} className="text-saas-cyan" />
                      Client Strategy Dispatch
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Responding to consultation bookings, delivering performance milestone decks, and managing project milestones.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-white text-xs">
                      <Receipt size={14} className="text-saas-cyan" />
                      Taxation &amp; GST Compliance
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Generating statutory tax receipts, auditing financial journals, and complying with Indian commercial accounting laws.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-white text-xs">
                      <ShieldCheck size={14} className="text-saas-cyan" />
                      Infrastructure Defense
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Monitoring cyber anomalies, defending against automated DDoS floods, and validating software integrity.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200 mt-4">
                  <strong>Explicit Data Integrity Promise:</strong> We do not sell, rent, lease, or monetize your personal details or customer data to third-party ad brokers or data aggregators.
                </div>
              </div>
            </section>

            {/* 04 Legal Bases for Processing */}
            <section id="section-04" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Legal Bases for Processing
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Under the Indian <em>Digital Personal Data Protection Act, 2023 (DPDP)</em> and European Union <em>GDPR</em>, our processing operations rely on the following distinct legal foundations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-saas-cyan tracking-wider">Basis 01</span>
                    <h4 className="text-xs font-bold text-white">Voluntary Consent</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      When you submit an audit inquiry form, subscribe to publications, or request consultation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-saas-cyan tracking-wider">Basis 02</span>
                    <h4 className="text-xs font-bold text-white">Contract Performance</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Executing agreed client deliverables, custom web architectures, and contractual retainer SLAs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-saas-cyan tracking-wider">Basis 03</span>
                    <h4 className="text-xs font-bold text-white">Legitimate Interests</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Securing web platforms against bot spam, analyzing page speed telemetry, and improving agency tools.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-saas-cyan tracking-wider">Basis 04</span>
                    <h4 className="text-xs font-bold text-white">Statutory Compliance</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Complying with corporate auditing requirements, tax filings, and regulatory guidelines in India.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 05 How We Share Information */}
            <section id="section-05" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  How We Share Information
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Data is transmitted strictly on an encrypted, need-to-know basis to accredited infrastructure providers under non-disclosure obligations:
                </p>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <Server size={16} className="text-saas-cyan shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Edge Hosting &amp; Version Control</strong>
                      <span className="text-[11px] text-zinc-400">
                        Vercel Inc. (global edge component server hosting) and GitHub for private codebase deployment.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <CreditCard size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Payment Gateways &amp; Banking Channels</strong>
                      <span className="text-[11px] text-zinc-400">
                        Razorpay Software Private Limited and banking partners for automated invoice clearance.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <BarChart3 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Marketing &amp; Search Measurement APIs</strong>
                      <span className="text-[11px] text-zinc-400">
                        Google LLC (Google Ads, GSC, GA4) and Meta Platforms for client campaign optimization.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 flex items-start gap-3">
                    <Scale size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-xs block">Statutory &amp; Law Enforcement Compliance</strong>
                      <span className="text-[11px] text-zinc-400">
                        Disclosures enforced by valid subpoenas, court warrants, or statutory Indian judicial requirements.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 Google AdSense & Advertising */}
            <section id="section-06" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Google AdSense &amp; Third-Party Advertising
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <p className="text-zinc-300">
                  Our publication sections (including our marketing insights blog and Google Algorithm Updates hub) may display programmatic advertisements served by Google AdSense and certified ad exchanges.
                </p>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3 font-sans">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <Cookie size={14} className="text-saas-cyan" />
                    DoubleClick DART &amp; Third-Party Advertising Cookies
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Third-party ad vendors, including Google, utilize cookies to serve contextual or personalized advertisements based on a user's prior visits to our website or other internet destinations. Google's use of advertising cookies enables it and its certified partners to serve ads based on visitor activity across the internet.
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-2">
                    <span className="text-[11px] font-mono text-zinc-300 font-bold block">
                      Visitor Opt-Out Controls:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href="https://www.google.com/settings/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-saas-cyan transition-all"
                      >
                        <span>Google Ads Settings</span>
                        <ExternalLink size={11} />
                      </a>
                      <a
                        href="https://www.aboutads.info/choices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-saas-cyan transition-all"
                      >
                        <span>AboutAds.info Choices</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 07 Analytics, Cookies & Tracking */}
            <section id="section-07" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Analytics, Cookies &amp; Tracking Technologies
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Cookies are compact data packets placed on your device to maintain secure session state and analyze performance:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Essential Cookies</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Strictly necessary to maintain routing, UI layout state, and cross-site request forgery defense.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">GA4 &amp; GTM Analytics</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Measures traffic origins and scroll depth using pseudonymized IP telemetry.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Browser Controls</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      You can modify, block, or delete cookies via your browser preference dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 08 Data Retention & Storage */}
            <section id="section-08" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Data Retention &amp; Storage
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Data retention schedules adhere strictly to statutory guidelines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1 text-center sm:text-left">
                    <span className="text-xl font-mono font-bold text-saas-cyan">24 Months</span>
                    <strong className="text-white text-xs block">Diagnostic Inquiries</strong>
                    <p className="text-[11px] text-zinc-400">
                      General form submissions are retained to assist follow-up consultations.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1 text-center sm:text-left">
                    <span className="text-xl font-mono font-bold text-purple-300">3 Years</span>
                    <strong className="text-white text-xs block">Active Client Contracts</strong>
                    <p className="text-[11px] text-zinc-400">
                      Preserved post-contract to resolve technical SLAs or warranty inquiries.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1 text-center sm:text-left">
                    <span className="text-xl font-mono font-bold text-emerald-400">8 Years</span>
                    <strong className="text-white text-xs block">Taxation (GST) Invoices</strong>
                    <p className="text-[11px] text-zinc-400">
                      Preserved in compliance with Indian corporate auditing mandates.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 09 Data Security Architecture */}
            <section id="section-09" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Data Security Architecture
                </h2>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Quantum Reach Media enforces robust organizational and technical safeguards:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">TLS 1.3 Encryption</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Enforced HTTPS data transmission across all public and internal routes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Least Privilege &amp; MFA</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Role-based administrative restrictions and hardware multi-factor authentication.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Vault Credential Storage</strong>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Client API keys and credentials stored in hardware-encrypted key vaults.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10 Your Rights & Choices */}
            <section id="section-10" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Your Rights &amp; Choices
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <p className="text-zinc-400">
                  Under the Indian DPDP Act 2023 and EU GDPR, you are guaranteed the following statutory rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Right to Access &amp; Summary</strong>
                    <p className="text-[11px] text-zinc-400">Request confirmation of personal records processed by our agency.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Right to Correction &amp; Updation</strong>
                    <p className="text-[11px] text-zinc-400">Rectify incomplete, inaccurate, or outdated business identifiers.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Right to Erasure ("Forget Me")</strong>
                    <p className="text-[11px] text-zinc-400">Demand deletion of records, subject to ongoing statutory tax obligations.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white text-xs block">Right to Withdraw Consent</strong>
                    <p className="text-[11px] text-zinc-400">Revoke consent granted previously for marketing communications at any time.</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 pt-1">
                  To exercise any of these statutory rights, email your request to:{" "}
                  <a href="mailto:contact@quantumreachmedia.com" className="text-saas-cyan font-mono font-bold hover:underline">
                    contact@quantumreachmedia.com
                  </a>
                </p>
              </div>
            </section>

            {/* 11 Children's Privacy */}
            <section id="section-11" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Children's Privacy
                </h2>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Our platforms and services are intended exclusively for commercial enterprises, working practitioners, and individuals aged 18 and older. We do not knowingly solicit or maintain records of minors. If you suspect an underage user submitted details, alert us at <a href="mailto:contact@quantumreachmedia.com" className="text-saas-cyan hover:underline">contact@quantumreachmedia.com</a> for immediate purging.
              </p>
            </section>

            {/* 12 International Data Transfers */}
            <section id="section-12" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  International Data Transfers
                </h2>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                While headquartered in Pune, India, our technical assets leverage distributed global edge networks (e.g. Vercel) spanning data centers in India, the United States, and the European Union. All international data movements uphold standard contractual privacy mechanisms.
              </p>
            </section>

            {/* 13 Grievance Officer (India) */}
            <section id="section-13" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Grievance Officer (India)
                </h2>
              </div>
              <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  In compliance with the <em>Information Technology Act, 2000</em> and the <em>Digital Personal Data Protection Act, 2023</em>, our designated Grievance Officer is:
                </p>
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-1.5 text-zinc-300">
                  <div><strong>Officer / Desk:</strong> Shreyas Ambhaikar / Data Grievance Redressal Desk</div>
                  <div><strong>Entity:</strong> Quantum Reach Media</div>
                  <div><strong>Address:</strong> Survey Number 43, Lohar Arcade, Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014</div>
                  <div><strong>Email:</strong> <a href="mailto:contact@quantumreachmedia.com" className="text-saas-cyan hover:underline">contact@quantumreachmedia.com</a></div>
                  <div><strong>Direct Phone:</strong> <a href="tel:07738812028" className="text-saas-cyan hover:underline">+91 077388 12028</a></div>
                </div>
              </div>
            </section>

            {/* 14 Modifications to This Policy */}
            <section id="section-14" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  14
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Modifications to This Policy
                </h2>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                We reserve the right to amend this Privacy Policy periodically to reflect shifts in statutory laws, emerging ad standards, or operational evolutions. The modified document will be posted here with an updated "Effective Date."
              </p>
            </section>

            {/* 15 Contact Us */}
            <section id="section-15" className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A0A]/90 border border-white/10 hover:border-white/15 transition-all shadow-xl backdrop-blur-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
                  15
                </span>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
                  Contact Us
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Reach out directly to our leadership and strategy desks for any data protection inquiries:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Mail size={13} className="text-saas-cyan" /> Direct Email Desk
                    </span>
                    <a href="mailto:contact@quantumreachmedia.com" className="text-xs font-mono font-bold text-saas-cyan hover:underline block pt-1">
                      contact@quantumreachmedia.com
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <Phone size={13} className="text-saas-cyan" /> Direct Strategy Phone
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
