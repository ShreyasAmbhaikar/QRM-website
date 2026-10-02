import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://quantumreachmedia.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "PerplexityBot",
          "ChatGPT-User",
          "GPTBot",
          "Claude-Web",
          "AnthropicAI",
          "CCBot"
        ],
        allow: "/",
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
