import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Compass, Layers, Rocket, Sparkles } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { GradientText } from '@/components/ui/gradient-text';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const templates = [
  {
    id: 'senior-frontend',
    title: 'Senior Frontend Engineer',
    description: 'Bento grid layout with skill heatmaps and technical precision. Dark mode dashboard aesthetic.',
    icon: <LayoutDashboard size={24} className="text-indigo-400" />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'full-stack-architect',
    title: 'Full Stack Architect',
    description: 'Timeline-driven, modular sections focusing on end-to-end capabilities and infrastructure. High-end slate/teal aesthetic.',
    icon: <Layers size={24} className="text-teal-400" />,
    color: 'from-teal-400 to-emerald-500'
  },
  {
    id: 'product-engineer',
    title: 'Product Engineer',
    description: 'Information cards, asymmetric layout, vibrant micro-interactions focusing on user impact and shipped features.',
    icon: <Compass size={24} className="text-amber-500" />,
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 'startup-founder',
    title: 'Startup Founder',
    description: 'Pitch-deck style, high contrast, editorial typography, focusing on vision, execution, and milestones.',
    icon: <Rocket size={24} className="text-rose-500" />,
    color: 'from-rose-500 to-red-600'
  },
  {
    id: 'creative-developer',
    title: 'Creative Developer',
    description: 'Glassmorphism, dynamic gradients, playful typography. Visually striking and highly creative.',
    icon: <Sparkles size={24} className="text-fuchsia-400" />,
    color: 'from-cyan-400 to-fuchsia-500'
  }
];

export default function TemplatesGallery() {
  return (
    <section className="min-h-screen py-16 md:py-24 relative overflow-hidden bg-[#050505]">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <GradientText as="h1" className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Premium Dashboard Resumes
            </GradientText>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Choose from highly specialized, aesthetically curated layouts designed to stand out. All templates are fully ATS-compatible when printed to PDF.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, idx) => (
            <ScrollReveal key={template.id} direction="up" delay={0.1 + idx * 0.1}>
              <Link href={`/templates/${template.id}`}>
                <GlassPanel className="h-full p-8 group hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {template.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70">
                      {template.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed text-sm mb-6">
                      {template.description}
                    </p>
                  </div>
                  <div className={`mt-auto inline-flex w-max items-center text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${template.color}`}>
                    Preview Template &rarr;
                  </div>
                </GlassPanel>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Link href="/resume" className="text-white/50 hover:text-white transition-colors text-sm font-medium underline underline-offset-4">
             Back to standard resume
           </Link>
        </div>
      </div>
    </section>
  );
}
