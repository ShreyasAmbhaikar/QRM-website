"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.5,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden [mask-image:radial-gradient(circle_at_center,white_75%,transparent_98%)]",
        className
      )}
      {...props}
    >
      {/* Exact Magic UI Synchronized Wave Easing Keyframes */}
      <style>{`
        @keyframes magic-ripple-sync {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(0.9);
          }
        }
        .magic-ripple-ring {
          animation: magic-ripple-sync 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
      `}</style>

      {/* Ambient Violet/Purple Central Gradient Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(126,34,206,0.12)_45%,rgba(56,189,248,0.05)_70%,transparent_100%)] blur-2xl"
        style={{
          width: `${mainCircleSize + (numCircles - 1) * 70}px`,
          height: `${mainCircleSize + (numCircles - 1) * 70}px`,
        }}
      />

      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = Math.max(mainCircleOpacity - i * 0.04, 0.08);
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        
        // Rich Violet & Purple Gradient fill + stroke combination matching Magic UI demo video
        const borderAlpha = Math.max(0.65 - i * 0.06, 0.15);
        const fillAlpha = Math.max(0.12 - i * 0.012, 0.02);

        return (
          <div
            key={i}
            className="absolute rounded-full border magic-ripple-ring shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1.5px",
                borderColor: `rgba(168, 85, 247, ${borderAlpha})`,
                background: `radial-gradient(circle, rgba(168, 85, 247, ${fillAlpha * 1.5}) 0%, rgba(126, 34, 206, ${fillAlpha}) 60%, transparent 100%)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
});
