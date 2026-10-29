import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
        'bg-primary/10 text-primary border border-primary/20',
        'backdrop-blur-sm',
        className
      )}
    >
      {children}
    </span>
  );
}
