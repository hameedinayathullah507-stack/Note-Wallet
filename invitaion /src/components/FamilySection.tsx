import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { SectionTitle } from './SectionTitle';
import { GoldCorner } from './GoldCorner';
import { GoldDivider } from './GoldDivider';
import { Heart } from 'lucide-react';

export const FamilySection: React.FC = () => {
  return (
    <section id="family" className="py-16 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto w-full">
      <SectionTitle
        arabic="الأَهْلُ وَالأَقَارِبُ"
        title="FAMILY & RELATIVES"
        subtitle="Cordially inviting your presence and blessings"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative p-6 sm:p-10 ivory-card gold-border-double rounded-sm shadow-xl text-center max-w-2xl mx-auto">
          <GoldCorner position="top-left" size={44} className="top-1 left-1" />
          <GoldCorner position="top-right" size={44} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={44} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={44} className="bottom-1 right-1" />

          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-[#B8954A] fill-current" />
            <h3 className="font-decorative text-sm sm:text-base font-bold text-[#7A5B18] tracking-widest uppercase">
              FAMILY BLESSINGS
            </h3>
            <Heart className="w-4 h-4 text-[#B8954A] fill-current" />
          </div>

          <GoldDivider variant="ornate" className="my-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 text-center">
            {/* Groom's Family */}
            <div className="p-4 rounded-sm border border-[#B8954A]/40 bg-[#EFE3D0]/30 shadow-sm">
              <p className="font-serif text-[10px] sm:text-xs text-[#7A5B18] uppercase tracking-widest font-bold mb-1">
                GROOM & FAMILY
              </p>
              <p className="font-serif text-lg font-bold text-[#111111]">
                {wedding.groom.name}
              </p>
              <p className="font-serif text-xs text-[#7A5B18] italic font-semibold mb-2">
                {wedding.groom.qualification}
              </p>
              <div className="border-t border-dashed border-[#B8954A]/30 pt-2 text-xs text-[#111111]/80 font-serif">
                {wedding.groom.relation}
              </div>
            </div>

            {/* Bride's Family */}
            <div className="p-4 rounded-sm border border-[#B8954A]/40 bg-[#EFE3D0]/30 shadow-sm">
              <p className="font-serif text-[10px] sm:text-xs text-[#7A5B18] uppercase tracking-widest font-bold mb-1">
                BRIDE & FAMILY
              </p>
              <p className="font-serif text-base sm:text-lg font-bold text-[#111111]">
                {wedding.bride.name}
              </p>
              <p className="font-serif text-xs text-[#7A5B18] italic font-semibold mb-2">
                {wedding.bride.qualification}
              </p>
              <div className="border-t border-dashed border-[#B8954A]/30 pt-2 text-xs text-[#111111]/80 font-serif">
                {wedding.bride.relation}
              </div>
            </div>
          </div>

          <GoldDivider variant="simple" className="my-2" />

          <div className="my-3 py-3 px-6 rounded-full border border-[#B8954A] bg-[#FAF6EF] inline-block shadow-sm">
            <p className="font-serif text-xs sm:text-sm font-bold text-[#7A5B18] uppercase tracking-widest">
              With Love, Duas & Best Compliments
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
