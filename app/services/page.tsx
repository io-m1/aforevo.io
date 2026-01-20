import { Metadata } from 'next';
import { EMPIRE_SERVICES } from '@/content/services';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Murphy Ben International',
  description: 'The infrastructure of African digital media. Dubbing, Distribution, MCN Management, and Syndication.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-2 mb-4 text-mbi-red font-bold uppercase tracking-[0.3em] text-xs">
            <ShieldCheck className="w-4 h-4" />
            Infrastructure & Tech
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            WE BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mbi-red to-mbi-gold">
              DIGITAL PIPELINES.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-4 border-mbi-red pl-6">
            We don&apos;t just create content; we own the rails it runs on. From satellite uplinks to algorithmic monetization.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EMPIRE_SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-10 border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-mbi-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-widest bg-white/5 text-gray-400 rounded-sm">
                  {service.category}
                </span>
                <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{service.title}</h3>
                <p className="text-mbi-gold font-bold text-sm uppercase tracking-widest mb-6">{service.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <div className="w-1.5 h-1.5 bg-mbi-red rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-mbi-red transition-colors">
                  Deploy Capability <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
