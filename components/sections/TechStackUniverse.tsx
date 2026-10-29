'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { OrbitNode } from '@/components/shared/OrbitNode';
import type { OrbitTech } from '@/types';
import { profile } from '@/data/profile';

const orbitTechs: OrbitTech[] = [
  { name: 'JavaScript', icon: '', color: '#F7DF1E', radius: 120, duration: 15 },
  { name: 'React', icon: '', color: '#61DAFB', radius: 120, duration: 15 },
  { name: 'Next.js', icon: '', color: '#ffffff', radius: 180, duration: 25 },
  { name: 'TypeScript', icon: '', color: '#3178C6', radius: 120, duration: 20 },
  { name: 'Tailwind', icon: '', color: '#06B6D4', radius: 240, duration: 30 },
  { name: 'Electron', icon: '', color: '#47848F', radius: 180, duration: 22 },
  { name: 'Redux', icon: '', color: '#764ABC', radius: 240, duration: 35 },
  { name: 'SQLite', icon: '', color: '#003B57', radius: 150, duration: 18 },
  { name: 'Git', icon: '', color: '#F05032', radius: 210, duration: 28 },
  { name: 'GitHUb', icon:'', color: '#2563EB', radius:150, duration:10}
];

export function TechStackUniverse() {
  return (
    <section className="py-8 relative overflow-hidden bg-black/60">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Tech Stack Universe" subtitle="The tools orbiting my development workflow." />
        </ScrollReveal>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-12 md:mt-24">
          
          {/* Central Node */}
          <ScrollReveal delay={0.2} className="relative z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_50px_rgba(124,58,237,0.4)] backdrop-blur-md">
              <span className="font-bold text-xl text-white tracking-wider">{profile.name.split(' ')[0]}</span>
            </div>
          </ScrollReveal>

          {/* Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[240px] md:h-[240px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[360px] md:h-[360px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[480px] md:h-[480px] rounded-full border border-white/5 hidden md:block" />

          {/* Orbiting Tech Nodes */}
          {orbitTechs.map((tech, i) => (
            <OrbitNode 
              key={tech.name} 
              tech={tech} 
              angle={(360 / orbitTechs.length) * i} 
            />
          ))}

        </div>
      </div>
    </section>
  );
}
