'use client';

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[#050510]" />

      {/* Aurora blob 1 – purple */}
      <div
        className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] rounded-full opacity-20 blur-[120px] animate-aurora"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)',
          backgroundSize: '300% 300%',
        }}
      />

      {/* Aurora blob 2 – cyan */}
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vw] rounded-full opacity-15 blur-[120px] animate-aurora"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)',
          backgroundSize: '300% 300%',
          animationDelay: '3s',
          animationDirection: 'reverse',
        }}
      />

      {/* Aurora blob 3 – pink */}
      <div
        className="absolute top-1/3 left-1/2 w-[50vw] h-[50vw] rounded-full opacity-10 blur-[100px] animate-aurora"
        style={{
          background:
            'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)',
          backgroundSize: '300% 300%',
          animationDelay: '5s',
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
