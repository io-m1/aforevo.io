/**
 * Purpose: Homepage route handler.
 * Depends on: lib/content.ts, components/sections/Hero.tsx
 * Strategy: Server Component for optimal SEO and performance.
 */

import { Metadata } from 'next';
import { getHomePageContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';

// 1. Generate Dynamic Metadata for SEO
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
      locale: 'en_NG', // Targeting Nigeria/Global
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
      
      {/* Temporary Placeholder for Services Grid */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">
          {content.services.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.services.items.map((item) => (
            <div key={item.id} className="p-6 border border-gray-800 rounded-lg hover:border-red-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a href={item.link} className="text-red-500 font-medium hover:underline">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
