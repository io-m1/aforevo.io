'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data until Sanity is fully connected with env vars
const MOCK_TITAN = {
  name: "Chukwuma 'The Architect' Okeke",
  role: "Senior Dubbing Engineer",
  achievement: "Optimized 5,000hrs of Audio",
  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000",
  revealDate: new Date(Date.now() + 5000).toISOString() // Reveals in 5 seconds for demo
};

export default function TitanReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Timer Logic
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const revealTime = new Date(MOCK_TITAN.revealDate).getTime();
      const distance = revealTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("READY");
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-mbi-gold/5 animate-pulse pointer-events-none" />

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-mbi-gold font-black tracking-[0.3em] uppercase mb-12 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-mbi-gold"></span>
          Hall of Vanguards
          <span className="w-12 h-px bg-mbi-gold"></span>
        </h2>

        <div className="relative max-w-4xl mx-auto min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              /* PHASE 1: THE SILHOUETTE (Suspense) */
              <motion.div 
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-black rounded-full border-4 border-white/10 flex items-center justify-center mb-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                   {/* Silhouette Icon */}
                   <svg className="w-32 h-32 text-neutral-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                   
                   {/* Glitch Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                  UNVEILING THE TITAN
                </h3>
                
                <div className="text-2xl font-mono text-mbi-gold mb-8">
                  {timeLeft}
                </div>

                <button 
                  onClick={() => setIsRevealed(true)}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-white font-bold tracking-widest uppercase transition-all"
                >
                  {timeLeft === "READY" ? "REVEAL IDENTITY" : "WAIT FOR SIGNAL"}
                </button>
              </motion.div>
            ) : (
              /* PHASE 2: THE REVEAL (Celebration) */
              <motion.div 
                key="revealed"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="relative z-10"
              >
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-mbi-gold blur-2xl opacity-40 animate-pulse" />
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-mbi-gold shadow-2xl">
                    <Image 
                      src={MOCK_TITAN.image} 
                      alt={MOCK_TITAN.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-mbi-gold text-black px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Titan of the Month
                  </div>
                </div>

                <h3 className="text-5xl md:text-7xl font-black text-white mb-2 leading-none">
                  {MOCK_TITAN.name}
                </h3>
                <p className="text-xl text-mbi-gold mb-6 font-mono">
                  {MOCK_TITAN.role}
                </p>
                
                <div className="glass-panel inline-block px-8 py-6 rounded-xl max-w-2xl border-mbi-gold/20">
                  <p className="text-gray-300 italic text-lg">
                    "{MOCK_TITAN.achievement}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
