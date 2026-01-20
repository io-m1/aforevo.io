import React from 'react';

export default function Logo({ className = "text-3xl" }: { className?: string }) {
  // Using items-baseline ensures the dot sits perfectly on the text baseline
  return (
    <div className={`flex items-baseline leading-none font-black tracking-tighter select-none ${className}`}>
      {/* The Monolith */}
      <span className="text-white drop-shadow-sm">
        MBI
      </span>
      {/* The Authority Dot */}
      <span className="text-mbi-red ml-[1px]">
        .
      </span>
    </div>
  );
}
