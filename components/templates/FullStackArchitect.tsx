'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { projects } from '@/data/projects';
import {
  Server,
  Database,
  Network,
  LayoutTemplate,
  Download,
  TerminalSquare,
  Workflow,
  Globe2,
  Box,
  Layers
} from 'lucide-react';

export default function FullStackArchitectTemplate() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-teal-500/30 print:bg-white print:text-black">
      
      <div className="max-w-5xl mx-auto px-6 py-12 print:p-0 print:max-w-none">
        
        {/* Actions - Hidden on Print */}
        <div className="flex justify-between items-center mb-12 print:hidden">
          <div className="flex items-center gap-3">
            <Network className="text-teal-500" size={24} />
            <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">System Overview</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-md text-sm font-semibold transition-all shadow-[0_0_20px_rgba(13,148,136,0.2)]"
          >
            <Download size={16} />
            Export Specs
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:block print:space-y-6">
          
          {/* Left Column (Info & Skills) */}
          <div className="lg:col-span-4 space-y-12 print:space-y-6">
            
            {/* Header / Identity */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-700 mb-6 print:w-20 print:h-20 print:border-gray-300 print:rounded-lg">
                <Image src={profile.profileImage} alt={profile.name} width={96} height={96} className="object-cover" />
              </div>
              <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight mb-2 print:text-black print:text-3xl">{profile.name}</h1>
              <h2 className="text-xl text-teal-400 font-medium mb-6 print:text-gray-700 print:text-lg print:mb-3">{profile.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 print:text-gray-600 print:mb-3">
                {profile.heroTagline}
              </p>
              
              <div className="space-y-3 text-sm font-medium text-slate-400 print:text-gray-700 print:space-y-1">
                <div className="flex items-center gap-3">
                  <Globe2 size={16} className="text-slate-500 print:text-gray-400" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-3">
                  <TerminalSquare size={16} className="text-slate-500 print:text-gray-400" />
                  {profile.email}
                </div>
              </div>
            </motion.section>

            {/* Architecture Stack */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2 print:text-black print:text-base print:border-b print:border-gray-300 print:pb-2 print:mb-3">
                <Layers size={18} className="text-teal-500 print:hidden" /> Technical Skills
              </h3>
              
              <div className="space-y-8 print:space-y-3">
                {skillGroups.map((group) => (
                  <div key={group.category} className="print:border-b print:border-gray-100 print:pb-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 print:text-gray-500 print:mb-2">{group.category}</h4>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {group.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 text-sm bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded print:border-gray-300 print:bg-gray-50 print:text-black print:text-xs print:px-2 print:py-0.5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
            
          </div>

          {/* Right Column (Timeline & Nodes) */}
          <div className="lg:col-span-8">
            
            {/* Experience Timeline */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-10 print:mb-4">
                <Workflow size={24} className="text-teal-500 print:hidden" />
                <h2 className="text-3xl font-bold text-slate-100 print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Experience</h2>
              </div>

              {/* Timeline Track */}
              <div className="absolute left-[27px] top-[80px] bottom-10 w-[2px] bg-slate-800 print:hidden" />

              <div className="space-y-12 print:space-y-5">
                {experiences.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-20 print:pl-0 print:border-b print:border-gray-100 print:pb-5">
                    
                    {/* Node Point */}
                    <div className="absolute left-[16px] top-1.5 w-6 h-6 rounded flex items-center justify-center bg-slate-900 border-2 border-teal-500 z-10 print:hidden">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-sm" />
                    </div>

                    <div className="bg-slate-800/20 border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/40 transition-colors print:border-none print:bg-transparent print:p-0 print:rounded-none">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 print:mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-200 print:text-black print:text-base">{exp.position}</h3>
                          <p className="text-teal-400 font-medium print:text-gray-600 print:text-sm">{exp.company}</p>
                        </div>
                        <div className="text-xs font-mono text-slate-500 mt-2 sm:mt-0 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800 print:bg-transparent print:border-none print:p-0 print:text-gray-500">
                          {exp.startDate} — {exp.endDate}
                        </div>
                      </div>
                      
                      <ul className="space-y-2.5 print:space-y-1">
                        {exp.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed print:text-gray-700 print:text-xs print:leading-normal print:gap-2">
                            <span className="text-teal-500 font-mono shrink-0 mt-0.5 print:hidden">{`>`}</span>
                            <span className="hidden print:inline-block print:text-gray-400 print:mr-1">•</span>
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Infrastructure / Projects */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 print:mt-6 print:break-before-page"
            >
              <div className="flex items-center gap-3 mb-10 print:mb-4">
                <Server size={24} className="text-teal-500 print:hidden" />
                <h2 className="text-3xl font-bold text-slate-100 print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:block print:space-y-4">
                {projects.slice(0, 4).map(project => (
                  <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 overflow-hidden print:border print:border-gray-200 print:bg-transparent print:rounded-lg print:p-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110 print:hidden" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4 print:mb-2">
                        <h3 className="text-lg font-bold text-slate-200 mb-1 print:text-black print:text-base">{project.name}</h3>
                        <p className="text-xs font-medium text-teal-500/80 uppercase tracking-wider print:text-gray-500">{project.category}</p>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 flex-grow print:text-gray-600 print:mb-3 print:text-xs">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto print:gap-1">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="flex items-center gap-1.5 text-xs font-mono text-slate-500 print:text-black print:text-[10px]">
                            <Box size={10} className="print:hidden" /> {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs font-mono text-slate-500 print:text-black print:text-[10px]">+{project.techStack.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}
