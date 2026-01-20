"use client"

import { Radio, Play } from 'lucide-react';
import { useState } from 'react';

export default function RadioButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const openRadio = () => {
    setIsPlaying(true);
    // Open the satellite window
    window.open(
      'https://vybzfm.com/?proradio-popup=1', 
      'VybzFM', 
      'width=400,height=600,menubar=no,toolbar=no,location=no,status=no'
    );
  };

  return (
    <button 
      onClick={openRadio}
      className={`
        relative group flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all overflow-hidden
        ${isPlaying ? 'bg-mbi-red text-white' : 'bg-black dark:bg-white text-white dark:text-black'}
      `}
    >
      {/* ANIMATED WAVE (Only visible when active) */}
      {isPlaying && (
        <span className="absolute inset-0 z-0 bg-[url('https://media.giphy.com/media/xT9IgusfDcqpPFzjdS/giphy.gif')] opacity-20 bg-cover bg-center" />
      )}

      {/* ICON */}
      <div className="relative z-10 flex items-center justify-center">
        {isPlaying ? (
          <span className="flex gap-[2px] items-end h-3">
            <span className="w-0.5 bg-white animate-[bounce_1s_infinite] h-2" />
            <span className="w-0.5 bg-white animate-[bounce_1.2s_infinite] h-3" />
            <span className="w-0.5 bg-white animate-[bounce_0.8s_infinite] h-1.5" />
          </span>
        ) : (
          <Radio className="w-4 h-4" />
        )}
      </div>

      {/* TEXT */}
      <span className="relative z-10 text-xs font-black uppercase tracking-widest">
        {isPlaying ? 'ON AIR' : 'LIVE RADIO'}
      </span>
      
      {/* RED DOT (If not playing, shows 'Ready') */}
      {!isPlaying && (
        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-mbi-red rounded-full animate-pulse" />
      )}
    </button>
  );
}
