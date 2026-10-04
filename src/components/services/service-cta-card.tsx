"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

export function ServiceCtaCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const arrowHeadRef = useRef<SVGPathElement>(null);
  const [mounted, setMounted] = useState(false);

  const lastPointerPos = useRef<{ x: number; y: number } | null>(null);

  // Compute and update arrow curve and arrowhead
  const updateArrow = useCallback((cursorX: number, cursorY: number) => {
    if (!cardRef.current || !buttonRef.current || !pathRef.current || !arrowHeadRef.current) {
      return;
    }

    const cardRect = cardRef.current.getBoundingClientRect();
    const btnRect = buttonRef.current.getBoundingClientRect();

    // Button center relative to card container
    const btnCenterX = btnRect.left - cardRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top - cardRect.top + btnRect.height / 2;
    const btnRadiusX = btnRect.width / 2;
    const btnRadiusY = btnRect.height / 2;

    // Target point on button perimeter facing the cursor with breathing gap
    const angleToBtn = Math.atan2(cursorY - btnCenterY, cursorX - btnCenterX);
    const GAP = 22; // Clear breathing gap between arrow tip and button border

    const targetX = btnCenterX + (btnRadiusX + GAP) * Math.cos(angleToBtn);
    const targetY = btnCenterY + (btnRadiusY + GAP) * Math.sin(angleToBtn);

    const distToCenter = Math.hypot(cursorX - btnCenterX, cursorY - btnCenterY);

    // If cursor is directly hovering on or right next to button, hide arrow
    if (distToCenter < Math.max(btnRadiusX, btnRadiusY) + GAP + 6) {
      pathRef.current.setAttribute("d", "");
      arrowHeadRef.current.setAttribute("d", "");
      return;
    }

    const dx = targetX - cursorX;
    const dy = targetY - cursorY;
    const dist = Math.hypot(dx, dy);

    // Natural midpoint of the chord
    const midX = (cursorX + targetX) / 2;
    const midY = (cursorY + targetY) / 2;

    // Normalized perpendicular unit vector (-dy/dist, dx/dist)
    let nx = -dy / dist;
    let ny = dx / dist;

    // Distinct organic curve bow strength
    const bowStrength = Math.min(85, Math.max(40, dist * 0.18));

    // Ensure the arc curves gracefully upwards when cursor is above the button (ny < 0),
    // and curves downwards when cursor is below the button (ny > 0)
    if (cursorY < btnCenterY) {
      if (ny > 0) {
        nx = -nx;
        ny = -ny;
      }
    } else {
      if (ny < 0) {
        nx = -nx;
        ny = -ny;
      }
    }

    const controlX = midX + nx * bowStrength;
    const controlY = midY + ny * bowStrength;

    // Quadratic Bezier path
    const pathD = `M ${cursorX} ${cursorY} Q ${controlX} ${controlY} ${targetX} ${targetY}`;
    pathRef.current.setAttribute("d", pathD);

    // Tangent direction at target point for arrowhead
    const tangentX = targetX - controlX;
    const tangentY = targetY - controlY;
    const headAngle = Math.atan2(tangentY, tangentX);

    // Arrowhead wings
    const headLength = 13;
    const wingSpread = 0.5; // ~28.6 degrees
    const w1x = targetX - headLength * Math.cos(headAngle - wingSpread);
    const w1y = targetY - headLength * Math.sin(headAngle - wingSpread);
    const w2x = targetX - headLength * Math.cos(headAngle + wingSpread);
    const w2y = targetY - headLength * Math.sin(headAngle + wingSpread);

    const headD = `M ${w1x} ${w1y} L ${targetX} ${targetY} L ${w2x} ${w2y}`;
    arrowHeadRef.current.setAttribute("d", headD);
  }, []);

  // Set default resting position on mount or resize
  const resetToDefault = useCallback(() => {
    if (!cardRef.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    // Default resting position: entering from above the top edge at ~22% card width
    const defaultX = cardRect.width * 0.22;
    const defaultY = -80;
    updateArrow(defaultX, defaultY);
  }, [updateArrow]);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      resetToDefault();
    }, 80);

    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!cardRef.current) return;
      lastPointerPos.current = { x: e.clientX, y: e.clientY };

      const cardRect = cardRef.current.getBoundingClientRect();
      // Only compute when card is within or near the active viewport
      if (cardRect.bottom < -400 || cardRect.top > window.innerHeight + 400) {
        return;
      }

      const cursorX = e.clientX - cardRect.left;
      const cursorY = e.clientY - cardRect.top;
      updateArrow(cursorX, cursorY);
    };

    const handleScroll = () => {
      if (!cardRef.current) return;
      if (lastPointerPos.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cursorX = lastPointerPos.current.x - cardRect.left;
        const cursorY = lastPointerPos.current.y - cardRect.top;
        updateArrow(cursorX, cursorY);
      } else {
        resetToDefault();
      }
    };

    const handleResize = () => resetToDefault();

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [resetToDefault, updateArrow]);

  return (
    <section
      ref={cardRef}
      className="relative mt-16 md:mt-20 mb-6 md:mb-8 overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 border border-purple-300/60 dark:border-white/10 bg-gradient-to-b from-purple-100/90 via-purple-50/70 to-white/95 dark:from-[#0d0417] dark:via-[#07020d] dark:to-[#020005] shadow-2xl transition-all select-none"
    >
      {/* Luminous Top Ambient Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/80 via-fuchsia-500/80 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Canvas for Interactive Dynamic Pointing Arrow - behind text (z-0) and clipped inside card */}
      {mounted && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Dashed Curving Arrow Path */}
          <path
            ref={pathRef}
            d=""
            fill="none"
            stroke="#9333ea"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          {/* Arrowhead Pointing at Button */}
          <path
            ref={arrowHeadRef}
            d=""
            fill="none"
            stroke="#9333ea"
            className="stroke-purple-600 dark:stroke-purple-400"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-purple-950 dark:text-white tracking-tight leading-[1.15]">
          Ready to Make Your Digital Presence{" "}
          <span className="italic font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 dark:from-purple-300 dark:via-fuchsia-300 dark:to-pink-400">
            Work Harder in Pune?
          </span>
        </h2>

        {/* Narrative description */}
        <p className="text-sm sm:text-base md:text-lg text-purple-950/80 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          Partner with Pune&apos;s premier SEO &amp; digital growth engineering team to outrank entrenched competitors on Google, ChatGPT, and Gemini.
        </p>

        {/* Interactive "Let's Connect!" Action Button */}
        <div className="pt-3 flex justify-center">
          <Link
            ref={buttonRef}
            href="/contact"
            className="relative z-30 inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-zinc-200 hover:bg-white text-zinc-950 dark:bg-zinc-200 dark:hover:bg-white dark:text-zinc-950 font-extrabold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
          >
            <span>Let&apos;s Connect!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
