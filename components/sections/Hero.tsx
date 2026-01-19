import Link from 'next/link';
import { HeroData } from '@/types/cms';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-black">
      {/* 1. VIDEO BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
        
        {/* Cinematic Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          {/* Using a reliable stock cinematic background that fits the 'African City / Tech' vibe */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* 2. CONTENT LAYER */}
      <div className="relative z-30 container mx-auto px-4 text-center mt-20">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 animate-fade-in-up">
           <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
           </span>
           <span className="text-xs font-bold text-white tracking-widest uppercase">
             Live Ecosystem • 150+ Countries
           </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 drop-shadow-2xl leading-[0.9]">
          {data.heading}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
          {data.subheading}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            href={data.ctaLink}
            className="group relative px-10 py-5 bg-mbi-red text-white font-bold text-xl tracking-wide rounded overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(230,57,70,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              {data.ctaText}
            </span>
          </Link>
          
          <Link 
            href="/brands"
            className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xl rounded transition-all hover:border-white/50"
          >
            Explore Ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}
