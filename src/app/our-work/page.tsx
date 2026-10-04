import type { Metadata } from "next";
import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Quantum Reach Media",
  description:
    "Explore how Quantum Reach Media achieved #1 Google Map Pack rankings, +340% local patient calls, 90+ PageSpeed scores, and 4.8x ROAS for Pune & enterprise clients.",
  alternates: {
    canonical: "https://quantumreachmedia.com/our-work",
  },
  openGraph: {
    title: "Our Work & Case Studies | Quantum Reach Media",
    description:
      "Real-world SEO, Google Map Pack dominance, and performance advertising results engineered in Pune, India.",
    url: "https://quantumreachmedia.com/our-work",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | Quantum Reach Media",
    description: "Verified SEO and digital marketing case studies from Pune.",
    images: ["/qrm-logo-transparent.webp"],
  },
};

export default function OurWorkPage() {
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
        name: "Our Work",
        item: "https://quantumreachmedia.com/our-work",
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-36 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Hero Banner Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300 dark:border-saas-cyan/30 bg-purple-100/80 dark:bg-saas-cyan/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-950 dark:text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Trophy size={14} className="text-yellow-500" /> VERIFIED CASE STUDIES &amp; TRACK RECORD
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-purple-950 dark:text-white leading-tight">
            Digital Architectures That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Dominate Google Search.
            </span>
          </h1>
          <p className="text-purple-950/80 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
            Explore live deployments across dental clinics in Viman Nagar, healthcare networks in Kalyani Nagar, and national B2B brands. Hover to auto-scroll or click <span className="text-purple-700 dark:text-saas-cyan font-bold">Visit Live Site ↗</span> to test live performance.
          </p>
        </div>

        {/* 3-Column Interactive Grid */}
        <PortfolioGrid />

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-100/80 via-purple-50/80 to-purple-100/80 dark:from-saas-cyan/10 dark:via-saas-purple/10 dark:to-saas-cyan/10 border border-purple-200/60 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-purple-950 dark:text-white mb-3">Ready to replicate these results for your business?</h2>
          <p className="text-purple-950/80 dark:text-zinc-400 max-w-xl mx-auto mb-6 text-sm sm:text-base font-medium">
            We build custom, high-speed architectures engineered to capture #1 Google Map Pack rankings, top organic positions, and AI search recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-950 text-white dark:bg-white dark:text-black font-bold text-sm hover:bg-purple-900 dark:hover:bg-zinc-200 transition-colors shadow-md hover:scale-105"
          >
            <span>Claim Your Free SEO Audit</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </main>
  );
}
