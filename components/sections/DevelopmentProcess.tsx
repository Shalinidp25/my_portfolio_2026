'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Search, PenTool, Layout, Code2, Database, TestTube2, Rocket } from 'lucide-react';
import type { ProcessStep } from '@/types';

const processSteps: ProcessStep[] = [
  { title: 'Analysis', description: 'Requirement gathering and technical scoping.', icon: 'Search' },
  { title: 'UI Planning', description: 'Wireframing and experience design.', icon: 'PenTool' },
  { title: 'Architecture', description: 'Component mapping and state modeling.', icon: 'Layout' },
  { title: 'Development', description: 'Building with modern web technologies.', icon: 'Code2' },
  { title: 'Integration', description: 'Connecting APIs and data sources.', icon: 'Database' },
  { title: 'Testing', description: 'Ensuring quality and performance.', icon: 'TestTube2' },
  { title: 'Deployment', description: 'Shipping to production securely.', icon: 'Rocket' },
];

const iconMap: Record<string, React.ElementType> = {
  Search,
  PenTool,
  Layout,
  Code2,
  Database,
  TestTube2,
  Rocket,
};

export function DevelopmentProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Development Process" subtitle="My systematic approach to delivering high-quality software." />
        </ScrollReveal>

        <div className="max-w-6xl mx-auto mt-20 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon];
              return (
                <ScrollReveal key={step.title} direction="up" delay={0.1 * idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 mb-6 rounded-full bg-[#050510] border-2 border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-primary transition-colors">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 text-center">{step.title}</h4>
                  <p className="text-xs text-center text-muted-foreground">{step.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
