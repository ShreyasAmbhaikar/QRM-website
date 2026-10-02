import { GlowCard } from "@/components/ui/glow-card";
import { Clock, ArrowLeft, Share2, Sparkles, CheckCircle2, Bookmark, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface BlogPostDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  keyTakeaways: string[];
  contentHtml: string;
}

const blogDetailsMap: Record<string, BlogPostDetail> = {
  "google-2026-core-update-ai-overviews-guide": {
    slug: "google-2026-core-update-ai-overviews-guide",
    title: "Google 2026 Core Update: Navigating AI Overviews & Gemini Search Integration",
    subtitle: "Why traditional backlink counting is giving way to factual entity extraction and LLM corpus citations.",
    category: "Google Core Updates",
    date: "August 5, 2026",
    readTime: "6 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Founder & Marketing Manager",
      avatar: "/tushar.jpg",
      bio: "Founder & Marketing Manager at Quantum Reach Media, driving client acquisition, high-ROI ad funnels, and marketing growth."
    },
    keyTakeaways: [
      "Google's 2026 Core Algorithm weights verified Schema JSON-LD graphs over external anchor text.",
      "AI Overviews now synthesize content directly from structured Knowledge Graphs.",
      "Fast Core Web Vitals (sub-500ms LCP) remain a prerequisite for AI Bot crawl priority."
    ],
    contentHtml: `
      <h2>The Shift to Factual Entity Extraction</h2>
      <p>With Google's latest core algorithm deployment, traditional link equity models have evolved. Search crawlers now evaluate your domain through <strong>Entity Relationship Graphs</strong>. If your brand's metadata is ambiguous, Gemini search bots will bypass your URL in favor of structured sources.</p>

      <h3>Key Strategic Pillars for 2026:</h3>
      <ul>
        <li><strong>Structured Schema Injection:</strong> Deploy comprehensive Organization, LocalBusiness, and Service JSON-LD graphs.</li>
        <li><strong>Conversational QA Formatting:</strong> Structure H2 and H3 subheadings as natural human questions answered concisely in the first sentence.</li>
        <li><strong>Core Web Vitals Mastery:</strong> Maintain sub-500ms Largest Contentful Paint (LCP) to prevent crawler timeouts during high-frequency index sweeps.</li>
      </ul>

      <h2>Optimizing for Gemini & AI Overviews</h2>
      <p>When Google generates an AI Overview snippet, it searches for concise, factual declarations backed by authoritative citations. By optimizing your content architecture, your website becomes the primary cited source in AI search results.</p>
    `
  },
  "local-seo-gmb-map-pack-dominance-pune": {
    slug: "local-seo-gmb-map-pack-dominance-pune",
    title: "How We Rank Local Businesses #1 in Google Map Pack (Pune Case Study)",
    subtitle: "A step-by-step breakdown of geo-targeted entity citations, review velocity, and GMB radius proximity.",
    category: "Local GMB Strategy",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Shreyas Ambhaikar",
      role: "Co-Founder & Technical Architect",
      avatar: "/shreyas.jpg",
      bio: "Co-Founder, SEO Strategist & Website Developer at Quantum Reach Media, heading Next.js web architectures and local SEO dominance."
    },
    keyTakeaways: [
      "Optimizing your Google Business Profile (GMB) radius requires geo-coded image metadata and localized landing pages.",
      "Review velocity (frequency and response time) outweighs raw rating numbers.",
      "NAP consistency across 100+ local directories validates local domain trust."
    ],
    contentHtml: `
      <h2>The Blueprint for Local 3-Pack Supremacy</h2>
      <p>Ranking in the Google 3-Pack Map Pack is the highest-ROI marketing channel for local clinics, dental practices, and service providers in Pune. In this breakdown, we examine the exact protocol used for our medical and dental partners.</p>

      <h3>Step 1: Geotagged Entity Optimization</h3>
      <p>We inject precise EXIF metadata and geo-coordinates into all uploaded Google Business Profile photos, validating physical location signals to Google's local algorithm.</p>

      <h3>Step 2: Automated Review Acquisition</h3>
      <p>Systematic review requests with specific service keywords in customer responses boost local relevance by over 300%.</p>
    `
  },
  "aeo-ranking-in-chatgpt-claude-gemini": {
    slug: "aeo-ranking-in-chatgpt-claude-gemini",
    title: "The Complete Guide to AEO: Ranking Your Brand Inside ChatGPT, Claude & Gemini",
    subtitle: "How to ensure Large Language Models recommend your business when users ask AI tools for suggestions.",
    category: "AEO & AI Search",
    date: "July 19, 2026",
    readTime: "7 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Founder & Marketing Manager",
      avatar: "/tushar.jpg",
      bio: "Founder & Marketing Manager at Quantum Reach Media, driving client acquisition, high-ROI ad funnels, and marketing growth."
    },
    keyTakeaways: [
      "AEO requires optimizing for LLM training data and real-time retrieval-augmented generation (RAG).",
      "Perplexity and ChatGPT look for consensus signals across trusted industry publications.",
      "JSON-LD knowledge graphs give AI bots instant factual verification."
    ],
    contentHtml: `
      <h2>What is Artificial Engine Optimization (AEO)?</h2>
      <p>As millions of users replace traditional Google queries with ChatGPT, Claude, and Gemini prompts, AEO has become essential. When a user asks: <em>"What is the best SEO agency in Pune?"</em>, LLMs generate responses by synthesizing trusted web data.</p>

      <h2>How to Audit Your Brand's AI Citation Rate</h2>
      <p>We use automated LLM crawler scripts to monitor how frequently ChatGPT and Gemini recommend our clients over competitors, refining knowledge graph metadata to lock in #1 rankings.</p>
    `
  },
  "nextjs-16-100-lighthouse-core-web-vitals": {
    slug: "nextjs-16-100-lighthouse-core-web-vitals",
    title: "Engineering Sub-500ms Next.js 16 Web Apps for 90+ Lighthouse Scores",
    subtitle: "Technical deep dive into edge rendering, dynamic image compression, and Core Web Vitals.",
    category: "Technical SEO",
    date: "July 10, 2026",
    readTime: "8 min read",
    author: {
      name: "Shreyas Ambhaikar",
      role: "Co-Founder & Technical Architect",
      avatar: "/shreyas.jpg",
      bio: "Co-Founder, SEO Strategist & Website Developer at Quantum Reach Media, heading Next.js web architectures and local SEO dominance."
    },
    keyTakeaways: [
      "Next.js App Router with static HTML export delivers unbeatable response speeds.",
      "Pre-loading critical Google Fonts eliminates layout shifts (CLS).",
      "Unoptimized images are the #1 cause of slow Largest Contentful Paint (LCP)."
    ],
    contentHtml: `
      <h2>Why Page Speed is the Ultimate Ranking Factor</h2>
      <p>Google explicitly penalizes slow-loading websites. By utilizing Next.js 16 App Router, edge server rendering, and zero-JS CSS utilities, every site we deploy achieves a verified 90+ on Google PageSpeed.</p>
    `
  },
  "meta-ads-scaling-retargeting-capi-funnels": {
    slug: "meta-ads-scaling-retargeting-capi-funnels",
    title: "Scaling Meta Ads in 2026: Server-Side CAPI & High-Intent Conversion Funnels",
    subtitle: "Why browser pixels fail and how server-side Conversions API (CAPI) reduces CPA by 40%.",
    category: "Technical SEO",
    date: "June 29, 2026",
    readTime: "6 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Founder & Marketing Manager",
      avatar: "/tushar.jpg",
      bio: "Founder & Marketing Manager at Quantum Reach Media, driving client acquisition, high-ROI ad funnels, and marketing growth."
    },
    keyTakeaways: [
      "Browser ad blockers hide up to 35% of ad conversions without server-side CAPI.",
      "Direct-response visual copy outperforms generic stock imagery.",
      "Custom audience lookalikes based on actual phone leads drive maximum ROAS."
    ],
    contentHtml: `
      <h2>The Fall of the Browser Pixel</h2>
      <p>Modern browser privacy features block traditional client-side Meta pixels. Installing Meta Server-Side Conversions API (CAPI) passes event data directly from your server to Meta, restoring full attribution accuracy and driving down CPA.</p>
    `
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogDetailsMap[resolvedParams.slug] || blogDetailsMap["google-2026-core-update-ai-overviews-guide"];

  return {
    title: `${post.title} | Quantum Reach Media Blog`,
    description: `${post.subtitle} Read actionable search and performance insights from Quantum Reach Media, Pune.`,
    alternates: {
      canonical: `https://quantumreachmedia.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      url: `https://quantumreachmedia.com/blog/${post.slug}`,
      siteName: "Quantum Reach Media",
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: "/qrm-logo-transparent.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: ["/qrm-logo-transparent.webp"],
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "google-2026-core-update-ai-overviews-guide" },
    { slug: "local-seo-gmb-map-pack-dominance-pune" },
    { slug: "aeo-ranking-in-chatgpt-claude-gemini" },
    { slug: "nextjs-16-100-lighthouse-core-web-vitals" },
    { slug: "meta-ads-scaling-retargeting-capi-funnels" },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogDetailsMap[resolvedParams.slug] || blogDetailsMap["google-2026-core-update-ai-overviews-guide"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://quantumreachmedia.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.subtitle,
        datePublished: post.date,
        inLanguage: "en-IN",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://quantumreachmedia.com/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@id": "https://quantumreachmedia.com/#organization",
        },
        image: "https://quantumreachmedia.com/qrm-logo-transparent.webp",
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
            name: "Blog",
            item: "https://quantumreachmedia.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://quantumreachmedia.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      {/* Schema.org BlogPosting & Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog" className="text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> Back to All Dispatches
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-12 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-saas-cyan font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-zinc-300 font-medium leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author Card Header */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-zinc-400">{post.author.role}</div>
              </div>
            </div>

            <button className="p-2.5 rounded-full bg-saas-surface border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer" aria-label="Share Article">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="mb-12">
          <GlowCard className="p-8 bg-saas-surface border border-saas-cyan/30">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest mb-4">
              <Sparkles size={14} /> EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-200 leading-relaxed">
                  <CheckCircle2 size={16} className="text-saas-cyan flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>

        {/* Article Body Content */}
        <div 
          className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-base prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-strong:text-white prose-ul:text-zinc-300 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Strategic Internal Links Block */}
        <div className="mt-14 p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20">
          <span className="text-xs font-mono font-bold text-saas-cyan uppercase tracking-wider block mb-2">
            RECOMMENDED GROWTH WORKFLOWS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Link href="/services/local-seo-gmb" className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-saas-cyan/40 transition-colors group">
              <span className="text-xs font-bold text-white group-hover:text-saas-cyan transition-colors block mb-1">Local SEO &amp; GMB</span>
              <span className="text-[11px] text-zinc-400 block">Dominate Pune 3-Pack</span>
            </Link>
            <Link href="/services/seo-web-development" className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-saas-purple transition-colors group">
              <span className="text-xs font-bold text-white group-hover:text-saas-purple transition-colors block mb-1">Next.js Web Dev</span>
              <span className="text-[11px] text-zinc-400 block">90+ Lighthouse Speed</span>
            </Link>
            <Link href="/services/aeo-geo-optimization" className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-400 transition-colors group">
              <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors block mb-1">AEO &amp; GEO Engine</span>
              <span className="text-[11px] text-zinc-400 block">Rank in ChatGPT &amp; Gemini</span>
            </Link>
          </div>
        </div>

        {/* Author Bio Footer */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <GlowCard className="p-8 bg-saas-surface flex items-start gap-5">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="text-xs font-mono text-saas-cyan mb-1">WRITTEN BY</div>
              <h3 className="text-lg font-bold text-white mb-2">{post.author.name}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{post.author.bio}</p>
            </div>
          </GlowCard>
        </div>

        {/* CTA Box */}
        <div className="mt-16 text-center bg-gradient-to-r from-saas-cyan/10 via-saas-purple/10 to-saas-cyan/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-sans font-bold text-white mb-3">Want these growth strategies deployed for your business?</h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6 text-xs md:text-sm">
            Book a 1-on-1 strategy call with Quantum Reach Media architects in Pune.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <span>Book A Strategy Session</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </main>
  );
}
