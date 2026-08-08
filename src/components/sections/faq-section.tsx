import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does Quantum Reach Media provide?",
    answer: "We combine technical SEO, local SEO, AEO and GEO, high-performance web development, conversion-focused design, content strategy, and paid acquisition. Engagements are shaped around the channels most likely to create measurable growth for your business.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Technical improvements can show an impact within weeks, while meaningful organic growth typically compounds over three to six months. Timing depends on your market, website history, competition, and the condition of your current search presence.",
  },
  {
    question: "Can you guarantee first-page or number-one rankings?",
    answer: "No responsible agency can guarantee a specific organic position because search engines control their algorithms. We commit to transparent execution, technically sound strategy, measurable milestones, and continuous optimization against agreed business outcomes.",
  },
  {
    question: "Do you work with an existing website or marketing team?",
    answer: "Yes. We can improve an existing platform, collaborate with your internal team, or manage the complete strategy and implementation. We begin with an audit so responsibilities, priorities, and technical constraints are clear from the start.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO improves visibility in traditional search results. AEO structures content to answer questions directly, while GEO strengthens how your brand is understood and cited by generative search experiences such as AI Overviews, ChatGPT, Gemini, and other answer engines.",
  },
  {
    question: "How are projects priced?",
    answer: "Pricing depends on scope, competition, technical complexity, and the level of ongoing support required. After discovery, we provide a clear proposal with deliverables, timelines, ownership, and fees before any work begins.",
  },
  {
    question: "Will we own the website, content, and campaign data?",
    answer: "Yes. Once invoices are settled, you retain ownership of the approved website assets and content produced for your engagement. Your analytics, advertising, and business profiles remain in accounts you control.",
  },
  {
    question: "How do you report performance?",
    answer: "Reporting focuses on outcomes rather than vanity metrics. Depending on the engagement, we track qualified leads, calls, conversions, revenue attribution, local visibility, organic growth, Core Web Vitals, and progress against the agreed roadmap.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative z-10 overflow-hidden py-24 md:py-32">
      <div className="container relative mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-saas-cyan shadow-[0_0_15px_rgba(168,85,247,0.18)] backdrop-blur-md">
            <HelpCircle size={13} /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-sans font-bold tracking-tight text-white md:text-4xl">
            Clear answers before <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">we begin.</span>
          </h2>
          <p className="text-sm font-medium leading-relaxed text-zinc-400 md:text-base">
            The practical details businesses usually want to understand before choosing a growth partner.
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
