import { client } from '@/sanity/lib/client';
import { activeAlertQuery } from '@/lib/sanity.queries';

export default async function AlertBanner() {
  // Fetch data directly on the server (0ms latency for users)
  const alert = await client.fetch(activeAlertQuery, {}, { next: { revalidate: 30 } });

  if (!alert) return null;

  const colors = {
    info: 'bg-blue-600',
    warning: 'bg-mbi-gold text-black',
    critical: 'bg-mbi-red text-white animate-pulse'
  };

  const bgClass = colors[alert.level as keyof typeof colors] || colors.info;

  return (
    <div className={`w-full py-2 px-4 text-center font-bold text-sm tracking-widest uppercase z-50 ${bgClass}`}>
      <span className="mr-2">🚨 BROADCAST:</span>
      {alert.message}
      {alert.link && (
        <a href={alert.link} className="ml-4 underline hover:no-underline">
          View Details →
        </a>
      )}
    </div>
  );
}
