import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import DominanceTicker from '@/components/sections/DominanceTicker';
import FeaturedVideos from '@/components/sections/FeaturedVideos';
import NetworkGrid from '@/components/sections/NetworkGrid';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Murphy Ben International | Africa\'s Premier Content Engine',
  description: 'Dominating African entertainment since 2009. 10.4M+ Subscribers, 500M+ Monthly Views.',
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white antialiased">
      
      {/* 1. HERO: The Command Center (Self-Contained) */}
      <Hero />
      
      {/* 2. PROOF: Ticking Metrics */}
      <DominanceTicker />
      
      {/* 3. MEDIA: Top Picks (Self-Contained) */}
      <FeaturedVideos />
      
      {/* 4. INFRASTRUCTURE: Quick Service Preview */}
      <section className="bg-neutral-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4 text-mbi-red font-bold uppercase tracking-[0.3em] text-xs">
                <ShieldCheck className="w-4 h-4" />
                The Ecosystem
              </div>
              <h2 className="text-4xl font-black text-white uppercase mb-4">Integrated Media Dominance</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We don&apos;t just create content. We own the dubbing studios, the distribution pipelines, and the monetization tech that powers it.
              </p>
            </div>
            <Link 
              href="/services" 
              className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-mbi-gold transition-colors text-xs flex items-center gap-2"
            >
              Explore Infrastructure <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE ARMY: Network Grid (Self-Contained) */}
      <NetworkGrid />

    </main>
  );
}
