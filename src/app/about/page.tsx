import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlowCard } from "@/components/ui/glow-card";
import { 
  Sparkles, 
  Search, 
  TrendingUp, 
  Users, 
  Mail, 
  Code2, 
  Palette, 
  FileText, 
  Award, 
  MapPin, 
  Megaphone, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Quantum Reach Media - The Growth Architects",
  description: "Learn about Quantum Reach Media, founded by Shreyas Ambhaikar & Tushar Tanpure. We engineer high-performance SEO, Next.js web architectures, and high-ROI digital marketing.",
};

const architects = [
  {
    name: "Tushar Tanpure",
    role: "Co-Founder & CTO",
    title: "Technical & SEO Mastermind",
    image: "/tushar.jpg",
    bio: "SEO savant and full-stack engineer. Specializes in building sub-second serverless Next.js architectures, local GMB map pack dominance, automated data pipelines, and surgical search optimization.",
    skills: ["Technical SEO", "Local GMB Dominance", "Next.js & React", "Core Web Vitals", "Data Attribution"],
    ringGradient: "from-purple-500 via-purple-600 to-indigo-500",
  },
  {
    name: "Shreyas Ambhaikar",
    role: "Co-Founder & CEO",
    title: "Visionary & Design Strategist",
    image: "/shreyas.jpg",
    bio: "Conversion designer and growth strategist. Merges cutting-edge glassmorphic design with behavioral conversion psychology, building memorable digital brand identities that turn visitors into loyal clients.",
    skills: ["UI/UX Architecture", "Brand Strategy", "Conversion Design", "Growth Marketing", "Direct Response Copy"],
    ringGradient: "from-saas-purple via-fuchsia-500 to-purple-500",
  },
];

const capabilities = [
  {
    category: "Performance Marketing & SEO",
    description: "Algorithmic search dominance and precision paid acquisition engineered to capture high-intent buyers.",
    services: [
      {
        title: "SEO Services & Technical Dominance",
        desc: "Deep technical audits, semantic topic clusters, and white-hat ranking strategies to dominate competitive search terms.",
        href: "/services/traditional-seo",
        icon: <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      },
      {
        title: "Google Ads (PPC) Management",
        desc: "Laser-targeted Google Search & Performance Max campaigns engineered for maximum impression share and lowest CPA.",
        href: "/services/google-ads-ppc",
        icon: <TrendingUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
      },
      {
        title: "Social Media Marketing",
        desc: "Multi-platform brand storytelling, short-form video reels, and community growth across LinkedIn, Instagram, and X.",
        href: "/services/social-media-marketing",
        icon: <Users className="w-5 h-5 text-pink-500 dark:text-pink-400" />
      },
      {
        title: "Email Marketing & Automation",
        desc: "Automated behavioral trigger sequences, drip funnels, and high-converting newsletters that maximize customer LTV.",
        href: "/services/email-marketing",
        icon: <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
      }
    ]
  },
  {
    category: "Website & Content Architecture",
    description: "Sub-second Next.js web applications, iconic conversion UI/UX, and search-optimized authority content.",
    services: [
      {
        title: "Next.js Web Development",
        desc: "Custom React/Next.js platforms guaranteed to score 100/100 on Google Lighthouse with sub-500ms load times.",
        href: "/services/seo-web-development",
        icon: <Code2 className="w-5 h-5 text-saas-purple dark:text-saas-cyan" />
      },
      {
        title: "Branding & Conversion UI/UX",
        desc: "Iconic visual identities, glassmorphic UI design systems, and friction-free user flows designed to convert.",
        href: "/services/branding-design",
        icon: <Palette className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" />
      },
      {
        title: "Content Architecture & Copywriting",
        desc: "Authoritative pillar articles, service page copy, and NLP-optimized assets built for human readers and search crawlers.",
        href: "/services/content-architecture",
        icon: <FileText className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
      },
      {
        title: "Authority Building & Digital PR",
        desc: "High-DA white-hat editorial backlinks, unlinked brand mention recovery, and targeted digital PR campaigns.",
        href: "/services/authority-building",
        icon: <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
      }
    ]
  },
  {
    category: "Specialized & Local Growth",
    description: "Regional market leadership, surgical paid social advertising, and transparent real-time revenue analytics.",
    services: [
      {
        title: "Google My Business (GMB) Optimization",
        desc: "Local 3-pack map dominance, proximity ranking expansion, and automated review velocity for regional businesses in Pune & beyond.",
        href: "/services/local-seo-gmb",
        icon: <MapPin className="w-5 h-5 text-rose-500 dark:text-rose-400" />
      },
      {
        title: "Meta Advertisements (FB & Instagram)",
        desc: "High-converting creative assets, direct-response copy, and Conversion API (CAPI) tracking for scalable customer acquisition.",
        href: "/services/meta-advertisements",
        icon: <Megaphone className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Analytics & Attribution Tracking",
        desc: "Server-side Google Tag Manager (GTM), GA4 event instrumentation, and custom real-time executive ROI dashboards.",
        href: "/services/analytics-tracking",
        icon: <BarChart3 className="w-5 h-5 text-purple-600 dark:text-saas-cyan" />
      }
    ]
  }
];

const pillars = [
  {
    icon: <Zap className="w-6 h-6 text-purple-600 dark:text-saas-cyan" />,
    title: "100/100 Engineering Standards",
    desc: "We refuse slow, bloated WordPress templates. Every system we deploy is built with modern, ultra-optimized frameworks to guarantee flawless Core Web Vitals."
  },
  {
    icon: <Target className="w-6 h-6 text-purple-600 dark:text-saas-cyan" />,
    title: "Revenue-Driven Attribution",
    desc: "Vanity impressions don't pay bills. We track actual phone calls, booked appointments, and closed deals with surgical server-side analytics."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-saas-cyan" />,
    title: "Algorithmic Resilience",
    desc: "Our technical SEO and entity-based architectures protect your rankings against sudden Google core updates and search disruptions."
  }
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 pb-24 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-xs font-mono text-purple-950/60 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-saas-cyan transition-colors flex items-center gap-2 font-semibold">
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-purple-600 dark:text-saas-cyan" /> The Architects of Digital Growth
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-purple-950 dark:text-white leading-[1.15]">
            Engineered for Velocity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Built for Search Dominance.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-purple-950/80 dark:text-zinc-300 font-medium leading-relaxed">
            Quantum Reach Media is a premier full-stack digital growth and SEO agency based in Pune. We merge cutting-edge web engineering with aggressive search engine dominance and conversion psychology to transform ambitious businesses into industry market leaders.
          </p>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-left">
            <GlowCard className="p-4 text-center">
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">
                100/100
              </div>
              <div className="text-[11px] font-semibold text-purple-950/70 dark:text-zinc-400 mt-1">Lighthouse Speed Standard</div>
            </GlowCard>

            <GlowCard className="p-4 text-center">
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">
                +340%
              </div>
              <div className="text-[11px] font-semibold text-purple-950/70 dark:text-zinc-400 mt-1">Organic Call Velocity</div>
            </GlowCard>

            <GlowCard className="p-4 text-center">
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">
                4.2x
              </div>
              <div className="text-[11px] font-semibold text-purple-950/70 dark:text-zinc-400 mt-1">Average Campaign ROAS</div>
            </GlowCard>

            <GlowCard className="p-4 text-center">
              <div className="text-2xl sm:text-3xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-saas-purple dark:from-saas-cyan dark:to-saas-purple">
                100%
              </div>
              <div className="text-[11px] font-semibold text-purple-950/70 dark:text-zinc-400 mt-1">Server Data Attribution</div>
            </GlowCard>
          </div>
        </div>

        {/* The Architects / Leadership Section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 dark:text-saas-cyan">
              LEADERSHIP TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-purple-950 dark:text-white">
              Meet The Architects
            </h2>
            <p className="text-xs sm:text-sm text-purple-950/80 dark:text-zinc-400 font-medium">
              Bridging engineering rigor with conversion-led creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            {architects.map((person, index) => (
              <GlowCard 
                key={index} 
                className="p-8 group relative overflow-hidden text-center bg-card dark:bg-zinc-950/90 border border-purple-200 dark:border-white/10 rounded-3xl shadow-xl flex flex-col items-center justify-between"
              >
                <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full">
                  {/* Glowing Profile Frame */}
                  <div className="relative isolate rounded-full bg-purple-100 dark:bg-black p-3 shadow-md">
                    <div className={"p-1 rounded-full bg-gradient-to-r " + person.ringGradient + " shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform duration-500 group-hover:scale-105"}>
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white dark:border-zinc-950 bg-zinc-900 shrink-0">
                        <Image 
                          src={person.image} 
                          alt={person.name} 
                          fill 
                          className="object-cover object-top contrast-105 brightness-105" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <span className="px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-purple-950 dark:text-purple-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {person.role}
                  </span>

                  {/* Info Metadata */}
                  <div className="space-y-1.5 w-full flex flex-col items-center">
                    <h3 className="text-2xl font-sans font-bold text-purple-950 dark:text-white tracking-tight">
                      {person.name}
                    </h3>
                    
                    <p className="text-purple-700 dark:text-saas-cyan text-xs font-mono uppercase tracking-widest font-bold">
                      {person.title}
                    </p>
                    
                    <p className="text-purple-900/80 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium pt-1 max-w-sm">
                      {person.bio}
                    </p>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 justify-center">
                    {person.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-900 dark:text-zinc-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Why QRM / Core Engineering Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 dark:text-saas-cyan">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-purple-950 dark:text-white">
              Why Quantum Reach Media?
            </h2>
            <p className="text-xs sm:text-sm text-purple-950/80 dark:text-zinc-400 font-medium">
              We built QRM because modern businesses deserve better than sluggish sites and vague marketing reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <GlowCard key={idx} className="p-8 flex flex-col justify-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-sans font-bold text-purple-950 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-900/80 dark:text-zinc-400 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Comprehensive Services Matrix */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 dark:text-saas-cyan">
              FULL SCOPE OF CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-purple-950 dark:text-white">
              Our Growth Matrix
            </h2>
            <p className="text-xs sm:text-sm text-purple-950/80 dark:text-zinc-400 font-medium">
              Explore our full range of technical workflows engineered for high-intent customer acquisition.
            </p>
          </div>

          <div className="space-y-12">
            {capabilities.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-5">
                <div className="border-b border-purple-200/80 dark:border-white/10 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-xl font-sans font-bold text-purple-950 dark:text-white">
                    {cat.category}
                  </h3>
                  <span className="text-xs text-purple-900/70 dark:text-zinc-400 font-medium">
                    {cat.description}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.services.map((serv, servIdx) => (
                    <Link key={servIdx} href={serv.href}>
                      <GlowCard className="p-6 h-full flex flex-col justify-between group hover:border-purple-400 dark:hover:border-saas-cyan/50 transition-all cursor-pointer">
                        <div className="space-y-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-zinc-900 border border-purple-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {serv.icon}
                          </div>
                          <h4 className="text-base font-sans font-bold text-purple-950 dark:text-white group-hover:text-purple-700 dark:group-hover:text-saas-cyan transition-colors">
                            {serv.title}
                          </h4>
                          <p className="text-xs text-purple-900/80 dark:text-zinc-400 font-medium leading-relaxed">
                            {serv.desc}
                          </p>
                        </div>

                        <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-saas-cyan group-hover:translate-x-1 transition-transform">
                          <span>Explore Technical Workflow</span>
                          <ArrowRight size={13} />
                        </div>
                      </GlowCard>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Proven Execution Framework */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 dark:text-saas-cyan">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-purple-950 dark:text-white">
              The 4-Step Growth Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-purple-950/80 dark:text-zinc-400 font-medium">
              How we take your digital footprint from invisible to market-dominant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <GlowCard className="p-6">
              <div className="text-2xl font-mono font-bold text-purple-700 dark:text-saas-cyan mb-2">01</div>
              <h4 className="text-sm font-bold text-purple-950 dark:text-white mb-1.5">Deep Diagnostic</h4>
              <p className="text-xs text-purple-900/80 dark:text-zinc-400 font-medium leading-relaxed">
                Full technical crawl, Core Web Vitals audit, GMB radius mapping, and competitor gap analysis.
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-2xl font-mono font-bold text-purple-700 dark:text-saas-cyan mb-2">02</div>
              <h4 className="text-sm font-bold text-purple-950 dark:text-white mb-1.5">Architecture Blueprint</h4>
              <p className="text-xs text-purple-900/80 dark:text-zinc-400 font-medium leading-relaxed">
                Engineering high-converting UX layouts, semantic keyword schemas, and conversion tracking triggers.
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-2xl font-mono font-bold text-purple-700 dark:text-saas-cyan mb-2">03</div>
              <h4 className="text-sm font-bold text-purple-950 dark:text-white mb-1.5">Velocity Execution</h4>
              <p className="text-xs text-purple-900/80 dark:text-zinc-400 font-medium leading-relaxed">
                Publishing high-authority content, building editorial backlinks, and launching paid acquisition funnels.
              </p>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="text-2xl font-mono font-bold text-purple-700 dark:text-saas-cyan mb-2">04</div>
              <h4 className="text-sm font-bold text-purple-950 dark:text-white mb-1.5">Attribution & Scale</h4>
              <p className="text-xs text-purple-900/80 dark:text-zinc-400 font-medium leading-relaxed">
                Real-time dashboard monitoring, weekly A/B testing, and aggressive scaling of winning campaigns.
              </p>
            </GlowCard>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 dark:from-purple-950/40 dark:via-zinc-900 dark:to-purple-950/40 border border-purple-200 dark:border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-200/70 dark:bg-white/5 border border-purple-300 dark:border-white/10 text-xs font-mono text-purple-950 dark:text-zinc-300">
            <CheckCircle2 size={13} className="text-purple-700 dark:text-saas-cyan" /> Ready to Outrank Your Competition?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-purple-950 dark:text-white max-w-xl mx-auto leading-tight">
            Let's Engineer Your Digital Authority.
          </h2>
          
          <p className="text-xs sm:text-sm text-purple-900/80 dark:text-zinc-400 max-w-lg mx-auto font-medium">
            Schedule a 1-on-1 strategy consultation directly with our founders to analyze your current search visibility and build a customized growth blueprint.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105"
            >
              Get In Touch With The Architects
            </Link>

            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded-full bg-card dark:bg-zinc-900 border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white hover:bg-purple-50 dark:hover:bg-white/10 font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              View Live Client Work ↗
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
