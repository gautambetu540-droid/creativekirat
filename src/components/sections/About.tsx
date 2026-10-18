import { Container } from '@/components/ui/Container';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutContent } from '@/config/content';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <SectionHeading id="about-heading" eyebrow={aboutContent.eyebrow} title={aboutContent.heading} />
            <div className="mt-8 space-y-5">
              {aboutContent.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.06 * i}>
                  <p className="text-base leading-[1.75] text-mist md:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {aboutContent.focus.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.title} delay={0.08 * i}>
                  <GlowCard as="div" className="h-full">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-700 bg-navy-950/70 text-aqua">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.description}</p>
                  </GlowCard>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
