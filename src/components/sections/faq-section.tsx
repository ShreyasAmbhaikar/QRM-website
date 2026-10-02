import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "Why is Quantum Reach Media considered the best SEO & digital marketing agency in Pune?",
    answer: "Unlike traditional agencies that rely on slow WordPress templates and vanity metrics, Quantum Reach Media builds engineering-grade Next.js platforms scoring 90+ on Google PageSpeed. We combine programmatic technical SEO, Google Map Pack dominance, Generative Engine Optimization (GEO/AEO), and high-ROI paid acquisition to deliver verified pipeline and revenue for Pune and global businesses.",
  },
  {
    question: "How do you rank local Pune businesses in the Google Map Pack (3-Pack)?",
    answer: "We engineer local authority through a 4-step framework: 100% NAP consistency across top directories, localized Schema.org JSON-LD structured data, geo-tagged image and coordinate signals for Pune areas (Wadgaon Sheri, Viman Nagar, Baner, Hinjawadi), and an automated review velocity system that prompts real clients to leave keyword-rich 5-star reviews.",
  },
  {
    question: "Do you serve clients across Pune tech hubs like Hinjawadi, Baner, and Kharadi?",
    answer: "Yes. Headquartered in Wadgaon Sheri, Pune, we work extensively with IT and SaaS companies in Hinjawadi Phase 1-3, dental clinics and healthcare providers in Viman Nagar and Kalyani Nagar, real estate developers in Baner and Balewadi, and commercial enterprises across Kharadi and Magarpatta.",
  },
  {
    question: "What is the difference between traditional SEO, AEO, and GEO?",
    answer: "Traditional SEO focuses on keyword rankings on classic search engine results pages. AEO (Answer Engine Optimization) structures your content to answer direct questions for voice search and featured snippets. GEO (Generative Engine Optimization) models your brand's digital footprint so AI engines like ChatGPT, Google AI Overviews, Perplexity, and Gemini cite you as the canonical authority.",
  },
  {
    question: "How fast can we see results from our SEO and Google Ads campaigns?",
    answer: "Google Ads and Meta campaigns generate qualified inbound leads within 48 to 72 hours of launch. Technical SEO and Core Web Vitals optimizations typically show crawling and indexation improvements within 2 to 3 weeks, while organic revenue and top-3 keyword rankings compound dramatically over 60 to 90 days.",
  },
  {
    question: "Can you migrate our slow WordPress website to a high-speed Next.js platform?",
    answer: "Yes. Slow page speeds (over 2 seconds) degrade Google rankings and drop conversion rates by up to 50%. We migrate brands from bloated WordPress setups to custom Next.js architectures with sub-500ms load times, automated image optimization, and zero downtime.",
  },
  {
    question: "Will our business own all website code, ad accounts, and analytics assets?",
    answer: "100% yes. You maintain complete ownership of your Next.js source code, Google Analytics 4 properties, Meta ad accounts, and Google Business Profile. We do not lock clients into proprietary holding platforms.",
  },
  {
    question: "How do you measure and report marketing performance?",
    answer: "We build custom real-time dashboards tracking bottom-line business metrics: Cost Per Qualified Lead (CPQL), Return on Ad Spend (ROAS), Google Map Pack phone calls, conversion rates, and organic pipeline revenue—never vanity clicks or meaningless impression metrics.",
  },
];

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative z-10 overflow-hidden py-24 md:py-32">
      {/* Schema.org FAQPage Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container relative mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-saas-cyan shadow-[0_0_15px_rgba(168,85,247,0.18)] backdrop-blur-md">
            <HelpCircle size={13} /> CLEAR ANSWERS &amp; CLARITY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">
              Questions
            </span>
          </h2>
          <p className="text-sm font-medium leading-relaxed text-zinc-400 md:text-base">
            Clear answers about our SEO methodologies, ranking timelines, and digital growth strategies in Pune.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-xl bg-white/[0.025] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-colors duration-300 hover:bg-white/[0.04] sm:px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-sm font-semibold text-zinc-100 transition-colors hover:text-purple-300 focus-visible:outline-none focus-visible:text-purple-300 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 font-mono text-[10px] font-bold text-purple-400/70 sm:text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 group-open:rotate-45 group-open:border-purple-400/40 group-open:text-purple-300">
                  <Plus size={15} />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-all duration-300 group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 pl-8 pr-10 text-sm font-medium leading-7 text-zinc-400 sm:pl-9">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
