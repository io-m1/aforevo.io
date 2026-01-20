import Link from 'next/link';
import { HeroData } from '@/types/cms';
import YouTubeBackground from '@/components/ui/YouTubeBackground';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-end pb-20 md:pb-32 justify-center overflow-hidden bg-black">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <YouTubeBackground videoId="baoyWPnUpYU" />
      
      {/* 2. RESPONSIVE HUD LAYER */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center safe-padding mt-24 md:mt-0">
        
        {/* Status Pill (Responsive Size) */}
        <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           <div className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mbi-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-mbi-red"></span>
           </div>
           <span className="text-[10px] md:text-xs font-mono font-bold text-white tracking-[0.2em] uppercase">
             Live • Aforevo Cinema • Trending
           </span>
        </div>

        {/* Fluid Heading (Never Overlaps) */}
        <h1 className="text-fluid-h1 font-black text-white tracking-tighter mb-6 drop-shadow-2xl uppercase text-balance">
          {data.heading}
        </h1>
        
        {/* Fluid Subhead */}
        <div className="glass-panel px-6 py-4 md:px-8 md:py-6 rounded-2xl max-w-3xl mx-auto mb-8 md:mb-10 border border-white/10 bg-black/30 backdrop-blur-md">
          <p className="text-fluid-p text-gray-100 font-light text-balance">
            {data.subheading}
          </p>
        </div>
        
        {/* Responsive Buttons (Stack on Mobile) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <Link 
            href={data.ctaLink}
            className="w-full md:w-auto px-8 py-4 bg-mbi-red hover:bg-red-700 text-white font-bold text-lg tracking-wide rounded uppercase transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>{data.ctaText}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          
          <Link 
            href="/brands"
            className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-lg tracking-wide rounded uppercase transition-all border border-white/20"
          >
            Our Ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}
