import { ArrowUpRight, Instagram, Linkedin, UserRound } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { socialContent } from '@/config/content';
import { activeSocials } from '@/config/site';
import { externalLinkProps } from '@/lib/utils';

const icons = { instagram: Instagram, linkedin: Linkedin, unstop: UserRound } as const;

export function Social() {
  if (activeSocials.length === 0) return null;
  return (
    <section aria-labelledby="social-heading" className="relative py-20 md:py-24">
      <Container>
        <SectionHeading
          id="social-heading"
          eyebrow={socialContent.eyebrow}
          title={socialContent.heading}
          intro={socialContent.intro}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {activeSocials.map((s, i) => {
            const Icon = icons[s.key];
            return (
              <Reveal as="li" key={s.key} delay={0.08 * i}>
                <a
                  href={s.url}
                  {...externalLinkProps}
                  aria-label={`Visit ${s.handle} on ${s.label} (opens in a new tab)`}
                  className="card-surface glow-border group flex items-center gap-5 rounded-2xl p-6 transition-colors duration-300 hover:bg-navy-800 md:p-7"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/25 to-aqua/10 text-ink ring-1 ring-inset ring-navy-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-aqua">{s.label}</span>
                    <span className="mt-1 block truncate text-lg font-semibold text-ink">{s.handle}</span>
                    <span className="mt-1 block text-sm text-mist">{s.description}</span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-mist transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
