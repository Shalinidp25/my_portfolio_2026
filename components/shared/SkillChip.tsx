'use client';

import { motion } from 'framer-motion';

interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary/50 rounded-lg text-sm font-medium text-white/90 transition-colors cursor-default select-none shadow-lg shadow-black/20"
    >
      {skill}
    </motion.div>
  );
}
