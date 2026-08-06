"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export function SpotlightCursor({ className }: { className?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    // Check if device supports hover
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursorRef.current.style.display = 'none';
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-30 mix-blend-screen opacity-50",
        "bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15)_0,transparent_60%)]",
        "transform -translate-x-1/2 -translate-y-1/2",
        className
      )}
    />
  );
}
