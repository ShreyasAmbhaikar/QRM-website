"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers3 } from "lucide-react";

const stackTools = [
  { name: "Google Search Console", asset: "/icons/google-search-console.svg" },
  { name: "Ahrefs", asset: "/icons/ahrefs.svg" },
  { name: "Google Ads", asset: "/icons/google-ads.svg" },
  { name: "Next.js", asset: "/icons/nextjs.svg", invert: true },
  { name: "Semrush", asset: "/icons/semrush.svg" },
  { name: "Google Analytics", asset: "/icons/google-analytics.svg" },
  { name: "Cloudflare", asset: "/icons/cloudflare.svg" },
  { name: "Node.js", asset: "/icons/nodejs.svg" },
  { name: "Google Cloud", asset: "/icons/google-cloud.svg" },
  { name: "Vercel", asset: "/icons/vercel.svg" },
  { name: "Lighthouse", asset: "/icons/lighthouse.svg" },
  { name: "WordPress", asset: "/icons/wordpress.svg" },
  { name: "Google Tag Manager", asset: "/icons/google-tag-manager.svg" },
  { name: "React", asset: "/icons/react.svg" },
  { name: "PageSpeed Insights", asset: "/icons/pagespeed-insights.svg" },
  { name: "TypeScript", asset: "/icons/typescript.svg" },
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const toolItems = sectionRef.current?.querySelectorAll(".stack-tool-item");

    gsap.fromTo(
      toolItems ?? [],
      { filter: "blur(10px)", opacity: 0, y: 12 },
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.045,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[760px] sm:h-[820px] md:h-[860px] bg-[#000000] overflow-hidden select-none"
    >
      {/* 1. Site-standard chip and section heading */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-10 w-full text-center px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-saas-cyan/30 bg-saas-cyan/10 text-[11px] font-mono font-bold uppercase tracking-widest text-saas-cyan backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.18)]">
          <Layers3 size={13} /> SEO &amp; Development Toolkit
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan via-purple-300 to-saas-purple">Tech Stack</span>
        </h2>
      </div>

      {/* 2. Icon-only four-by-four matrix with hover and focus labels */}
      <div className="absolute top-[24%] sm:top-[23%] left-1/2 -translate-x-1/2 z-10 grid w-[92%] max-w-[820px] grid-cols-4 place-items-center gap-x-5 sm:gap-x-12 gap-y-9 sm:gap-y-14 px-2">
        {stackTools.map(({ name, asset, invert }) => (
          <div
            key={name}
            tabIndex={0}
            aria-label={name}
            className="stack-tool-item group relative flex size-[3.25rem] sm:size-16 items-center justify-center rounded-lg outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-purple-400/70"
          >
            <Image
              src={asset}
              alt=""
              width={36}
              height={36}
              className={`size-8 sm:size-10 object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-focus:scale-110 group-focus:opacity-100 ${invert ? "invert" : ""}`}
            />

            <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950/95 px-2.5 py-1.5 text-[10px] sm:text-[11px] font-medium text-zinc-100 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* 3. Magic UI-style masked ellipse: the glow rises from the arc border. */}
      <div className="pointer-events-none absolute inset-x-0 top-[65%] sm:top-[66%] z-[1]">
        <div className="[--color:#9333ea] pointer-events-none relative -z-[2] mx-auto h-[50rem] w-[94%] sm:w-[84%] max-w-[1180px] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_58%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-55 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_88%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t-2 after:border-white/60 after:bg-black" />
      </div>
    </section>
  );
}
