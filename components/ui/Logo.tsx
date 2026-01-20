import React from 'react';

export default function Logo({ className = "text-3xl" }: { className?: string }) {
  return (
    <div className={`flex items-baseline leading-none font-black tracking-tighter select-none ${className}`}>
      <span className="text-black dark:text-white drop-shadow-sm transition-colors">
        MBI
      </span>
      <span className="text-mbi-red ml-[1px]">
        .
      </span>
    </div>
  );
}
