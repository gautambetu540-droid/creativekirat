import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  href?: string;
  /** Accessible label for the home link */
  label?: string;
  onClick?: () => void;
};

/** Text logo: "Creative" in white + "Kirat" in electric blue. */
export function Logo({ className, href = '#home', label = `${siteConfig.name} — back to top`, onClick }: LogoProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={label}
      className={cn('inline-flex min-h-[44px] items-center text-xl font-bold tracking-tight md:text-[1.35rem]', className)}
    >
      <span className="text-ink">{siteConfig.logo.first}</span>
      <span className="text-electric">{siteConfig.logo.second}</span>
    </a>
  );
}
