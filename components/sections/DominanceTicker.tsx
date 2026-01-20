export default function DominanceTicker() {
  const items = [
    "Aforevo Cinema: 2.6M+ Subs",
    "Monthly Views: 500M+",
    "Vybz FM: #1 Afrobeatz Station",
    "Dubbing: 5 Languages",
    "Revo+: Live on StarTimes Ch. 123",
    "Content Library: 20,000+ Hours",
    "Global Reach: 150+ Countries"
  ];

  return (
    <div className="w-full bg-mbi-red text-white overflow-hidden py-3 border-y border-red-800 relative z-40">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="mx-8 flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-mono font-bold uppercase tracking-widest">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
