import React from 'react';
import { notFound } from 'next/navigation';
import SeniorFrontendTemplate from '@/components/templates/SeniorFrontend';
import FullStackArchitectTemplate from '@/components/templates/FullStackArchitect';
import ProductEngineerTemplate from '@/components/templates/ProductEngineer';
import StartupFounderTemplate from '@/components/templates/StartupFounder';
import CreativeDeveloperTemplate from '@/components/templates/CreativeDeveloper';

// In Next.js 15, params is a Promise that needs to be awaited
export default async function TemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  switch (id) {
    case 'senior-frontend':
      return <SeniorFrontendTemplate />;
    case 'full-stack-architect':
      return <FullStackArchitectTemplate />;
    case 'product-engineer':
      return <ProductEngineerTemplate />;
    case 'startup-founder':
      return <StartupFounderTemplate />;
    case 'creative-developer':
      return <CreativeDeveloperTemplate />;
    default:
      notFound();
  }
}
