import type { Metadata } from "next";
import { TermsOfServiceView } from "@/components/legal/terms-of-service-view";

export const metadata: Metadata = {
  title: "Terms of Service | Quantum Reach Media | Commercial Agreement",
  description:
    "Official Terms of Service of Quantum Reach Media, Pune. Read our commercial retainers, intellectual property rights, SEO algorithm disclaimers, and Pune jurisdiction rules.",
  alternates: {
    canonical: "https://quantumreachmedia.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Quantum Reach Media",
    description:
      "Official Terms of Service and Commercial Agreement for digital marketing and web engineering engagements with Quantum Reach Media.",
    url: "https://quantumreachmedia.com/terms-of-service",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Quantum Reach Media",
    description: "Commercial terms, retainers, and agency agreements for Quantum Reach Media.",
    images: ["/qrm-logo-transparent.webp"],
  },
};

export default function TermsOfServicePage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://quantumreachmedia.com/terms-of-service#webpage",
        url: "https://quantumreachmedia.com/terms-of-service",
        name: "Terms of Service | Quantum Reach Media",
        description: "Official Terms of Service and Commercial Agreement for Quantum Reach Media.",
        publisher: {
          "@id": "https://quantumreachmedia.com/#organization",
        },
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
            name: "Terms of Service",
            item: "https://quantumreachmedia.com/terms-of-service",
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsOfServiceView />
    </main>
  );
}
