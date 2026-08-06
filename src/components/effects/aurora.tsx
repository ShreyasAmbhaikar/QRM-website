"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden opacity-50 pointer-events-none", className)}>
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#9333EA] rounded-full mix-blend-screen filter blur-[100px] opacity-40"
      />
      <motion.div
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
          scale: [1, 1.3, 1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-[#D946EF] rounded-full mix-blend-screen filter blur-[120px] opacity-30"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 50, 0],
          y: [0, 100, 50, -50, 0],
          scale: [1, 1.1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] left-[40%] w-[40vw] h-[40vh] bg-[#A855F7] rounded-full mix-blend-screen filter blur-[90px] opacity-20"
      />
    </div>
  );
}
