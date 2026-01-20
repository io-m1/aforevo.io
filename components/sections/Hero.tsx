import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND - Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070')] bg-cover bg-center opacity-40" />
      </div>

      {/* CONTENT - The Command Center */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-4xl">
          {/* THE AUTHORITY BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-mbi-red/30 bg-mbi-red/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-mbi-red animate-pulse" />
            <span className="text-mbi-red text-[10px] font-black uppercase tracking-[0.2em]">
              System Operational
            </span>
          </div>

          {/* THE HEADLINE */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            AFRICA&apos;S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mbi-red to-mbi-gold">
              PREMIER CONTENT ENGINE.
            </span>
          </h1>

          {/* THE TAGLINE (Fixed to match BRAIN.MD) */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-10 border-l-4 border-mbi-gold pl-6">
            Africa&apos;s Leading Digital Media & Entertainment Company. 
            We own the infrastructure, the audience, and the IP.
          </p>

          {/* THE CTAS */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/brands" 
              className="px-8 py-4 bg-mbi-red text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group"
            >
              <Play className="w-4 h-4 fill-current" />
              Start Watching
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              Our Infrastructure <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
      </div>
    </section>
  );
}
