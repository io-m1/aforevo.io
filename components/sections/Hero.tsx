import Link from 'next/link';
import { HeroData } from '@/types/cms';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-[85vh] flex items-center bg-black overflow-hidden">
      {/* 1. Cinematic Background (Darkened for text contrast) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 z-10" />
        {/* Placeholder for Video/Image Background - Phase 3 will inject actual media here */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2912&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay" />
      </div>
      
      {/* 2. Content Layer */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Brand Tag */}
          <div className="inline-block px-4 py-1 mb-6 border border-red-600/50 rounded-full bg-red-900/10 backdrop-blur-sm">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
              The Digital Architecture of Africa
            </span>
          </div>

          {/* Impact Heading  */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            {data.heading}
          </h1>
          
          {/* Narrative Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light border-l-2 border-red-600 pl-6">
            {data.subheading}
          </p>
          
          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              href={data.ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg tracking-wide rounded transition-all duration-200 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              {data.ctaText}
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold text-lg tracking-wide rounded transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
