import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/50 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Shalini P. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
