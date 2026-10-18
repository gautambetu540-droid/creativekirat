'use client';

import { m, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_OUT, cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article' | 'header';
};

/** Reveal-on-scroll wrapper: whileInView, once, viewport margin -80px. */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, delay } },
  };
  // All four tags share the same motion props; cast keeps JSX typing simple.
  const Component = m[as] as unknown as typeof m.div;
  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
