"use client";

import { useState, useMemo, useRef } from "react";
import { 
  Search, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  FileText 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/data/blog-data";

const POSTS_PER_PAGE = 6;

export function BlogExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const explorerTopRef = useRef<HTMLDivElement>(null);

  // Growth blog posts (Google Core update post is dedicated to /google-algorithm-updates)
  const growthBlogPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => post.slug !== "google-2026-core-update-ai-overviews-guide");
  }, []);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return growthBlogPosts.filter((post) => {
      let matchesCategory = selectedCategory === "All Articles";
      if (!matchesCategory) {
        if (selectedCategory === "Local SEO & GMB") {
          matchesCategory = post.category === "Local SEO & GMB";
        } else if (selectedCategory === "AEO & AI Search") {
          matchesCategory = post.category === "AEO & Generative Search";
        } else if (selectedCategory === "Web Performance") {
          matchesCategory = post.category === "Technical & Web Speed";
        } else if (selectedCategory === "Paid Ads & ROAS") {
          matchesCategory = post.category === "Paid Ads & ROAS";
        } else if (selectedCategory === "Conversion Optimization") {
          matchesCategory = post.category === "Conversion Optimization";
        }
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [growthBlogPosts, selectedCategory, searchQuery]);

  // Total pages
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;

  // Paginated posts for current page
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (explorerTopRef.current) {
      explorerTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Subtle, tasteful category styling without harsh neon glow
  const getCategoryBadgeStyle = (category: BlogPost["category"]) => {
    switch (category) {
      case "Local SEO & GMB":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/25";
      case "AEO & Generative Search":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/25";
      case "Technical & Web Speed":
        return "bg-sky-500/10 text-sky-300 border-sky-500/25";
      case "Paid Ads & ROAS":
        return "bg-amber-500/10 text-amber-300 border-amber-500/25";
      case "Conversion Optimization":
        return "bg-purple-500/10 text-purple-300 border-purple-500/25";
      default:
        return "bg-white/10 text-zinc-300 border-white/15";
    }
  };

  const featuredPost = growthBlogPosts.find((p) => p.featured) || growthBlogPosts[0];

  return (
    <div ref={explorerTopRef} className="scroll-mt-32">
      {/* Featured Article - Remains consistent and pinned across category filter switches */}
      {!searchQuery && currentPage === 1 && featuredPost && (
        <div className="mb-12">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#150a2b] via-[#0e071e] to-[#070311] border border-purple-500/30 hover:border-saas-cyan/50 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.12)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className={cn("px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider text-[11px] border", getCategoryBadgeStyle(featuredPost.category))}>
                      {featuredPost.category}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 flex items-center gap-1">
                      <Clock size={11} /> {featuredPost.readTime}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-extrabold text-white group-hover:text-saas-cyan transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {featuredPost.subtitle}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-zinc-400">{featuredPost.author.role}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-950">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-saas-cyan group-hover:bg-saas-cyan group-hover:text-black transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Filter and Search Bar: Navigational, Horizontally Scrollable without Clipping */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        {/* Category Filter Pills - Horizontally Scrollable & Perfectly Rounded */}
        <div className="flex items-center gap-2 overflow-x-auto py-1.5 px-0.5 scrollbar-none scroll-smooth">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer shrink-0",
                selectedCategory === cat
                  ? "bg-white text-black shadow-sm"
                  : "bg-[#110926] text-zinc-300 hover:text-white border border-white/10 hover:border-white/25 hover:bg-[#180d36]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full lg:w-64 shrink-0">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-full bg-[#0e071e] border border-white/15 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-saas-cyan focus:ring-1 focus:ring-saas-cyan transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Main Grid of Articles - More Spacing, Chip Moved Above Heading, No Glowing Image Overlays */}
      {paginatedPosts.length === 0 ? (
        <div className="text-center py-16 rounded-3xl bg-[#0e071e]/50 border border-white/10 space-y-4">
          <FileText size={36} className="mx-auto text-zinc-600" />
          <h3 className="text-lg font-bold text-white">No articles matched your criteria</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search query or reset category filters to browse all publications.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Articles");
              setSearchQuery("");
              setCurrentPage(1);
            }}
            className="px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {paginatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
              <article className="flex flex-col justify-between h-full rounded-2xl bg-gradient-to-b from-[#110826] to-[#0a0517] border border-white/10 hover:border-saas-cyan/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-300 overflow-hidden">
                {/* Clean Image Banner without Glowing Chips */}
                <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-zinc-950">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0517] via-transparent to-transparent" />
                </div>

                {/* Content Area with Chip Placed Above Heading */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category Chip & Read Time Row Above Heading */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={cn(
                        "px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border",
                        getCategoryBadgeStyle(post.category)
                      )}>
                        {post.category}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-sans font-bold text-white group-hover:text-saas-cyan transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Clean Footer: Author + Read Link */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-zinc-300 font-medium">{post.author.name}</span>
                    </div>

                    <div className="text-xs font-mono font-bold text-saas-cyan group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Controls - Result Counter on Extreme Left, Controls on Extreme Right */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-white/10">
          {/* Extreme Left: Formatted Results Counter */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-saas-cyan shadow-[0_0_8px_#06b6d4]" />
            <span>
              Showing <strong className="text-white font-semibold">{paginatedPosts.length}</strong> of{" "}
              <strong className="text-white font-semibold">{filteredPosts.length}</strong> results
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400 hidden sm:inline">
              Page <strong className="text-white font-semibold">{currentPage}</strong> of{" "}
              <strong className="text-white font-semibold">{totalPages}</strong>
            </span>
          </div>

          {/* Extreme Right: Pagination Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-[#0e071e] text-xs font-mono text-zinc-300 hover:text-white hover:border-saas-cyan/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft size={13} /> Previous
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={cn(
                  "w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer",
                  currentPage === pageNum
                    ? "bg-saas-cyan text-black shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                    : "bg-[#0e071e] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                )}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-[#0e071e] text-xs font-mono text-zinc-300 hover:text-white hover:border-saas-cyan/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Next <ChevronRight size={13} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
