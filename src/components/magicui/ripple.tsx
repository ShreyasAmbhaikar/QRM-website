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
  mainCircleSize = 200,
  mainCircleOpacity = 0.5,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_80%)] [webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_80%)]",
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
            transform: translate(-50%, -50%) scale(0.92);
          }
        }
        .magic-ripple-ring {
          animation: magic-ripple-sync 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
      `}</style>

      {/* Ambient Violet/Purple Central Gradient Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(126,34,206,0.12)_45%,rgba(56,189,248,0.05)_70%,transparent_100%)] blur-3xl"
        style={{
          width: `${mainCircleSize + (numCircles - 1) * 65}px`,
          height: `${mainCircleSize + (numCircles - 1) * 65}px`,
        }}
      />

      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 65;
        const opacity = Math.max(mainCircleOpacity - i * 0.05, 0.05);
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        
        const borderAlpha = Math.max(0.6 - i * 0.06, 0.12);
        const fillAlpha = Math.max(0.1 - i * 0.012, 0.015);

        return (
          <div
            key={i}
            className="absolute rounded-full border magic-ripple-ring shadow-[0_0_25px_rgba(168,85,247,0.15)]"
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
