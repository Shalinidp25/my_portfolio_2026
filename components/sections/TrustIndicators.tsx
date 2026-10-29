'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const stats = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '+', label: 'Production Apps' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

export function TrustIndicators() {
  return (
    <section className="py-12 border-y border-white/[0.05] bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/[0.05]">
          <ScrollReveal direction="up" delay={0.1} className="text-center px-4">
            <div className="text-sm text-primary mb-2 uppercase tracking-widest font-medium">Role</div>
            <div className="text-xl md:text-2xl font-semibold text-white">SE II</div>
          </ScrollReveal>
          
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              direction="up"
              delay={0.1 * (i + 2)}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
