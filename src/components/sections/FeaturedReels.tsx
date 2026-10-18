import { Instagram } from 'lucide-react';
import { ReelsGrid } from '@/components/reels/ReelsGrid';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { reelsContent } from '@/config/content';
import { reels } from '@/config/reels';
import { withResolvedThumbnails } from '@/lib/reel-thumbnails';

export function FeaturedReels() {
  // Resolved on the server at build time; no thumbnails are fabricated.
  const resolved = withResolvedThumbnails(reels);

  return (
    <section id="reels" aria-labelledby="reels-heading" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="ambient-blob animate-drift-a -left-40 top-1/3 h-[24rem] w-[24rem] bg-aqua !opacity-[0.1]" />
      <Container className="relative">
        <SectionHeading
          id="reels-heading"
          eyebrow={reelsContent.eyebrow}
          title={reelsContent.heading}
          intro={reelsContent.subtitle}
          align="center"
        />
        <ReelsGrid reels={resolved} />
        <Reveal className="mt-12 flex justify-center">
          <LinkButton
            href={reelsContent.viewAll.href}
            external
            variant="primary"
            aria-label={`${reelsContent.viewAll.label} (opens in a new tab)`}
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            {reelsContent.viewAll.label}
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
