'use client';

import { m } from 'framer-motion';
import { Clapperboard, Instagram, Play } from 'lucide-react';
import Image from 'next/image';
import { forwardRef } from 'react';
import { reelsContent } from '@/config/content';
import { EASE_OUT } from '@/lib/utils';
import type { Reel } from '@/types';

type ReelCardProps = {
  reel: Reel;
  index: number;
  onOpen: (reel: Reel, trigger: HTMLButtonElement) => void;
  onWarm: () => void;
};

/**
 * The entire card is a single <button> that opens the preview dialog.
 * Fixed 9:16 container → zero layout shift.
 */
export const ReelCard = forwardRef<HTMLButtonElement, ReelCardProps>(function ReelCard(
  { reel, index, onOpen, onWarm },
  ref,
) {
  return (
    <m.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.06 * index }}
    >
      <button
        ref={ref}
        type="button"
        onClick={(e) => onOpen(reel, e.currentTarget)}
        onPointerEnter={onWarm}
        onFocus={onWarm}
        aria-label={`Watch ${reel.title} — opens preview`}
        aria-haspopup="dialog"
        className="glow-border group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl border border-navy-700 bg-navy-800 text-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transform-none"
      >
        {reel.thumbnail ? (
          <Image
            src={reel.thumbnail}
            alt={reel.thumbnailAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, (min-width: 360px) 46vw, 92vw"
            className="object-cover"
          />
        ) : (
          // Honest placeholder — clearly not a video frame.
          <span
            aria-hidden="true"
            className="absolute inset-0 flex flex-col items-center justify-end bg-[radial-gradient(120%_80%_at_50%_0%,#13345E_0%,#0B2340_45%,#061426_100%)] px-4 pb-16 text-center"
          >
            <span className="bg-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
            <span className="absolute left-1/2 top-[22%] -translate-x-1/2 text-[4.5rem] font-bold leading-none tracking-tighter text-navy-700/80 sm:text-[5.5rem]">
              {String(reel.order).padStart(2, '0')}
            </span>
            <span className="relative inline-flex items-center gap-1.5 text-xs font-medium text-mist sm:text-sm">
              <Instagram className="h-4 w-4 text-aqua" />
              {reelsContent.fallbackText}
            </span>
          </span>
        )}

        {/* Bottom-heavy gradient overlay */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/20 to-transparent"
        />

        {/* Reel badge */}
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 z-[2] inline-flex items-center gap-1 rounded-full border border-white/10 bg-navy-950/70 px-2.5 py-1 text-[0.7rem] font-semibold text-ink backdrop-blur"
        >
          <Clapperboard className="h-3.5 w-3.5 text-aqua" />
          {reelsContent.badge}
        </span>

        {/* Centered glass play button */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-[2] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100 sm:h-16 sm:w-16"
        >
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>

        {/* Title */}
        <span className="absolute inset-x-0 bottom-0 z-[2] p-4 text-sm font-semibold text-ink">{reel.title}</span>
      </button>
    </m.li>
  );
});
