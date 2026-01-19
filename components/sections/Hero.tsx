/**
 * Purpose: Primary landing visual. High impact.
 * Depends on: types/cms.ts
 */

import Link from 'next/link';
import { HeroData } from '@/types/cms';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Overlay - Placeholder for future next/image implementation */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
          {data.heading}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          {data.subheading}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link 
            href={data.ctaLink}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-200"
          >
            {data.ctaText}
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold rounded-md transition-colors duration-200"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
