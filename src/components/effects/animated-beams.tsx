"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedBeams({ className }: { className?: string }) {
  // Generate random beams
  const beams = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 10,
    opacity: 0.1 + Math.random() * 0.3,
    width: 1 + Math.random() * 3,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute top-0 bottom-0 bg-gradient-to-b from-transparent via-[#9333EA] to-transparent"
          style={{
            left: beam.left,
            width: `${beam.width}px`,
            opacity: beam.opacity,
          }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
