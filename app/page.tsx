/**
 * Purpose: Homepage route handler.
 * Depends on: lib/content.ts, components/sections/Hero.tsx, components/sections/ServicesGrid.tsx
 * Strategy: Server Component for optimal SEO and performance.
 */

import { Metadata } from 'next';
import { getHomePageContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';

// 1. Generate Dynamic Metadata
export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();
  
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// 2. Page Component
export default async function HomePage() {
  const content = await getHomePageContent();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero data={content.hero} />
      <ServicesGrid heading={content.services.heading} items={content.services.items} />
    </main>
  );
}
