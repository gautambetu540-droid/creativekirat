'use client';

import { AnimatePresence, m } from 'framer-motion';
import { X } from 'lucide-react';
import { useRef, type MouseEvent } from 'react';
import { Logo } from '@/components/layout/Logo';
import { navCta, navItems } from '@/config/site';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useScrollLock } from '@/hooks/useScrollLock';
import { EASE_OUT, cn } from '@/lib/utils';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  active: string;
};

export function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  /** Close first (releases scroll lock), then scroll to the target section. */
  const go = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onClose();
    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      target.scrollIntoView({ block: 'start' });
      history.replaceState(null, '', hash);
    }, 60);
  };

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          key="mobile-menu"
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          tabIndex={-1}
          className="fixed inset-0 z-[60] flex flex-col bg-navy-950/95 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
        >
          <div className="flex h-nav items-center justify-between px-5 sm:px-8">
            <Logo showMark={false} onClick={onClose} label="Creative Kirat — back to top" />
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-ink"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10 pt-4 sm:px-8">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.04 * i }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => go(e, `#${item.id}`)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={cn(
                      'flex min-h-[52px] items-center justify-between rounded-xl border-b border-navy-700/60 px-2 text-2xl font-semibold tracking-tight',
                      active === item.id ? 'text-aqua' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </m.li>
              ))}
            </ul>
            <a
              href={navCta.href}
              onClick={(e) => go(e, navCta.href)}
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-electric to-[#2563EB] px-6 font-semibold text-white"
            >
              {navCta.label}
            </a>
          </nav>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
