'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * SSR-safe reduced-motion flag. Returns false on the server/first render and
 * the real preference after mount, to avoid hydration mismatches.
 */
export function useReducedMotionSafe(): boolean {
  const prefers = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? Boolean(prefers) : false;
}

/** True only on devices with a fine pointer that can hover (desktop mice/trackpads). */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return fine;
}
