'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import {
  Sparkles,
  Palette,
  Wand2,
  Download,
  Github,
  Mail,
  MapPin,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function CreativeDeveloperTemplate() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050510] text-white font-sans selection:bg-fuchsia-500/40 print:bg-white print:text-black print:overflow-visible">
      
      {/* Dynamic Background Elements - Hidden on Print */}
      <div className="fixed inset-0 pointer-events-none print:hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 print:p-0 print:max-w-none">
        
        {/* Navbar */}
        <div className="flex justify-between items-center mb-16 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <Sparkles className="text-fuchsia-400" size={20} />
            </div>
            <span className="font-bold tracking-wide">Creative Workspace</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-xl text-sm font-semibold transition-all"
          >
            <Download size={16} />
            Save Profile
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center print:block print:mb-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            {/* Screen heading with gradient — hidden on print */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-[1.1] print:hidden">
              Hello, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
                {profile.name}
              </span>
            </h1>
            {/* Print heading — solid black, no gradient */}
            <h1 className="hidden print:block text-3xl font-black text-black mb-1">{profile.name}</h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white/70 mb-8 print:text-gray-700 print:text-lg print:mb-3">
              {profile.title}
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed print:text-gray-600 print:text-sm print:mb-4 print:max-w-none">
              {profile.heroTagline} {profile.heroSubtext}
            </p>
            
            <div className="flex flex-wrap gap-4 print:gap-4 print:text-sm print:text-gray-600">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-bold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105 print:bg-none print:shadow-none print:text-gray-700 print:p-0 print:rounded-none print:font-normal">
                <Mail size={18} className="print:w-4 print:h-4" /> {profile.email}
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-white backdrop-blur-md print:bg-transparent print:border-none print:text-gray-600 print:p-0 print:rounded-none print:font-normal">
                <MapPin size={18} className="text-cyan-400 print:text-gray-400 print:w-4 print:h-4" /> {profile.location}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative print:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-3xl transform rotate-3 scale-105" />
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image src={profile.profileImage} alt={profile.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Experience & Skills Split — single column on print */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 print:block print:space-y-6 mb-24 print:mb-0">
          
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10 print:mb-4">
              <Wand2 className="text-cyan-400 print:hidden" size={32} />
              <h2 className="text-4xl font-black print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Experience</h2>
            </div>

            <div className="space-y-8 print:space-y-5">
              {experiences.map(exp => (
                <div key={exp.id} className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors print:border-none print:bg-transparent print:p-0 print:rounded-none print:border-b print:!border-gray-100 print:pb-5">
                  <div className="absolute top-0 right-6 w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-b-full opacity-50 print:hidden" />
                  
                  <div className="mb-4 print:mb-2">
                    <h3 className="text-xl font-bold text-white print:text-black print:text-base">{exp.position}</h3>
                    <div className="flex flex-wrap justify-between items-center mt-1">
                      <p className="text-fuchsia-400 font-medium print:text-gray-600 print:text-sm">{exp.company}</p>
                      <span className="text-xs font-medium text-white/50 print:text-gray-500">{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 print:space-y-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm print:text-gray-700 print:text-xs print:leading-normal print:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 print:hidden" />
                        <span className="hidden print:inline-block print:text-gray-400 print:mr-1">•</span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10 print:mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 print:hidden" />
              <h2 className="text-4xl font-black print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Technical Skills</h2>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md print:bg-transparent print:border-none print:p-0 print:rounded-none">
              <div className="space-y-8 print:space-y-3">
                {skillGroups.map(group => (
                  <div key={group.category}>
                    <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 print:text-gray-500 print:mb-2">{group.category}</h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {group.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default print:border-gray-300 print:text-black print:bg-gray-50 print:text-xs print:px-2 print:py-0.5 print:rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Selected Works (Projects) */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="print:break-before-page"
        >
          <div className="flex items-center gap-4 mb-10 print:mb-4">
            <Palette className="text-fuchsia-400 print:hidden" size={32} />
            <h2 className="text-4xl font-black print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:block print:space-y-4">
            {projects.slice(0, 3).map(project => (
              <div key={project.id} className="group relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 print:bg-transparent print:border print:border-gray-200 print:rounded-lg print:overflow-visible">
                <div className="p-8 print:p-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center mb-6 print:hidden">
                    <Code2 className="text-cyan-300" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 print:text-black print:text-base">{project.name}</h3>
                  <p className="text-white/60 mb-8 h-20 overflow-hidden print:text-gray-600 print:h-auto print:overflow-visible print:mb-3 print:text-xs">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 print:mb-2 print:gap-1">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium print:border print:border-gray-300 print:text-black print:bg-gray-50 print:text-[10px] print:px-2 print:py-0.5 print:rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors print:hidden">
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
