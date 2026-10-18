import { Container } from '@/components/ui/Container';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { expertiseContent } from '@/config/content';

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative overflow-hidden bg-navy-900 py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)]" />
      </div>
      <Container className="relative">
        <SectionHeading
          id="expertise-heading"
          eyebrow={expertiseContent.eyebrow}
          title={expertiseContent.heading}
          intro={expertiseContent.intro}
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {expertiseContent.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={0.04 * (i % 4)}>
                <GlowCard as="div" tilt className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-aqua/10 text-aqua ring-1 ring-inset ring-navy-700 transition-colors duration-300 group-hover:text-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-ink md:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.description}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
