'use client';

import { m, useScroll, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/** Wraps the timeline; draws a vertical progress line (scaleY) as you scroll. */
export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute bottom-2 left-[15px] top-2 w-px bg-navy-700 md:left-[19px]" />
      <m.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-electric via-aqua to-electric md:left-[19px]"
      />
      {children}
    </div>
  );
}
