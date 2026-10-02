"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/glow-card";
import { Search, Clock, ArrowRight, TrendingUp, Cpu, MapPin, Zap } from "lucide-react";
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

export function BlogExplorer() {
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
    <>
      {/* Featured Hero Article */}
      {featuredPost && (
        <div className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`}>
            <GlowCard className="p-8 md:p-12 bg-saas-surface border border-white/10 hover:border-saas-cyan/50 transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-xs font-mono font-bold text-saas-cyan uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono">•</span>
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-white group-hover:text-saas-cyan transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
                    </div>
                    <div className="text-xs font-medium text-zinc-300">
                      {featuredPost.author.name} <span className="text-zinc-500">• {featuredPost.date}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-saas-cyan group-hover:scale-110 transition-transform">
                  <ArrowRight size={32} />
                </div>
              </div>
            </GlowCard>
          </Link>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                  : "bg-saas-surface text-zinc-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search keywords or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2 rounded-full bg-saas-surface border border-white/10 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-saas-cyan transition-colors"
          />
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => (
          <Link key={idx} href={`/blog/${post.slug}`}>
            <GlowCard className="p-6 bg-saas-surface border border-white/10 hover:border-saas-cyan/30 flex flex-col justify-between h-full group cursor-pointer transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-saas-cyan uppercase">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-sans font-bold text-white group-hover:text-saas-cyan transition-colors mb-3 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">{post.author.name}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-saas-cyan group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </GlowCard>
          </Link>
        ))}
      </div>
    </>
  );
}
