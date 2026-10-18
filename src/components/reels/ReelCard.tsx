'use client';

import { m } from 'framer-motion';
import { Clapperboard, Play } from 'lucide-react';
import Image from 'next/image';
import { forwardRef } from 'react';
import { getReelEmbedUrl } from '@/lib/reel-utils';
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
 * Prefer a local thumbnail when one is supplied. Otherwise render Instagram's
 * own public Reel embed as the preview instead of pretending a placeholder is
 * the real video frame. A separate overlay button keeps keyboard access and
 * opens the full preview dialog.
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
      <div className="glow-border group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl border border-navy-700 bg-navy-800 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transform-none">
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
          <iframe
            src={getReelEmbedUrl(reel.id)}
            title={`Instagram preview: ${reel.title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            referrerPolicy="strict-origin-when-cross-origin"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 border-0 bg-white"
          />
        )}

        {/* Keep the embed decorative; the accessible button opens the full preview. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/10 to-navy-950/10"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 z-[2] inline-flex items-center gap-1 rounded-full border border-white/10 bg-navy-950/75 px-2.5 py-1 text-[0.7rem] font-semibold text-ink backdrop-blur"
        >
          <Clapperboard className="h-3.5 w-3.5 text-aqua" />
          {reelsContent.badge}
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-[2] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100 sm:h-16 sm:w-16"
        >
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>

        <span className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-4 text-sm font-semibold text-ink">
          {reel.title}
        </span>

        <button
          ref={ref}
          type="button"
          onClick={(event) => onOpen(reel, event.currentTarget)}
          onPointerEnter={onWarm}
          onFocus={onWarm}
          aria-label={`Watch ${reel.title} — opens preview`}
          aria-haspopup="dialog"
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-aqua"
        />
      </div>
    </m.li>
  );
});
