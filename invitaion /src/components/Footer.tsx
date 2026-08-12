import React from 'react';
import { wedding } from '../data/wedding';
import { GoldCorner } from './GoldCorner';
import { GoldDivider } from './GoldDivider';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-16 px-3 sm:px-4 bg-[#FAF6EF] border-t border-[#B8954A] relative text-center w-full">
      <div className="max-w-xl mx-auto relative p-6 sm:p-8 ivory-card gold-border-double rounded-sm shadow-xl">
        <GoldCorner position="top-left" size={36} className="top-1 left-1" />
        <GoldCorner position="top-right" size={36} className="top-1 right-1" />
        <GoldCorner position="bottom-left" size={36} className="bottom-1 left-1" />
        <GoldCorner position="bottom-right" size={36} className="bottom-1 right-1" />

        <div className="font-arabic text-2xl sm:text-4xl text-[#B8954A] mb-2 animate-gold-glow">
          جَزَاكُمُ اللَّهُ خَيْرًا
        </div>

        <p className="font-serif text-xs sm:text-sm italic text-[#7A5B18] mb-3 font-semibold">
          Jazakumullahu Khairan
        </p>

        <GoldDivider variant="ornate" className="my-2" />

        <h3 className="font-serif-heading text-xl sm:text-3xl font-bold tracking-widest text-gold-metallic uppercase my-1 inline-flex items-baseline justify-center gap-1.5">
          <span className="text-[0.75em] text-[#B8954A] font-serif">A.</span>
          <span>{wedding.groom.name}</span>
        </h3>
        
        <div className="font-script text-2xl sm:text-3xl text-[#B8954A] my-0.5">&</div>
        
        <div className="my-1">
          <div className="font-serif italic text-xs text-[#7A5B18] font-semibold mb-0.5">
            {wedding.bride.title}
          </div>
          <h3 className="font-serif-heading text-base sm:text-xl font-bold tracking-widest text-gold-metallic uppercase">
            <span className="text-[0.75em] text-[#B8954A] font-serif mr-1">A.</span>
            <span>MAHIRA RAHAMATH FATHIMA</span>
          </h3>
        </div>

        <p className="font-decorative text-[11px] sm:text-xs tracking-widest uppercase text-[#7A5B18] font-bold mt-2">
          05 SEPTEMBER 2026 &bull; NAGORE
        </p>

        <p className="font-serif text-sm sm:text-base text-[#111111]/85 mt-3 italic font-medium">
          &ldquo;With Love, Duas & Blessings&rdquo;
        </p>

        <div className="mt-5 pt-4 border-t border-dashed border-[#B8954A]/30 text-[11px] font-serif text-[#111111]/60">
          &copy; 2026 A. Muhammad & Aalima A. Mahira Nikkah &bull; Nagore
        </div>
      </div>
    </footer>
  );
};
