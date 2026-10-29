'use client';

import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <SectionHeading title="Let's Build Something Amazing Together" align="center" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="max-w-2xl mx-auto mt-12 space-y-8">
          <p className="text-xl text-white/80 leading-relaxed">
            Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button href={`mailto:${profile.email}`} variant="primary">
              Contact Me
            </Button>
            <Button href={profile.resumePath} variant="secondary">
              Download Resume
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-primary/20 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}
