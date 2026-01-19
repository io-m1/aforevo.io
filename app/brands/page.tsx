import { Metadata } from 'next';
import { getBrandsPageContent } from '@/lib/content';
import BrandShowcase from '@/components/sections/BrandShowcase';

export const metadata: Metadata = {
  title: 'Our Brands | Aforevo & MBI Music',
  description: 'Discover the brands powering African entertainment. Aforevo for video streaming and MBI Music for digital audio distribution.',
};

export default async function BrandsPage() {
  const content = await getBrandsPageContent();

  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {content.hero.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {content.hero.subheading}
        </p>
      </div>

      <BrandShowcase brands={content.brands} />
    </main>
  );
}
