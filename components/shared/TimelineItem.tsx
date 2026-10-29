'use client';

import { ScrollReveal } from '@/components/shared/ScrollReveal';
import type { ExperienceEntry } from '@/types';

interface TimelineItemProps {
  experience: ExperienceEntry;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line (Desktop: center, Mobile: left) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/[0.08]" />

      <ScrollReveal direction="up" delay={0.2} className="relative z-10 md:grid md:grid-cols-2 md:gap-16 items-center">
        {/* Node marker */}
        <div className="absolute left-[-32px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary ring-4 ring-[#050510] md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(124,58,237,0.6)]" />

        {/* Left Side (Date) */}
        <div className="md:text-right mb-4 md:mb-0 pt-6 md:pt-8 md:pr-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-sm font-semibold text-primary">
            {experience.startDate} — {experience.endDate}
          </span>
          <h3 className="text-2xl font-bold mt-4 text-white">{experience.position}</h3>
          <h4 className="text-xl text-white/70 mt-1">{experience.company}</h4>
        </div>

        {/* Right Side (Content) */}
        <div className="md:pl-12 pb-12 pt-0 md:pt-8">
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-colors duration-300">
            <ul className="space-y-3">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-white/80 leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0 text-[10px]">●</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
