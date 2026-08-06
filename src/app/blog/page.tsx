"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { Sparkles, Search, Clock, ArrowRight, TrendingUp, Cpu, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Google Core Updates" | "AEO & AI Search" | "Local GMB Strategy" | "Technical SEO";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
  tags: string[];
}

export const sampleBlogPosts: BlogPost[] = [
  {
    slug: "google-2026-core-update-ai-overviews-guide",
    title: "Google 2026 Core Update: Navigating AI Overviews & Gemini Search Integration",
    excerpt: "How Google's latest algorithmic deployment prioritizes factual entity relationships and LLM corpus citations over traditional backlinks.",
    category: "Google Core Updates",
    date: "Aug 5, 2026",
    readTime: "6 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Co-Founder & CTO",
      avatar: "/tushar.jpg"
    },
    featured: true,
    tags: ["Google Update", "Gemini AI", "Algorithm"]
  },
  {
    slug: "local-seo-gmb-map-pack-dominance-pune",
    title: "How We Rank Local Businesses #1 in Google Map Pack (Pune & Regional Case Study)",
    excerpt: "A step-by-step breakdown of geo-targeted entity citations, review velocity engineering, and GMB radius proximity optimization.",
    category: "Local GMB Strategy",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Shreyas Ambhaikar",
      role: "Founder & CEO",
      avatar: "/shreyas.jpg"
    },
    tags: ["Local SEO", "Google Map Pack", "GMB"]
  },
  {
    slug: "aeo-ranking-in-chatgpt-claude-gemini",
    title: "The Complete Guide to AEO: Ranking Your Brand Inside ChatGPT, Claude & Gemini",
    excerpt: "Artificial Engine Optimization (AEO) strategies to ensure AI search bots cite your business when users ask conversational questions.",
    category: "AEO & AI Search",
    date: "Jul 19, 2026",
    readTime: "7 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Co-Founder & CTO",
      avatar: "/tushar.jpg"
    },
    tags: ["AEO", "GPTBot", "Generative AI"]
  },
  {
    slug: "nextjs-16-100-lighthouse-core-web-vitals",
    title: "Engineering Sub-500ms Next.js 16 Web Apps for 100/100 Lighthouse Scores",
    excerpt: "Technical deep dive into edge rendering, dynamic image compression, font preloading, and eliminating layout shifts.",
    category: "Technical SEO",
    date: "Jul 10, 2026",
    readTime: "8 min read",
    author: {
      name: "Tushar Tanpure",
      role: "Co-Founder & CTO",
      avatar: "/tushar.jpg"
    },
    tags: ["Next.js", "Core Web Vitals", "Lighthouse"]
  },
  {
    slug: "meta-ads-scaling-retargeting-capi-funnels",
    title: "Scaling Meta Ads in 2026: Server-Side CAPI & High-Intent Conversion Funnels",
    excerpt: "Why browser pixels fail and how server-side Conversions API (CAPI) paired with direct-response landing pages reduces CPA by 40%.",
    category: "Technical SEO",
    date: "Jun 29, 2026",
    readTime: "6 min read",
    author: {
      name: "Shreyas Ambhaikar",
      role: "Founder & CEO",
      avatar: "/shreyas.jpg"
    },
    tags: ["Meta Ads", "ROAS", "Performance Marketing"]
  }
];

const categories = ["All Articles", "Google Core Updates", "AEO & AI Search", "Local GMB Strategy", "Technical SEO"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = sampleBlogPosts.find((post) => post.featured) || sampleBlogPosts[0];

  const filteredPosts = sampleBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} /> SEARCH INTEL & ALGORITHMIC DISPATCH
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Engineering Search & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              AI Market Intelligence.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Breakdowns on Google Core Algorithm updates, AEO LLM rankings, Local GMB map dominance, and high-performance Web Architecture.
          </p>
        </div>

        {/* Featured Hero Article */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <GlowCard className="p-8 md:p-12 bg-saas-surface border border-white/10 hover:border-saas-cyan/50 transition-all group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-saas-cyan to-saas-purple text-black font-extrabold text-xs tracking-wider uppercase rounded-bl-2xl">
                  FEATURED DISPATCH
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-saas-cyan font-semibold">
                        {featuredPost.category}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400">{featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-sans font-bold text-white group-hover:text-saas-cyan transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                          <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{featuredPost.author.name}</div>
                          <div className="text-xs text-zinc-500">{featuredPost.author.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-saas-cyan group-hover:translate-x-2 transition-transform">
                        <span>Read Full Dispatch</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-full aspect-square max-w-xs rounded-2xl border border-white/10 bg-zinc-950/80 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                      <div className="w-12 h-12 rounded-xl bg-saas-cyan/10 border border-saas-cyan/30 flex items-center justify-center text-saas-cyan mb-4">
                        <Cpu size={24} />
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-emerald-400 font-bold">● ALGORITHM LIVE</div>
                        <div className="text-lg font-bold text-white">Google 2026 Core Signals</div>
                        <div className="text-xs text-zinc-500">Gemini Corpus Integration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </Link>
          </div>
        )}

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-white/10 pb-6">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    : "bg-saas-surface text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input
              type="text"
              placeholder="Search dispatches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-saas-surface border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-saas-cyan/50 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlowCard className="p-6 bg-saas-surface border border-white/5 hover:border-saas-cyan/40 transition-all group cursor-pointer flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-saas-cyan font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-saas-cyan transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-300">{post.author.name}</span>
                  </div>

                  <span className="text-[11px] font-mono text-zinc-400">{post.date}</span>
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className="bg-gradient-to-r from-saas-cyan/10 via-saas-purple/10 to-saas-cyan/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-3">
            Subscribe to Search Intelligence Dispatches
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto mb-6">
            Get early alerts on Google core algorithm updates, local SEO breakthroughs, and AEO AI search strategies directly in your inbox.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-full bg-saas-surface border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-saas-cyan/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
