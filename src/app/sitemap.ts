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
  ];

  const serviceSlugs = [
    "traditional-seo-pune",
    "google-ads-ppc-pune",
    "social-media-marketing-pune",
    "email-marketing-pune",
    "seo-web-development-pune",
    "branding-design-pune",
    "content-architecture-pune",
    "authority-building-pune",
    "local-seo-gmb-pune",
    "meta-advertisements-pune",
    "aeo-geo-optimization-pune",
    "analytics-tracking-pune",
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
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
