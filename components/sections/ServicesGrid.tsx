import Link from 'next/link';
import { ServiceItem } from '@/types/cms';

interface ServicesGridProps {
  heading: string;
  items: ServiceItem[];
}

export default function ServicesGrid({ heading, items }: ServicesGridProps) {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {heading}
          </h2>
          <div className="h-1 w-20 bg-red-600 rounded-full" />
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:bg-gray-900 hover:border-red-600/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Decorative Number */}
              <span className="absolute top-6 right-8 text-6xl font-black text-gray-800/30 group-hover:text-red-900/20 transition-colors select-none">
                0{index + 1}
              </span>

              {/* Icon Placeholder (SVGs can be added here) */}
              <div className="w-12 h-12 mb-6 rounded-lg bg-red-600/10 flex items-center justify-center text-red-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link 
                  href={item.link} 
                  className="inline-flex items-center text-sm font-semibold text-white group-hover:text-red-500 transition-colors"
                >
                  Explore Brand 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
