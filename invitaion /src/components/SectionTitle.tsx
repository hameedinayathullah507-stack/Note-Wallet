import React from 'react';
import { GoldDivider } from './GoldDivider';

interface SectionTitleProps {
  arabic?: string;
  title: string;
  subtitle?: string;
  tamilSubtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  arabic,
  title,
  subtitle,
  tamilSubtitle,
  className = '',
}) => {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-10 px-4 ${className}`}>
      {arabic && (
        <div className="font-arabic text-2xl md:text-3xl text-[#B8954A] mb-2 dir-rtl tracking-wide animate-gold-glow">
          {arabic}
        </div>
      )}
      <h2 className="font-decorative text-2xl md:text-4xl text-[#111111] tracking-widest uppercase mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-serif text-base md:text-lg text-[#8C6B25] italic tracking-wide">
          {subtitle}
        </p>
      )}
      {tamilSubtitle && (
        <p className="font-tamil text-sm md:text-base text-[#111111]/80 mt-1">
          {tamilSubtitle}
        </p>
      )}
      <GoldDivider variant="ornate" />
    </div>
  );
};
