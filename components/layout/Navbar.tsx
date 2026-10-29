'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {profile.name}
          </span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={isHome ? link.href : `/${link.href}`}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={profile.resumePath} size="sm" variant="secondary">
            Resume
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/[0.08] p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={isHome ? link.href : `/${link.href}`}
                    className="text-lg font-medium text-white block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={profile.resumePath}
              className="w-full"
              variant="primary"
            >
              Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
