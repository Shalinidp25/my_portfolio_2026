'use client';

import { experiences } from '@/data/experience';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TimelineItem } from '@/components/shared/TimelineItem';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-8 relative bg-black/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Experience" subtitle="My professional journey and career progression." />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mt-16">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
