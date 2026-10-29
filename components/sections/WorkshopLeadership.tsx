'use client';

import { useState, useEffect } from 'react';
import { workshops } from '@/data/workshops';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Mic2, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function WorkshopLeadership() {
  const ws = workshops[0]; // Currently just one in data
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!ws.images || ws.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ws.images!.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ws.images]);

  const nextImage = () => {
    if (!ws.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % ws.images!.length);
  };

  const prevImage = () => {
    if (!ws.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + ws.images!.length) % ws.images!.length);
  };

  return (
    <section className="py-24 relative bg-primary/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Knowledge Sharing & Leadership" subtitle="Giving back to the developer community." />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-12">
          <ScrollReveal direction="up" delay={0.2}>
            <GlassPanel className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{ws.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Mic2 size={18} />
                      <span>{ws.event}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {ws.description}
                </p>

                {ws.images && ws.images.length > 0 && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 group/carousel border border-white/10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={ws.images[currentImageIndex]}
                          alt={`${ws.title} Workshop Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {ws.images.length > 1 && (
                      <>
                        {/* Controls */}
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                          <button 
                            onClick={prevImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-primary/80 backdrop-blur-md transition-colors"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-primary/80 backdrop-blur-md transition-colors"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </div>
                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                          {ws.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex 
                                  ? 'bg-primary w-6' 
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-widest">Key Topics Covered</h4>
                  <div className="flex flex-wrap gap-3">
                    {ws.topics.map((topic) => (
                      <span key={topic} className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white/90">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

