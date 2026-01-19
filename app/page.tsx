import { Metadata } from 'next';
import { getHomePageContent, getMediaContent, getPulseContent } from '@/lib/content';
import { getLiveYouTubeMetrics } from '@/lib/youtube'; // The new service
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import YouTubeGrid from '@/components/sections/YouTubeGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';
import MediaRow from '@/components/sections/MediaRow';
import PulseNetwork from '@/components/sections/PulseNetwork';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const media = await getMediaContent();
  const pulse = await getPulseContent();
  
  // Fetch "Live" metrics (with fallback)
  const liveChannels = await getLiveYouTubeMetrics();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero data={content.hero} />
      
      {/* Metrics Strip */}
      <StatsStrip stats={content.metrics.items} />
      
      {/* Visual Entertainment Layers */}
      <div className="space-y-0">
        <MediaRow heading={media.movies.heading} items={media.movies.items} type="movie" />
      </div>

      {/* Corporate Authority Layers - NOW USING LIVE DATA */}
      <YouTubeGrid heading={content.youtube.heading} channels={liveChannels} />
      
      {/* The Pulse System */}
      <PulseNetwork data={pulse} />

      <ServicesGrid heading="Our Ecosystem" items={content.services.items} />
    </main>
  );
}
