'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in the reading zone of the viewport.
 * Uses IntersectionObserver with a narrow band slightly below the navbar.
 */
export function useActiveSection(ids: readonly string[], initial?: string) {
  const [active, setActive] = useState<string>(initial ?? ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        });
        if (visible.size > 0) {
          // Pick the section appearing first in document order among those in the band.
          const next = ids.find((id) => visible.has(id));
          if (next) setActive(next);
        }
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
