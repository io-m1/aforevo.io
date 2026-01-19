import { StatItem } from '@/types/cms';

interface StatsRowProps {
  stats: StatItem[];
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <section className="py-16 bg-red-900/10 border-y border-red-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}<span className="text-red-600">{stat.suffix}</span>
              </span>
              <span className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
