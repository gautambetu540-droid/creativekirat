import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineTrack } from '@/components/sections/TimelineLine';
import { experienceContent } from '@/config/content';
import { experience } from '@/config/experience';
import type { Experience as ExperienceItem } from '@/types';

function formatDates(item: ExperienceItem): string {
  if (item.dateLabel) return item.dateLabel;
  return `${item.start} – ${item.end ?? experienceContent.dateNotSpecified}`;
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="experience-heading"
              eyebrow={experienceContent.eyebrow}
              title={experienceContent.heading}
              intro={experienceContent.intro}
            />
          </div>

          <TimelineTrack>
            <ol className="space-y-10">
              {experience.map((item, i) => (
                <Reveal as="li" key={`${item.company}-${item.role}`} delay={0.1 * i} className="relative pl-12 md:pl-16">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-navy-700 bg-navy-900 text-aqua shadow-[0_0_0_6px_#061426] md:h-10 md:w-10"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <article className="card-surface rounded-2xl p-6 md:p-7">
                    <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-aqua">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDates(item)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {item.role} <span className="text-mist">— {item.company}</span>
                    </h3>
                    <ul className="mt-5 grid grid-cols-1 gap-3">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3 text-sm leading-relaxed text-mist md:text-base">
                          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ol>
          </TimelineTrack>
        </div>
      </Container>
    </section>
  );
}
