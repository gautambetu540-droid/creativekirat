'use client';

import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab focus inside `ref` while `active`, closes on Escape, and returns
 * focus to the previously focused element on deactivate.
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement>,
  active: boolean,
  onEscape?: () => void,
) {
  const escapeRef = useRef(onEscape);
  escapeRef.current = onEscape;

  useEffect(() => {
    if (!active) return;
    const container = ref.current;
    if (!container) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true' && el.offsetParent !== null,
      );

    // Initial focus
    const first = container.querySelector<HTMLElement>('[data-autofocus]') ?? getFocusable()[0];
    (first ?? container).focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        escapeRef.current?.();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = getFocusable();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey && (current === firstEl || !container.contains(current))) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && (current === lastEl || !container.contains(current))) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [active, ref]);
}
