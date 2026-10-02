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
    "@type": "CollectionPage",
    name: "Best SEO & Digital Marketing Services in Pune",
    description:
      "Comprehensive directory of 12 systematized search engine optimization and digital marketing protocols by Quantum Reach Media.",
    url: "https://quantumreachmedia.com/services",
    provider: {
      "@type": "LocalBusiness",
      name: "Quantum Reach Media",
      image: "https://quantumreachmedia.com/qrm-logo.jpg",
      telephone: "+91-9172314470",
      email: "quantumreachmedia@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kharadi",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411014",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "18.5514",
        longitude: "73.9348"
      },
      areaServed: [
        "Pune",
        "Kharadi",
        "Viman Nagar",
        "Baner",
        "Hinjawadi",
        "Koregaon Park",
        "Kothrud",
        "Kalyani Nagar"
      ]
    },
    hasPart: ALL_SERVICES.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.simpleExplainer,
      url: `https://quantumreachmedia.com/services/${service.slug}`,
      serviceType: service.pillarLabel,
      provider: {
        "@type": "LocalBusiness",
        name: "Quantum Reach Media"
      }
    }))
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
