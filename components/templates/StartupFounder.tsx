'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import {
  ArrowUpRight,
  Globe,
  Briefcase,
  Lightbulb,
  Mail,
  Download,
  Target
} from 'lucide-react';

export default function StartupFounderTemplate() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30 print:bg-white print:text-black">
      
      {/* Pitch Deck Grid Layout */}
      <div className="max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12 print:p-0 print:max-w-none">
        
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center mb-20 print:hidden">
          <div className="text-xl font-bold tracking-tighter">
            {profile.name.split(' ').map((n, i) => (
              <span key={i} className={i === 1 ? 'text-rose-600' : ''}>{n}</span>
            ))}
            <span className="text-rose-600">.</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-2 bg-white hover:bg-neutral-200 text-black rounded-full text-sm font-bold uppercase tracking-wider transition-colors"
          >
            <Download size={16} />
            Download Deck
          </button>
        </div>

        {/* Hero Section — print-friendly: single column, no image, solid heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center print:block print:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium mb-8 print:hidden">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              Building the future at {profile.company}
            </div>
            
            {/* Screen heading — hidden on print */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 print:hidden">
              Vision. <br />
              <span className="text-neutral-500">Execution.</span> <br />
              <span className="text-rose-600">Scale.</span>
            </h1>
            {/* Print heading — clean solid text */}
            <h1 className="hidden print:block text-3xl font-black text-black mb-1">{profile.name}</h1>
            <h2 className="hidden print:block text-lg font-semibold text-gray-700 mb-3">{profile.title} at {profile.company}</h2>

            <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-xl mb-10 print:text-gray-600 print:text-sm print:mb-4 print:max-w-none">
              {profile.heroTagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 print:gap-4 print:text-sm print:text-gray-600">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-lg font-medium border-b-2 border-rose-600 pb-1 hover:text-rose-600 transition-colors print:border-none print:text-gray-700 print:text-sm print:pb-0">
                <Mail size={20} className="print:w-4 print:h-4" />
                {profile.email}
              </a>
              <span className="flex items-center gap-2 text-lg text-neutral-500 print:text-gray-600 print:text-sm">
                <Globe size={20} className="print:w-4 print:h-4" />
                {profile.location}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto print:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-transparent rounded-[2rem] blur-3xl" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-neutral-800">
              <Image 
                src={profile.profileImage} 
                alt={profile.name} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 print:mb-6"
        >
          <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8 print:border-gray-300 print:mb-4 print:pb-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight print:text-black print:text-xl">Experience</h2>
            <Briefcase className="text-rose-600 print:hidden" size={40} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 print:block print:space-y-5">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="group print:border-b print:border-gray-100 print:pb-5">
                <div className="flex justify-between items-start mb-4 print:mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-rose-600 transition-colors print:text-black print:text-base">{exp.position}</h3>
                  <span className="text-sm font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full print:bg-transparent print:text-gray-500 print:text-xs print:p-0">
                    {exp.startDate.split(' ')[1] || exp.startDate} - {exp.endDate.split(' ')[1] || exp.endDate}
                  </span>
                </div>
                <h4 className="text-xl text-neutral-400 mb-6 print:text-gray-600 print:text-sm print:mb-2">{exp.company}</h4>
                <ul className="space-y-4 print:space-y-1">
                  {exp.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-4 text-neutral-300 print:text-gray-700 print:text-xs print:gap-2">
                      <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-2.5 shrink-0 print:hidden" />
                      <span className="hidden print:inline-block print:text-gray-400 print:mr-1">•</span>
                      <p className="leading-relaxed print:leading-normal">{hl}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 print:mb-6 print:break-before-page"
        >
          <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8 print:border-gray-300 print:mb-4 print:pb-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight print:text-black print:text-xl">Projects</h2>
            <Target className="text-rose-600 print:hidden" size={40} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:block print:space-y-4">
            {projects.slice(0, 4).map(project => (
              <div key={project.id} className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 hover:border-rose-600/50 transition-colors flex flex-col h-full print:bg-transparent print:border print:border-gray-200 print:rounded-lg print:p-4">
                <div className="flex justify-between items-start mb-6 print:mb-2">
                  <div>
                    <span className="text-xs font-mono text-rose-600 uppercase tracking-widest mb-2 block print:text-gray-500">{project.category}</span>
                    <h3 className="text-3xl font-bold print:text-black print:text-base">{project.name}</h3>
                  </div>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all print:hidden">
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
                
                <p className="text-lg text-neutral-400 mb-8 flex-grow print:text-gray-600 print:text-xs print:mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 print:gap-1">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-sm font-medium text-neutral-300 bg-black px-4 py-2 border border-neutral-800 print:bg-gray-50 print:border-gray-300 print:text-black print:text-[10px] print:px-2 print:py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8 print:border-gray-300 print:mb-4 print:pb-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight print:text-black print:text-xl">Technical Skills</h2>
            <Lightbulb className="text-rose-600 print:hidden" size={40} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 print:grid-cols-2 print:gap-4">
            {skillGroups.map(group => (
              <div key={group.category}>
                <h3 className="text-lg font-bold mb-6 text-rose-600 print:text-black print:text-sm print:mb-2 print:border-b print:border-gray-200 print:pb-1">{group.category}</h3>
                <ul className="space-y-4 print:space-y-1">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-xl font-light text-neutral-300 print:text-gray-700 print:text-xs">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
