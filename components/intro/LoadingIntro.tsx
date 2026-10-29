'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sequence = [
  'Initializing Portfolio...',
  'Loading Experience...',
  'Loading Projects...',
  'Loading Skills...',
  'Welcome...👋',
];

export function LoadingIntro() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < sequence.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 600); // 600ms per step
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500); // Hold final text briefly
      return () => clearTimeout(timer);
    }
  }, [index]);

  // Optionally block body scroll during intro
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050510]"
        >
          <div className="font-mono text-sm sm:text-base md:text-lg text-primary tracking-wider">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {`> ${sequence[index]}`}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 w-2 h-4 bg-primary align-middle"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
