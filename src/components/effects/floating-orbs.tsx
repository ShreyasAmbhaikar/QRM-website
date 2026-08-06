"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function FloatingOrbs({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const orbs = containerRef.current.querySelectorAll(".orb");
    
    orbs.forEach((orb) => {
      // Randomize initial position
      gsap.set(orb, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        scale: () => 0.5 + Math.random() * 1.5,
        opacity: () => 0.1 + Math.random() * 0.5
      });

      // Animate floating motion
      gsap.to(orb, {
        x: "+=100",
        y: "+=100",
        duration: () => 10 + Math.random() * 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth),
          y: gsap.utils.unitize(y => parseFloat(y) % window.innerHeight)
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i} 
          className="orb absolute w-8 h-8 rounded-full bg-[#A855F7] mix-blend-screen filter blur-[10px]"
        />
      ))}
    </div>
  );
}
