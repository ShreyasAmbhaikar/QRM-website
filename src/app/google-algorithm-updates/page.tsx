import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { GOOGLE_ALGORITHM_UPDATES, BLOG_POSTS } from "@/data/blog-data";

export const metadata: Metadata = {
  title: "Official Google Search Algorithm & Core Updates | Quantum Reach Media",
  description:
    "Official timeline, volatility analysis, and recovery playbooks for Google Core Updates, Helpful Content system rollouts, and Core Web Vitals.",
  alternates: {
    canonical: "https://quantumreachmedia.com/google-algorithm-updates",
  },
  openGraph: {
    title: "Official Google Search Algorithm & Core Updates | Quantum Reach Media",
    description:
      "Official timeline and recovery frameworks for Google Core Algorithm updates.",
    url: "https://quantumreachmedia.com/google-algorithm-updates",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Google Search Algorithm Updates",
      },
    ],
  },
};

export default function GoogleAlgorithmUpdatesPage() {
  const premierGuide = BLOG_POSTS.find(
    (p) => p.slug === "google-2026-core-update-ai-overviews-guide"
  );

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-24 relative z-10">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Clean, Centered Header with Site Brand Gradient */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Google Search Algorithm &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Official Core Updates
            </span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Official deployment timelines, volatility analysis, and actionable recovery frameworks for verified Google search updates.
          </p>
        </div>

        {/* Strategic Guide Hero Card */}
        {premierGuide && (
          <div className="mb-14">
            <Link href={`/blog/${premierGuide.slug}`} className="block group">
              <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1c0c3a] via-[#100726] to-[#070311] border border-purple-500/40 hover:border-saas-cyan/60 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.18)] relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400">
                      <span className="text-saas-cyan font-bold tracking-wider uppercase text-[11px]">
                        Strategic Deep Dive
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {premierGuide.readTime}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span>{premierGuide.date}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-extrabold text-white group-hover:text-saas-cyan transition-colors leading-snug">
                      {premierGuide.title}
                    </h2>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {premierGuide.excerpt}
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={premierGuide.author.avatar}
                          alt={premierGuide.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{premierGuide.author.name}</div>
                        <div className="text-[11px] text-zinc-400">{premierGuide.author.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-950">
                    <Image
                      src={premierGuide.coverImage}
                      alt={premierGuide.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-saas-cyan group-hover:bg-saas-cyan group-hover:text-black transition-all">
                      <span>Read Strategy Guide</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Section Heading */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Official Google Rollout Dispatches
          </h2>
          <span className="text-xs font-mono text-zinc-400">
            {GOOGLE_ALGORITHM_UPDATES.length} Verified Deployments
          </span>
        </div>

        {/* Horizontal Rollout Dispatch List - Proper Column Alignment & Generous Spacing */}
        <div className="space-y-6">
          {GOOGLE_ALGORITHM_UPDATES.map((update) => (
            <Link
              key={update.slug}
              href={`/google-algorithm-updates/${update.slug}`}
              className="group block"
            >
              <article className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#12092a]/85 via-[#0e0722]/80 to-[#0a0517]/85 border border-white/10 hover:border-saas-cyan/50 hover:bg-[#160a33] transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center">
                  {/* Col 1: Fixed Proportional Thumbnail (3 cols on md/lg) */}
                  <div className="md:col-span-3 relative w-full h-32 md:h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-zinc-950">
                    <Image
                      src={update.coverImage}
                      alt={update.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Col 2: Content (Title & Description) - Trimmed width to 5 cols for consistent vertical alignment */}
                  <div className="md:col-span-5 space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                      <span className="text-saas-cyan font-semibold">{update.releaseDate}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-300">{update.category}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{update.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-saas-cyan transition-colors leading-snug line-clamp-2">
                      {update.name}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {update.overview}
                    </p>
                  </div>

                  {/* Col 3: Author Info - Cleanly aligned column (2 cols) */}
                  <div className="md:col-span-2 flex items-center gap-2.5 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                      <Image
                        src={update.author.avatar}
                        alt={update.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-xs font-semibold text-zinc-200 truncate">{update.author.name}</div>
                      <div className="text-[10px] text-zinc-400 font-mono truncate">{update.status}</div>
                    </div>
                  </div>

                  {/* Col 4: Action Button - Flush right aligned (2 cols) */}
                  <div className="md:col-span-2 flex justify-start md:justify-end shrink-0">
                    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 group-hover:bg-saas-cyan group-hover:text-black border border-white/10 group-hover:border-saas-cyan text-xs font-mono font-bold text-saas-cyan transition-all whitespace-nowrap">
                      <span>Read Breakdown</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
