'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import {
  Rocket,
  Zap,
  Star,
  Users,
  Target,
  Download,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function ProductEngineerTemplate() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-200 print:bg-white print:text-black">
      
      <div className="max-w-6xl mx-auto px-6 py-12 print:p-0 print:max-w-none">
        
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-16 print:hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold text-sm">
            <Rocket size={16} />
            <span>Product Engineer Profile</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-sm font-semibold transition-all shadow-lg"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>

        {/* Header — single card on print, hide KPI cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 print:block print:mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-neutral-200 print:border-none print:shadow-none print:p-0 print:rounded-none"
          >
            <div className="flex gap-2 mb-6 print:hidden">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available
              </span>
            </div>
            
            {/* Screen heading with gradient — hidden on print */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mb-6 leading-tight print:hidden">
              Building products <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                users love.
              </span>
            </h1>
            {/* Print heading — no gradient, solid text */}
            <h1 className="hidden print:block text-3xl font-black text-black mb-2">{profile.name}</h1>
            <h2 className="hidden print:block text-lg font-semibold text-gray-700 mb-3">{profile.title} at {profile.company}</h2>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed print:text-gray-600 print:text-sm print:mb-3 print:max-w-none">
              I'm {profile.name}, a {profile.title} at {profile.company}. {profile.heroTagline}
            </p>

            <div className="flex items-center gap-6 print:gap-4 print:text-sm print:text-gray-600">
              <div className="flex -space-x-4 print:hidden">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                  <Image src={profile.profileImage} alt={profile.name} width={48} height={48} className="object-cover" />
                </div>
              </div>
              <div className="text-sm font-medium text-neutral-500 print:text-gray-700">
                <span className="text-neutral-900 font-bold block print:hidden">Let's chat</span>
                <a href={`mailto:${profile.email}`} className="text-amber-600 hover:underline print:text-gray-700 print:no-underline">{profile.email}</a>
                <span className="hidden print:inline print:ml-4">{profile.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 flex flex-col gap-8 print:hidden"
          >
            {/* KPI Card 1 */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-[2rem] text-white shadow-xl shadow-orange-500/20">
              <Star className="text-amber-100 mb-4" size={32} />
              <h3 className="text-4xl font-black mb-2">4+</h3>
              <p className="text-amber-50 font-medium">Production products shipped</p>
            </div>
            {/* KPI Card 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-200">
              <Target className="text-amber-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Product Impact</h3>
              <p className="text-neutral-500 text-sm">Focusing on user retention, scalable features, and seamless UX across web and desktop platforms.</p>
            </div>
          </motion.div>
        </div>

        {/* Work Experience — full width on print */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block print:space-y-6 mb-16 print:mb-0">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-200 print:border-none print:p-0 print:rounded-none"
          >
            <div className="flex items-center gap-3 mb-10 print:mb-4">
              <Users className="text-amber-500 print:hidden" size={28} />
              <h2 className="text-3xl font-black text-neutral-900 print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Experience</h2>
            </div>

            <div className="space-y-10 print:space-y-5">
              {experiences.map(exp => (
                <div key={exp.id} className="relative print:border-b print:border-gray-100 print:pb-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 print:mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 print:text-black print:text-base">{exp.position}</h3>
                      <p className="text-amber-600 font-bold print:text-gray-600 print:text-sm print:font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm font-bold text-neutral-400 mt-2 md:mt-0 print:text-gray-500 print:text-xs print:font-normal">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 print:space-y-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600 leading-relaxed print:text-gray-700 print:text-xs print:leading-normal print:gap-2">
                        <ChevronRight size={18} className="text-amber-500 shrink-0 mt-0.5 print:hidden" />
                        <span className="hidden print:inline-block print:text-gray-400 print:mr-1">•</span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-neutral-900 text-white p-8 rounded-[2rem] print:bg-transparent print:text-black print:border-none print:p-0 print:rounded-none">
              <div className="flex items-center gap-3 mb-8 print:mb-4">
                <Award className="text-amber-400 print:hidden" size={24} />
                <h2 className="text-2xl font-bold print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Technical Skills</h2>
              </div>
              
              <div className="space-y-6 print:space-y-3">
                {skillGroups.map(group => (
                  <div key={group.category}>
                    <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-3 print:text-gray-500 print:mb-1">{group.category}</h3>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {group.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-neutral-800 text-neutral-200 text-sm font-medium rounded-lg print:border print:border-gray-300 print:bg-gray-50 print:text-black print:text-xs print:px-2 print:py-0.5 print:rounded">
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

        {/* Shipped Products */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="print:break-before-page"
        >
          <div className="flex items-center gap-3 mb-8 print:mb-4">
            <Zap className="text-amber-500 print:hidden" size={28} />
            <h2 className="text-3xl font-black text-neutral-900 print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:w-full">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:block print:space-y-4">
            {projects.slice(0, 4).map(project => (
              <div key={project.id} className="bg-white p-8 rounded-[2rem] border border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/50 transition-shadow print:border print:border-gray-200 print:shadow-none print:bg-transparent print:rounded-lg print:p-4">
                <div className="flex justify-between items-start mb-6 print:mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center print:hidden">
                    <TrendingUp size={24} />
                  </div>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full print:hidden">
                      Live <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 print:text-black print:text-base">{project.name}</h3>
                <p className="text-neutral-500 mb-6 print:text-gray-600 print:text-xs print:mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-bold print:border print:border-gray-300 print:bg-gray-50 print:text-black print:text-[10px] print:px-2 print:py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
