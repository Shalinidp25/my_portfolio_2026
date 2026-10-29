import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export function GradientText({
  children,
  className,
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        'bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Tag>
  );
}
