"use client"

import { Radio, Square } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function RadioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const popupRef = useRef<Window | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // CLEANUP: If the user leaves the page, stop checking
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const toggleRadio = () => {
    // SCENARIO 1: Radio is playing -> User wants to stop it
    if (isPlaying && popupRef.current) {
      popupRef.current.close(); // Kill the window
      setIsPlaying(false);
      return;
    }

    // SCENARIO 2: Radio is off -> User wants to start it
    const width = 400;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const newWindow = window.open(
      'https://vybzfm.com/?proradio-popup=1', 
      'VybzFM', 
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`
    );

    if (newWindow) {
      popupRef.current = newWindow;
      setIsPlaying(true);

      // START HEARTBEAT: Check every 500ms if the user closed the window manually
      if (timerRef.current) clearInterval(timerRef.current);
      
      timerRef.current = setInterval(() => {
        if (newWindow.closed) {
          // The user hit 'X' on the popup
          setIsPlaying(false);
          if (timerRef.current) clearInterval(timerRef.current);
          popupRef.current = null;
        }
      }, 500);
    }
  };

  return (
    <button 
      onClick={toggleRadio}
      className={`
        relative group flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all overflow-hidden
        ${isPlaying ? 'bg-mbi-red text-white' : 'bg-black dark:bg-white text-white dark:text-black'}
      `}
    >
      {/* ANIMATED WAVE (Only visible when active) */}
      {isPlaying && (
        <span className="absolute inset-0 z-0 bg-[url('https://media.giphy.com/media/xT9IgusfDcqpPFzjdS/giphy.gif')] opacity-20 bg-cover bg-center" />
      )}

      {/* ICON - Swaps between Radio and Stop Square */}
      <div className="relative z-10 flex items-center justify-center">
        {isPlaying ? (
          <Square className="w-3 h-3 fill-current" /> // Stop Icon
        ) : (
          <Radio className="w-4 h-4" /> // Play Icon
        )}
      </div>

      {/* TEXT */}
      <span className="relative z-10 text-xs font-black uppercase tracking-widest min-w-[80px] text-center">
        {isPlaying ? 'ON AIR' : 'LIVE RADIO'}
      </span>
      
      {/* RED DOT (If not playing, shows 'Ready') */}
      {!isPlaying && (
        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-mbi-red rounded-full animate-pulse" />
      )}
    </button>
  );
}
