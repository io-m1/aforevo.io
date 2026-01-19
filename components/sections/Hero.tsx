import Link from 'next/link';
import { HeroData } from '@/types/cms';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* 1. VIDEO BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
        
        {/* Placeholder Video - Replaces static image */}
        {/* In production, this would be a local <video> tag or a specialized video component */}
        <div className="w-full h-full relative">
           <img 
             src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2938&auto=format&fit=crop"
             alt="Cinematic Background"
             className="w-full h-full object-cover opacity-60 animate-pan"
           />
           {/* 'animate-pan' would be a custom keyframe for slow movement if video fails */}
        </div>
      </div>
      
      {/* 2. CONTENT LAYER */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
           <span className="w-2 h-2 rounded-full bg-mbi-red animate-pulse" />
           <span className="text-xs font-bold text-white tracking-widest uppercase">Streaming Live to 150+ Countries</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
          {data.heading}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          {data.subheading}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            href={data.ctaLink}
            className="group relative px-8 py-4 bg-mbi-red text-white font-bold text-lg tracking-wide rounded overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(230,57,70,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              {data.ctaText}
            </span>
          </Link>
          
          <Link 
            href="/brands"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-semibold text-lg rounded transition-all"
          >
            Explore the Catalog
          </Link>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
