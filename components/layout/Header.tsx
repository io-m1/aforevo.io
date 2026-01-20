'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Network', href: '/brands' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* 1. BRAND */}
        <Link href="/" className="relative z-50 hover:opacity-80 transition-opacity">
          <Logo className="text-2xl md:text-3xl" />
        </Link>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 bg-black/50 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive ? 'text-mbi-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/brands" 
            className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-mbi-gold transition-colors rounded-sm"
          >
            Partner
          </Link>
        </div>

        {/* 4. MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-white p-2"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* 5. MOBILE MENU OVERLAY */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-mbi-red"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}
