import { Fragment, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/*
 * Hero reveal is done with CSS keyframes (see globals.css → .hero-reveal), so
 * the LCP text paints without waiting for JavaScript/hydration. Reduced motion
 * disables the animation and shows content instantly.
 */

type HeroHeadlineProps = { text: string; className?: string; id?: string };

/** Staggered word reveal. Real spaces between words keep the text intact for SEO. */
export function HeroHeadline({ text, className, id }: HeroHeadlineProps) {
  const words = text.split(' ');
  return (
    <h1 id={id} className={className}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="hero-reveal inline-block" style={{ '--d': `${60 * i}ms` } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </h1>
  );
}

type HeroFadeProps = { children: ReactNode; delay?: number; className?: string };

/** Fade-up for hero supporting blocks. `delay` in seconds. */
export function HeroFade({ children, delay = 0, className }: HeroFadeProps) {
  return (
    <div className={cn('hero-reveal', className)} style={{ '--d': `${delay * 1000}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
