import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'SCSS',
      'Bootstrap 5',
    ],
  },
  {
    category: 'Backend & Database',
    icon: 'Database',
    skills: ['Python', 'Django', 'Java', 'MySQL', 'SQLite'],
  },
  {
    category: 'Desktop',
    icon: 'Laptop',
    skills: ['Electron.js'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: ['VS Code', 'Git', 'GitHub', 'Antigravity'],
  },
  {
    category: 'Concepts',
    icon: 'Lightbulb',
    skills: [
      'Responsive Design',
      'State Management',
      'Component Architecture',
      'API Integration',
      'Performance Optimization',
      'Accessibility',
      'SEO',
    ],
  },
];
