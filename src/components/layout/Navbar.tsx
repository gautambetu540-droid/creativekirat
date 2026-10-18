'use client';

import { m } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/layout/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { navCta, navItems } from '@/config/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

const SECTION_IDS = navItems.map((n) => n.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS, 'home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-navy-700/70 bg-navy-950/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-nav w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Logo showMark={false} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative isolate inline-flex min-h-[44px] items-center rounded-full px-3.5 text-sm font-medium transition-colors duration-200',
                      isActive ? 'text-ink' : 'text-mist hover:text-ink',
                    )}
                  >
                    {isActive ? (
                      <m.span
                        layoutId="nav-pill"
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-1.5 -z-10 rounded-full border border-navy-700 bg-navy-800/80"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={navCta.href}
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-to-r from-electric to-[#2563EB] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(59,130,246,0.7)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            {navCta.label}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-900/70 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
    {/* Rendered outside <header>: backdrop-filter would otherwise trap the fixed overlay. */}
    <MobileMenu open={open} onClose={() => setOpen(false)} active={active} />
    </>
  );
}
