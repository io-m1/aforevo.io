import { Metadata } from 'next';
import { getHomePageContent, getMediaContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import YouTubeGrid from '@/components/sections/YouTubeGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';

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
  const media = await getMediaContent(); // Keep media/movies for sliders if needed

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* 1. HERO: Authority & Positioning */}
      <Hero data={content.hero} />
      
      {/* 2. STATS: Immediate Scale Proof */}
      <StatsStrip stats={content.metrics.items} />
      
      {/* 3. YOUTUBE GRID: The "Scoreboard" */}
      <YouTubeGrid heading={content.youtube.heading} channels={content.youtube.channels} />
      
      {/* 4. ECOSYSTEM: Breadth of Services */}
      <ServicesGrid heading="Our Ecosystem" items={content.services.items} />
    </main>
  );
}
