'use client';

import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReelCard } from '@/components/reels/ReelCard';
import { ReelModal } from '@/components/reels/ReelModal';
import type { Reel } from '@/types';

let preconnected = false;
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
  const [page, setPage] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const visibleCount = 4;
  const maxPage = Math.max(0, reels.length - visibleCount);

  const open = useCallback((reel: Reel, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(reel);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>('[data-reel-card]');
    if (!firstCard) return;
    const style = window.getComputedStyle(track);
    const gap = Number.parseFloat(style.columnGap || style.gap || '16') || 16;
    const cardsPerMove = window.matchMedia('(min-width: 1024px)').matches ? 4 : window.matchMedia('(min-width: 640px)').matches ? 2 : 1;
    const step = (firstCard.getBoundingClientRect().width + gap) * cardsPerMove;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
    setPage((current) => Math.max(0, Math.min(maxPage, current + direction * cardsPerMove)));
  };

  return (
    <>
      <div className="relative mt-10 sm:mt-14">
        <div
          className="overflow-hidden"
          aria-label="Featured reels carousel"
        >
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          >
            {reels.map((reel, i) => (
              <li key={reel.id} data-reel-card className="w-[86%] shrink-0 snap-start min-[420px]:w-[72%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
                <ReelCard reel={reel} index={i} onOpen={open} onWarm={preconnectInstagram} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xs text-mist sm:text-sm">Swipe to explore more reels</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous reels" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-ink transition-colors hover:border-aqua/60 disabled:cursor-not-allowed disabled:opacity-40" disabled={page <= 0}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next reels" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-ink transition-colors hover:border-aqua/60 disabled:cursor-not-allowed disabled:opacity-40" disabled={page >= maxPage}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <ReelModal reel={active} onClose={close} />
    </>
  );
}
