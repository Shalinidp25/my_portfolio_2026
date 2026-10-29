// ─── Shared TypeScript Interfaces ────────────────────────────────────────────

export interface Profile {
  name: string;
  role: string;
  title: string;
  company: string;
  location: string;
  email: string;
  resumePath: string;
  resumePdfUrl: string;
  profileImage: string;
  heroTagline: string;
  heroSubtext: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  logo?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  liveUrl: string;
  techStack: string[];
  role: string;
  features: string[];
  image: string;
  category: 'Live Projects' | 'UG Final Year Academic  Project' | 'Practice Projects';
}

export interface Workshop {
  id: string;
  title: string;
  event: string;
  topics: string[];
  description: string;
  images?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustStat {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface OrbitTech {
  name: string;
  icon: string;
  color: string;
  radius: number;
  duration: number;
}
