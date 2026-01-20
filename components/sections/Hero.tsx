'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, Users, Globe, Tv } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  // Hardcoded Empire Metrics for immediate visual impact
  const empireMetrics = [
    { icon: Users, label: "Subscribers", value: "10.4M+" },
    { icon: Tv, label: "Monthly Views", value: "500M+" },
    { icon: Globe, label: "Countries", value: "150+" },
  ];

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* 1. CINEMATIC VIDEO ENGINE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          {/* Adakirikiri - The visual hook */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* 2. THE EMPIRE CONTENT LAYER */}
      <div className="container relative z-10 px-4 pt-20 text-center">
        
        {/* Verified Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-mbi-green animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-white/90">Verified Media Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-h1 font-black leading-none mb-6 tracking-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            AFRICA&apos;S PREMIER
          </span>
          <span className="block text-white drop-shadow-2xl">
            CONTENT ENGINE
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          We own the infrastructure, the audience, and the IP. 
          <span className="text-white font-medium"> The largest Nollywood & Afrobeats network in the world.</span>
        </motion.p>

        {/* 3. EMPIRE METRICS BLOCK (The Proof) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
        >
          {empireMetrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <metric.icon className="w-5 h-5 text-mbi-gold" />
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{metric.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 4. PRIMARY INTERACTION LOOP (The Funnel) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-mbi-red text-white font-black uppercase tracking-widest rounded hover:bg-red-700 transition-all flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Play className="w-5 h-5 fill-current" />
            <span className="relative">Start Watching</span>
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm">
            <span>Explore Network</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll to Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-mbi-gold to-transparent" />
      </motion.div>
    </section>
  );
}
