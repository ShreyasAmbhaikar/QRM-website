export interface ServiceItem {
  slug: string;
  pillar: "digital-marketing" | "website-content" | "specialized-growth";
  pillarLabel: string;
  title: string;
  badge: string;
  metric: { value: string; label: string };
  image: string;
  tagline: string;
  simpleExplainer: string;
  howItRanks: string;
  deliverables: string[];
  bestFor: string;
  accentColor: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  // ================= PILLAR 1: DIGITAL MARKETING =================
  {
    slug: "traditional-seo",
    pillar: "digital-marketing",
    pillarLabel: "DIGITAL MARKETING",
    title: "Traditional & Technical SEO Mastery",
    badge: "ALGORITHMIC DOMINANCE",
    metric: { value: "Page 1", label: "Target Keyword SERPs" },
    image: "/services/traditional-seo.jpg",
    tagline: "Outrank competitors for high-volume commercial queries without penalty risk.",
    simpleExplainer:
      "SEO is the process of structuring your website's code and content so Google recognizes your business as the most authoritative, trustworthy answer and puts you at the top of organic search results.",
    howItRanks:
      "We eliminate crawl waste, fix indexation blockers, build semantic topic clusters, and optimize your internal page links so Google's ranking algorithms award your site top positions for high-intent Pune search queries.",
    deliverables: [
      "Comprehensive technical site audit & crawl budget optimization",
      "Semantic topic clustering & high-intent commercial keyword mapping",
      "On-page heading, metadata & structured JSON-LD schema injection",
      "XML sitemaps, robots.txt & canonical redirection engineering",
      "Monthly SERP rank tracking & competitor movement intelligence"
    ],
    bestFor: "Businesses looking for sustainable organic inbound leads without paying for every click.",
    accentColor: "from-purple-500 to-indigo-500"
  },
  {
    slug: "google-ads-ppc",
    pillar: "digital-marketing",
    pillarLabel: "DIGITAL MARKETING",
    title: "Google Ads (PPC) Management",
    badge: "HIGH-INTENT PAID SEARCH",
    metric: { value: "5.4x", label: "Average Campaign ROAS" },
    image: "/services/google-ads-ppc.jpg",
    tagline: "Capture ready-to-buy customers at the precise moment they search for your solutions.",
    simpleExplainer:
      "Google Ads places your business at the very top of Google search results instantly. You only pay when interested prospects click your ad to visit your website or call your team.",
    howItRanks:
      "We bid strictly on transactional buyer queries, install aggressive negative-keyword sculpting to eliminate wasted budget, and align search copy directly to dedicated conversion landing pages to slash Cost-Per-Click.",
    deliverables: [
      "Targeted Google Search & Performance Max campaign architecture",
      "Negative keyword lists to prevent ad spend bleed on unqualified searches",
      "Direct-response ad copywriting & dynamic phone extensions",
      "Competitor keyword bidding & SERP impression-share dominance",
      "Full offline conversion tracking & smart bidding tuning"
    ],
    bestFor: "Companies needing immediate inbound phone calls, appointments, and qualified sales leads.",
    accentColor: "from-amber-400 to-orange-500"
  },
  {
    slug: "social-media-marketing",
    pillar: "digital-marketing",
    pillarLabel: "DIGITAL MARKETING",
    title: "Social Media Marketing & Growth",
    badge: "COMMUNITY & BRAND ENGAGEMENT",
    metric: { value: "+420%", label: "Audience Engagement Lift" },
    image: "/services/social-media-marketing.jpg",
    tagline: "Turn passive social scrollers into loyal brand advocates and paying clients.",
    simpleExplainer:
      "Social media marketing builds your brand's presence across LinkedIn, Instagram, and YouTube through consistent, high-production reels, carousels, and stories that prove your expertise.",
    howItRanks:
      "Active brand mentions and social engagement create powerful branded search velocity. When prospective Pune clients look up your brand after seeing social proof, Google reinforces your domain authority.",
    deliverables: [
      "Tailored 30-day multi-channel content calendar & visual themes",
      "High-production short-form video editing (Reels/Shorts) & graphics",
      "Platform-specific community interaction & automated DM inquiry funnels",
      "Executive personal branding for founders and company leadership",
      "Monthly follower growth, reach & engagement analytics reporting"
    ],
    bestFor: "Brands wanting strong market visibility, trust, and direct inquiries from social platforms.",
    accentColor: "from-pink-500 to-purple-600"
  },
  {
    slug: "email-marketing",
    pillar: "digital-marketing",
    pillarLabel: "DIGITAL MARKETING",
    title: "Email Marketing & CRM Automation",
    badge: "LIFECYCLE RETENTION & CONVERSION",
    metric: { value: "42.8%", label: "Average Email Open Rate" },
    image: "/services/email-marketing.jpg",
    tagline: "Nurture, convert, and retain high-value customers completely on autopilot.",
    simpleExplainer:
      "Email marketing sets up automated trigger emails that welcome new prospects, follow up with inquiries, and keep past customers buying from you again and again without manual sales effort.",
    howItRanks:
      "By keeping your audience consistently engaged, email funnels drive repeat referral traffic back to your high-value website assets, strengthening direct user engagement signals.",
    deliverables: [
      "Automated welcome, abandoned inquiry & lead-nurturing drip workflows",
      "Dedicated domain authentication (SPF, DKIM, DMARC) for inbox delivery",
      "Direct-response copywriting crafted for high clicks and replies",
      "Audience segmentation based on customer behavior and purchase history",
      "A/B split-testing on subject lines, send timing, and offer copy"
    ],
    bestFor: "Businesses with an existing customer or lead list wanting predictable repeat revenue.",
    accentColor: "from-blue-500 to-indigo-600"
  },

  // ================= PILLAR 2: WEBSITE & CONTENT =================
  {
    slug: "seo-web-development",
    pillar: "website-content",
    pillarLabel: "WEBSITE & CONTENT",
    title: "SEO Website Development (Next.js)",
    badge: "90+ LIGHTHOUSE PERFORMANCE",
    metric: { value: "90+", label: "Web Speed Guaranteed" },
    image: "/services/seo-web-development.jpg",
    tagline: "Sub-second load times engineered for maximum search engine crawlability and conversions.",
    simpleExplainer:
      "We engineer custom, lightning-fast web applications built on Next.js and modern React instead of slow, bloated WordPress templates that take 5+ seconds to load.",
    howItRanks:
      "Google officially rewards fast websites. Our sites score 90+ on Google PageSpeed Insights, pass every Core Web Vitals audit, and eliminate mobile bounce rates so your pages rank higher effortlessly.",
    deliverables: [
      "Custom Next.js App Router architecture with clean, modern code",
      "Sub-500ms global edge CDN deployment on Vercel infrastructure",
      "Guaranteed 90+ Google PageSpeed Insights mobile & desktop score",
      "Dynamic OpenGraph previews & automated semantic meta tags",
      "Responsive glassmorphic UI designed for mobile conversion"
    ],
    bestFor: "Pune businesses struggling with slow WordPress sites that lose leads to competitors.",
    accentColor: "from-saas-purple to-saas-cyan"
  },
  {
    slug: "branding-design",
    pillar: "website-content",
    pillarLabel: "WEBSITE & CONTENT",
    title: "Branding & Conversion UI/UX Design",
    badge: "CONVERSION UI/UX & BRAND IDENTITY",
    metric: { value: "3.8x", label: "Landing Page Conversion Lift" },
    image: "/services/branding-design.jpg",
    tagline: "Elevate your market perception with premium design that commands respect and action.",
    simpleExplainer:
      "Branding and UI/UX design is how your business looks, feels, and communicates to visitors. We create distinctive visual identities and frictionless website layouts that turn casual visitors into buyers.",
    howItRanks:
      "Intuitive, beautiful layouts keep visitors on your site longer, slashing bounce rates and dramatically increasing dwell time—two critical behavioral signals that boost your Google search standing.",
    deliverables: [
      "Complete brand identity system (logos, color palettes & typography)",
      "Interactive Figma UI/UX prototypes and conversion wireframes",
      "Frictionless lead forms, booking widgets & checkout funnels",
      "Design systems and component styleboards for long-term consistency",
      "Psychology-backed visual hierarchy and contrast optimization"
    ],
    bestFor: "Companies seeking a high-end corporate identity that justifies premium pricing.",
    accentColor: "from-fuchsia-500 to-purple-600"
  },
  {
    slug: "content-architecture",
    pillar: "website-content",
    pillarLabel: "WEBSITE & CONTENT",
    title: "Content Architecture & Copywriting",
    badge: "INTENT-DRIVEN ASSETS",
    metric: { value: "+300%", label: "Organic Search Impressions" },
    image: "/services/content-architecture.jpg",
    tagline: "High-authority articles, service pages, and case studies engineered for searchers and algorithms.",
    simpleExplainer:
      "Content architecture is the science of writing articles and web pages that answer exactly what your customers are searching for, establishing your business as the ultimate authority in your field.",
    howItRanks:
      "We design semantic topic hubs that satisfy Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) criteria, ranking your site across dozens of valuable long-tail search questions.",
    deliverables: [
      "Search-intent keyword research & competitor content gap analysis",
      "Authoritative, well-researched blog posts & service copy",
      "E-E-A-T compliance optimization with expert quotes and citations",
      "Strategic internal linking architecture connecting topic clusters",
      "Compelling metadata titles & meta descriptions to maximize click-through rate"
    ],
    bestFor: "Businesses wanting to dominate informational and commercial search terms in their industry.",
    accentColor: "from-emerald-400 to-teal-600"
  },
  {
    slug: "authority-building",
    pillar: "website-content",
    pillarLabel: "WEBSITE & CONTENT",
    title: "Authority Building & Digital PR",
    badge: "DOMINANT LINK EQUITY",
    metric: { value: "+40 DR", label: "Domain Rating Boost" },
    image: "/services/authority-building.jpg",
    tagline: "Skyrocket your domain authority with high-tier editorial backlinks and press coverage.",
    simpleExplainer:
      "Authority building earns links from reputable news outlets and industry websites pointing back to your site. Each link acts like a vote of confidence in the eyes of Google.",
    howItRanks:
      "Backlinks remain the #1 ranking factor for competitive search terms. Our white-hat digital PR campaigns pass immense domain equity to your site, making your rankings virtually unassailable.",
    deliverables: [
      "100% white-hat editorial outreach to high-Domain Rating (DR) media sites",
      "Digital PR story creation, press releases & journalist pitching",
      "Competitor backlink profile reverse-engineering & gap closure",
      "Unlinked brand mention reclamation across news and blogs",
      "Broken link building & contextual guest feature placements"
    ],
    bestFor: "Websites stuck on Page 2 or competing against entrenched legacy market leaders.",
    accentColor: "from-yellow-400 to-amber-600"
  },

  // ================= PILLAR 3: SPECIALIZED GROWTH =================
  {
    slug: "local-seo-gmb",
    pillar: "specialized-growth",
    pillarLabel: "SPECIALIZED GROWTH",
    title: "Local SEO & Google Business Profile (GMB)",
    badge: "GOOGLE 3-PACK DOMINANCE",
    metric: { value: "+340%", label: "Direct Phone Call Lift" },
    image: "/services/local-seo-gmb.jpg",
    tagline: "Put your business in the top 3 spots of Google Maps when local Pune customers search.",
    simpleExplainer:
      "When someone in Pune searches for services 'near me', Google displays 3 businesses on a map at the top of the page. Local SEO optimizes your profile to ensure your company is one of those 3.",
    howItRanks:
      "We optimize your Google Business Profile (GMB), build 100+ local Pune directory citations (Justdial, Sulekha, Indiamart), inject geo-targeted schema code, and systematically grow 5-star customer reviews.",
    deliverables: [
      "Full Google Business Profile (GMB) audit, category tuning & optimization",
      "Local citation network across 100+ top Indian directories (consistent NAP)",
      "Geo-targeted local structured schema markup injection",
      "Local 3-Pack rank tracking across specific Pune pin codes and neighborhoods",
      "Systematic review velocity strategy to collect verified 5-star feedback"
    ],
    bestFor: "Local businesses, clinics, real estate, showrooms, and firms serving Pune and surrounding areas.",
    accentColor: "from-saas-cyan to-blue-500"
  },
  {
    slug: "meta-advertisements",
    pillar: "specialized-growth",
    pillarLabel: "SPECIALIZED GROWTH",
    title: "Meta Advertisements (FB & Instagram)",
    badge: "HIGH-INTENT LEAD GEN",
    metric: { value: "4.2x", label: "Average Campaign ROAS" },
    image: "/services/meta-advertisements.jpg",
    tagline: "Turn targeted ad spend into predictable, high-converting customer inquiries.",
    simpleExplainer:
      "Meta Ads lets you show video and image advertisements to your exact target demographic on Instagram and Facebook, driving them directly to your WhatsApp or lead booking page.",
    howItRanks:
      "While Meta ads don't directly change Google organic ranks, they drive rapid brand search volume and direct customer traffic, validating your market presence across digital channels.",
    deliverables: [
      "Meta Conversions API (CAPI) & Pixel server-side tracking setup",
      "High-converting video ads, carousels & psychological direct-response copy",
      "Precision audience targeting by location, interest, and purchasing behavior",
      "Retargeting funnels that follow up with interested visitors until they buy",
      "Continuous A/B split-testing of creative, headlines, and call-to-actions"
    ],
    bestFor: "B2C brands, e-commerce, real estate, education, and services seeking rapid lead flow.",
    accentColor: "from-indigo-500 to-purple-600"
  },
  {
    slug: "aeo-geo-optimization",
    pillar: "specialized-growth",
    pillarLabel: "SPECIALIZED GROWTH",
    title: "AEO / GEO Optimization (AI Search)",
    badge: "AI LLM RANKING ENGINE",
    metric: { value: "#1 Cited", label: "In ChatGPT & Gemini" },
    image: "/services/aeo-geo-optimization.jpg",
    tagline: "Future-proof your company so AI tools recommend your business when prospects ask.",
    simpleExplainer:
      "Millions of people now search using ChatGPT, Perplexity, and Google Gemini. AEO (Answer Engine Optimization) structures your online presence so AI engines cite your company as the top recommendation.",
    howItRanks:
      "We feed clean semantic entity graphs and schema directly to AI web crawlers (GPTBot, ClaudeBot), ensuring your brand is hard-coded into the knowledge bases that AI models reference.",
    deliverables: [
      "AI crawler optimization for GPTBot, PerplexityBot, and Google Gemini",
      "Knowledge graph & semantic entity markup integration",
      "Conversational Question & Answer structured data structuring",
      "AI recommendation monitoring & citation verification audits",
      "JSON-LD organization & local entity relationship linking"
    ],
    bestFor: "Forward-thinking companies wanting to lead the next decade of AI-powered search.",
    accentColor: "from-emerald-400 to-teal-500"
  },
  {
    slug: "analytics-tracking",
    pillar: "specialized-growth",
    pillarLabel: "SPECIALIZED GROWTH",
    title: "Analytics, Telemetry & GA4 Attribution",
    badge: "REAL-TIME INTELLIGENCE",
    metric: { value: "100%", label: "Data Attribution Accuracy" },
    image: "/services/analytics-tracking.jpg",
    tagline: "Eliminate guesswork. Know exactly which keyword and ad generates every rupee of revenue.",
    simpleExplainer:
      "We install crystal-clear tracking across your website and ads so you can see where every lead came from—whether it was a Google search, Instagram ad, or direct referral.",
    howItRanks:
      "By knowing which pages and keywords deliver actual paying customers, we focus our SEO and marketing efforts on the exact queries that move your bottom line.",
    deliverables: [
      "Full Google Analytics 4 (GA4) event and conversion funnel instrumentation",
      "Google Tag Manager (GTM) server-side container implementation",
      "Executive real-time Looker Studio dashboard showing daily ROI",
      "Multi-channel UTM attribution tracking for all ads and campaigns",
      "Call tracking and form submission conversion verification"
    ],
    bestFor: "Founders and marketing directors who demand absolute transparency on their marketing ROI.",
    accentColor: "from-saas-purple to-pink-500"
  }
];
