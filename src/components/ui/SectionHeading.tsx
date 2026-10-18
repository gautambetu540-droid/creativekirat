import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, intro, align = 'left', className }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-aqua',
          )}
        >
          <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-electric to-aqua" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-section text-ink">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-base text-mist md:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
