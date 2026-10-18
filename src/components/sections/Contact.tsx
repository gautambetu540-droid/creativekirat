import { Instagram, Linkedin, Mail } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CopyEmailButton } from '@/components/sections/CopyEmailButton';
import { contactContent } from '@/config/content';
import { getSocial, siteConfig } from '@/config/site';

export function Contact() {
  const linkedin = getSocial('linkedin');
  const instagram = getSocial('instagram');

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-40" />
        <div className="ambient-blob animate-drift-a left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-electric !opacity-[0.16]" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-electric to-aqua" />
            {contactContent.eyebrow}
            <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-aqua to-electric" />
          </p>
          <h2 id="contact-heading" className="text-section text-gradient">
            {contactContent.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-mist md:text-lg">{contactContent.text}</p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <LinkButton href={`mailto:${siteConfig.email}`} variant="primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactContent.emailLabel}
            </LinkButton>
            {linkedin ? (
              <LinkButton
                href={linkedin.url}
                external
                variant="secondary"
                aria-label={`${contactContent.linkedinLabel} (opens in a new tab)`}
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {contactContent.linkedinLabel}
              </LinkButton>
            ) : null}
            {instagram ? (
              <LinkButton
                href={instagram.url}
                external
                variant="secondary"
                aria-label={`${contactContent.instagramLabel} (opens in a new tab)`}
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {contactContent.instagramLabel}
              </LinkButton>
            ) : null}
          </div>

          <div className="mt-8">
            <CopyEmailButton
              email={siteConfig.email}
              label={contactContent.copyLabel}
              copiedMessage={contactContent.copiedMessage}
              failedMessage={contactContent.copyFailedMessage}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
