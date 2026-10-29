import { LoadingIntro } from '@/components/intro/LoadingIntro';
import { Hero } from '@/components/sections/Hero';
import { TrustIndicators } from '@/components/sections/TrustIndicators';
import { AboutMe } from '@/components/sections/AboutMe';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsArchitecture } from '@/components/sections/SkillsArchitecture';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { DevelopmentProcess } from '@/components/sections/DevelopmentProcess';
import { WorkshopLeadership } from '@/components/sections/WorkshopLeadership';
import { TechStackUniverse } from '@/components/sections/TechStackUniverse';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Hero />
      <TrustIndicators />
      <AboutMe />
      <ExperienceTimeline />
      <SkillsArchitecture />
      <FeaturedProjects />
      <DevelopmentProcess />
      <WorkshopLeadership />
      <TechStackUniverse />
      <ContactSection />
    </>
  );
}
