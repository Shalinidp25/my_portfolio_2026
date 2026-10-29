'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      {/* Fake Image Placeholder - we use a gradient for now until real images are provided */}
      <div className="relative h-48 w-full rounded-t-2xl border-b border-white/[0.05] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          {project.image ? (
            <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-t-2xl" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl bg-gradient-to-br from-primary/20 via-[#0a0a1a] to-accent/20 rounded-t-2xl">
              {project.name.charAt(0)}
            </div>
          )}
        </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-4">
          <Badge className="mb-4">{project.role}</Badge>
          <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-primary text-sm font-medium">{project.tagline}</p>
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs px-2.5 py-1 bg-white/[0.05] border border-white/[0.05] rounded-md text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/[0.05] flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
