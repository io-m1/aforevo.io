'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  type?: 'image' | 'video' | 'link';
  src: string;
  videoId?: string;
  linkUrl?: string;
  category: string;
  caption: string;
  size: string;
}

interface GalleryProps {
  items: GalleryItem[];
  categories: string[];
}

export default function GalleryMasonry({ items, categories }: GalleryProps) {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  const handleItemClick = (item: GalleryItem) => {
    if (item.type === 'link' && item.linkUrl) {
      window.open(item.linkUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <section className="py-10">
      {/* Filter Tabs */}
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

      {/* Masonry Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleItemClick(item)}
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
              
              {/* Type Indicators Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Video Play Icon */}
                {item.type === 'video' && (
                  <div className="w-16 h-16 rounded-full bg-mbi-red/90 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                     <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                )}
                {/* External Link Icon */}
                {item.type === 'link' && (
                   <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                   </div>
                )}
              </div>

              {/* Text Overlay */}
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

      {/* Lightbox Modal (For Images/Videos only) */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-6xl w-full relative aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
             {selectedItem.type === 'video' && selectedItem.videoId ? (
               <iframe 
                 src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1&rel=0`}
                 title={selectedItem.caption}
                 className="w-full h-full"
                 allow="autoplay; encrypted-media"
                 allowFullScreen
               />
             ) : (
               <>
                 <Image 
                   src={selectedItem.src} 
                   alt={selectedItem.caption}
                   fill
                   className="object-contain"
                 />
                 <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded">
                    <h2 className="text-xl font-bold">{selectedItem.caption}</h2>
                 </div>
               </>
             )}
          </div>
        </div>
      )}
    </section>
  );
}
