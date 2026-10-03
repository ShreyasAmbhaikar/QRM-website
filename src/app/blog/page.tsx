import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight } from "lucide-react";
import { BlogExplorer } from "@/components/blog/blog-explorer";

export const metadata: Metadata = {
  title: "Latest Marketing, SEO & Growth Articles | Quantum Reach Media",
  description:
    "Actionable articles and guides on Google algorithm updates, local SEO, Google Map Pack dominance, AEO/GEO AI search, and high-performance web architecture.",
  alternates: {
    canonical: "https://quantumreachmedia.com/blog",
  },
  openGraph: {
    title: "Latest Marketing, SEO & Growth Articles | Quantum Reach Media",
    description:
      "Proven digital marketing playbooks, SEO strategies, and web performance insights from Quantum Reach Media, Pune.",
    url: "https://quantumreachmedia.com/blog",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Blog Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Marketing, SEO & Growth Articles | Quantum Reach Media",
    description: "Actionable digital marketing, SEO, and web architecture playbooks.",
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
        {/* Clean Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.2]">
            Latest Marketing Insights &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Digital Growth Playbooks
            </span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Actionable guides, local SEO strategies, and technical architectures to scale your brand and capture high-intent customers.
          </p>
        </div>

        {/* Intelligence Dispatches & Article Explorer */}
        <BlogExplorer />
      </div>
    </main>
  );
}
