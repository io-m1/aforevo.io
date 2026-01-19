'use client'; // Switch to Client Component for Search State

import { useState } from 'react';
import Link from 'next/link';
import layoutData from '@/content/layout.json';
import MobileNav from '@/components/layout/MobileNav';
import SearchOverlay from '@/components/layout/SearchOverlay';

export default function Navbar() {
  const { navbar } = layoutData;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter relative z-50">
            MBI<span className="text-mbi-red">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navbar.links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link
              href={navbar.cta.href}
              className="px-6 py-2.5 text-sm font-bold text-black bg-white hover:bg-gray-200 transition-colors rounded-sm"
            >
              {navbar.cta.label}
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <MobileNav links={navbar.links} cta={navbar.cta} />
          </div>
        </div>
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
