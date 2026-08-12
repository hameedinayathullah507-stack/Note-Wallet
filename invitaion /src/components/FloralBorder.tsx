import React from 'react';

interface FloralBorderProps {
  className?: string;
}

export const FloralBorder: React.FC<FloralBorderProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center opacity-80 my-2 ${className}`}>
      <svg
        viewBox="0 0 200 20"
        className="w-48 md:w-64 h-6 text-[#B8954A]"
        fill="currentColor"
      >
        <path d="M100 2c-5 4-15 4-20 0-5 4-15 4-20 0-5 4-15 4-20 0-5 4-15 4-20 0H0v2h200V2h-20c-5 4-15 4-20 0-5 4-15 4-20 0-5 4-15 4-20 0-5 4-15 4-20 0z" />
        <circle cx="100" cy="10" r="3" />
        <circle cx="80" cy="10" r="2" />
        <circle cx="120" cy="10" r="2" />
        <circle cx="60" cy="10" r="1.5" />
        <circle cx="140" cy="10" r="1.5" />
      </svg>
    </div>
  );
};
