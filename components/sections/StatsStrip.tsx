import { Users, Play, Radio, Globe } from 'lucide-react';

const STATS = [
  { 
    label: "TOTAL SUBSCRIBERS", 
    value: "10.4M+", 
    icon: <Users className="w-5 h-5 text-mbi-red" /> 
  },
  { 
    label: "MONTHLY VIEWS", 
    value: "550M+", 
    icon: <Play className="w-5 h-5 text-mbi-red" /> 
  },
  { 
    label: "ACTIVE CHANNELS", 
    value: "50+", 
    icon: <Radio className="w-5 h-5 text-mbi-red" /> 
  },
  { 
    label: "GLOBAL REACH", 
    value: "150+", 
    suffix: "Countries",
    icon: <Globe className="w-5 h-5 text-mbi-red" /> 
  },
];

export default function StatsStrip() {
  return (
    <section className="border-b border-white/10 bg-neutral-900/50 backdrop-blur-sm z-30 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <div key={i} className="flex items-center justify-center py-6 gap-4 group hover:bg-white/5 transition-colors cursor-default">
              <div className="p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-mbi-gold transition-colors mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
