import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import GitHubStats from '@/components/sections/GitHubStats';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import BackgroundEffects from '@/components/BackgroundEffects';
import CursorFollower from '@/components/CursorFollower';

export default function Home() {
  return (
    <main className="relative">
      <CursorFollower />
      <BackgroundEffects />

      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Education />
        <Experience />
        <GitHubStats />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
