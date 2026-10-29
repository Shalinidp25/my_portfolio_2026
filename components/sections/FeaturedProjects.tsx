'use client';

import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-8 relative bg-black/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Featured Projects" subtitle="A selection of my best work across web and desktop." />
        </ScrollReveal>

        <div className="flex flex-col gap-20 mt-16 max-w-7xl mx-auto">
          {['Live Projects', 'UG Final Year Academic  Project', 'Practice Projects'].map((category) => {
            const categoryProjects = projects.filter(p => p.category === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="space-y-8">
                <ScrollReveal>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                    <div className="h-px bg-white/10 flex-grow"></div>
                  </div>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects.map((project, idx) => (
                    <ScrollReveal key={project.id} direction="up" delay={0.1 * (idx + 1)}>
                      <ProjectCard project={project} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
