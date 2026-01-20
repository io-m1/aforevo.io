import { client } from '@/sanity/lib/client';
import { activeAlertQuery } from '@/lib/sanity.queries';

export default async function AlertBanner() {
  try {
    // Attempt to fetch data with a timeout logic or standard fetch
    const alert = await client.fetch(activeAlertQuery, {}, { next: { revalidate: 30 } });

    if (!alert) return null;

    const colors: Record<string, string> = {
      info: 'bg-blue-600',
      warning: 'bg-mbi-gold text-black',
      critical: 'bg-mbi-red text-white animate-pulse'
    };

    const bgClass = colors[alert.level as string] || colors.info;

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
  } catch (error) {
    // SILENT FAIL: If database is unreachable (e.g. during build), render nothing.
    console.warn("⚠️ AlertBanner failed to fetch. Hiding banner.", error);
    return null;
  }
}
