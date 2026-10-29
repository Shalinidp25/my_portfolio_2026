'use client';

import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SkillChip } from '@/components/shared/SkillChip';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Monitor, Database, Laptop, Wrench, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6 text-primary" />,
  Database: <Database className="w-6 h-6 text-accent" />,
  Laptop: <Laptop className="w-6 h-6 text-pink-400" />,
  Wrench: <Wrench className="w-6 h-6 text-yellow-400" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-purple-400" />,
};

export function SkillsArchitecture() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Skills Architecture" subtitle="The technologies and concepts I leverage to build robust applications." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={group.category} direction="up" delay={0.1 * (idx + 1)}>
              <GlassPanel className="p-8 h-full" hover>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/[0.05] rounded-xl border border-white/[0.05]">
                    {iconMap[group.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </GlassPanel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
