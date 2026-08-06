"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  className?: string;
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
}

export function InfiniteMarquee({
  items,
  className,
  speed = "normal",
  direction = "left",
}: InfiniteMarqueeProps) {
  const speedClass = {
    fast: "duration-[20s]",
    normal: "duration-[40s]",
    slow: "duration-[60s]",
  }[speed];

  return (
    <div className={cn("overflow-hidden flex relative w-full group py-8", className)}>
      <div
        className={cn(
          "flex whitespace-nowrap gap-12 py-4 px-6 min-w-full w-max",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          speedClass,
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <span key={i} className="text-5xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 uppercase tracking-tighter opacity-30 select-none">
            {item}
          </span>
        ))}
        {/* Duplicate for infinite effect */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="text-5xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 uppercase tracking-tighter opacity-30 select-none">
            {item}
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(calc(-50% - 1.5rem)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse linear infinite; }
      `}} />
    </div>
  );
}
