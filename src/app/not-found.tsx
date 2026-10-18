import type { Metadata } from 'next';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { notFoundContent } from '@/config/content';

export const metadata: Metadata = {
  title: notFoundContent.heading,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="relative flex min-h-[80svh] items-center pt-[var(--nav-height)]"
    >
      <div aria-hidden="true" className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua">404</p>
        <h1 id="notfound-heading" className="text-section mt-4 text-ink">
          {notFoundContent.heading}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-mist">{notFoundContent.text}</p>
        <div className="mt-10 flex justify-center">
          <LinkButton href="/#home">{notFoundContent.cta}</LinkButton>
        </div>
      </Container>
    </section>
  );
}
