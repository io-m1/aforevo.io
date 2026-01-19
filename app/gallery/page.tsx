import { Metadata } from 'next';
import galleryData from '@/content/gallery.json';
import GalleryMasonry from '@/components/sections/GalleryMasonry';

export const metadata: Metadata = {
  title: galleryData.metadata.title,
  description: galleryData.metadata.description,
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <section className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          {galleryData.hero.heading}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {galleryData.hero.subheading}
        </p>
      </section>

      <GalleryMasonry items={galleryData.images as any[]} categories={galleryData.categories} />
    </main>
  );
}
