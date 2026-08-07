"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollVelocityColumnProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export function ScrollVelocityColumn({
  children,
  baseVelocity = 8,
  className,
}: ScrollVelocityColumnProps) {
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());

    baseY.set(baseY.get() + moveBy);
  });

  // Seamless 50% loop for continuous vertical scrolling
  const y = useTransform(baseY, (v) => `${(v % 50) - 50}%`);

  return (
    <div className={cn("overflow-hidden flex flex-col h-full", className)}>
      <motion.div className="flex flex-col gap-4" style={{ y }}>
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
