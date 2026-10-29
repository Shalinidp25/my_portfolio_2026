'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Promoted from Software Developer Intern to Software Developer I and later to Software Engineer II',
  'Expertise in React, Next.js, TypeScript, Tailwind CSS, and Redux Toolkit',
  'Built production-grade web and Electron desktop applications with modern frontend architecture',
  'Focused on scalable systems, reusable components, performance optimization, and exceptional user experiences',
];

export function AboutMe() {
  return (
    <section id="about" className="py-8 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Who Am I?" subtitle="A brief look into my journey and specialization." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2}>
            <GlassPanel className="p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  My journey began as a Frontend Intern, where my passion for building intuitive user interfaces quickly accelerated my growth. Within my first year at Sumisa Technologies, I was promoted to <strong className="text-white font-semibold">Software Engineer II</strong>.
                </p>
                <p>
                  I specialize in the modern web stack—leveraging <strong className="text-white font-semibold">React, Next.js, TypeScript, Redux, and Tailwind CSS</strong> to build highly performant applications.
                </p>
                <p>
                  Beyond the web, I have deep experience building cross-platform desktop applications using <strong className="text-white font-semibold">Electron.js</strong> and <strong className="text-white font-semibold">SQLite</strong>, bridging the gap between web technologies and native performance.
                </p>
              </div>
            </GlassPanel>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Focus Areas</h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
