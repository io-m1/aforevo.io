import Link from 'next/link';
import { BrandItem } from '@/types/cms';

interface BrandShowcaseProps {
  brands: BrandItem[];
}

export default function BrandShowcase({ brands }: BrandShowcaseProps) {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4 space-y-24">
        {brands.map((brand, index) => (
          <div 
            key={brand.id} 
            className={`flex flex-col gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold tracking-wide">
                {brand.name}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{brand.tagline}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {brand.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {brand.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link 
                  href={brand.ctaLink}
                  className="inline-block border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors duration-200 font-semibold"
                >
                  {brand.ctaText}
                </Link>
              </div>
            </div>

            {/* Visual Side (Placeholder for Image) */}
            <div className="flex-1 w-full">
              <div className="aspect-video bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <span className="relative z-10 text-2xl font-bold text-gray-700">
                  {brand.name} Visual
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
