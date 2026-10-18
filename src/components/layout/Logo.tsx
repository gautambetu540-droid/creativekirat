import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  href?: string;
  /** Accessible label for the home link */
  label?: string;
  onClick?: () => void;
  /** Hide the image mark in the primary site header while keeping the wordmark. */
  showMark?: boolean;
};

/** Brand mark and wordmark for Creative Kirat. */
export function Logo({ className, href = '#home', label = `${siteConfig.name} — back to top`, onClick, showMark = true }: LogoProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={label}
      className={cn('group inline-flex min-h-[44px] items-center gap-2.5 text-xl font-bold tracking-tight md:text-[1.35rem]', className)}
    >
      {showMark ? <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-navy-700 bg-navy-900 shadow-[0_6px_24px_-12px_rgba(34,211,238,0.75)] transition-transform duration-300 group-hover:scale-[1.04]">
        <span aria-hidden="true" className="text-sm font-black text-aqua">CK</span>
      </span> : null}
      <span className="whitespace-nowrap">
        <span className="text-ink">{siteConfig.logo.first}</span>
        <span className="text-electric">{siteConfig.logo.second}</span>
      </span>
    </a>
  );
}
