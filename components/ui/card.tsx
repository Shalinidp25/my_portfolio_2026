import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden',
        'transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]',
        'hover:shadow-2xl hover:shadow-primary/[0.05]',
        className
      )}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
