import React from 'react';
import { GoldCorner } from './GoldCorner';

interface OrnamentalFrameProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  cornerSize?: number;
  showInnerBorder?: boolean;
}

export const OrnamentalFrame: React.FC<OrnamentalFrameProps> = ({
  children,
  className = '',
  innerClassName = '',
  cornerSize = 48,
  showInnerBorder = true,
}) => {
  return (
    <div className={`relative p-4 md:p-8 ivory-card rounded-sm ${className}`}>
      {/* 4 Decorative Corner Ornaments */}
      <GoldCorner position="top-left" size={cornerSize} className="top-1 left-1" />
      <GoldCorner position="top-right" size={cornerSize} className="top-1 right-1" />
      <GoldCorner position="bottom-left" size={cornerSize} className="bottom-1 left-1" />
      <GoldCorner position="bottom-right" size={cornerSize} className="bottom-1 right-1" />

      {/* Outer Border Line */}
      <div className="absolute inset-2 border border-[#B8954A] pointer-events-none rounded-xs" />

      {/* Inner Decorative Border Line */}
      {showInnerBorder && (
        <div className="absolute inset-3 border border-dashed border-[#D8BE7A]/60 pointer-events-none rounded-xs" />
      )}

      {/* Content Container */}
      <div className={`relative z-10 p-4 md:p-6 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};
