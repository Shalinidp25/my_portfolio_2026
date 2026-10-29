'use client';

import { motion } from 'framer-motion';
import type { OrbitTech } from '@/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface OrbitNodeProps {
  tech: OrbitTech;
  angle: number; // Starting angle in degrees
}

export function OrbitNode({ tech, angle }: OrbitNodeProps) {
  // We use CSS variables to pass the radius to the orbit keyframe animation
  return (
    <div
      className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 origin-center animate-orbit group cursor-pointer"
      style={{
        '--orbit-radius': `${tech.radius}px`,
        animationDelay: `-${(angle / 360) * tech.duration}s`,
        animationDuration: `${tech.duration}s`,
      } as React.CSSProperties}
    >
      <div 
        className="w-full h-full rounded-full bg-[#050510] border-2 border-white/20 p-2.5 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
        style={{ borderColor: tech.color }}
      >
        <span className="font-bold text-xs text-white absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded backdrop-blur-md pointer-events-none whitespace-nowrap">
          {tech.name}
        </span>
        {/* Placeholder text for icon until real svgs are provided */}
        <span className="text-[10px] font-bold" style={{ color: tech.color }}>
          {tech.name.substring(0, 2)}
        </span>
      </div>
    </div>
  );
}
