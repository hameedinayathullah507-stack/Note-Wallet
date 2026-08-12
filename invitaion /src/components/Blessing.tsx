import React from 'react';
import { motion } from 'framer-motion';
import { GoldCorner } from './GoldCorner';
import { GoldDivider } from './GoldDivider';

export const Blessing: React.FC = () => {
  return (
    <section id="blessing" className="py-16 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto text-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative p-5 sm:p-8 md:p-12 ivory-card gold-border-double rounded-sm shadow-xl">
          <GoldCorner position="top-left" size={48} className="top-1 left-1" />
          <GoldCorner position="top-right" size={48} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={48} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={48} className="bottom-1 right-1" />

          <p className="font-serif text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#7A5B18] font-bold mb-3">
            PROPHETIC BLESSING FOR THE NEWLYWEDS
          </p>

          {/* Prophetic Marriage Dua in Arabic */}
          <div className="font-arabic text-2xl sm:text-4xl md:text-5xl text-[#B8954A] my-4 sm:my-6 leading-loose dir-rtl animate-gold-glow px-1 sm:px-4">
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </div>

          <div className="font-serif italic text-xs sm:text-base text-[#7A5B18] mb-4 sm:mb-6 font-semibold">
            &ldquo;Barakallahu laka wa baraka alayka wa jama&lsquo;a baynakuma fi khayr&rdquo;
          </div>

          <GoldDivider variant="ornate" className="my-2" />

          {/* English Translation */}
          <div className="font-serif text-base sm:text-xl md:text-2xl text-[#111111] max-w-lg mx-auto leading-relaxed my-4 sm:my-6 font-semibold">
            &ldquo;May Allah bless you, shower His blessings upon you, and unite you both in goodness.&rdquo;
          </div>

          {/* Ameen Seal */}
          <div className="my-4 sm:my-6">
            <div className="inline-block px-8 sm:px-10 py-2.5 sm:py-3 rounded-full border-2 border-[#B8954A] bg-[#FAF6EF] text-[#7A5B18] font-decorative text-lg sm:text-2xl font-bold tracking-widest uppercase shadow-md">
              AAMEEN
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
