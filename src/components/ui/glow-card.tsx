"use client";

import { cn } from "@/lib/utils";
import { ReactNode, MouseEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl border border-border dark:border-white/10 bg-card dark:bg-[#0A0A0A] overflow-hidden shadow-[0_4px_20px_rgba(147,51,234,0.06)] dark:shadow-none transition-colors",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 51, 234, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
