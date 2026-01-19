'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchContent } from '@/lib/search';
import { SearchResult } from '@/types/search';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const hits = searchContent(query);
    setResults(hits);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-end">
        <button 
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="sr-only">Close</span>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative mb-12">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search movies, artists, or brands..."
            className="w-full bg-transparent border-b-2 border-gray-800 text-3xl md:text-5xl font-bold text-white placeholder-gray-600 focus:outline-none focus:border-mbi-red py-4 transition-colors"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
          {results.map((item) => (
            <Link 
              key={`${item.category}-${item.id}`}
              href={item.href}
              onClick={onClose}
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex-shrink-0 overflow-hidden relative">
                {item.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-xs font-bold uppercase">{item.category[0]}</span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-mbi-red transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    item.category === 'Brand' ? 'bg-blue-900/30 text-blue-400' :
                    item.category === 'Movie' ? 'bg-red-900/30 text-red-400' :
                    item.category === 'Music' ? 'bg-purple-900/30 text-purple-400' :
                    'bg-gray-800 text-gray-400'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-400 truncate max-w-[200px]">
                    {item.description}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {query && results.length === 0 && (
             <div className="col-span-full text-center py-12 text-gray-500">
               No results found for &quot;{query}&quot;
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
