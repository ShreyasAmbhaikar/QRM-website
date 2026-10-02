"use client";

import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES, ServiceItem } from "@/data/services-data";
import { ArrowRight } from "lucide-react";

const SHORT_DESCRIPTIONS: Record<string, string> = {
  "traditional-seo-pune": "Eliminate technical crawl blockers and dominate competitive organic search rankings.",
  "traditional-seo": "Eliminate technical crawl blockers and dominate competitive organic search rankings.",
  "google-ads-ppc-pune": "Capture high-intent buyer searches with targeted Search and Performance Max campaigns.",
  "google-ads-ppc": "Capture high-intent buyer searches with targeted Search and Performance Max campaigns.",
  "social-media-marketing-pune": "Build engaged brand audiences and consistent lead pipelines across social platforms.",
  "social-media-marketing": "Build engaged brand audiences and consistent lead pipelines across social platforms.",
  "email-marketing-pune": "Nurture prospects and retain high-value customers with automated trigger workflows.",
  "email-marketing": "Nurture prospects and retain high-value customers with automated trigger workflows.",
  
  "seo-web-development-pune": "Sub-second Next.js web applications engineered for 90+ Google Core Web Vitals.",
  "seo-web-development": "Sub-second Next.js web applications engineered for 90+ Google Core Web Vitals.",
  "branding-design-pune": "Distinctive brand identities and frictionless layouts designed for high conversion in Pune.",
  "branding-design": "Distinctive brand identities and frictionless layouts designed for high conversion.",
  "content-architecture-pune": "Semantic topic clusters and authoritative copy structured for Google search intent.",
  "content-architecture": "Semantic topic clusters and authoritative copy structured for Google search intent.",
  "authority-building-pune": "High-tier editorial backlinks and digital PR outreach to scale domain authority.",
  "authority-building": "High-tier editorial backlinks and digital PR outreach to scale domain authority.",
  
  "local-seo-gmb-pune": "Dominate the Google 3-Pack Maps box to drive high-intent local phone calls in Pune.",
  "local-seo-gmb": "Dominate the Google 3-Pack Maps box to drive high-intent local phone calls in Pune.",
  "meta-advertisements-pune": "Scale predictable customer inquiries with targeted Facebook and Instagram ad funnels.",
  "meta-advertisements": "Scale predictable customer inquiries with targeted Facebook and Instagram ad funnels.",
  "aeo-geo-optimization-pune": "Position your brand as the canonical authority cited by ChatGPT and Gemini.",
  "aeo-geo-optimization": "Position your brand as the canonical authority cited by ChatGPT and Gemini.",
  "analytics-tracking-pune": "Server-side GTM and GA4 attribution dashboards providing full revenue clarity.",
  "analytics-tracking": "Server-side GTM and GA4 attribution dashboards providing full revenue clarity."
};

interface ServiceCategory {
  id: string;
  title: string;
  services: ServiceItem[];
}

export function ServicesPageView() {
  const categories: ServiceCategory[] = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      services: ALL_SERVICES.filter((service) => service.pillar === "digital-marketing")
    },
    {
      id: "website-content",
      title: "Website & Content",
      services: ALL_SERVICES.filter((service) => service.pillar === "website-content")
    },
    {
      id: "specialized-growth",
      title: "Specialized Growth",
      services: ALL_SERVICES.filter((service) => service.pillar === "specialized-growth")
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 dark:bg-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-[600px] right-10 w-[500px] h-[350px] bg-saas-cyan/10 dark:bg-saas-cyan/15 blur-[120px] rounded-full" />
      </div>

      {/* Main Container - max-w-6xl aligned with Navbar and Footer layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-24">
        {/* ================= HERO SECTION ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-purple-950 dark:text-white leading-tight drop-shadow-[0_2px_15px_rgba(147,51,234,0.18)]">
            Search Dominance &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-saas-purple dark:from-saas-cyan dark:via-purple-300 dark:to-saas-purple">
              Digital Growth
            </span>
          </h1>

          <p className="text-sm sm:text-base text-purple-950/80 dark:text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
            12 battle-tested growth protocols engineered to capture Page 1 rankings, drive qualified inbound inquiries, and scale revenue.
          </p>
        </section>

        {/* ================= 3 CATEGORIES SERVICES SHOWCASE ================= */}
        <div className="space-y-16 sm:space-y-20">
          {categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              {/* Category Header: Title with Vertically Centered Service Count & Subtle Divider */}
              <div className="mb-8 sm:mb-10 border-b border-purple-200/60 dark:border-white/10 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans leading-none">
                    {category.title}
                  </h2>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-bold bg-purple-100 dark:bg-white/10 text-purple-800 dark:text-saas-cyan border border-purple-200/80 dark:border-white/10 shadow-sm leading-none shrink-0">
                    {category.services.length}
                  </span>
                </div>
              </div>

              {/* 3-Column Responsive Grid with Increased Card Spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
                {category.services.map((service) => (
                  <div
                    key={service.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-purple-200/60 dark:border-white/10 bg-card/90 dark:bg-zinc-950/80 shadow-sm hover:shadow-xl hover:border-purple-400 dark:hover:border-saas-cyan/50 transition-all duration-300"
                  >
                    {/* Compact Image Container */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="block relative w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-border/60"
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} - Quantum Reach Media Pune`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                    </Link>

                    {/* Card Body: Heading, Short Description & Refined Button */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <Link href={`/services/${service.slug}`} className="block group/title">
                          <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-foreground group-hover/title:text-purple-600 dark:group-hover/title:text-saas-cyan transition-colors">
                            {service.title}
                          </h3>
                        </Link>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {SHORT_DESCRIPTIONS[service.slug] || service.tagline}
                        </p>
                      </div>

                      {/* Refined Compact Visit Service Button */}
                      <div className="pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 hover:bg-purple-200 dark:bg-white/10 dark:hover:bg-white/15 text-purple-900 dark:text-saas-cyan border border-purple-200/80 dark:border-white/15 transition-all group/btn"
                        >
                          <span>Visit Service</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
