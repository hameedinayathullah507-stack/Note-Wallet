import React from 'react';

interface GoldCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const GoldCorner: React.FC<GoldCornerProps> = ({
  position,
  className = '',
  size = 64,
}) => {
  const getRotation = () => {
    switch (position) {
      case 'top-left':
        return 'rotate-0';
      case 'top-right':
        return 'rotate-90';
      case 'bottom-right':
        return 'rotate-180';
      case 'bottom-left':
        return '-rotate-90';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none z-10 ${getRotation()} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#B8954A]"
      >
        {/* Outer Corner Frame Lines */}
        <path
          d="M 2,100 L 2,16 C 2,8.3 8.3,2 16,2 L 100,2"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 8,100 L 8,22 C 8,14.3 14.3,8 22,8 L 100,8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 2.5"
          strokeLinecap="round"
        />

        {/* Intricate Filigree Ornament Motif */}
        <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="3.5" fill="currentColor" />
        
        {/* Flourish Petals */}
        <path
          d="M 28,12 C 28,12 35,19 28,20 C 21,19 28,12 28,12 Z"
          fill="currentColor"
        />
        <path
          d="M 44,28 C 44,28 37,35 36,28 C 37,21 44,28 44,28 Z"
          fill="currentColor"
        />
        <path
          d="M 28,44 C 28,44 21,37 28,36 C 35,37 28,44 28,44 Z"
          fill="currentColor"
        />
        <path
          d="M 12,28 C 12,28 19,21 20,28 C 19,35 12,28 12,28 Z"
          fill="currentColor"
        />

        {/* Outer Curved Swirls */}
        <path
          d="M 28,6 C 52,6 70,20 82,2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 6,28 C 6,52 20,70 2,82"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Accent Mandala Dots */}
        <circle cx="54" cy="18" r="2.5" fill="currentColor" />
        <circle cx="18" cy="54" r="2.5" fill="currentColor" />
        <circle cx="74" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="74" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};
