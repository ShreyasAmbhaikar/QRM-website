"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES, ServiceItem } from "@/data/services-data";
import { GlowCard } from "@/components/ui/glow-card";
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  BarChart3,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesPageView() {
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesPillar =
        selectedPillar === "all" || service.pillar === selectedPillar;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query) ||
        service.simpleExplainer.toLowerCase().includes(query) ||
        service.howItRanks.toLowerCase().includes(query) ||
        service.deliverables.some((d) => d.toLowerCase().includes(query));
      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  const faqs = [
    {
      q: "How do I know which of the 12 services my Pune business needs?",
      a: "Most businesses begin with a foundational combination: an SEO Website (Next.js with 90+ speed), Local SEO & GMB Optimization (for Google Map Pack visibility in Pune), and Analytics Attribution. During our initial free audit, we analyze your current search rankings, competitor backlinks, and conversion leaks to recommend the exact protocols needed to dominate your market."
    },
    {
      q: "Why do you engineer websites on Next.js instead of using WordPress templates?",
      a: "Standard WordPress sites rely on dozens of third-party plugins that drag mobile load speeds down to 4-8 seconds, causing 53% of mobile visitors to bounce. Next.js produces pre-rendered, lightweight static code hosted on global edge networks that loads in under 500ms, guaranteeing a 90+ PageSpeed score and giving Google an irresistible signal to rank your pages higher."
    },
    {
      q: "How does Local SEO (GMB) differ from Traditional SEO?",
      a: "Traditional SEO ranks your website for broad organic search keywords across cities or national regions. Local SEO targets the Google 3-Pack Maps box specifically when people in Pune search for immediate local solutions (e.g., 'dentist near me', 'interior designer Baner'). Local SEO leverages geo-citations, review signals, and proximity algorithms to generate immediate phone calls."
    },
    {
      q: "How quickly can we expect measurable organic search results in Pune?",
      a: "Local SEO (Google Business Profile) optimizations and technical website speed fixes typically demonstrate sharp lifts in impressions and phone calls within 30 to 45 days. Broader organic keyword rankings on Google Page 1 generally reach peak velocity between months 2 and 4 as topic clusters and domain authority compound."
    },
    {
      q: "Do you enforce long-term lock-in contracts?",
      a: "No. We believe in performance-driven partnerships with zero lock-in contracts. We earn your business every month through transparent, real-time Looker Studio dashboards, clear revenue attribution, and consistent ranking gains."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 dark:bg-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-[600px] right-10 w-[500px] h-[350px] bg-saas-cyan/10 dark:bg-saas-cyan/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        {/* ================= HERO SECTION ================= */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>SYSTEMATIZED GROWTH PROTOCOLS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-sans">
            Engineering Search Dominance &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-saas-cyan bg-clip-text text-transparent">
              Digital Acquisition
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don’t do vague marketing experiments. We execute 12 battle-tested growth protocols engineered to capture Page 1 rankings, drive qualified inbound inquiries, and turn web traffic into predictable revenue for ambitious Pune businesses.
          </p>

          {/* Quick Value Proof Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium">
            <span className="px-3 py-1 rounded-full bg-card border border-border shadow-sm flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-saas-cyan" /> 90+ Web Speed Guaranteed
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border shadow-sm flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 0 Lock-In Contracts
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border shadow-sm flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-purple-500" /> 100% Data Attribution
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border shadow-sm flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-500" /> 12 Full-Stack Protocols
            </span>
          </div>
        </section>

        {/* ================= FILTER & SEARCH BAR ================= */}
        <section className="mt-14 sm:mt-16 sticky top-20 sm:top-24 z-30 py-3 bg-background/80 backdrop-blur-xl border-y border-border/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-muted/60 dark:bg-card/70 border border-border rounded-full overflow-x-auto max-w-full">
              {[
                { id: "all", label: "All Protocols (12)" },
                { id: "digital-marketing", label: "Digital Marketing (4)" },
                { id: "website-content", label: "Website & Content (4)" },
                { id: "specialized-growth", label: "Specialized Growth (4)" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPillar(tab.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer",
                    selectedPillar === tab.id
                      ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.35)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search protocol or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full bg-card border border-border focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder:text-muted-foreground/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ================= SERVICES SHOWCASE GRID ================= */}
        <section className="mt-10 sm:mt-12">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-card/40 rounded-3xl border border-border">
              <p className="text-lg font-semibold text-foreground">No protocols matched your search.</p>
              <p className="text-sm text-muted-foreground mt-1">Try searching for keywords like "SEO", "speed", "ads", or "local".</p>
              <button
                onClick={() => {
                  setSelectedPillar("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-bold rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {filteredServices.map((service, index) => (
                <GlowCard
                  key={service.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/90 dark:bg-zinc-950/80 p-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Visual Image Preview */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-border/70">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Quantum Reach Media Pune`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                        {service.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-600/90 backdrop-blur-md text-white border border-purple-400/30 flex items-center gap-1 shadow-md">
                        <TrendingUp className="w-3 h-3" />
                        {service.metric.value} {service.metric.label}
                      </span>
                    </div>

                    {/* Bottom Category Chip on Image */}
                    <div className="absolute bottom-3 left-4 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-saas-cyan bg-zinc-950/80 px-2 py-0.5 rounded border border-saas-cyan/30 backdrop-blur-md">
                        {service.pillarLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Educational Breakdown */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      {/* Service Title */}
                      <Link href={`/services/${service.slug}`} className="group-hover:text-purple-600 dark:group-hover:text-saas-cyan transition-colors">
                        <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-foreground flex items-center justify-between">
                          <span>{service.title}</span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 dark:group-hover:text-saas-cyan group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </h3>
                      </Link>

                      <p className="text-sm font-medium text-purple-700 dark:text-purple-400 mt-1">
                        {service.tagline}
                      </p>

                      {/* Educational "What It Is" Explainer */}
                      <div className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <span className="font-bold text-foreground block mb-1">What It Is:</span>
                        {service.simpleExplainer}
                      </div>

                      {/* "How It Ranks You in Pune" Callout */}
                      <div className="mt-4 p-3.5 rounded-2xl bg-purple-500/5 dark:bg-purple-950/30 border border-purple-500/20 text-xs sm:text-sm leading-relaxed">
                        <div className="flex items-center gap-1.5 font-bold text-purple-900 dark:text-purple-300 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-saas-cyan" />
                          <span>How This Ranks You & Drives Revenue:</span>
                        </div>
                        <p className="text-muted-foreground">
                          {service.howItRanks}
                        </p>
                      </div>

                      {/* Key Deliverables Provided to Client */}
                      <div className="mt-5 space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground block">
                          What We Deliver To You:
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="text-[11px] text-muted-foreground">
                        <span className="font-semibold text-foreground">Best For:</span> {service.bestFor}
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-foreground text-background hover:bg-purple-600 hover:text-white dark:hover:bg-saas-cyan dark:hover:text-black transition-all shadow-sm shrink-0 whitespace-nowrap"
                      >
                        <span>Full Protocol</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          )}
        </section>

        {/* ================= ARCHITECTURE COMPARISON ================= */}
        <section className="mt-24 sm:mt-32">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-saas-cyan text-xs font-semibold uppercase tracking-wider">
              TRANSPARENT VALUE COMPARISON
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-sans">
              Traditional Agencies vs. Quantum Growth Architecture
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Why leading Pune doctors, real estate firms, and B2B founders replace conventional marketing retainers with our engineering protocols.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/70 text-foreground border-b border-border">
                <tr>
                  <th className="py-4 px-4 sm:px-6 font-bold">Evaluation Vector</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-muted-foreground">Typical Pune Marketing Agencies</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-purple-600 dark:text-saas-cyan">Quantum Reach Media</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-foreground">Website Infrastructure</td>
                  <td className="py-4 px-4 sm:px-6 text-muted-foreground">Slow WordPress themes (4-8s load, 40+ plugins, 35/100 mobile speed)</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-purple-700 dark:text-saas-cyan">Custom Next.js App Router (&lt;500ms load, 90+ speed guaranteed)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-foreground">Local Pune 3-Pack Strategy</td>
                  <td className="py-4 px-4 sm:px-6 text-muted-foreground">Basic GMB claim, generic photos, zero geo-coded schema markup</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-purple-700 dark:text-saas-cyan">100+ local Pune directory citations, geo-tagged schema, review velocity engine</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-foreground">AI Search (ChatGPT / Gemini)</td>
                  <td className="py-4 px-4 sm:px-6 text-muted-foreground">Ignored entirely; relying on outdated 2018 keyword stuffing techniques</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-purple-700 dark:text-saas-cyan">Structured AEO & GEO entity graphs built for GPTBot, Gemini & Perplexity</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-foreground">Attribution & Accountability</td>
                  <td className="py-4 px-4 sm:px-6 text-muted-foreground">Vague monthly PDF reports showing clicks and vanity impressions</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-purple-700 dark:text-saas-cyan">Live executive Looker Studio dashboard tracking exact calls, leads, and revenue</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-foreground">Contract Terms</td>
                  <td className="py-4 px-4 sm:px-6 text-muted-foreground">6-12 month mandatory lock-in contracts with painful cancellation penalties</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-purple-700 dark:text-saas-cyan">Zero lock-in contracts. We earn your partnership month-over-month on results</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="mt-24 sm:mt-32 max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-sans">
              Everything You Need to Know About Our Services
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-foreground text-sm sm:text-base hover:text-purple-600 dark:hover:text-saas-cyan transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0",
                        isOpen ? "rotate-180 text-purple-600 dark:text-saas-cyan" : ""
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= BOTTOM CONVERSION CTA ================= */}
        <section className="mt-24 sm:mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-purple-300/60 dark:border-white/15 bg-gradient-to-br from-purple-900/40 via-background to-card p-8 sm:p-12 text-center shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                PUNE SEARCH & REVENUE AUDIT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Ready to Turn Search Traffic into Measurable Growth?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Schedule a 30-minute growth consultation with our technical and marketing architects. We'll inspect your domain, uncover competitor ranking gaps, and map out your custom protocol.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request Strategy Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm bg-card hover:bg-muted border border-border text-foreground transition-all"
                >
                  View Client Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
