'use client';

import { useCallback, useRef, useState, useEffect } from 'react';
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
  const [cardsPerView, setCardsPerView] = useState(1);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const maxPage = Math.max(0, reels.length - cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      const next = window.matchMedia('(min-width: 1024px)').matches ? 4 : window.matchMedia('(min-width: 640px)').matches ? 2 : 1;
      setCardsPerView(next);
      setPage(0);
      if (trackRef.current) trackRef.current.scrollTo({ left: 0 });
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView, { passive: true });
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

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
    const step = (firstCard.getBoundingClientRect().width + gap) * cardsPerView;
    const nextPage = Math.max(0, Math.min(maxPage, page + direction * cardsPerView));
    track.scrollTo({ left: nextPage * step, behavior: 'smooth' });
    setPage(nextPage);
  };

  return (
    <>
      <div className="relative mt-10 sm:mt-14">
        <ul
          ref={trackRef}
          aria-label="Featured reels carousel"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {reels.map((reel, i) => (
            <li key={reel.id} data-reel-card className="w-full shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]">
              <ReelCard reel={reel} index={i} onOpen={open} onWarm={preconnectInstagram} />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7">
          <p className="text-sm text-mist">Swipe or use the controls to explore more reels</p>
          <div className="flex items-center justify-center gap-3">
            <button type="button" onClick={() => move(-1)} aria-label="Previous reels" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-aqua/40 bg-navy-900 text-ink shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-colors hover:border-aqua hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua disabled:cursor-not-allowed disabled:opacity-40" disabled={page <= 0}>
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
