import type { Metadata } from "next";
import { PrivacyPolicyView } from "@/components/legal/privacy-policy-view";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantum Reach Media | Data Protection & Compliance",
  description:
    "Official Privacy Policy of Quantum Reach Media, Pune. Read our comprehensive data protection standards, DPDP Act (India) compliance, Google AdSense disclosures, and client privacy rights.",
  alternates: {
    canonical: "https://quantumreachmedia.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Quantum Reach Media",
    description:
      "Comprehensive data protection standards, Indian DPDP Act compliance, and Google AdSense privacy disclosures for Quantum Reach Media.",
    url: "https://quantumreachmedia.com/privacy-policy",
    siteName: "Quantum Reach Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/qrm-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Quantum Reach Media",
    description: "Official Privacy Policy and Data Protection standards for Quantum Reach Media.",
    images: ["/qrm-logo-transparent.webp"],
  },
};

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://quantumreachmedia.com/privacy-policy#webpage",
        url: "https://quantumreachmedia.com/privacy-policy",
        name: "Privacy Policy | Quantum Reach Media",
        description: "Official Privacy Policy and Data Protection statement for Quantum Reach Media.",
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
            name: "Privacy Policy",
            item: "https://quantumreachmedia.com/privacy-policy",
          },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen pt-32 pb-28 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyPolicyView />
    </main>
  );
}
