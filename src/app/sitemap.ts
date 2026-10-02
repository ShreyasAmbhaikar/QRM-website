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
    "local-seo-gmb",
    "seo-web-development",
    "aeo-geo-optimization",
    "traditional-seo",
    "meta-advertisements",
    "analytics-tracking",
    "content-architecture",
    "authority-building",
    "google-ads-ppc",
    "social-media-marketing",
    "email-marketing",
    "branding-design",
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
