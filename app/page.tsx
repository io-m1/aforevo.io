import { Metadata } from 'next';
import { getHomePageContent, getMediaContent, getPulseContent } from '@/lib/content';
import { getLiveYouTubeMetrics } from '@/lib/youtube';
import { getPulseFromWordPress } from '@/lib/wordpress';
import Hero from '@/components/sections/Hero';
import DominanceTicker from '@/components/sections/DominanceTicker';
import StatsStrip from '@/components/sections/StatsStrip';
import YouTubeGrid from '@/components/sections/YouTubeGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';
import MediaRow from '@/components/sections/MediaRow';
import PulseNetwork from '@/components/sections/PulseNetwork';
import FeaturedVideos from '@/components/sections/FeaturedVideos';
import NetworkGrid from '@/components/sections/NetworkGrid';
import TitanReveal from '@/components/sections/TitanReveal'; // NEW IMPORT

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
  };
}

function aggregateMetrics(channels: any[]) {
  return { totalSubs: "10.4M", totalViews: "500M+" };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const media = await getMediaContent();
  const staticPulse = await getPulseContent();
  
  const [liveChannels, wpPosts] = await Promise.all([
    getLiveYouTubeMetrics(),
    getPulseFromWordPress()
  ]);

  const aggregatedStats = aggregateMetrics(liveChannels);

  // Transform WP data
  const newsItems = wpPosts.map((post: any) => ({
    id: `wp-${post.id}`,
    category: "News Flash",
    message: post.title,
    timestamp: "Just Now",
    location: "Global Wire",
    stats: "Read More"
  }));

  const mergedPulse = {
    ...staticPulse,
    items: [ ...newsItems, ...staticPulse.items ].slice(0, 8)
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Hero data={content.hero} />
      <DominanceTicker />
      <StatsStrip stats={content.metrics.items} />
      
      <FeaturedVideos />
      <NetworkGrid />

      {/* THE TITAN REVEAL (Culture Layer) */}
      <TitanReveal />

      <YouTubeGrid heading={content.youtube.heading} channels={liveChannels} />
      <PulseNetwork data={mergedPulse} liveStats={aggregatedStats} />
      
      <div className="space-y-0">
        <MediaRow heading={media.movies.heading} items={media.movies.items} type="movie" />
      </div>

      <ServicesGrid heading="Our Ecosystem" items={content.services.items} />
    </main>
  );
}
