'use client';

import { useEffect, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
}

export default function YouTubeBackground({ videoId }: YouTubeBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <iframe
        className="w-full h-full scale-[1.5] md:scale-[1.3] object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&start=120`}
        allow="autoplay; encrypted-media"
        title="Hero Background"
        style={{ opacity: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
    </div>
  );
}
