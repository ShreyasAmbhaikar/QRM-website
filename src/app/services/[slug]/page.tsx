import { GlowCard } from "@/components/ui/glow-card";
import { CheckCircle2, Sparkles, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceMotionGraphic } from "@/components/services/service-motion-graphic";
import type { Metadata } from "next";

interface ServiceDetail {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  deliverables: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  accentColor: string;
  motionType: "radar" | "code" | "ai" | "search" | "ads" | "analytics" | "content" | "pr";
}

const serviceDetailsMap: Record<string, ServiceDetail> = {
  "local-seo-gmb": {
    slug: "local-seo-gmb",
    badge: "MAP PACK DOMINANCE",
    title: "Local SEO & GMB Optimization",
    subtitle: "Capture High-Intent Local Searches in Pune & Regional Markets",
    tagline: "Put your business at the top of the Google 3-Pack Map Results.",
    description: "Our Local SEO framework optimizes your Google Business Profile (GMB), local entity citations, geo-targeted schema markup, and regional authority signals to turn nearby searches into paying clients.",
    metrics: [
      { value: "+340%", label: "Increase in Phone Calls" },
      { value: "#1", label: "Google Map Pack Ranking" },
      { value: "5.0 ★", label: "Review Velocity Signal" }
    ],
    deliverables: [
      "Complete Google Business Profile (GMB) Optimization",
      "Local Entity & NAP Citation Network (100+ Directories)",
      "Geo-Targeted Local Schema & Structured Data Markup",
      "Local Map Pack Rank Tracking & Review Management",
      "Competitor Local Proximity & Radius Analysis"
    ],
    workflowSteps: [
      { step: "01", title: "GMB Audit & Radius Scan", desc: "Mapping your current local search proximity and identifying missing citation signals." },
      { step: "02", title: "Geo-Entity Optimization", desc: "Injecting local structured data and geo-coded media tags into your digital properties." },
      { step: "03", title: "Citation & Review Velocity", desc: "Building local domain trust and automating customer review acquisition." }
    ],
    accentColor: "from-saas-cyan to-blue-500",
    motionType: "radar"
  },
  "seo-web-development": {
    slug: "seo-web-development",
    badge: "90+ LIGHTHOUSE PERFORMANCE",
    title: "SEO Website Development",
    subtitle: "High-Performance Next.js & React Architectures",
    tagline: "Sub-second load times engineered for maximum search engine crawlability.",
    description: "We build custom, lightning-fast web applications using Next.js, Tailwind CSS, and edge CDN architecture. Every line of code is structured for sub-500ms response times and perfect mobile Core Web Vitals.",
    metrics: [
      { value: "90+", label: "PageSpeed Performance" },
      { value: "< 0.5s", label: "Largest Contentful Paint (LCP)" },
      { value: "+180%", label: "Mobile Conversion Rate" }
    ],
    deliverables: [
      "Custom Next.js 16 App Router & React Architecture",
      "Sub-Second Edge Rendering & Global CDN Deployment",
      "90+ Core Web Vitals Guarantee",
      "Dynamic OpenGraph & Automated Meta Architecture",
      "Mobile-First Glassmorphic & Responsive UI/UX"
    ],
    workflowSteps: [
      { step: "01", title: "UI/UX & Codebase Blueprinting", desc: "Designing high-conversion layouts with strict semantic HTML and zero bloat." },
      { step: "02", title: "Next.js Edge Engineering", desc: "Building modular React components optimized for instant server rendering." },
      { step: "03", title: "Performance & CWV Tuning", desc: "Achieving 90+ speed scores and deploying on global edge networks." }
    ],
    accentColor: "from-saas-purple to-fuchsia-500",
    motionType: "code"
  },
  "aeo-geo-optimization": {
    slug: "aeo-geo-optimization",
    badge: "AI LLM RANKING ENGINE",
    title: "AEO / GEO Optimization",
    subtitle: "Rank Inside ChatGPT, Claude, Gemini & Perplexity",
    tagline: "Future-proof your brand for the Generative AI search era.",
    description: "Artificial Engine Optimization (AEO) and Generative Engine Optimization (GEO) structure your brand's data so large language models (LLMs) cite your business when users ask AI tools for recommendations.",
    metrics: [
      { value: "#1 Recommended", label: "Inside GPTBot & Gemini" },
      { value: "+450%", label: "AI Citation Mentions" },
      { value: "100%", label: "Semantic Entity Indexing" }
    ],
    deliverables: [
      "LLM Crawler Optimization (GPTBot, ClaudeBot, Gemini)",
      "Knowledge Graph & Semantic Entity Structuring",
      "Conversational QA & Intent Data Ingestion",
      "AI Citation Tracking & Perplexity Brand Audits",
      "JSON-LD Schema Graph Injection"
    ],
    workflowSteps: [
      { step: "01", title: "Entity Extraction", desc: "Defining your brand's core factual relationships in AI-readable JSON-LD format." },
      { step: "02", title: "LLM Corpus Ingestion", desc: "Optimizing content formatting for direct consumption by Generative Search crawlers." },
      { step: "03", title: "Citation Auditing", desc: "Continuously testing and tracking AI recommendations across ChatGPT and Gemini." }
    ],
    accentColor: "from-emerald-400 to-teal-500",
    motionType: "ai"
  },
  "traditional-seo": {
    slug: "traditional-seo",
    badge: "ALGORITHMIC DOMINANCE",
    title: "Traditional SEO Mastery",
    subtitle: "Comprehensive Technical & On-Page Search Engineering",
    tagline: "Dominating competitive Google search engine algorithm updates.",
    description: "Deep technical audits, crawl budget optimization, semantic keyword grouping, and structural on-page SEO that propel your domain to page 1 for high-value commercial keywords.",
    metrics: [
      { value: "Page 1", label: "Target Commercial Keywords" },
      { value: "0 Crawl Errors", label: "Technical Health Index" },
      { value: "+210%", label: "Organic Search Growth" }
    ],
    deliverables: [
      "Deep Technical Site Health & Crawl Audit",
      "Semantic Topic Clustering & Keyword Architecture",
      "On-Page Heading, Content & Internal Linking Strategy",
      "XML Sitemap, Robots.txt & Canonical Engineering",
      "Monthly SERP Tracking & Competitor Disruption Reports"
    ],
    workflowSteps: [
      { step: "01", title: "Technical Diagnostic", desc: "Eliminating indexation bottlenecks, duplicate content, and redirect chains." },
      { step: "02", title: "Topic Clusters", desc: "Mapping commercial keyword groups into high-authority pillar content hubs." },
      { step: "03", title: "SERP Scalper", desc: "Continuous on-page optimization to outrank competitor positions." }
    ],
    accentColor: "from-yellow-400 to-amber-500",
    motionType: "search"
  },
  "meta-advertisements": {
    slug: "meta-advertisements",
    badge: "HIGH-INTENT LEAD GEN",
    title: "Meta Advertisements",
    subtitle: "Data-Driven Facebook & Instagram Performance Marketing",
    tagline: "Turn ad spend into predictable, high-converting active leads.",
    description: "We design high-converting visual ad creative, write psychological sales copy, and engineer laser-targeted Meta ad funnels that generate qualified calls and customer inquiries.",
    metrics: [
      { value: "4.2x", label: "Average Campaign ROAS" },
      { value: "-40%", label: "Cost Per Acquisition (CPA)" },
      { value: "100%", label: "CAPI & Pixel Tracking" }
    ],
    deliverables: [
      "Meta Conversions API (CAPI) & Pixel Setup",
      "High-Converting Graphic & Video Ad Creative",
      "Copywriting & Direct-Response Funnel Architecture",
      "Lookalike & Custom Audience Retargeting Sequences",
      "Daily A/B Split Testing & Budget Scaling"
    ],
    workflowSteps: [
      { step: "01", title: "Audience Profiling", desc: "Identifying your ideal customer persona and high-intent demographic triggers." },
      { step: "02", title: "Creative Engine", desc: "Designing thumb-stopping ad visuals and high-converting landing pages." },
      { step: "03", title: "Scaling & CAPI Tracking", desc: "Scaling winning ad sets while maintaining low cost per lead." }
    ],
    accentColor: "from-saas-cyan to-indigo-500",
    motionType: "ads"
  },
  "analytics-tracking": {
    slug: "analytics-tracking",
    badge: "REAL-TIME INTELLIGENCE",
    title: "Analytics & Tracking",
    subtitle: "Flawless Data Attribution & Real-Time Dashboards",
    tagline: "Never guess where your leads come from again.",
    description: "We install end-to-end event tracking using Google Tag Manager (GTM), GA4, and custom Looker Studio dashboards so you can measure every click, call, and conversion with surgical precision.",
    metrics: [
      { value: "100%", label: "Data Attribution Accuracy" },
      { value: "Real-Time", label: "Executive ROI Dashboard" },
      { value: "0 Loss", label: "Server-Side Tagging" }
    ],
    deliverables: [
      "GA4 Custom Event & Conversion Funnel Setup",
      "Google Tag Manager (GTM) Server-Side Container",
      "Real-Time Executive ROI & Traffic Dashboards",
      "UTM Parameter & Channel Attribution Tracking",
      "Heatmap & User Session Recording Integration"
    ],
    workflowSteps: [
      { step: "01", title: "Tracking Audit", desc: "Cleaning up broken tags and configuring server-side data containers." },
      { step: "02", title: "Funnel Mapping", desc: "Instrumenting event triggers for forms, button clicks, and phone calls." },
      { step: "03", title: "Dashboard Delivery", desc: "Building a custom live dashboard for real-time revenue visibility." }
    ],
    accentColor: "from-saas-purple to-pink-500",
    motionType: "analytics"
  },
  "content-architecture": {
    slug: "content-architecture",
    badge: "INTENT-DRIVEN ASSETS",
    title: "Content Architecture",
    subtitle: "Content Engineered for Readers & AI Search Crawlers",
    tagline: "Informative, engaging content that ranks and converts.",
    description: "We plan, write, and format high-authority articles, service pages, and case studies that solve search intent, capture long-tail traffic, and establish your brand as an industry leader.",
    metrics: [
      { value: "+300%", label: "Organic Organic Impressions" },
      { value: "#1 Ranking", label: "Long-Tail Keywords" },
      { value: "100%", label: "EEAT Authority Score" }
    ],
    deliverables: [
      "Search Intent & Content Gap Analysis",
      "High-Authority Blog & Service Page Copywriting",
      "EEAT (Experience, Expertise, Authoritativeness, Trust) Optimization",
      "Semantic NLP Keyword Optimization (Surfer/Clearscope Style)",
      "Automated Internal Linking & Pillar Structuring"
    ],
    workflowSteps: [
      { step: "01", title: "Intent Mining", desc: "Discovering what your customers are actively searching for online." },
      { step: "02", title: "Expert Writing", desc: "Drafting engaging, authoritative content backed by industry research." },
      { step: "03", title: "Optimization & Publish", desc: "Structuring headers, meta tags, and internal links for search algorithms." }
    ],
    accentColor: "from-emerald-400 to-green-600",
    motionType: "content"
  },
  "authority-building": {
    slug: "authority-building",
    badge: "DOMINANT LINK EQUITY",
    title: "Authority Building & Digital PR",
    subtitle: "High-Quality Backlinks & Industry Press Coverage",
    tagline: "Skyrocket your domain rating with legitimate editorial link equity.",
    description: "We build high-DA editorial backlinks, orchestrate digital PR campaigns, and earn contextual brand mentions from respected publications to make your website an unstoppable search authority.",
    metrics: [
      { value: "+40 DR", label: "Average Domain Rating Boost" },
      { value: "100%", label: "Do-Follow White-Hat Backlinks" },
      { value: "#1 SERP", label: "High-Competition Keywords" }
    ],
    deliverables: [
      "White-Hat Editorial Backlink Acquisition",
      "Digital PR & Press Release Campaigns",
      "Competitor Backlink Profile Scalping",
      "Unlinked Brand Mention Conversion",
      "Broken Link Building & Contextual Outreach"
    ],
    workflowSteps: [
      { step: "01", title: "Link Gap Analysis", desc: "Identifying high-authority domains linking to your top competitors." },
      { step: "02", title: "Digital PR Outreach", desc: "Pitching data-driven stories to journalists and authoritative industry blogs." },
      { step: "03", title: "Equity Tracking", desc: "Monitoring link indexation and domain authority growth." }
    ],
    accentColor: "from-yellow-400 to-orange-500",
    motionType: "pr"
  },
  "google-ads-ppc": {
    slug: "google-ads-ppc",
    badge: "HIGH-INTENT PAID SEARCH",
    title: "Google Ads (PPC) Management",
    subtitle: "Drive Instant Inbound Conversions & High-Intent Search Traffic",
    tagline: "Capture buyers at the exact moment they search for your solutions.",
    description: "We architect hyper-targeted Google Search, Performance Max, Display, and Remarketing campaigns engineered for maximum impression share and lowest Cost Per Acquisition (CPA).",
    metrics: [
      { value: "5.4x", label: "Average Google Ads ROAS" },
      { value: "-35%", label: "Reduction in Cost Per Click" },
      { value: "98%", label: "Conversion Tracking Accuracy" }
    ],
    deliverables: [
      "Targeted Google Search & Performance Max Campaign Setup",
      "Negative Keyword Sculpting & Quality Score Optimization",
      "Direct-Response Ad Copywriting & Dynamic Extensions",
      "Competitor Keyword Bidding & SERP Hegemony Strategy",
      "Full Conversion Tracking & Automated Bid Strategy"
    ],
    workflowSteps: [
      { step: "01", title: "Search Intent Mining", desc: "Isolating high-converting transactional search terms with zero ad waste." },
      { step: "02", title: "Campaign Architecture", desc: "Structuring tightly themed ad groups with optimized landing page match." },
      { step: "03", title: "Daily Bid Optimization", desc: "Scaling high-performing keywords and eliminating low-converting clicks." }
    ],
    accentColor: "from-amber-400 to-orange-500",
    motionType: "ads"
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    badge: "COMMUNITY & BRAND ENGAGEMENT",
    title: "Social Media Marketing",
    subtitle: "Build Highly Engaged Audiences & Multi-Platform Brand Authority",
    tagline: "Turn passive social scrollers into loyal brand advocates and customers.",
    description: "Strategic content creation, viral reels/shorts production, community management, and paid social amplification across LinkedIn, Instagram, X, and YouTube to dominate your industry niche.",
    metrics: [
      { value: "+420%", label: "Social Engagement Growth" },
      { value: "2.8M+", label: "Organic Brand Impressions" },
      { value: "3.2x", label: "Inbound Social Lead Lift" }
    ],
    deliverables: [
      "Custom Social Media Content Calendar & Strategy",
      "High-Production Video Reels & Carousel Graphic Design",
      "Platform-Specific Community Engagement & DM Automation",
      "Influencer Outreach & Strategic Collaboration Funnels",
      "Monthly Social Analytics & Audience Growth Reports"
    ],
    workflowSteps: [
      { step: "01", title: "Brand Voice Alignment", desc: "Establishing your unique visual tone and high-engagement content pillars." },
      { step: "02", title: "Content Engine", desc: "Producing monthly batches of scroll-stopping creative assets and reels." },
      { step: "03", title: "Community Amplification", desc: "Engaging followers and driving qualified inbound traffic to conversion pages." }
    ],
    accentColor: "from-purple-500 to-pink-500",
    motionType: "content"
  },
  "email-marketing": {
    slug: "email-marketing",
    badge: "LIFECYCLE RETENTION & CONVERSION",
    title: "Email Marketing & Automation",
    subtitle: "Nurture, Convert, and Retain High-Value Customers on Autopilot",
    tagline: "Turn your subscriber list into a predictable, automated revenue channel.",
    description: "We engineer high-converting automated email funnels, behavioral trigger sequences, weekly value newsletters, and dynamic drip campaigns that drive repeat sales and boost customer lifetime value (LTV).",
    metrics: [
      { value: "42.8%", label: "Average Email Open Rate" },
      { value: "8.4%", label: "Click-Through Rate (CTR)" },
      { value: "+260%", label: "Automated Lifecycle Revenue" }
    ],
    deliverables: [
      "Automated Welcome, Abandoned & Post-Purchase Sequences",
      "High-Deliverability Domain & SPF/DKIM Authentication",
      "Persuasive Direct-Response Copywriting & Clean HTML Templates",
      "Audience Segmentation & Behavioral Tagging Systems",
      "A/B Split Testing for Subject Lines, Timing & Offers"
    ],
    workflowSteps: [
      { step: "01", title: "Funnel Mapping", desc: "Designing automated lifecycle trigger workflows tailored to customer actions." },
      { step: "02", title: "Copywriting & Design", desc: "Writing psychologically compelling copy with mobile-optimized layouts." },
      { step: "03", title: "Optimization & Scaling", desc: "Iterating based on open and click metrics to maximize revenue per contact." }
    ],
    accentColor: "from-blue-500 to-purple-600",
    motionType: "analytics"
  },
  "branding-design": {
    slug: "branding-design",
    badge: "CONVERSION UI/UX & BRAND IDENTITY",
    title: "Branding & Conversion Design",
    subtitle: "Stand Out from Competitors with Iconic Visuals & High-Converting UI",
    tagline: "Elevate your market perception with premium design that commands respect.",
    description: "We craft unmistakable brand identities, design systems, glassmorphic UI components, and psychology-backed conversion layouts that establish instant credibility and maximize user action.",
    metrics: [
      { value: "+210%", label: "Brand Recall & Trust Score" },
      { value: "65%", label: "Lower Bounce Rates" },
      { value: "3.8x", label: "Landing Page Conversion Lift" }
    ],
    deliverables: [
      "Comprehensive Brand Identity Systems & Logo Architecture",
      "Glassmorphic & High-End Conversion UI/UX Layouts",
      "Design Systems & Reusable Component Guidelines",
      "High-Impact Marketing Collateral & Social Kits",
      "Interactive Prototyping & User Flow Optimization"
    ],
    workflowSteps: [
      { step: "01", title: "Visual Discovery", desc: "Auditing competitor aesthetics and defining your standout visual language." },
      { step: "02", title: "Identity Crafting", desc: "Designing typography, color palettes, vector assets, and design systems." },
      { step: "03", title: "Component Delivery", desc: "Deploying high-converting web and marketing assets for live application." }
    ],
    accentColor: "from-fuchsia-500 to-purple-600",
    motionType: "code"
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceDetailsMap[resolvedParams.slug] || serviceDetailsMap["local-seo-gmb"];

  return {
    title: `${service.title} in Pune | Quantum Reach Media`,
    description: `${service.description} Engineered for #1 Google rankings, Google Map Pack dominance, and high ROI in Pune, Maharashtra.`,
    alternates: {
      canonical: `https://quantumreachmedia.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} in Pune | Quantum Reach Media`,
      description: service.description,
      url: `https://quantumreachmedia.com/services/${service.slug}`,
      siteName: "Quantum Reach Media",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/qrm-logo-transparent.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} - Best SEO & Digital Marketing Agency in Pune`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Pune | Quantum Reach Media`,
      description: service.description,
      images: ["/qrm-logo-transparent.webp"],
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "local-seo-gmb" },
    { slug: "seo-web-development" },
    { slug: "aeo-geo-optimization" },
    { slug: "traditional-seo" },
    { slug: "meta-advertisements" },
    { slug: "analytics-tracking" },
    { slug: "content-architecture" },
    { slug: "authority-building" },
    { slug: "google-ads-ppc" },
    { slug: "social-media-marketing" },
    { slug: "email-marketing" },
    { slug: "branding-design" },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetailsMap[resolvedParams.slug] || serviceDetailsMap["local-seo-gmb"];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://quantumreachmedia.com/services/${service.slug}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.badge,
        url: `https://quantumreachmedia.com/services/${service.slug}`,
        provider: {
          "@id": "https://quantumreachmedia.com/#localbusiness",
        },
        areaServed: [
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Baner" },
          { "@type": "City", "name": "Hinjawadi" },
          { "@type": "City", "name": "Viman Nagar" },
          { "@type": "City", "name": "Kharadi" },
          { "@type": "City", "name": "Wadgaon Sheri" },
          { "@type": "City", "name": "Kothrud" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://quantumreachmedia.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://quantumreachmedia.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://quantumreachmedia.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      {/* Schema.org Service & Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link href="/services" className="text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors flex items-center gap-2">
            ← Back to All Services
          </Link>
        </div>

        {/* Hero Section with Motion Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan">
              <Sparkles size={14} /> {service.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-xl font-medium text-saas-cyan">
              {service.subtitle}
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              {service.description}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-full bg-saas-surface border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                View Case Studies ↗
              </Link>
            </div>
          </div>

          {/* Motion Graphic Client Component */}
          <div>
            <ServiceMotionGraphic type={service.motionType} />
          </div>
        </div>

        {/* Key Performance Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {service.metrics.map((metric, idx) => (
            <GlowCard key={idx} className="p-8 bg-saas-surface text-center">
              <div className="text-4xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple mb-2">
                {metric.value}
              </div>
              <div className="text-zinc-400 text-sm font-medium">{metric.label}</div>
            </GlowCard>
          ))}
        </div>

        {/* Deliverables Checklist Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">Core Deliverables &amp; Architecture</h2>
            <p className="text-zinc-400 text-sm md:text-base">What you get when Quantum Reach Media engineers your growth strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <GlowCard key={idx} className="p-6 bg-saas-surface flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-saas-cyan flex-shrink-0 mt-0.5" />
                <span className="text-zinc-200 font-medium text-sm leading-relaxed">{item}</span>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Step-by-Step Execution Workflow */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">3-Step Execution Blueprint</h2>
            <p className="text-zinc-400 text-sm">Our proven roadmap to market dominance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.workflowSteps.map((step, idx) => (
              <GlowCard key={idx} className="p-8 bg-saas-surface flex flex-col justify-between">
                <div>
                  <div className="text-saas-cyan font-mono font-bold text-2xl mb-4">{step.step}</div>
                  <h3 className="text-xl font-sans font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Hyper-Local Pune Corridor Coverage Section */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-purple-950/20 border border-purple-500/20 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest block mb-2">
              LOCAL SEARCH FOOTPRINT • PUNE &amp; PCMC
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-3">
              Deploying {service.title} Across Key Pune Corridors
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Our dedicated strategy desks deliver localized search dominance and paid media scaling across Pune&apos;s premier commercial and industrial hubs:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { name: "Hinjawadi IT Park", desc: "SaaS & Tech Corridors" },
              { name: "Baner & Balewadi", desc: "High-Growth Startups" },
              { name: "Viman Nagar", desc: "Clinics & Professional" },
              { name: "Kharadi EON", desc: "Enterprise & IT Parks" },
              { name: "Wadgaon Sheri", desc: "HQ & Local Services" },
              { name: "Kothrud & Deccan", desc: "Retail & Institutions" },
            ].map((hub, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center">
                <MapPin size={16} className="text-saas-cyan mb-1.5" />
                <span className="text-xs font-bold text-white mb-1">{hub.name}</span>
                <span className="text-[10px] text-zinc-400 font-medium">{hub.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-gradient-to-r from-saas-cyan/10 via-saas-purple/10 to-saas-cyan/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h2 className="text-3xl font-sans font-bold text-white mb-4">Ready to deploy {service.title}?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Partner with Pune&apos;s premier SEO &amp; digital marketing agency to outrank competitors on Google, ChatGPT, and Gemini.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            Schedule Your Pune Growth Audit
          </Link>
        </div>

      </div>
    </main>
  );
}
