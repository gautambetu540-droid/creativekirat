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
      className="relative isolate flex min-h-[min(850px,100svh)] items-center overflow-hidden bg-navy-950 pb-24 pt-[calc(var(--nav-height)+3rem)] sm:min-h-[88svh] lg:min-h-[min(850px,100svh)]"
    >
      {/* Kirat's supplied portrait is the hero visual; keep the face on the right and text on the left. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/kirat-singh-dang-seo-portfolio-hero.webp.png')] bg-cover bg-[position:62%_center] sm:bg-[position:60%_center]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-r from-[#061426] via-[#061426]/95 to-[#061426]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-t from-[#061426]/95 via-transparent to-[#061426]/20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_75%_45%,transparent_10%,rgba(6,20,38,0.12)_72%)]" />

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-[48%]">
          <HeroFade>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-aqua shadow-lg backdrop-blur-md sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </p>
          </HeroFade>

          <HeroHeadline id="home-heading" text={headline} className="text-hero mt-7 text-ink drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]" />

          <HeroFade delay={0.35}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">{supporting}</p>
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
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist transition-colors hover:text-ink sm:flex"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/25 bg-navy-950/30 pt-2 backdrop-blur-sm">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-aqua" />
        </span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>

      <style jsx>{`
        @media (max-width: 639px) {
          #home > div[aria-hidden="true"]:first-of-type {
            background-position: 66% center;
          }
          #home > div[aria-hidden="true"]:nth-of-type(2) {
            background-image: linear-gradient(90deg, rgba(6, 20, 38, 0.96) 0%, rgba(6, 20, 38, 0.86) 48%, rgba(6, 20, 38, 0.35) 100%);
          }
        }
      `}</style>
    </section>
  );
}
