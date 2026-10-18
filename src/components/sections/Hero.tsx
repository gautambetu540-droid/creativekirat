import { ArrowRight, ChevronDown, Link2, Search, Sparkles, Tag } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroFade, HeroHeadline } from '@/components/sections/HeroMotion';
import { heroContent } from '@/config/content';

export function Hero() {
  const { label, headline, supporting, primaryCta, secondaryCta, decor, scrollLabel } = heroContent;

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-[calc(var(--nav-height)+3rem)]"
    >
      {/* Background: grid with radial mask + ambient light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        <div className="ambient-blob animate-drift-a left-[-10%] top-[5%] h-[28rem] w-[28rem] bg-electric" />
        <div className="ambient-blob animate-drift-b right-[-8%] top-[30%] h-[24rem] w-[24rem] bg-aqua !opacity-[0.14]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      {/* Decorative floating SEO elements (desktop only) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block">
        <div className="animate-float absolute right-[6%] top-[22%] w-72 rounded-2xl border border-navy-700 bg-navy-900/80 p-3 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="flex items-center gap-2 rounded-xl border border-navy-700 bg-navy-950/80 px-3 py-2.5">
            <Search className="h-4 w-4 text-aqua" />
            <span className="text-sm text-mist">{decor.searchQuery}</span>
            <span className="ml-auto h-4 w-px animate-pulse bg-aqua" />
          </div>
          <div className="mt-3 space-y-2 px-1">
            <div className="h-2 w-4/5 rounded-full bg-navy-700" />
            <div className="h-2 w-3/5 rounded-full bg-navy-700/70" />
          </div>
        </div>

        <div className="animate-float-slow absolute right-[22%] top-[58%] flex flex-wrap gap-2">
          {decor.keywordChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-full border border-navy-700 bg-navy-900/80 px-3 py-1.5 text-xs text-mist"
            >
              <Tag className="h-3 w-3 text-electric" />
              {chip}
            </span>
          ))}
        </div>

        <div className="animate-float-slow absolute right-[5%] top-[66%] flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-700 bg-navy-900/80">
          <Link2 className="h-6 w-6 text-aqua" />
        </div>
        <div className="animate-float absolute right-[38%] top-[16%] flex h-12 w-12 items-center justify-center rounded-full border border-navy-700 bg-navy-900/80">
          <Search className="h-5 w-5 text-electric" />
        </div>
      </div>

      <Container>
        <div className="max-w-4xl lg:max-w-[52rem]">
          <HeroFade>
            <p className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-aqua sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </p>
          </HeroFade>

          <HeroHeadline id="home-heading" text={headline} className="text-hero mt-7 text-ink" />

          <HeroFade delay={0.35}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{supporting}</p>
          </HeroFade>

          <HeroFade delay={0.45} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={primaryCta.href} variant="primary">
              {primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </LinkButton>
            <LinkButton href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </LinkButton>
          </HeroFade>
        </div>
      </Container>

      <a
        href="#about"
        aria-label={scrollLabel}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist transition-colors hover:text-ink sm:flex"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-navy-700 pt-2">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-aqua" />
        </span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
