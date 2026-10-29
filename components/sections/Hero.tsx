'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const floatingTech = [
  { name: 'React.js', icon: '/icons/react.svg', position: '-top-4 -left-4 md:-top-6 md:-left-6', delay: 0 },
  { name: 'Next.js', icon: '/icons/nextjs.svg', position: '-top-4 -right-4 md:-top-6 md:-right-6', delay: 1 },
  { name: 'TypeScript', icon: '/icons/ts.png', position: '-bottom-4 -left-4 md:-bottom-6 md:-left-6', delay: 2 },
  { name: 'JavaScript', icon: '/icons/js.png', position: '-bottom-4 -right-4 md:-bottom-6 md:-right-6', delay: 3 },
];

export function Hero() {
  return (
    <section className="relative pb-20 lg:pt-8 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <ScrollReveal direction="up" delay={0.2}>
              <Badge className="mb-6 p-2">{profile.title}</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-primary via-purple-300 to-accent bg-clip-text text-transparent">{profile.name.split(' ')[0]}</span> 👋
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl md:text-2xl font-medium text-white/90 mb-4 max-w-2xl mx-auto lg:mx-0">
                {profile.heroTagline}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {profile.heroSubtext}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5} className="flex flex-col flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href={profile.resumePath} variant="secondary">
                Download Resume
              </Button>
            </ScrollReveal>
          </div>

          {/* Image and Floating Badges */}
          <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-none flex justify-center">
            <ScrollReveal direction="left" delay={0.4} className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50" />
              
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 bg-[#0a0a1a]/50 p-2 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 400px"
                    priority
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={`absolute ${tech.position} z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center gap-2 shadow-xl shadow-primary/10`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: tech.delay,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-white/90">{tech.name}</span>
                </motion.div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
