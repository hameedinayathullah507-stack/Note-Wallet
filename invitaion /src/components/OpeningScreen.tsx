import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { GoldCorner } from './GoldCorner';
import { GoldDivider } from './GoldDivider';
import { Sparkles } from 'lucide-react';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#F8F1E5] p-3 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden text-center select-none min-h-dvh w-full pt-safe pb-safe"
    >
      {/* 4 Gold Corner Ornaments */}
      <GoldCorner position="top-left" size={56} className="top-2 left-2 sm:top-4 sm:left-4" />
      <GoldCorner position="top-right" size={56} className="top-2 right-2 sm:top-4 sm:right-4" />
      <GoldCorner position="bottom-left" size={56} className="bottom-2 left-2 sm:bottom-4 sm:left-4" />
      <GoldCorner position="bottom-right" size={56} className="bottom-2 right-2 sm:bottom-4 sm:right-4" />

      {/* Mobile Viewport Border Frame */}
      <div className="absolute inset-3 sm:inset-5 border-2 border-[#B8954A] pointer-events-none rounded-xs" />
      <div className="absolute inset-4 sm:inset-7 border border-dashed border-[#D8BE7A]/70 pointer-events-none rounded-xs" />

      {/* Top Bismillah Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="pt-4 sm:pt-6 z-10 my-auto"
      >
        <div className="font-arabic text-2xl sm:text-4xl text-[#B8954A] tracking-wider mb-1 animate-gold-glow">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#7A5B18] font-bold">
          WEDDING INVITATION
        </p>
      </motion.div>

      {/* Center Main Invitation Card Container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="my-auto py-5 px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-md mx-auto z-10 ivory-card gold-border-double rounded-sm w-[92%] shadow-2xl flex flex-col items-center justify-center"
      >
        <GoldCorner position="top-left" size={28} className="top-1 left-1" />
        <GoldCorner position="top-right" size={28} className="top-1 right-1" />

        {/* Crescent Emblem */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full border-2 border-[#B8954A] flex items-center justify-center bg-gradient-to-b from-[#FAF6EF] to-[#EFE3D0] shadow-md">
          <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#B8954A] fill-current">
            <path d="M12 21.334c-5.155 0-9.334-4.179-9.334-9.334s4.179-9.334 9.334-9.334c.333 0 .66.018.98.051-2.036.78-3.48 2.748-3.48 5.116 0 3.037 2.463 5.5 5.5 5.5 2.368 0 4.336-1.444 5.116-3.48.033.32.051.647.051.98 0 5.155-4.179 9.334-9.334 9.334zM18.8 8l-.6-1.8-1.8-.6 1.8-.6.6-1.8.6 1.8 1.8.6-1.8.6-.6 1.8z" />
          </svg>
        </div>

        <p className="font-serif text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#7A5B18] font-bold mb-2">
          THE NIKKAH OF
        </p>

        {/* Groom: A. MUHAMMAD (A. on SAME baseline, no line wrap!) */}
        <div className="my-1 text-center w-full max-w-[95%] mx-auto">
          <h1 className="font-serif-heading text-clamp-groom font-bold text-gold-metallic uppercase leading-none inline-flex items-baseline justify-center gap-1.5 whitespace-nowrap">
            <span className="text-[0.75em] text-[#B8954A] font-serif font-bold">A.</span>
            <span>{wedding.groom.name}</span>
          </h1>
          <div className="font-serif text-[10px] sm:text-xs text-[#7A5B18] font-semibold tracking-widest uppercase mt-1">
            {wedding.groom.qualification}
          </div>
        </div>

        <div className="font-script text-3xl sm:text-4xl text-[#B8954A] my-1 font-normal">
          &
        </div>

        {/* Bride: Aalima (delicate title) + A. MAHIRA RAHAMATH FATHIMA (two-line break) */}
        <div className="my-1 text-center w-full max-w-[95%] mx-auto">
          <div className="font-serif italic text-xs sm:text-sm text-[#7A5B18] font-semibold tracking-wider mb-0.5">
            {wedding.bride.title}
          </div>
          <h1 className="font-serif-heading text-clamp-bride font-bold text-gold-metallic uppercase leading-tight">
            <span className="text-[0.75em] text-[#B8954A] font-serif mr-1">A.</span>
            <span>MAHIRA RAHAMATH</span>
            <br />
            <span>FATHIMA</span>
          </h1>
          <div className="font-serif text-[10px] sm:text-xs text-[#7A5B18] font-semibold tracking-widest uppercase mt-1">
            {wedding.bride.qualification}
          </div>
        </div>

        <GoldDivider variant="ornate" className="my-3" />

        <div className="font-decorative text-xs sm:text-sm text-[#7A5B18] tracking-widest uppercase font-bold">
          05 SEPTEMBER 2026
        </div>
        <p className="font-serif text-[11px] sm:text-xs tracking-[0.2em] text-[#111111]/80 uppercase mt-0.5 font-semibold">
          SATURDAY &bull; NAGORE
        </p>
      </motion.div>

      {/* Bottom TAP TO OPEN Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="pb-4 sm:pb-6 z-10 w-full max-w-[320px] mx-auto my-auto"
      >
        <button
          onClick={onOpen}
          aria-label="Tap to open wedding invitation"
          className="group w-full h-14 relative inline-flex items-center justify-center gap-2.5 px-6 rounded-full border-2 border-[#B8954A] bg-gradient-to-r from-[#B8954A] via-[#D8BE7A] to-[#B8954A] text-white hover:from-[#7A5B18] hover:to-[#7A5B18] transition-all duration-300 shadow-xl focus:outline-none active:scale-95 cursor-pointer font-decorative text-xs tracking-[0.25em] uppercase font-bold"
        >
          <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '4s' }} />
          <span>TAP TO OPEN</span>
        </button>
      </motion.div>
    </motion.div>
  );
};
