import { Metadata } from 'next';
import { getHomePageContent, getMediaContent, getPulseContent } from '@/lib/content';
import { getLiveYouTubeMetrics } from '@/lib/youtube';
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

// Helper to sum up metrics (Mock or Live logic)
function aggregateMetrics(channels: any[]) {
  return {
    totalSubs: "10.4M", 
    totalViews: "500M+"
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const media = await getMediaContent();
  const pulse = await getPulseContent();
  
  // Secure Server-Side Fetch
  const liveChannels = await getLiveYouTubeMetrics();
  
  // Aggregation
  const aggregatedStats = aggregateMetrics(liveChannels);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* 1. Cinematic Hero (Legacy Authority) */}
      <Hero data={content.hero} />
      
      {/* 2. Live Stats Strip (Immediate Proof) */}
      <StatsStrip stats={content.metrics.items} />
      
      {/* 3. Media Visuals (Dopamine/Engagement) */}
      <div className="space-y-0">
        <MediaRow heading={media.movies.heading} items={media.movies.items} type="movie" />
      </div>

      {/* 4. Detailed Youtube Grid (Dominance) */}
      <YouTubeGrid heading={content.youtube.heading} channels={liveChannels} />
      
      {/* 5. Pulse Network (Liveness & Activity) */}
      <PulseNetwork data={pulse} liveStats={aggregatedStats} />

      {/* 6. Ecosystem (Business Services) */}
      <ServicesGrid heading="Our Ecosystem" items={content.services.items} />
    </main>
  );
}
