import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { BlogExplorer } from "@/components/blog/blog-explorer";

export const metadata: Metadata = {
  title: "SEO, AEO & Digital Marketing Insights | Quantum Reach Media Pune",
  description:
    "Actionable breakdowns on Google algorithm updates, Google Map Pack ranking strategies, AEO/GEO artificial intelligence search citations, and sub-500ms Next.js web performance.",
  alternates: {
    canonical: "https://quantumreachmedia.com/blog",
  },
  openGraph: {
    title: "SEO, AEO & Digital Marketing Insights | Quantum Reach Media",
    description:
      "Expert search engineering and growth intelligence from Quantum Reach Media, Pune.",
    url: "https://quantumreachmedia.com/blog",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Search Intelligence Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, AEO & Digital Marketing Insights | Quantum Reach Media",
    description: "Algorithmic search and performance marketing dispatches from Pune.",
    images: ["/qrm-logo-transparent.webp"],
  },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} /> SEARCH INTEL &amp; ALGORITHMIC DISPATCH
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Engineering Search &amp; <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              AI Market Intelligence.
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Breakdowns on Google Core Algorithm updates, AEO LLM rankings, Local GMB map dominance in Pune, and high-performance Web Architecture.
          </p>
        </div>

        <BlogExplorer />

      </div>
    </main>
  );
}
