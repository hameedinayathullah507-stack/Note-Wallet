import React from 'react';
import { GoldDivider } from './GoldDivider';

interface VisualBreakProps {
  variant?: 'mosque' | 'floral' | 'geometric' | 'moon';
  title?: string;
  subtitle?: string;
}

export const VisualBreak: React.FC<VisualBreakProps> = ({
  variant = 'mosque',
  title,
  subtitle,
}) => {
  return (
    <div className="relative w-full py-12 md:py-16 my-8 overflow-hidden text-center flex flex-col items-center justify-center border-y border-[#B8954A]/30">
      {/* Translucent Ivory Overlay over Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1E5] via-[#EFE3D0]/80 to-[#F8F1E5] z-0 pointer-events-none" />

      {/* SVG Background Motif Pattern */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none z-0">
        {variant === 'mosque' && (
          <svg viewBox="0 0 200 200" className="w-80 h-80 text-[#B8954A] fill-current">
            <path d="M100 20 C70 45 60 70 60 100 L140 100 C140 70 130 45 100 20 Z M50 100 L150 100 L150 180 L50 180 Z" />
            <circle cx="100" cy="15" r="4" />
          </svg>
        )}

        {variant === 'geometric' && (
          <svg viewBox="0 0 200 200" className="w-80 h-80 text-[#B8954A] stroke-current fill-none stroke-[1.5]">
            <polygon points="100,10 125,75 190,75 138,115 160,180 100,140 40,180 62,115 10,75 75,75" />
            <circle cx="100" cy="100" r="85" strokeDasharray="4 4" />
          </svg>
        )}

        {variant === 'floral' && (
          <svg viewBox="0 0 200 200" className="w-80 h-80 text-[#B8954A] fill-current">
            <path d="M100 40 C90 70 70 90 40 100 C70 110 90 130 100 160 C110 130 130 110 160 100 C130 90 110 70 100 40 Z" />
          </svg>
        )}

        {variant === 'moon' && (
          <svg viewBox="0 0 200 200" className="w-72 h-72 text-[#B8954A] fill-current">
            <path d="M100 20 C60 20 30 50 30 90 C30 140 70 180 120 180 C90 160 80 120 95 85 C108 55 135 38 165 35 C145 25 123 20 100 20 Z" />
          </svg>
        )}
      </div>

      {/* Decorative Content Layer */}
      <div className="relative z-10 px-4 max-w-lg mx-auto">
        {title && (
          <h3 className="font-decorative text-lg md:text-2xl font-bold text-[#7A5B18] tracking-widest uppercase mb-1">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="font-serif text-sm md:text-base text-[#111111]/80 italic">
            {subtitle}
          </p>
        )}
        <GoldDivider variant="crescent" className="my-2" />
      </div>
    </div>
  );
};
