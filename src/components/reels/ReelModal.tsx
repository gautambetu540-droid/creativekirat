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
 * Accessible native <dialog> (showModal gives focus trapping, inert background
 * and Escape-to-close). The Instagram iframe is mounted only while open.
 */
export function ReelModal({ reel, onClose }: ReelModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<LoadState>('loading');
  const open = reel !== null;
  const reelId = reel?.id ?? null;
  useScrollLock(open);

  // Open / close the native dialog in sync with state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setState('loading');
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Fallback if the embed hasn't loaded within the timeout.
  useEffect(() => {
    if (!open || state !== 'loading') return;
    const t = window.setTimeout(() => setState((s) => (s === 'loading' ? 'failed' : s)), reelsContent.embedTimeoutMs);
    return () => window.clearTimeout(t);
  }, [open, state, reelId]);

  const titleId = 'reel-dialog-title';
  const descId = 'reel-dialog-desc';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-modal="true"
      onCancel={(e) => {
        // Escape key
        e.preventDefault();
        onClose();
      }}
      onClose={() => {
        // Native close (e.g. browser force-closing on repeated Escape): keep state in sync.
        if (open) onClose();
      }}
      onClick={(e) => {
        // Backdrop click: the click target is the dialog element itself.
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-[100dvh] w-[min(94vw,460px)] overflow-visible bg-transparent p-0 text-ink open:flex"
    >
      {reel ? (
        <div className="flex max-h-[96dvh] w-full min-w-0 flex-col rounded-3xl border border-navy-700 bg-navy-900 p-3 shadow-2xl shadow-black/50 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 id={titleId} className="text-base font-semibold tracking-tight text-ink">
              {reel.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={`${reelsContent.modal.close} preview`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-950 text-ink transition-colors hover:border-aqua/60"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* 9:16 reserved player area; height-capped so it fits short viewports */}
          <div
            className="relative mx-auto aspect-[9/16] w-full max-w-full shrink overflow-hidden rounded-2xl border border-navy-700 bg-navy-950"
            style={{ maxHeight: 'min(68dvh, 680px)', maxWidth: 'calc(min(68dvh, 680px) * 9 / 16)' }}
          >
            {state !== 'failed' ? (
              <iframe
                key={reel.id}
                src={getReelEmbedUrl(reel.id)}
                title={`Instagram ${reel.title} by Creative Kirat`}
                loading="lazy"
                allow="encrypted-media; picture-in-picture; clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0 bg-white"
                onLoad={() => setState('loaded')}
                onError={() => setState('failed')}
              />
            ) : null}

            {state === 'loading' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-950" role="status">
                <div className="relative h-2 w-32 overflow-hidden rounded-full bg-navy-800">
                  <span className="animate-shimmer absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-aqua/60 to-transparent" />
                </div>
                <p className="text-sm text-mist">{reelsContent.modal.loading}</p>
              </div>
            ) : null}

            {state === 'failed' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center" role="alert">
                <AlertCircle className="h-8 w-8 text-aqua" aria-hidden="true" />
                <p className="text-sm text-mist">{reelsContent.modal.failed}</p>
              </div>
            ) : null}
          </div>

          <p id={descId} className="sr-only">
            Preview of {reel.title} from Instagram. Use the link below to watch the original Reel.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href={reel.url}
              {...externalLinkProps}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-[#2563EB] px-5 text-sm font-semibold text-white"
            >
              {reelsContent.modal.originalLink}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-navy-700 bg-navy-950 px-5 text-sm font-semibold text-ink hover:border-aqua/60"
            >
              {reelsContent.modal.close}
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
