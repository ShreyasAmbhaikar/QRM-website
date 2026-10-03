import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Clock, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Compass,
  Check,
  Layers,
  BarChart3
} from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/data/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Quantum Reach Media",
      description: "The requested search intelligence article could not be found.",
    };
  }

  const canonicalUrl = `https://quantumreachmedia.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Quantum Reach Media`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Quantum Reach Media",
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts: exclude current post, prioritize same category, take top 3
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://quantumreachmedia.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
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
        image: post.coverImage,
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
    <main className="flex flex-col min-h-screen pt-32 pb-24 relative z-10">
      {/* Schema.org BlogPosting & Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container max-w-4xl mx-auto px-6">
        {/* Back Navigation Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Lean Article Header: Title + Author Info */}
        <header className="space-y-6 mb-10 pb-8 border-b border-white/10">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-saas-cyan font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          {/* Clean Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white leading-[1.18] tracking-tight">
            {post.title}
          </h1>

          {/* Author Row Directly Below Heading */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-zinc-400">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-2xl bg-zinc-950">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0517]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 text-xs font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {post.coverImageAlt}
          </div>
        </div>

        {/* Executive Summary / Key Takeaways */}
        <div className="mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#170c31] to-[#0c071d] border border-saas-cyan/40 shadow-[0_0_25px_rgba(6,182,212,0.12)]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-saas-cyan" /> EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS
            </div>
            <ul className="space-y-3.5">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  <CheckCircle2 size={16} className="text-saas-cyan flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* High-Readability Formatted Middle Content (Medium / dev.to typography) */}
        <article
          className="blog-prose space-y-6 text-zinc-300 text-base sm:text-lg leading-[1.85] font-normal
            [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-extrabold [&_h2]:text-white [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-white/10 [&_h2]:tracking-tight
            [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:text-saas-cyan [&_h3]:mt-9 [&_h3]:mb-3.5 [&_h3]:tracking-tight
            [&_p]:mb-6 [&_p]:text-zinc-300 [&_p]:leading-[1.85]
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2.5 [&_ul]:text-zinc-300
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2.5 [&_ol]:text-zinc-300
            [&_li]:text-zinc-300 [&_li]:leading-relaxed
            [&_strong]:text-white [&_strong]:font-bold
            [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-white/10 [&_code]:text-purple-300 [&_code]:font-mono [&_code]:text-xs sm:[&_code]:text-sm
            [&_table]:w-full [&_table]:my-8 [&_table]:border [&_table]:border-white/10 [&_table]:rounded-xl [&_table]:overflow-hidden
            [&_thead]:bg-white/5 [&_th]:p-3.5 [&_th]:text-left [&_th]:text-xs [&_th]:font-mono [&_th]:text-saas-cyan [&_th]:uppercase
            [&_td]:p-3.5 [&_td]:text-xs sm:[&_td]:text-sm [&_td]:border-t [&_td]:border-white/10 [&_td]:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Visual Two-Grid Layout Section for Topic Breakdown */}
        <section className="mt-14 pt-10 border-t border-white/10">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-saas-cyan uppercase tracking-wider block mb-1">
              OPERATIONAL BLUEPRINT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Strategic Implementation &amp; Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Actionable Checklist Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#130b29] to-[#0a0517] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300 uppercase">
                <Layers size={15} className="text-purple-400" />
                <span>Core Execution Framework</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} />
                  </span>
                  <span><strong>Entity Schema Validation:</strong> Deploy nested JSON-LD graphs linking author and organizational identities.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} />
                  </span>
                  <span><strong>Semantic Passage Formatting:</strong> Answer direct query intents within the initial 150 words using clean HTML tags.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} />
                  </span>
                  <span><strong>Firsthand Practitioner Proof:</strong> Embed verified client benchmarks, proprietary case studies, and real screenshots.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Benchmark Metrics Table Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#130b29] to-[#0a0517] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-saas-cyan uppercase">
                <BarChart3 size={15} className="text-saas-cyan" />
                <span>Performance Benchmark Matrix</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-zinc-400 font-mono border-b border-white/10">
                    <tr>
                      <th className="pb-2">Vector</th>
                      <th className="pb-2">Target Baseline</th>
                      <th className="pb-2">Algorithmic Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-300">
                    <tr>
                      <td className="py-2.5 font-bold text-white">LCP Speed</td>
                      <td className="py-2.5 text-saas-cyan font-mono">&lt; 1.2s</td>
                      <td className="py-2.5 text-emerald-400 font-bold">Critical</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">INP Latency</td>
                      <td className="py-2.5 text-saas-cyan font-mono">&lt; 200ms</td>
                      <td className="py-2.5 text-emerald-400 font-bold">High</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">Schema Trust</td>
                      <td className="py-2.5 text-saas-cyan font-mono">100% Valid</td>
                      <td className="py-2.5 text-emerald-400 font-bold">Maximum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio Footer Box */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="p-6 md:p-8 rounded-2xl bg-[#0f0923] border border-white/10 flex flex-col sm:flex-row items-start gap-5">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-saas-cyan uppercase font-bold tracking-wider">
                WRITTEN BY
              </div>
              <h3 className="text-lg font-bold text-white">{post.author.name}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Recommended Further Reading (3 Related Articles with Clean Spacing) */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
                <Compass size={13} />
                RELATED ARTICLES
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Recommended Further Reading</h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono text-zinc-400 hover:text-saas-cyan transition-colors flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group flex flex-col justify-between rounded-2xl bg-[#0e071e] border border-white/10 hover:border-saas-cyan/40 p-4 transition-all duration-300"
              >
                <div>
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-zinc-950">
                    <Image
                      src={related.coverImage}
                      alt={related.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-saas-cyan font-bold block mb-1.5">
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-saas-cyan transition-colors line-clamp-2 leading-snug mb-2">
                    {related.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-zinc-400 font-mono">
                  <span>{related.readTime}</span>
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
