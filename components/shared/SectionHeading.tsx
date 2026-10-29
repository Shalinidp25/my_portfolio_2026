import { GradientText } from '@/components/ui/gradient-text';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <GradientText
        as="h2"
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title}
      </GradientText>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
