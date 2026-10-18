import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { activeSocials, navItems, siteConfig } from '@/config/site';
import { externalLinkProps } from '@/lib/utils';

const icons = { instagram: Instagram, linkedin: Linkedin } as const;

export function Footer() {
  const year = new Date().getFullYear();
  const footerSocials = activeSocials.filter((s) => s.key === 'instagram' || s.key === 'linkedin');

  return (
    <footer className="relative isolate overflow-hidden border-t border-navy-700/70 bg-navy-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -bottom-36 left-1/4 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />
      </div>
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 border-b border-navy-700/70 pb-10 md:grid-cols-[1.2fr_1fr_0.8fr] md:gap-8 lg:pb-12">
          <div className="max-w-sm">
            <p className="text-xl font-bold tracking-tight text-ink">Creative<span className="text-electric">Kirat</span></p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-mist">{siteConfig.footerTagline}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Strategy · Search · Storytelling</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink">Explore</p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="group inline-flex min-h-[40px] items-center gap-1.5 text-sm text-mist transition-colors hover:text-ink">
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink">Let’s connect</p>
            <p className="max-w-xs text-sm leading-6 text-mist">Follow my latest SEO insights, projects, and creative experiments.</p>
            <ul className="mt-4 flex gap-3" aria-label="Social profiles">
              {footerSocials.map((s) => {
                const Icon = icons[s.key as keyof typeof icons];
                return (
                  <li key={s.key}>
                    <a href={s.url} {...externalLinkProps} aria-label={`${siteConfig.name} on ${s.label} (opens in a new tab)`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-700 bg-navy-900/80 text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua/60 hover:text-ink">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <a href="#home" className="inline-flex min-h-[40px] items-center gap-2 self-start font-medium text-mist transition-colors hover:text-aqua sm:self-auto">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
