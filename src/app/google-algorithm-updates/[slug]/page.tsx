import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Flame,
  AlertTriangle,
  Zap,
  Activity,
  Layers,
  Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GOOGLE_ALGORITHM_UPDATES, type GoogleAlgorithmUpdate } from "@/data/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GOOGLE_ALGORITHM_UPDATES.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = GOOGLE_ALGORITHM_UPDATES.find((u) => u.slug === slug);

  if (!update) {
    return {
      title: "Update Not Found | Quantum Reach Media",
      description: "The requested Google search algorithm breakdown could not be found.",
    };
  }

  const canonicalUrl = `https://quantumreachmedia.com/google-algorithm-updates/${update.slug}`;

  return {
    title: `${update.name} | Quantum Reach Media`,
    description: update.overview,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: update.name,
      description: update.overview,
      url: canonicalUrl,
      siteName: "Quantum Reach Media",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: update.coverImage,
          width: 1200,
          height: 630,
          alt: update.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: update.name,
      description: update.overview,
      images: [update.coverImage],
    },
  };
}

export default async function GoogleUpdateDetailPage({ params }: Props) {
  const { slug } = await params;
  const update = GOOGLE_ALGORITHM_UPDATES.find((u) => u.slug === slug);

  if (!update) {
    notFound();
  }

  const otherUpdates = GOOGLE_ALGORITHM_UPDATES.filter((u) => u.slug !== update.slug).slice(0, 3);

  const getImpactBadge = (level: GoogleAlgorithmUpdate["impactLevel"]) => {
    switch (level) {
      case "Critical":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/50">
            <Flame size={11} className="text-rose-400" /> Critical Impact
          </span>
        );
      case "High":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/50">
            <AlertTriangle size={11} className="text-amber-400" /> High Volatility
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-saas-cyan/20 text-saas-cyan border border-saas-cyan/50">
            <Zap size={11} className="text-saas-cyan" /> Architectural
          </span>
        );
    }
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-24 relative z-10">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Back Navigation Link */}
        <div className="mb-8">
          <Link
            href="/google-algorithm-updates"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Google Updates</span>
          </Link>
        </div>

        {/* Lean Article Header: Title + Author Info */}
        <header className="space-y-6 mb-10 pb-8 border-b border-white/10">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400">
            {getImpactBadge(update.impactLevel)}
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
              {update.category}
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">{update.status}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {update.readTime}
            </span>
            <span>•</span>
            <span>{update.releaseDate}</span>
          </div>

          {/* Clean Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white leading-[1.18] tracking-tight">
            {update.name}
          </h1>

          {/* Author Row Directly Below Heading */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image
                src={update.author.avatar}
                alt={update.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{update.author.name}</div>
              <div className="text-xs text-zinc-400">{update.author.role}</div>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl bg-zinc-950">
          <Image
            src={update.coverImage}
            alt={update.coverImageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0517]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 text-xs font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {update.coverImageAlt}
          </div>
        </div>

        {/* Executive Summary Card */}
        <div className="mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#170c31] to-[#0c071d] border border-saas-cyan/40 shadow-[0_0_25px_rgba(6,182,212,0.12)]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest mb-3">
              <Sparkles size={14} className="text-saas-cyan" /> DEPLOYMENT SCOPE &amp; CORE SUMMARY
            </div>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              {update.overview}
            </p>
          </div>
        </div>

        {/* High-Readability Formatted Middle Content */}
        <article
          className="blog-prose space-y-6 text-zinc-300 text-base sm:text-lg leading-[1.85] font-normal
            [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-extrabold [&_h2]:text-white [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-white/10 [&_h2]:tracking-tight
            [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:text-saas-cyan [&_h3]:mt-9 [&_h3]:mb-3.5 [&_h3]:tracking-tight
            [&_p]:mb-6 [&_p]:text-zinc-300 [&_p]:leading-[1.85]
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2.5 [&_ul]:text-zinc-300
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2.5 [&_ol]:text-zinc-300
            [&_li]:text-zinc-300 [&_li]:leading-relaxed
            [&_strong]:text-white [&_strong]:font-bold
            [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/10 [&_code]:text-purple-300 [&_code]:font-mono [&_code]:text-xs sm:[&_code]:text-sm"
          dangerouslySetInnerHTML={{ __html: update.contentHtml }}
        />

        {/* 2-Column Operational Grid: Key Changes & Recovery Protocol */}
        <section className="mt-14 pt-10 border-t border-white/10">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-saas-cyan uppercase tracking-wider block mb-1">
              OFFICIAL TELEMETRY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Algorithmic Shifts &amp; Remediation Playbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Key Shifts */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#130b29] to-[#0a0517] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300 uppercase">
                <Layers size={15} className="text-purple-400" />
                <span>Verified Algorithmic Shifts</span>
              </div>
              <ul className="space-y-3">
                {update.keyChanges.map((change, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Impacted Verticals & Recovery */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#130b29] to-[#0a0517] border border-white/10 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider block mb-1.5">
                  Most Impacted Verticals:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {update.affectedWebsites}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Wrench size={13} /> Recommended Recovery Protocol:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {update.recommendedAction}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio Footer Box */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="p-6 md:p-8 rounded-2xl bg-[#0f0923] border border-white/10 flex flex-col sm:flex-row items-start gap-5">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image
                src={update.author.avatar}
                alt={update.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-saas-cyan uppercase font-bold tracking-wider">
                SEARCH ARCHITECT
              </div>
              <h3 className="text-lg font-bold text-white">{update.author.name}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{update.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Other Google Updates */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Other Official Google Deployments</h2>
            <Link
              href="/google-algorithm-updates"
              className="text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherUpdates.map((other) => (
              <Link
                key={other.slug}
                href={`/google-algorithm-updates/${other.slug}`}
                className="group flex flex-col justify-between rounded-2xl bg-[#0e071e] border border-white/10 hover:border-saas-cyan/40 p-4 transition-all duration-300"
              >
                <div>
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-zinc-950">
                    <Image
                      src={other.coverImage}
                      alt={other.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-saas-cyan font-bold block mb-1">
                    {other.releaseDate}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-saas-cyan transition-colors line-clamp-2 leading-snug mb-2">
                    {other.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                  <span>{other.readTime}</span>
                  <span className="text-saas-cyan font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
