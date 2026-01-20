import { Metadata } from 'next';
import { NETWORK_CHANNELS } from '@/content/network';
import { Users, Play, Radio, Film, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Network Brands | Murphy Ben International',
  description: 'Explore the 50+ channels and brands comprising Africa\'s largest digital media network.',
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      
      {/* 1. HEADER: The Scale Claim */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4 text-mbi-red font-bold uppercase tracking-[0.3em] text-xs">
            <Radio className="w-4 h-4" />
            The Frequency
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            50+ CHANNELS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mbi-red to-mbi-gold">
              ONE DOMINANT SIGNAL.
            </span>
          </h1>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 border-y border-white/10 py-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">10.4M+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total Subs</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">500M+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Monthly Views</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">15</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Languages</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE GRID */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NETWORK_CHANNELS.map((channel, i) => (
            <div 
              key={i}
              className={`group relative p-6 border bg-neutral-900/50 transition-all hover:-translate-y-1 ${channel.isFlagship ? 'border-mbi-red/30 bg-mbi-red/5' : 'border-white/10 hover:border-white/30'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">
                  {channel.category}
                </span>
                {channel.isFlagship && (
                  <CheckCircle2 className="w-5 h-5 text-mbi-gold" />
                )}
              </div>
              
              <h3 className="text-xl font-black text-white mb-1 truncate">{channel.name}</h3>
              <p className="text-sm font-mono text-mbi-red mb-4">{channel.handle}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                {channel.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Users className="w-4 h-4 text-gray-500" />
                  {channel.subscribers}
                </div>
                <button className="p-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA */}
      <div className="container mx-auto px-4 mt-24">
        <div className="p-12 border border-white/10 bg-gradient-to-r from-neutral-900 to-black rounded-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase">Own a Channel? Join the Empire.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            We provide the rights management, monetization tools, and global distribution network to 10x your growth.
          </p>
          <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-mbi-gold transition-colors">
            Apply for Partnership
          </button>
        </div>
      </div>

    </main>
  );
}
