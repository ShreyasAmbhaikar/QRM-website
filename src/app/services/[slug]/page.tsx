import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

import { SERVICE_DETAILS_DATA, type ServiceDetailFull } from "@/data/service-details-data";
import { ServiceFrameworksGrid } from "@/components/services/service-frameworks-grid";
import { ServiceConfidenceSection } from "@/components/services/service-confidence-section";
import { ServiceSplitSpecification } from "@/components/services/service-split-specification";
import { ServiceEditorialProcess } from "@/components/services/service-editorial-process";
import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { ServiceCtaCard } from "@/components/services/service-cta-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = Object.keys(SERVICE_DETAILS_DATA);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS_DATA[slug];

  if (!service) {
    return {
      title: "Service Not Found | Quantum Reach Media",
      description: "The requested digital marketing or SEO service could not be found.",
    };
  }

  const canonicalUrl = `https://quantumreachmedia.com/services/${service.canonicalSlug}`;

  return {
    title: `${service.title} | Quantum Reach Media`,
    description: service.heroDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Quantum Reach Media`,
      description: service.heroDescription,
      url: canonicalUrl,
      siteName: "Quantum Reach Media",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - Pune Growth Architecture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Quantum Reach Media`,
      description: service.heroDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_DETAILS_DATA[slug];

  if (!service) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://quantumreachmedia.com/services/${service.canonicalSlug}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.heroDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "Quantum Reach Media",
          url: "https://quantumreachmedia.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
        ],
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
            name: "Services",
            item: "https://quantumreachmedia.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://quantumreachmedia.com/services/${service.canonicalSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative min-h-screen pt-20 md:pt-24 pb-8 sm:pb-10 overflow-hidden text-purple-950 dark:text-zinc-100 bg-background transition-colors duration-300">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Lighting Spots */}
      <div className="absolute top-10 left-[-10%] w-[550px] h-[550px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-32 right-[-10%] w-[550px] h-[550px] bg-rose-500/10 dark:bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 1. HERO SECTION - Dedicated full-screen viewport container with balanced breathing room */}
        <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center pt-4 sm:pt-6 pb-12 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-purple-900/60 dark:text-zinc-400">
            <Link href="/" className="hover:text-purple-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <Link href="/services" className="hover:text-purple-900 dark:hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-purple-950 dark:text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
            
            <div className="lg:col-span-7 space-y-6">
              {/* H1 Heading with Italic Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-purple-950 dark:text-white leading-[1.15]">
                {service.heroHeading} <br />
                <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400">
                  {service.heroHeadingAccent}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-purple-950/80 dark:text-zinc-300 leading-relaxed">
                {service.heroDescription}
              </p>

              {/* 3 Outcome Checklist Badges / Pills */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {service.heroPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100/70 dark:bg-white/[0.05] border border-purple-200/70 dark:border-white/10 text-xs font-medium text-purple-950 dark:text-zinc-200"
                  >
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action Buttons (Strictly NO WhatsApp button) */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-purple-950 text-white hover:bg-purple-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-sm transition-all shadow-[0_4px_20px_rgba(147,51,234,0.25)] inline-flex items-center gap-2 hover:scale-[1.02]"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3.5 rounded-full bg-card/80 border border-purple-200 dark:border-white/10 text-purple-950 dark:text-white font-bold text-sm hover:bg-purple-100/50 dark:hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <span>View Case Studies</span>
                  <span className="text-purple-600 dark:text-saas-cyan">↗</span>
                </Link>
              </div>

            </div>

            {/* Visual Operational Architecture Image Preview */}
            <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden border border-purple-200/80 dark:border-white/15 bg-card/90 dark:bg-zinc-950/85 shadow-[0_10px_40px_rgba(147,51,234,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-2.5">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-purple-100 dark:bg-zinc-900 border border-purple-100 dark:border-white/10">
                <Image
                  src={service.image}
                  alt={`${service.title} - Operational Architecture Preview`}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent dark:from-zinc-950/95 dark:via-transparent pointer-events-none" />
                
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-purple-200 dark:border-white/20 text-[11px] font-mono font-bold text-purple-700 dark:text-saas-cyan flex items-center gap-1.5 pointer-events-none shadow-md">
                  <Sparkles size={12} />
                  <span>ACTIVE SPECIFICATION</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs pointer-events-none">
                  <span className="font-mono text-[10px] uppercase font-bold text-white dark:text-zinc-300 bg-purple-950/90 dark:bg-zinc-950/85 px-2.5 py-1 rounded-full border border-purple-400/30 dark:border-white/10 backdrop-blur-md">
                    Pune Enterprise Delivery
                  </span>
                  <span className="font-mono text-[10px] text-emerald-300 dark:text-emerald-400 font-bold bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-500/30 backdrop-blur-md">
                    ● Verified Protocol
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. 4-COLUMN PERFORMANCE METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-7 sm:p-9 rounded-3xl border border-purple-200/80 dark:border-white/10 bg-purple-50/40 dark:bg-zinc-950/60 backdrop-blur-sm my-16 md:my-20 divide-y sm:divide-y-0 sm:divide-x divide-purple-200/60 dark:divide-white/10 shadow-sm">
          {service.metrics.map((metric, idx) => (
            <div key={idx} className="text-center px-4 py-2 first:pt-0 sm:first:pt-2">
              <div className="text-3xl sm:text-4xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400 mb-1.5">
                {metric.value}
              </div>
              <div className="text-purple-950 dark:text-white font-bold text-xs sm:text-sm mb-1 leading-snug">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-[11px] font-mono text-purple-900/60 dark:text-zinc-400">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. SIX SPECIALIZED FRAMEWORKS (With generous vertical spacing) */}
        <ServiceFrameworksGrid
          title={service.frameworksSection.title}
          titleAccent={service.frameworksSection.titleAccent}
          subtitle={service.frameworksSection.subtitle}
          frameworks={service.frameworksSection.frameworks}
        />

        {/* 4. HIGH-CONTRAST CONFIDENCE SECTION (Deep wine/purple gradient break) */}
        <ServiceConfidenceSection
          badge={service.confidenceSection.badge}
          title={service.confidenceSection.title}
          titleAccent={service.confidenceSection.titleAccent}
          subtitle={service.confidenceSection.subtitle}
          cards={service.confidenceSection.cards}
          trustRating={service.confidenceSection.trustRating}
        />

        {/* 5. SPECIFICATION MATRIX & OUTCOMES (Clean centered layout, sidebar removed) */}
        <ServiceSplitSpecification
          currentSlug={service.canonicalSlug}
          narrativeHeading={service.splitSection.narrativeHeading}
          narrativeHeadingAccent={service.splitSection.narrativeHeadingAccent}
          narrativeText={service.splitSection.narrativeText}
          outcomes={service.splitSection.outcomes}
          specificationTable={service.splitSection.specificationTable}
          strategyQuote={service.splitSection.strategyQuote}
          corridorFocus={service.splitSection.corridorFocus}
        />

        {/* 6. EDITORIAL ASYMMETRICAL PROCESS (Italic numbered list) */}
        <ServiceEditorialProcess
          subhead={service.processSection.subhead}
          title={service.processSection.title}
          titleAccent={service.processSection.titleAccent}
          description={service.processSection.description}
          steps={service.processSection.steps}
        />

        {/* 7. FREQUENTLY ASKED QUESTIONS (With complete circle numbering) */}
        <section className="my-16 md:my-20 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-purple-950 dark:text-white tracking-tight mb-3">
              Frequently Asked Questions &mdash;{" "}
              <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400">
                Clarity &amp; Transparency
              </span>
            </h2>
            <p className="text-purple-950/75 dark:text-zinc-400 text-sm sm:text-base">
              Clear, transparent answers about deploying {service.title} with Quantum Reach Media in Pune.
            </p>
          </div>

          <ServiceFaqAccordion faqs={service.faqs} serviceTitle={service.title} />
        </section>

        {/* 8. INTERACTIVE HIGH-IMPACT CONVERSION CALL TO ACTION BANNER */}
        <ServiceCtaCard />

      </div>
    </main>
  );
}
