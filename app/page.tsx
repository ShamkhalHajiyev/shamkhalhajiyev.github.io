import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreExpertise from '@/components/CoreExpertise';
import Contact from '@/components/Contact';

/**
 * Home page - Main landing page with all sections
 * Combines Hero, About, Core Expertise, and Contact sections
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreExpertise />
      <Contact />
    </>
  );
}
