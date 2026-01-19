/**
 * Purpose: Homepage route handler.
 * Depends on: lib/content.ts, components/sections/Hero.tsx, components/sections/StatsStrip.tsx, components/sections/ServicesGrid.tsx
 * Strategy: Server Component for optimal SEO and performance.
 */

import { Metadata } from 'next';
import { getHomePageContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';

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
      locale: 'en_NG',
      images: [
        {
          url: '/og-image.jpg', // We will add this asset later
          width: 1200,
          height: 630,
          alt: 'Murphy Ben International',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* 1. Hero: Brand Promise & Cinematic Visual */}
      <Hero data={content.hero} />
      
      {/* 2. Stats: Immediate Proof of Scale */}
      <StatsStrip stats={content.stats} />
      
      {/* 3. Services: The Ecosystem */}
      <ServicesGrid heading={content.services.heading} items={content.services.items} />
      
      {/* Phase 3 will add: Featured Brands Carousel & News/Press */}
    </main>
  );
}
