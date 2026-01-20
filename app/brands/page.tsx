'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { brandsData } from '@/content/brands';

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-mbi-gold font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            The MBI Ecosystem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-h1 font-black mb-6"
          >
            DOMINATING EVERY SCREEN <br /> AND FREQUENCY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            From terrestrial radio to digital streaming, our portfolio covers the entire entertainment value chain.
          </motion.p>
        </div>

        {/* BRANDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandsData.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors"
            >
              {/* Background Image */}
              <Image 
                src={brand.image} 
                alt={brand.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-20 group-hover:opacity-40 transition-opacity mix-blend-overlay`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  <brand.icon className="w-6 h-6" />
                </div>

                <h2 className="text-3xl font-black mb-2">{brand.name}</h2>
                <p className="text-mbi-gold text-sm font-bold uppercase tracking-wider mb-4">{brand.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {brand.description}
                </p>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <div className="text-2xl font-black text-white">{brand.stats.value}</div>
                    <div className="text-[10px] uppercase text-gray-500 font-bold">{brand.stats.label}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
