import { type SpecRow } from "@/data/service-details-data";
import { CheckCircle2 } from "lucide-react";

interface ServiceSplitSpecificationProps {
  currentSlug: string;
  narrativeHeading: string;
  narrativeHeadingAccent: string;
  narrativeText: string;
  outcomes: string[];
  specificationTable: SpecRow[];
  strategyQuote: string;
  corridorFocus: string;
}

export function ServiceSplitSpecification({
  narrativeHeading,
  narrativeHeadingAccent,
  narrativeText,
  outcomes,
  specificationTable,
  strategyQuote,
  corridorFocus
}: ServiceSplitSpecificationProps) {
  return (
    <section className="my-16 md:my-20">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
        
        {/* Narrative Overview */}
        <div className="space-y-5 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-purple-950 dark:text-white tracking-tight leading-[1.15]">
            {narrativeHeading}{" "}
            <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-saas-cyan dark:via-purple-300 dark:to-pink-400">
              {narrativeHeadingAccent}
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-purple-950/80 dark:text-zinc-300 leading-relaxed">
            {narrativeText}
          </p>
        </div>

        {/* What the Engagement Produces (Outcome Checklist) */}
        <div className="p-7 sm:p-9 rounded-3xl border border-purple-200/80 dark:border-white/10 bg-purple-50/50 dark:bg-zinc-950/70 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-purple-200/60 dark:border-white/10 pb-4">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-purple-950 dark:text-white tracking-tight">
              What the engagement produces:
            </h3>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              Verified Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-purple-200/40 dark:border-white/5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-purple-950/85 dark:text-zinc-200 leading-relaxed">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What is Included (Specification Matrix Table) */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-purple-950 dark:text-white tracking-tight">
              What is included
            </h3>
            <span className="text-xs font-mono text-purple-900/60 dark:text-zinc-400">
              Transparent Parameters
            </span>
          </div>

          <div className="rounded-3xl border border-purple-200/80 dark:border-white/10 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <tbody>
                {specificationTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b last:border-b-0 border-purple-200/50 dark:border-white/5 transition-colors ${
                      idx % 2 === 0
                        ? "bg-purple-50/20 dark:bg-white/[0.01]"
                        : "bg-purple-50/50 dark:bg-white/[0.03]"
                    }`}
                  >
                    <td className="w-1/3 py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm font-bold font-mono text-purple-950 dark:text-zinc-200 align-top">
                      {row.parameter}
                    </td>
                    <td className="w-2/3 py-4 sm:py-5 px-6 sm:px-8 text-xs sm:text-sm text-purple-950/80 dark:text-zinc-300 leading-relaxed align-top">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Highlight Quote */}
        <div className="p-7 sm:p-8 rounded-3xl border-l-4 border-purple-600 dark:border-saas-cyan bg-purple-100/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-white/10 shadow-sm space-y-3">
          <p className="text-base sm:text-lg font-semibold italic text-purple-950 dark:text-zinc-100 leading-relaxed">
            &ldquo;{strategyQuote}&rdquo;
          </p>
          <div className="text-xs font-mono text-purple-700 dark:text-saas-cyan font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-saas-cyan" />
            <span>{corridorFocus}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
