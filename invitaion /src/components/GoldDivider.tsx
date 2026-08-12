import React from 'react';

interface GoldDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'crescent';
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  variant = 'ornate',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#B8954A] to-[#B8954A]" />
        <div className="w-2 h-2 rotate-45 bg-[#B8954A]" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-[#B8954A] to-[#B8954A]" />
      </div>
    );
  }

  if (variant === 'crescent') {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
        <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent via-[#B8954A] to-[#B8954A]" />
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#B8954A] fill-current">
          <path d="M12 21.334c-5.155 0-9.334-4.179-9.334-9.334s4.179-9.334 9.334-9.334c.333 0 .66.018.98.051-2.036.78-3.48 2.748-3.48 5.116 0 3.037 2.463 5.5 5.5 5.5 2.368 0 4.336-1.444 5.116-3.48.033.32.051.647.051.98 0 5.155-4.179 9.334-9.334 9.334zM18.8 8l-.6-1.8-1.8-.6 1.8-.6.6-1.8.6 1.8 1.8.6-1.8.6-.6 1.8z" />
        </svg>
        <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent via-[#B8954A] to-[#B8954A]" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center my-6 gap-2 md:gap-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-r from-transparent via-[#B8954A] to-[#B8954A]" />
      <svg
        viewBox="0 0 100 24"
        className="w-24 md:w-32 h-6 text-[#B8954A]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,12 L 35,12" stroke="currentColor" strokeWidth="1" />
        <path d="M 65,12 L 100,12" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="12" r="4" fill="currentColor" />
        <circle cx="40" cy="12" r="2.5" fill="currentColor" />
        <circle cx="60" cy="12" r="2.5" fill="currentColor" />
        <path d="M 45,6 C 47,9 53,9 55,6" stroke="currentColor" strokeWidth="1" />
        <path d="M 45,18 C 47,15 53,15 55,18" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="h-[1px] flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-l from-transparent via-[#B8954A] to-[#B8954A]" />
    </div>
  );
};
