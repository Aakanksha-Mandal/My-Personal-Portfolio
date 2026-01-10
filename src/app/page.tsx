import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { Skills } from '@/components/skills';
import { portfolioData } from '@/lib/data';

export default function Home() {
  const { personalInfo, experience, projects, education, skills } = portfolioData;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-12 md:px-6 lg:px-8 animate-fade-in">
        <Hero personalInfo={personalInfo} />
        
        <div id="experience" className="my-20 md:my-28 scroll-mt-20">
          <Experience experience={experience} />
        </div>

        <div id="education" className="my-20 md:my-28 scroll-mt-20">
          <Education education={education} />
        </div>

        <div id="skills" className="my-20 md:my-28 scroll-mt-20">
          <Skills skills={skills} />
        </div>
        
        <div id="projects" className="my-20 md:my-28 scroll-mt-20">
          <Projects projects={projects} />
        </div>
        
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
