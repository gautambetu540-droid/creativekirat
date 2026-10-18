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
      className="relative isolate flex min-h-[790px] items-start overflow-hidden bg-navy-950 pb-64 pt-[calc(var(--nav-height)+2rem)] sm:min-h-[88svh] sm:items-center sm:pb-24 sm:pt-[calc(var(--nav-height)+3rem)] lg:min-h-[min(850px,100svh)]"
    >
      {/* Kirat's supplied portrait is the hero visual; keep the face on the right and text on the left. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/kirat-singh-dang-seo-portfolio-hero.webp.png')] bg-no-repeat bg-[length:auto_44%] bg-[position:78%_bottom] sm:bg-cover sm:bg-[position:60%_center]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-[linear-gradient(180deg,#061426_0%,rgba(6,20,38,0.98)_44%,rgba(6,20,38,0.42)_72%,#061426_100%)] sm:bg-gradient-to-r sm:from-[#061426] sm:via-[#061426]/95 sm:to-[#061426]/10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-t from-[#061426] via-transparent to-[#061426]/15" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_75%_45%,transparent_10%,rgba(6,20,38,0.12)_72%)]" />

      <Container className="relative z-10 w-full">
        <div className="max-w-2xl sm:max-w-2xl lg:max-w-[48%]">
          <HeroFade>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-aqua shadow-lg backdrop-blur-md sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </p>
          </HeroFade>

          <HeroHeadline id="home-heading" text={headline} className="text-hero mt-6 max-w-[12ch] text-ink drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)] sm:mt-7 sm:max-w-none" />

          <HeroFade delay={0.35}>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-slate-200 sm:mt-7 sm:text-base md:text-lg">{supporting}</p>
          </HeroFade>

          <HeroFade delay={0.45} className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center">
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
