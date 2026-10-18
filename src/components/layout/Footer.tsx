import { Instagram, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/layout/Logo';
import { activeSocials, navItems, siteConfig } from '@/config/site';
import { externalLinkProps } from '@/lib/utils';

const icons = { instagram: Instagram, linkedin: Linkedin } as const;

export function Footer() {
  // Evaluated at build time for the statically generated page.
  const year = new Date().getFullYear();
  const footerSocials = activeSocials.filter((s) => s.key === 'instagram' || s.key === 'linkedin');

  return (
    <footer className="relative border-t border-navy-700/70 bg-navy-950">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-mist">{siteConfig.footerTagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-[44px] items-center text-sm text-mist transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3" aria-label="Social profiles">
            {footerSocials.map((s) => {
              const Icon = icons[s.key as keyof typeof icons];
              return (
                <li key={s.key}>
                  <a
                    href={s.url}
                    {...externalLinkProps}
                    aria-label={`${siteConfig.name} on ${s.label} (opens in a new tab)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-mist transition-colors hover:border-aqua/60 hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 border-t border-navy-700/60 pt-6 text-sm text-mist">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
