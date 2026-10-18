import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processContent } from '@/config/content';

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow={processContent.eyebrow}
          title={processContent.heading}
          intro={processContent.intro}
        />
        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-8 right-8 top-[2.35rem] hidden h-px bg-gradient-to-r from-electric/0 via-navy-700 to-aqua/0 lg:block"
          />
          {processContent.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.1 * i} className="relative">
              <div className="card-surface h-full rounded-2xl p-6 md:p-7">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy-700 bg-navy-950 text-sm font-bold text-aqua shadow-[0_0_0_6px_#081B33]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
