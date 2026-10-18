import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroFade, HeroHeadline } from '@/components/sections/HeroMotion';
import { heroContent } from '@/config/content';

export function Hero() {
  const { label, headline, supporting, primaryCta, secondaryCta, scrollLabel } = heroContent;

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex items-start overflow-hidden bg-navy-950 pb-10 pt-[calc(var(--nav-height)+1.5rem)] sm:min-h-[88svh] sm:items-center sm:pb-24 sm:pt-[calc(var(--nav-height)+3rem)] lg:min-h-[min(850px,100svh)]"
    >
      {/* Portrait background is shown on tablet/desktop only; mobile stays text-first. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-no-repeat sm:block sm:bg-[url('/kirat-singh-dang-seo-portfolio-hero.webp.png')] sm:bg-cover sm:bg-[position:60%_center]"
      />

      {/* Mobile ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_50%_55%,rgba(59,130,246,0.22)_0%,transparent_65%)] sm:hidden"
      />

      {/* Desktop/tablet overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] hidden sm:block sm:bg-gradient-to-r sm:from-[#061426] sm:via-[#061426]/95 sm:to-[#061426]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] hidden bg-gradient-to-t from-[#061426] via-transparent to-[#061426]/15 sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] hidden bg-[radial-gradient(ellipse_at_75%_45%,transparent_10%,rgba(6,20,38,0.12)_72%)] sm:block"
      />

      <Container className="relative z-10 w-full">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center sm:mx-0 sm:items-start sm:text-left lg:max-w-[48%]">
          <HeroFade>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.08em] text-aqua shadow-lg backdrop-blur-md sm:px-4 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </p>
          </HeroFade>

          <HeroHeadline
            id="home-heading"
            text={headline}
            className="text-hero mx-auto mt-5 max-w-[14ch] text-center text-ink drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)] sm:mx-0 sm:mt-7 sm:max-w-none sm:text-left"
          />

          <HeroFade delay={0.35}>
            <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-slate-200 sm:mx-0 sm:mt-7 sm:max-w-xl sm:text-base md:text-lg">
              {supporting}
            </p>
          </HeroFade>

          {/* CTA: glass card on mobile, plain row on larger screens */}
          <HeroFade
            delay={0.45}
            className="mt-6 w-full rounded-2xl border border-white/15 bg-white/[0.04] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:mt-10 sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <LinkButton href={primaryCta.href} variant="secondary" className="w-full sm:w-auto">
                {primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </LinkButton>
              <LinkButton href={secondaryCta.href} variant="primary" className="w-full sm:w-auto">
                {secondaryCta.label}
              </LinkButton>
            </div>
          </HeroFade>
        </div>
      </Container>

      <a
        href="#about"
        aria-label={scrollLabel}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-slate-200/90 transition-colors hover:text-white sm:flex"
      >
        <span className="flex h-12 w-8 justify-center rounded-full border border-white/50 bg-navy-950/50 pt-2.5 shadow-[0_0_22px_rgba(34,211,238,0.14)] backdrop-blur-sm">
          <span className="animate-scroll-dot h-2.5 w-1.5 rounded-full bg-aqua" />
        </span>
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
