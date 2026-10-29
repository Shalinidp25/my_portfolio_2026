'use client';

import { useMousePosition } from '@/hooks/useMousePosition';

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed pointer-events-none -z-10 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] transition-transform duration-200 ease-out"
      style={{
        background:
          'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
        transform: `translate(${x - 250}px, ${y - 250}px)`,
      }}
      aria-hidden="true"
    />
  );
}
