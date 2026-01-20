'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import RadioButton from '@/components/ui/RadioButton'; // IMPORT RADIO
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* 1. BRAND */}
        <Link href="/" className="relative z-50 hover:opacity-80 transition-opacity">
          <Logo className="text-2xl md:text-3xl" />
        </Link>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 bg-white/50 dark:bg-black/50 px-8 py-3 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive 
                    ? 'text-mbi-red' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. ACTIONS (Theme + Radio) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <RadioButton /> {/* THE NEW SATELLITE LINK */}
        </div>

        {/* 4. MOBILE TOGGLE */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
          <RadioButton /> {/* ALSO ON MOBILE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white p-2"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* 5. MOBILE MENU OVERLAY */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white hover:text-mbi-red"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-8">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
