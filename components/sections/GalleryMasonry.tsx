'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  src: string;
  category: string;
  caption: string;
  size: string; // 'large' | 'wide' | 'tall' | 'small'
}

interface GalleryProps {
  items: GalleryItem[];
  categories: string[];
}

export default function GalleryMasonry({ items, categories }: GalleryProps) {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section className="py-10">
      {/* 1. Filter Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${
              filter === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-gray-500 border-gray-800 hover:border-white hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Masonry Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                item.size === 'wide' ? 'md:col-span-2' :
                item.size === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              <Image 
                src={item.src} 
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-mbi-red text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full max-h-[90vh] relative aspect-video">
             <Image 
               src={selectedImage.src} 
               alt={selectedImage.caption}
               fill
               className="object-contain"
             />
             <div className="absolute bottom-[-50px] left-0 text-white">
                <h2 className="text-2xl font-bold">{selectedImage.caption}</h2>
             </div>
          </div>
        </div>
      )}
    </section>
  );
}
