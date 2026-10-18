import { ArrowUpRight, FolderKanban } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsContent } from '@/config/content';
import { projects } from '@/config/projects';
import { externalLinkProps } from '@/lib/utils';

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-navy-900 py-20 md:py-28"
    >
      <div aria-hidden="true" className="ambient-blob animate-drift-b -right-40 top-10 h-[26rem] w-[26rem] bg-electric !opacity-[0.12]" />
      <Container className="relative">
        <SectionHeading
          id="projects-heading"
          eyebrow={projectsContent.eyebrow}
          title={projectsContent.heading}
          intro={projectsContent.intro}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const initials = project.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
            return (
              <Reveal as="li" key={project.name} delay={0.06 * (i % 3)}>
                <GlowCard className="flex h-full min-h-[15rem] flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-700 bg-gradient-to-br from-navy-950 to-navy-800 text-lg font-bold tracking-tight text-ink"
                    >
                      {initials}
                    </span>
                    <FolderKanban className="h-5 w-5 text-navy-700 transition-colors duration-300 group-hover:text-aqua" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 break-words text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-aqua">{project.category}</p>
                  {project.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-mist">{project.description}</p>
                  ) : null}
                  {project.tags.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} tags`}>
                      {project.tags.map((t) => (
                        <li key={t} className="rounded-full border border-navy-700 px-3 py-1 text-xs text-mist">
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {project.url ? (
                    <a
                      href={project.url}
                      {...externalLinkProps}
                      aria-label={`${projectsContent.visitLabel}: ${project.name} (opens in a new tab)`}
                      className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-6 text-sm font-semibold text-ink hover:text-aqua"
                    >
                      {projectsContent.visitLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </GlowCard>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
