"use client";

import { cn } from "@/lib/utils";

export function PerspectiveGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden [perspective:1000px]",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: "rotateX(75deg) translateY(50px) scale(2)",
          transformOrigin: "bottom center",
        }}
      >
        <div 
          className="absolute inset-[-100%] border-[rgba(147,51,234,0.1)] bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            animation: "grid-move 10s linear infinite",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-[50%] bg-gradient-to-b from-[#05010D] to-transparent" />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}} />
    </div>
  );
}
