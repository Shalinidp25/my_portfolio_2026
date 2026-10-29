import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuroraBackground } from '@/components/effects/AuroraBackground';
import { ParticleField } from '@/components/effects/ParticleField';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { profile } from '@/data/profile';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.heroSubtext,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuroraBackground />
        <ParticleField />
        <CursorGlow />
        
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
