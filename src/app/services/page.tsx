import type { Metadata } from "next";
import { ServicesPageView } from "@/components/services/services-page-view";
import { ALL_SERVICES } from "@/data/services-data";

export const metadata: Metadata = {
  title: "Best SEO & Digital Marketing Services in Pune | 12 Growth Protocols | Quantum Reach Media",
  description:
    "Explore Quantum Reach Media's 12 full-stack SEO and digital marketing services in Pune. Next.js 90+ speed websites, Google 3-Pack Local SEO, Meta Ads, GA4 attribution, and AEO AI search optimization.",
  keywords: [
    "Digital Marketing Services Pune",
    "Best SEO Agency in Pune",
    "Local SEO Pune",
    "Google Ads Management Pune",
    "Next.js Web Development Pune",
    "Meta Ads Agency Pune",
    "GMB Optimization Pune",
    "SEO Services Pune"
  ],
  alternates: {
    canonical: "https://quantumreachmedia.com/services"
  },
  openGraph: {
    title: "Best SEO & Digital Marketing Services in Pune | Quantum Reach Media",
    description:
      "Explore 12 systematized growth protocols engineered to drive Page 1 rankings and measurable inbound revenue in Pune.",
    url: "https://quantumreachmedia.com/services",
    siteName: "Quantum Reach Media",
    images: [
      {
        url: "/services/seo-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Reach Media Digital Marketing & SEO Services Pune"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://quantumreachmedia.com/services#page",
        url: "https://quantumreachmedia.com/services",
        name: "Best SEO & Digital Marketing Services in Pune | 12 Growth Protocols",
        description:
          "Comprehensive directory of 12 systematized search engine optimization, paid media, and web development protocols by Quantum Reach Media in Pune.",
        publisher: {
          "@id": "https://quantumreachmedia.com/#organization"
        },
        provider: {
          "@id": "https://quantumreachmedia.com/#localbusiness"
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: ALL_SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `https://quantumreachmedia.com/services/${service.slug}`
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://quantumreachmedia.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://quantumreachmedia.com/services"
          }
        ]
      },
      ...ALL_SERVICES.map((service) => ({
        "@type": "Service",
        "@id": `https://quantumreachmedia.com/services/${service.slug}#service`,
        name: service.title,
        description: service.simpleExplainer,
        url: `https://quantumreachmedia.com/services/${service.slug}`,
        serviceType: service.pillarLabel,
        provider: {
          "@id": "https://quantumreachmedia.com/#localbusiness"
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Baner" },
          { "@type": "City", name: "Hinjawadi" },
          { "@type": "City", name: "Viman Nagar" },
          { "@type": "City", name: "Kharadi" },
          { "@type": "City", name: "Wadgaon Sheri" },
          { "@type": "City", name: "Kothrud" }
        ]
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageView />
    </>
  );
}
