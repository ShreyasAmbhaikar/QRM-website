"use client";

import { SiNextdotjs, SiVercel, SiSemrush, SiGoogleanalytics, SiGooglesearchconsole, SiTailwindcss, SiReact, SiFigma, SiPython } from "react-icons/si";

const row1 = [
  { name: "Next.js 16", icon: <SiNextdotjs size={26} />, glow: "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
  { name: "Vercel", icon: <SiVercel size={24} />, glow: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
  { name: "Ahrefs", icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M15.42 16.14c-1.34 0-2.31-.69-2.73-1.42l-.12.83h-3.32l1.65-11.4h3.42l-1.04 7.23c.36-.61 1.25-1.42 2.65-1.42 2.76 0 4.29 2.1 4.29 4.88 0 3.32-2.12 5.3-4.8 5.3zm-1.07-2.61c1.23 0 1.94-.8 1.94-2.12 0-1.12-.66-1.87-1.63-1.87-1.25 0-1.92.93-1.92 2.05 0 1.15.54 1.94 1.61 1.94zM7.05 16.14c-2.63 0-4.71-1.96-4.71-5.32 0-2.78 1.54-4.88 4.31-4.88 1.4 0 2.3.81 2.65 1.42l1.04-7.23h3.42L12.11 15.55h-3.32l-.12-.83c-.42.73-1.39 1.42-2.73 1.42zm1.09-2.61c1.07 0 1.61-.79 1.61-1.94 0-1.12-.67-2.05-1.92-2.05-.97 0-1.63.75-1.63 1.87 0 1.32.71 2.12 1.94 2.12z" />
      </svg>
    ), glow: "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]" },
  { name: "SEMrush", icon: <SiSemrush size={24} />, glow: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]" },
  { name: "Google Analytics 4", icon: <SiGoogleanalytics size={24} />, glow: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]" },
  { name: "Search Console", icon: <SiGooglesearchconsole size={24} />, glow: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" }
];

const row2 = [
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, glow: "hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" },
  { name: "React", icon: <SiReact size={24} />, glow: "hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]" },
  { name: "Figma", icon: <SiFigma size={24} />, glow: "hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]" },
  { name: "Python AEO Bot", icon: <SiPython size={24} />, glow: "hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]" },
  { name: "Next.js 16", icon: <SiNextdotjs size={24} />, glow: "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
  { name: "Vercel", icon: <SiVercel size={24} />, glow: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" }
];

export function TechStackSection() {
  return (
    <section className="py-20 relative z-10 overflow-hidden bg-black border-t border-white/10">
      {/* Side Fade Mask Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-36 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-36 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl mb-12 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-saas-cyan mb-2">
          ENGINEERED WITH INDUSTRY LEADERS
        </p>
        <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight">
          Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-400 to-saas-purple">Modern Tech Stack.</span>
        </h2>
      </div>

      {/* Dual Moving Marquee Rows */}
      <div className="space-y-4">
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden flex gap-4">
          <div className="animate-marquee flex gap-4">
            {[...row1, ...row1, ...row1].map((tool, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-xl transition-all duration-300 ${tool.glow} cursor-pointer group`}
              >
                <span className="text-zinc-300 group-hover:text-white transition-colors">{tool.icon}</span>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors tracking-wide whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden flex gap-4">
          <div className="animate-marquee-reverse flex gap-4">
            {[...row2, ...row2, ...row2].map((tool, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-xl transition-all duration-300 ${tool.glow} cursor-pointer group`}
              >
                <span className="text-zinc-300 group-hover:text-white transition-colors">{tool.icon}</span>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors tracking-wide whitespace-nowrap">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
