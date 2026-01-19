import { Metadata } from 'next';
import { getHomePageContent } from '@/lib/content';
import ServicesGrid from '@/components/sections/ServicesGrid';

export const metadata: Metadata = {
  title: 'Our Services | Murphy Ben International',
  description: 'MBI Ecosystem: Streaming, Audio Distribution, and Rights Management Tech.',
};

export default async function ServicesPage() {
  const content = await getHomePageContent();
  
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Ecosystem
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive digital solutions for the African entertainment industry.
        </p>
      </div>
      {/* Reusing the ServicesGrid but full page context */}
      <ServicesGrid heading="Core Divisions" items={content.services.items} />
    </main>
  );
}
