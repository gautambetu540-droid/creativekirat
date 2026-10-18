import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Expertise } from '@/components/sections/Expertise';
import { FeaturedReels } from '@/components/sections/FeaturedReels';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Projects } from '@/components/sections/Projects';
import { Social } from '@/components/sections/Social';

// Fully static page (generated at build time).
export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <FeaturedReels />
      <Social />
      <Process />
      <Contact />
    </>
  );
}
