import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { GoldCorner } from './GoldCorner';
import { GoldDivider } from './GoldDivider';

export const IslamicGreeting: React.FC = () => {
  return (
    <section id="greeting" className="py-12 sm:py-16 px-3 sm:px-4 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative p-5 sm:p-8 md:p-10 ivory-card gold-border-double rounded-sm shadow-xl text-center">
          <GoldCorner position="top-left" size={48} className="top-1 left-1" />
          <GoldCorner position="top-right" size={48} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={48} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={48} className="bottom-1 right-1" />

          {/* Card Main Title */}
          <h2 className="font-serif-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] tracking-widest uppercase mb-2">
            WEDDING INVITATION
          </h2>

          <div className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#B8954A] my-3 leading-relaxed dir-rtl animate-gold-glow">
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </div>

          <GoldDivider variant="ornate" className="my-2" />

          <p className="font-serif text-sm sm:text-base text-[#111111]/90 text-center leading-relaxed my-4 max-w-2xl mx-auto px-2 italic">
            In the name of Allah, the Most Gracious, the Most Merciful. We request the pleasure of your company with family and friends on the auspicious occasion of the Nikkah of
          </p>

          <GoldDivider variant="simple" className="my-2" />

          {/* Groom Box */}
          <div className="my-5 p-4 sm:p-5 rounded-sm border-2 border-[#B8954A]/50 bg-[#EFE3D0]/40 max-w-xl mx-auto shadow-inner">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#7A5B18] tracking-wide inline-flex items-baseline justify-center gap-1.5">
              <span className="text-[0.75em] text-[#B8954A] font-serif">A.</span>
              <span>{wedding.groom.name}</span>
              <span className="text-lg text-[#111111]/80 font-normal ml-1">, {wedding.groom.qualification}</span>
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#111111]/80 mt-1 font-semibold">
              {wedding.groom.relation}
            </p>
          </div>

          <div className="font-script text-3xl sm:text-4xl text-[#B8954A] my-2 font-normal">&</div>

          {/* Bride Box */}
          <div className="my-5 p-4 sm:p-5 rounded-sm border-2 border-[#B8954A]/50 bg-[#EFE3D0]/40 max-w-xl mx-auto shadow-inner">
            <div className="font-serif italic text-xs sm:text-sm text-[#7A5B18] font-semibold tracking-wider mb-0.5">
              {wedding.bride.title}
            </div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#7A5B18] tracking-wide">
              <span className="text-[0.75em] text-[#B8954A] font-serif mr-1">A.</span>
              <span>MAHIRA RAHAMATH FATHIMA</span>
              <span className="text-base text-[#111111]/80 font-normal ml-1">, {wedding.bride.qualification}</span>
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#111111]/80 mt-1 font-semibold">
              {wedding.bride.relation}
            </p>
          </div>

          <GoldDivider variant="simple" className="my-2" />

          {/* Nikkah Date Wording */}
          <div className="my-5 p-4 bg-[#FAF6EF] border border-[#B8954A]/40 rounded-sm max-w-lg mx-auto">
            <p className="font-serif text-sm sm:text-base font-semibold text-[#7A5B18] uppercase tracking-wider">
              In Sha Allah, Nikkah on {wedding.nikkah.day}
            </p>
            <p className="font-decorative text-lg sm:text-xl font-bold text-[#111111] my-1">
              {wedding.nikkah.dateOrdinal}
            </p>
            <p className="font-serif text-xs sm:text-sm text-[#7A5B18] italic font-medium">
              (Hijri 1448 — Rabi al-Awwal 22nd)
            </p>
            <p className="font-serif text-base sm:text-lg font-bold text-[#7A5B18] mt-1">
              At {wedding.nikkah.time}
            </p>
          </div>

          {/* Dua Highlight Badge */}
          <div className="inline-block px-5 sm:px-8 py-2 sm:py-2.5 rounded-full border-2 border-[#B8954A] bg-[#FAF6EF] text-[#7A5B18] font-serif text-[10px] sm:text-xs tracking-widest uppercase font-bold my-1 shadow-sm">
            INSHA ALLAH &bull; NIKKAH & DUAS
          </div>
        </div>
      </motion.div>
    </section>
  );
};
