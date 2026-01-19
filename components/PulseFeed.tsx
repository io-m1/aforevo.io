import { useEffect, useState } from "react";

type PulseItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  link?: string;
};

export default function PulseFeed() {
  const [feed, setFeed] = useState<PulseItem[]>([]);

  useEffect(() => {
    async function fetchFeed() {
      // Example: replace with real CMS/DB/API source
      const response = await fetch("/api/pulse"); 
      const data: PulseItem[] = await response.json();
      setFeed(data);
    }
    fetchFeed();
  }, []);

  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Aforevo Pulse</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {feed.map(item => (
          <a key={item.id} href={item.link ?? "#"} className="block p-4 bg-gray-900 rounded hover:bg-gray-800 transition">
            <span className="text-sm text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</span>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-gray-300">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
