'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types/layout';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  links: NavLink[];
  cta: NavLink;
}

export default function MobileNav({ links, cta }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none relative z-50"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
          <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-2xl font-bold text-gray-300 hover:text-white hover:text-red-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="w-12 h-1 bg-gray-800 rounded-full my-4" />
          
          <Link
            href={cta.href}
            className="px-8 py-4 text-xl font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
