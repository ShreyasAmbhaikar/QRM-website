"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import "lenis/dist/lenis.css";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchInertiaExponent: 1.7,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
