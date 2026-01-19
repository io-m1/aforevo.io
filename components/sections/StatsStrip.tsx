'use client';

import { useEffect, useState } from 'react';
import { StatItem } from '@/types/cms';

interface StatsStripProps {
  stats: StatItem[];
}

// Simple easing function for the counter
const easeOutQuad = (t: number) => t * (2 - t);

const Counter = ({ end, duration = 2000, suffix = '' }: { end: string, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(end.replace(/[^0-9]/g, '')); // Extract number
  const isK = end.includes('K');
  const isM = end.includes('M');
  const isB = end.includes('B');

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(easeOutQuad(progress) * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  // Reconstruct string
  let display = count.toString();
  if (isM) display += 'M';
  else if (isK) display += 'K';
  else if (isB) display += 'B';
  
  return <span>{display}{end.includes('+') ? '+' : ''}{suffix}</span>;
};

export default function StatsStrip({ stats }: StatsStripProps) {
  // Use Client-Side mounting check to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full bg-neutral-900 border-y border-neutral-800 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
          {stats.map((stat, index) => (
            <div key={index} className="py-10 md:py-16 px-4 flex flex-col items-center text-center hover:bg-neutral-800/50 transition-colors group cursor-default">
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-3 group-hover:text-mbi-red transition-colors">
                {mounted ? <Counter end={stat.value} suffix={stat.suffix} /> : stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
