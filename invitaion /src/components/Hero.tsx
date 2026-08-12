import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { GoldDivider } from './GoldDivider';
import { GoldCorner } from './GoldCorner';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-dvh pt-20 pb-12 flex flex-col justify-center items-center px-3 sm:px-4 relative overflow-hidden w-full">
      {/* Background Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#B8954A]/15 pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#B8954A]/25 pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto z-10 text-center">
        {/* Main Card Container */}
        <div className="relative p-5 sm:p-8 md:p-10 ivory-card gold-border-double rounded-sm shadow-xl">
          <GoldCorner position="top-left" size={48} className="top-1 left-1" />
          <GoldCorner position="top-right" size={48} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={48} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={48} className="bottom-1 right-1" />

          {/* Bismillah Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-3"
          >
            <div className="font-arabic text-2xl sm:text-4xl text-[#B8954A] mb-2 leading-relaxed animate-gold-glow">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </div>
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#7A5B18] font-bold">
              WITH THE BLESSINGS OF ALLAH
            </p>
            <p className="font-serif text-xs sm:text-sm text-[#111111]/75 italic mt-1">
              We joyfully invite you to celebrate the Nikkah of
            </p>
          </motion.div>

          <GoldDivider variant="ornate" className="my-2" />

          {/* Couple Names Treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-4 sm:py-6"
          >
            {/* Groom: A. MUHAMMAD (A. on SAME baseline, no overflow!) */}
            <div className="my-2 text-center w-full max-w-[95%] mx-auto">
              <h1 className="font-serif-heading text-clamp-groom font-bold text-gold-metallic uppercase leading-none inline-flex items-baseline justify-center gap-1.5 whitespace-nowrap">
                <span className="text-[0.75em] text-[#B8954A] font-serif font-bold">A.</span>
                <span>{wedding.groom.name}</span>
              </h1>
              <div className="inline-block mt-1.5 px-3 py-0.5 rounded-full border border-[#B8954A]/40 bg-[#EFE3D0]/40 font-serif text-[10px] sm:text-xs text-[#7A5B18] tracking-widest uppercase font-semibold">
                {wedding.groom.qualification}
              </div>
            </div>

            <div className="font-script text-4xl sm:text-6xl text-[#B8954A] my-2 animate-float font-normal">
              &
            </div>

            {/* Bride: Aalima (delicate title) + A. MAHIRA RAHAMATH FATHIMA */}
            <div className="my-2 text-center w-full max-w-[95%] mx-auto">
              <div className="font-serif italic text-xs sm:text-sm text-[#7A5B18] font-semibold tracking-wider mb-0.5">
                {wedding.bride.title}
              </div>
              <h1 className="font-serif-heading text-clamp-bride font-bold text-gold-metallic uppercase leading-tight">
                <span className="text-[0.75em] text-[#B8954A] font-serif mr-1">A.</span>
                <span>MAHIRA RAHAMATH</span>
                <br />
                <span>FATHIMA</span>
              </h1>
              <div className="inline-block mt-1.5 px-3 py-0.5 rounded-full border border-[#B8954A]/40 bg-[#EFE3D0]/40 font-serif text-[10px] sm:text-xs text-[#7A5B18] tracking-widest uppercase font-semibold">
                {wedding.bride.qualification}
              </div>
            </div>
          </motion.div>

          <GoldDivider variant="simple" className="my-2" />

          {/* Date & Location Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-1 text-center"
          >
            <div className="font-decorative text-xs sm:text-base text-[#7A5B18] tracking-widest font-bold uppercase">
              {wedding.nikkah.dateFormatted}
            </div>
            <div className="font-serif text-[11px] sm:text-xs tracking-[0.2em] text-[#111111]/80 uppercase mt-0.5 font-semibold">
              {wedding.nikkah.day} &bull; {wedding.nikkah.venue}
            </div>
            <div className="font-serif text-xs text-[#7A5B18] mt-1 font-medium italic">
              {wedding.nikkah.hijri}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6 text-center cursor-pointer"
        onClick={() => {
          document.getElementById('greeting')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p className="font-serif text-[10px] sm:text-xs tracking-[0.25em] text-[#7A5B18] uppercase mb-1.5 font-bold">
          SCROLL TO EXPLORE
        </p>
        <div className="w-4 h-8 mx-auto rounded-full border border-[#B8954A] flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-[#B8954A] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
