'use client';

import { AlertCircle, ExternalLink, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { reelsContent } from '@/config/content';
import { useScrollLock } from '@/hooks/useScrollLock';
import { getReelEmbedUrl } from '@/lib/reel-utils';
import { externalLinkProps } from '@/lib/utils';
import type { Reel } from '@/types';

type ReelModalProps = {
  reel: Reel | null;
  onClose: () => void;
};

type LoadState = 'loading' | 'loaded' | 'failed';

/**
 * Instagram embeds are cross-origin and may be blocked by privacy settings,
 * extensions, or Instagram itself. Always keep an obvious original-link fallback.
 */
export function ReelModal({ reel, onClose }: ReelModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<LoadState>('loading');
  const [showFallback, setShowFallback] = useState(false);
  const open = reel !== null;
  const reelId = reel?.id ?? null;
  useScrollLock(open);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setState('loading');
      setShowFallback(false);
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open, reelId]);

  useEffect(() => {
    if (!open || state !== 'loading') return;
    const timer = window.setTimeout(() => setShowFallback(true), reelsContent.embedTimeoutMs);
    return () => window.clearTimeout(timer);
  }, [open, state, reelId]);

  const titleId = 'reel-dialog-title';
  const descId = 'reel-dialog-desc';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        if (open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[100dvh] w-[min(94vw,460px)] overflow-visible bg-transparent p-0 text-ink open:flex"
    >
      {reel ? (
        <div className="flex max-h-[96dvh] w-full min-w-0 flex-col rounded-3xl border border-navy-700 bg-navy-900 p-3 shadow-2xl shadow-black/50 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 id={titleId} className="min-w-0 text-base font-semibold tracking-tight text-ink">{reel.title}</h2>
            <button type="button" onClick={onClose} aria-label="Close preview" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-700 bg-navy-950 text-ink transition-colors hover:border-aqua/60">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative mx-auto aspect-[9/16] w-full max-w-full shrink overflow-hidden rounded-2xl border border-navy-700 bg-navy-950"
            style={{ maxHeight: 'min(68dvh, 680px)', maxWidth: 'calc(min(68dvh, 680px) * 9 / 16)' }}
          >
            {state !== 'failed' ? (
              <iframe
                key={reel.id}
                src={getReelEmbedUrl(reel.id)}
                title={`Instagram ${reel.title} by Creative Kirat`}
                loading="eager"
                allow="encrypted-media; picture-in-picture; clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0 bg-white"
                onLoad={() => {
                  setState('loaded');
                  setShowFallback(false);
                }}
                onError={() => {
                  setState('failed');
                  setShowFallback(true);
                }}
              />
            ) : null}

            {(state === 'loading' || state === 'failed') ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-950 p-5 text-center" role={state === 'failed' ? 'alert' : 'status'}>
                <AlertCircle className="h-7 w-7 text-aqua" aria-hidden="true" />
                <p className="text-sm text-mist">{state === 'failed' ? reelsContent.modal.failed : (showFallback ? 'Instagram preview is taking too long.' : reelsContent.modal.loading)}</p>
                {showFallback || state === 'failed' ? (
                  <a href={reel.url} {...externalLinkProps} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-[#2563EB] px-5 text-sm font-semibold text-white">
                    Open Reel on Instagram <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <p id={descId} className="sr-only">Preview of {reel.title} from Instagram. Use the link below to watch the original Reel.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a href={reel.url} {...externalLinkProps} className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-[#2563EB] px-5 text-sm font-semibold text-white">
              {reelsContent.modal.originalLink}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button type="button" onClick={onClose} className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-navy-700 bg-navy-950 px-5 text-sm font-semibold text-ink hover:border-aqua/60">
              {reelsContent.modal.close}
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
