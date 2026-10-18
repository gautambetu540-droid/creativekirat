'use client';

import { LazyMotion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

const loadFeatures = () => import('./motion-features').then((mod) => mod.default);

/**
 * LazyMotion keeps the Framer bundle small (only `m.*` components are used,
 * enforced by `strict`). Animation features are code-split and loaded after
 * hydration. MotionConfig reducedMotion="user" makes every Framer animation
 * honour the OS-level prefers-reduced-motion setting (transforms are skipped).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
