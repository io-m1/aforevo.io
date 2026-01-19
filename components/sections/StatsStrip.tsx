import { StatItem } from '@/types/cms';

interface StatsStripProps {
  stats: StatItem[];
}

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="w-full bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
          {stats.map((stat, index) => (
            <div key={index} className="py-8 md:py-12 px-4 flex flex-col items-center text-center hover:bg-neutral-800/50 transition-colors">
              <span className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-red-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
