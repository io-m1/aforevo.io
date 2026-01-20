import { Metadata } from 'next';
import Image from 'next/image';
import { MANIFESTO } from '@/content/manifesto';
import { LEADERSHIP } from '@/content/leadership';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Murphy Ben International',
  description: 'Since 2009, projecting the African narrative to the global stage.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      
      {/* 1. THE MANIFESTO */}
      <section className="container mx-auto px-4 mb-32">
        <div className="max-w-5xl">
          <span className="text-mbi-gold font-mono text-xs uppercase tracking-widest mb-4 block">
            Est. {MANIFESTO.founded} // {MANIFESTO.hq}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-12">
            &quot;{MANIFESTO.mission}&quot;
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {MANIFESTO.core_values.map((value, i) => {
              const [title, desc] = value.split(': ');
              return (
                <div key={i}>
                  <h3 className="text-mbi-red font-black text-xl mb-4">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. THE LEADERSHIP */}
      <section className="border-t border-white/10 bg-neutral-900/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
             <h2 className="text-3xl font-black uppercase tracking-widest mb-2">The Vanguards</h2>
             <p className="text-gray-500">The human intelligence behind the algorithm.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] bg-neutral-800 mb-6 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                    {leader.type}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{leader.name}</h3>
                <p className="text-mbi-red font-bold text-xs uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GLOBAL FOOTPRINT */}
      <section className="container mx-auto px-4 pt-24">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {MANIFESTO.global_presence.map((city, i) => (
            <div key={i} className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest text-gray-300 hover:bg-white hover:text-black transition-colors cursor-default">
              <MapPin className="w-4 h-4" />
              {city}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
