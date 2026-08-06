"use client";

import { Aurora } from "./aurora";
import { PerspectiveGrid } from "./perspective-grid";
import { AnimatedBeams } from "./animated-beams";
import { FloatingOrbs } from "./floating-orbs";
import { Noise } from "./noise";

export function NebulaCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#05010D]">
      <PerspectiveGrid className="opacity-30" />
      <Aurora className="opacity-50" />
      <AnimatedBeams className="opacity-40" />
      <FloatingOrbs className="opacity-60" />
      <Noise opacity={0.03} />
      <div className="absolute inset-0 bg-[#05010D]/30" /> {/* Slight dark overlay */}
    </div>
  );
}
