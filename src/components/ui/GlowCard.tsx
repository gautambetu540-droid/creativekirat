'use client';

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';
import { useFinePointer, useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { cn } from '@/lib/utils';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  /** Enable subtle 3D tilt (fine pointer + no reduced motion only). */
  tilt?: boolean;
  as?: 'div' | 'article' | 'li';
};

/**
 * Premium card with hover lift (−4px), optional subtle tilt and cyan glow.
 * Tilt and lift are disabled on touch devices and with reduced motion.
 */
export function GlowCard({ children, className, tilt = false, as = 'article' }: GlowCardProps) {
  const fine = useFinePointer();
  const reduced = useReducedMotionSafe();
  const interactive = fine && !reduced;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!interactive || !tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const Component = m[as] as unknown as typeof m.div;

  return (
    <Component
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={interactive && tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={cn(
        'card-surface glow-border group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-navy-800',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aqua/0 blur-3xl transition-colors duration-500 group-hover:bg-aqua/15"
      />
      <div className="relative z-[2] h-full">{children}</div>
    </Component>
  );
}
