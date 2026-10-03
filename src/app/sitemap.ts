import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quantumreachmedia.com";
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/google-algorithm-updates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const serviceSlugs = [
    "traditional-seo-in-pune",
    "google-ads-ppc-in-pune",
    "social-media-marketing-in-pune",
    "email-marketing-in-pune",
    "seo-web-development-in-pune",
    "branding-design-in-pune",
    "content-architecture-in-pune",
    "authority-building-in-pune",
    "local-seo-gmb-in-pune",
    "meta-advertisements-in-pune",
    "aeo-geo-optimization-in-pune",
    "analytics-tracking-in-pune",
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogSlugs = [
    "google-2026-core-update-ai-overviews-guide",
    "local-seo-gmb-map-pack-dominance-pune",
    "aeo-ranking-in-chatgpt-claude-gemini",
    "nextjs-16-100-lighthouse-core-web-vitals",
    "meta-ads-scaling-retargeting-capi-funnels",
    "programmatic-seo-dynamic-landing-pages",
    "b2b-saas-demand-generation-funnel",
    "cro-conversion-rate-optimization-psychology",
    "google-ads-performance-max-pmax-mastery",
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const googleUpdateSlugs = [
    "google-march-2026-broad-core-update",
    "google-december-2025-helpful-content-update",
    "google-august-2025-scaled-content-spam-update",
    "google-march-2025-inp-core-web-vitals-update",
  ];

  const googleUpdateRoutes: MetadataRoute.Sitemap = googleUpdateSlugs.map((slug) => ({
    url: `${baseUrl}/google-algorithm-updates/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...googleUpdateRoutes];
}
