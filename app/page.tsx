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

// Helper to sum up metrics (with fallback for "1.2M" strings or raw numbers)
function aggregateMetrics(channels: any[]) {
  // Logic to parse "1.2M" or numbers would go here. 
  // For MVP with static strings, we return a representative total or the first channel's dominant stat.
  // If using real API, we would sum the raw integers.
  
  // Mock aggregation for the Visualizer:
  return {
    totalSubs: "10.4M", // Replace with logic to sum real API data
    totalViews: "500M+"
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const media = await getMediaContent();
  const pulse = await getPulseContent();
  
  // Server-side Fetch (Secure)
  const liveChannels = await getLiveYouTubeMetrics();
  
  // Calculate totals for the Pulse visualizer
  const aggregatedStats = aggregateMetrics(liveChannels);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero data={content.hero} />
      
      <StatsStrip stats={content.metrics.items} />
      
      <div className="space-y-0">
        <MediaRow heading={media.movies.heading} items={media.movies.items} type="movie" />
      </div>

      {/* Shows detailed breakdown */}
      <YouTubeGrid heading={content.youtube.heading} channels={liveChannels} />
      
      {/* Shows "Empire in Motion" with aggregated stats */}
      <PulseNetwork data={pulse} liveStats={aggregatedStats} />

      <ServicesGrid heading="Our Ecosystem" items={content.services.items} />
    </main>
  );
}
