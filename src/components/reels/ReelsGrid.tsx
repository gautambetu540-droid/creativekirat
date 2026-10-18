'use client';

import { useCallback, useRef, useState } from 'react';
import { ReelCard } from '@/components/reels/ReelCard';
import { ReelModal } from '@/components/reels/ReelModal';
import type { Reel } from '@/types';

let preconnected = false;
/** Lightweight warm-up: preconnect to Instagram on first hover/focus only. */
function preconnectInstagram() {
  if (preconnected || typeof document === 'undefined') return;
  preconnected = true;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://www.instagram.com';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

export function ReelsGrid({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState<Reel | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((reel: Reel, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(reel);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    // Return focus to the originating card.
    window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  return (
    <>
      <ul className="mt-14 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-5">
        {reels.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} onOpen={open} onWarm={preconnectInstagram} />
        ))}
      </ul>
      <ReelModal reel={active} onClose={close} />
    </>
  );
}
