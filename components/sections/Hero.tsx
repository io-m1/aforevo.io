import Link from 'next/link';
import { HeroData } from '@/types/cms';
import YouTubeBackground from '@/components/ui/YouTubeBackground';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-end pb-20 md:pb-32 justify-center overflow-hidden bg-black">
      
      {/* 1. CINEMATIC YOUTUBE LAYER */}
      <YouTubeBackground videoId="baoyWPnUpYU" />
      
      {/* 2. "LIVE EMPIRE" HUD LAYER */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mbi-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mbi-red"></span>
           </div>
           <span className="text-xs font-mono font-bold text-white tracking-[0.2em] uppercase">
             System Online • Aforevo Cinema • Trending Now
           </span>
        </div>

        {/* Mega Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl uppercase">
          {data.heading}
        </h1>
        
        {/* Subhead with Glass Effect */}
        <div className="glass-panel px-8 py-6 rounded-2xl max-w-3xl mx-auto mb-10 border border-white/10 bg-black/30 backdrop-blur-md">
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
            {data.subheading}
          </p>
        </div>
        
        {/* Action Grid */}
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
      
      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
