'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { projects } from '@/data/projects';
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  ExternalLink,
  Download,
  Terminal,
  Activity,
  Cpu,
  MonitorSmartphone,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function SeniorFrontendTemplate() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-indigo-500/30 print:bg-white print:text-black">
      
      <div className="max-w-6xl mx-auto p-4 md:p-8 print:p-0 print:max-w-none">
        
        {/* Actions - Hidden on Print */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs font-mono text-zinc-500">frontend_dashboard.tsx</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Export PDF
          </button>
        </div>

        {/* BENTO GRID LAYOUT — collapses to single column on print */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-min print:block print:space-y-6">
          
          {/* Profile Card */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group print:border-none print:bg-transparent print:p-0 print:rounded-none"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity print:hidden">
              <Terminal size={120} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-500/20 print:w-24 print:h-24 print:border-gray-300 print:rounded-lg">
                <Image src={profile.profileImage} alt={profile.name} fill className="object-cover" />
              </div>
              <div className="text-center md:text-left print:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight print:text-black print:text-3xl">{profile.name}</h1>
                <h2 className="text-xl md:text-2xl text-indigo-400 font-medium mb-4 print:text-gray-700 print:text-lg">{profile.title} at {profile.company}</h2>
                <p className="text-zinc-400 max-w-xl leading-relaxed print:text-gray-600">{profile.heroTagline} {profile.heroSubtext}</p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6 text-sm font-medium print:justify-start print:text-gray-700 print:mt-3 print:gap-6">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 rounded-lg border border-zinc-700/50 print:bg-transparent print:border-none print:p-0">
                    <MapPin size={14} className="text-indigo-400 print:text-gray-500" /> {profile.location}
                  </span>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg border border-zinc-700/50 transition-colors print:bg-transparent print:border-none print:p-0">
                    <Mail size={14} className="text-indigo-400 print:text-gray-500" /> {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Quick Stats — entirely hidden on print (decorative only) */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between print:hidden"
          >
            <div>
              <h3 className="text-zinc-400 text-sm font-medium flex items-center gap-2 mb-6 uppercase tracking-wider">
                <Activity size={16} className="text-green-400" /> System Status
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Frontend Architecture</span>
                    <span className="text-indigo-400">98%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">React / Next.js Ecosystem</span>
                    <span className="text-indigo-400">95%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[95%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Performance Optimization</span>
                    <span className="text-indigo-400">90%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-start gap-3">
              <Zap size={20} className="text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-sm text-indigo-200">Available for highly technical senior engineering roles and architecture discussions.</p>
            </div>
          </motion.section>

          {/* Experience Pipeline */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-10 print:border-none print:bg-transparent print:p-0 print:rounded-none"
          >
            <div className="flex items-center gap-3 mb-8 print:mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 print:hidden">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Experience</h2>
            </div>

            <div className="space-y-8 print:space-y-5">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative pl-8 print:pl-0 print:border-b print:border-gray-100 print:pb-5">
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-8 bottom-[-32px] w-[2px] bg-zinc-800 print:hidden" 
                       style={{ display: idx === experiences.length - 1 ? 'none' : 'block' }} />
                  
                  {/* Node */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-900 border-4 border-indigo-500 z-10 print:hidden" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white print:text-black print:text-base">{exp.position}</h3>
                      <p className="text-indigo-400 font-medium text-lg print:text-gray-600 print:text-sm">{exp.company}</p>
                    </div>
                    <div className="text-sm font-mono text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-lg mt-2 sm:mt-0 print:bg-transparent print:p-0 print:text-gray-500 print:text-xs">
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 print:space-y-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed print:text-gray-700 print:text-xs print:leading-normal">
                        <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5 print:hidden" />
                        <span className="hidden print:inline-block print:mr-1 print:text-gray-400">•</span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Stack Grid */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-4 space-y-4 md:space-y-6 print:space-y-4"
          >
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 print:border-none print:bg-transparent print:p-0 print:rounded-none">
              <div className="flex items-center gap-3 mb-6 print:mb-3">
                <Cpu size={20} className="text-indigo-400 print:hidden" />
                <h2 className="text-xl font-bold text-white print:text-black print:text-lg print:border-b print:border-gray-300 print:pb-2 print:w-full">Technical Skills</h2>
              </div>
              
              <div className="flex flex-col gap-6 print:gap-3">
                {skillGroups.map(group => (
                  <div key={group.category}>
                    <h3 className="text-xs font-mono text-zinc-500 uppercase mb-3 print:text-gray-500 print:mb-1 print:font-bold">{group.category}</h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {group.skills.map(skill => (
                        <span key={skill} className="text-sm px-3 py-1.5 bg-zinc-800/80 hover:bg-indigo-500/20 hover:text-indigo-300 border border-zinc-700/50 rounded-lg text-zinc-300 transition-colors cursor-default print:border print:border-gray-300 print:bg-gray-50 print:text-black print:text-xs print:px-2 print:py-0.5 print:rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 print:border-none print:bg-transparent print:p-0 print:rounded-none">
               <div className="flex items-center gap-3 mb-6 print:mb-3">
                <GraduationCap size={20} className="text-indigo-400 print:hidden" />
                <h2 className="text-xl font-bold text-white print:text-black print:text-lg print:border-b print:border-gray-300 print:pb-2 print:w-full">Education</h2>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1 print:text-black print:text-sm">B.E. Computer Science</h3>
                <p className="text-indigo-400 text-sm mb-2 print:text-gray-600 print:text-xs">Roever Engineering College</p>
                <div className="flex justify-between items-center text-xs font-mono text-zinc-500 bg-zinc-800/50 p-2 rounded-lg print:bg-transparent print:p-0 print:text-gray-500">
                  <span>2017 - 2021</span>
                  <span>CGPA: 7.43</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Featured Deployments */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-10 print:border-none print:bg-transparent print:p-0 print:rounded-none print:break-before-page"
          >
            <div className="flex items-center gap-3 mb-8 print:mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 print:hidden">
                <MonitorSmartphone size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:block print:space-y-4">
              {projects.filter(p => p.category === 'Live Projects').map(project => (
                <div key={project.id} className="bg-zinc-800/30 border border-zinc-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors group print:border print:border-gray-200 print:bg-transparent print:rounded-lg print:p-4">
                  <div className="flex justify-between items-start mb-4 print:mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors print:text-black print:text-base">{project.name}</h3>
                      <p className="text-xs font-mono text-zinc-500 mt-1 print:text-gray-500">{project.role}</p>
                    </div>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500 transition-colors print:hidden">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 print:text-gray-600 h-20 overflow-hidden print:h-auto print:overflow-visible print:mb-3 print:text-xs">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto print:gap-1">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-zinc-400 print:border-gray-300 print:bg-gray-50 print:text-black print:text-[10px] print:px-1.5 print:py-0.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}
