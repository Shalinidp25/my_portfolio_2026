import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassPanel({ children, className, hover = false }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl',
        hover &&
          'transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-xl hover:shadow-primary/5',
        className
      )}
    >
      {children}
    </div>
  );
}
