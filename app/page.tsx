import { Metadata } from 'next';
import { getHomePageContent, getMediaContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import MediaRow from '@/components/sections/MediaRow';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const media = await getMediaContent();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero data={content.hero} />
      <StatsStrip stats={content.stats} />
      
      {/* NEW: Media Rows for Visual Impact */}
      <div className="space-y-0">
        <MediaRow heading={media.movies.heading} items={media.movies.items} type="movie" />
        <MediaRow heading={media.music.heading} items={media.music.items} type="music" />
      </div>

      <ServicesGrid heading={content.services.heading} items={content.services.items} />
    </main>
  );
}
