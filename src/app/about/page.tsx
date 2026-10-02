import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/about-page-view";

export const metadata: Metadata = {
  title: "About Us | Quantum Reach Media - The Growth Architects in Pune",
  description:
    "Learn about Quantum Reach Media, founded by Tushar Tanpure (Founder & Marketing Manager) and Shreyas Ambhaikar (Co-Founder, SEO Strategist & Website Developer). We engineer high-performance SEO, sub-second Next.js web architectures, and high-ROI digital marketing in Pune.",
  alternates: {
    canonical: "https://quantumreachmedia.com/about",
  },
  openGraph: {
    title: "About Us | Quantum Reach Media - The Growth Architects in Pune",
    description:
      "Founded by Tushar Tanpure and Shreyas Ambhaikar. Bridging Next.js web engineering with aggressive search dominance and high-ROI digital marketing.",
    url: "https://quantumreachmedia.com/about",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Leadership and Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Quantum Reach Media - The Growth Architects",
    description:
      "Bridging Next.js web engineering with aggressive search dominance and high-ROI digital marketing in Pune.",
    images: ["/qrm-logo-transparent.webp"],
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://quantumreachmedia.com/about#webpage",
        url: "https://quantumreachmedia.com/about",
        name: "About Quantum Reach Media",
        description:
          "Full-stack digital growth and SEO engineering agency based in Pune, founded by Tushar Tanpure and Shreyas Ambhaikar.",
        publisher: {
          "@id": "https://quantumreachmedia.com/#organization",
        },
      },
      {
        "@type": "Person",
        "@id": "https://quantumreachmedia.com/about#tushar-tanpure",
        name: "Tushar Tanpure",
        jobTitle: "Founder & Marketing Manager",
        description:
          "Directs performance marketing, ad acquisition, and lead generation at Quantum Reach Media.",
        worksFor: {
          "@id": "https://quantumreachmedia.com/#organization",
        },
      },
      {
        "@type": "Person",
        "@id": "https://quantumreachmedia.com/about#shreyas-ambhaikar",
        name: "Shreyas Ambhaikar",
        jobTitle: "Co-Founder & Technical Architect, SEO Strategist & Website Developer",
        description:
          "Heads technical SEO systems, Next.js web engineering, and Google Business Profile optimization.",
        worksFor: {
          "@id": "https://quantumreachmedia.com/#organization",
        },
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPageView />
    </main>
  );
}
