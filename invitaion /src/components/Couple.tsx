import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { SectionTitle } from './SectionTitle';
import { GoldDivider } from './GoldDivider';
import { GoldCorner } from './GoldCorner';
import { Heart } from 'lucide-react';

export const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-16 sm:py-20 px-3 sm:px-4 bg-[#EFE3D0]/30 relative w-full">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          arabic="الْمَوَدَّةُ وَالرَّحْمَةُ"
          title="THE BLESSED COUPLE"
          subtitle="Joined together in love, faith & barakah"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="ivory-card gold-border-double p-5 sm:p-8 flex flex-col justify-between text-center group shadow-xl rounded-sm relative"
          >
            <GoldCorner position="top-left" size={36} className="top-1 left-1" />
            <GoldCorner position="top-right" size={36} className="top-1 right-1" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#B8954A] bg-[#FAF6EF] text-[#7A5B18] text-[11px] font-decorative tracking-widest uppercase font-bold mb-3 shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-current text-[#B8954A]" /> GROOM
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold text-gold-metallic uppercase tracking-wider mb-1 inline-flex items-baseline justify-center gap-1.5">
                <span className="text-[0.75em] text-[#B8954A] font-serif">A.</span>
                <span>{wedding.groom.name}</span>
              </h3>

              <div className="inline-block px-3 py-0.5 rounded-full border border-[#B8954A]/60 bg-[#FAF6EF] text-[#7A5B18] text-xs font-bold tracking-wider uppercase mb-3">
                {wedding.groom.qualification}
              </div>
            </div>

            <div className="border-t-2 border-dashed border-[#B8954A]/40 pt-4 mt-2">
              <p className="font-serif text-[10px] sm:text-xs text-[#111111]/60 uppercase tracking-widest font-bold mb-1">
                SON OF
              </p>
              <p className="font-serif text-base sm:text-lg font-bold text-[#111111]">
                {wedding.groom.fatherName}
              </p>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="ivory-card gold-border-double p-5 sm:p-8 flex flex-col justify-between text-center group shadow-xl rounded-sm relative mt-4 md:mt-0"
          >
            <GoldCorner position="top-left" size={36} className="top-1 left-1" />
            <GoldCorner position="top-right" size={36} className="top-1 right-1" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#B8954A] bg-[#FAF6EF] text-[#7A5B18] text-[11px] font-decorative tracking-widest uppercase font-bold mb-3 shadow-sm">
                <Heart className="w-3.5 h-3.5 fill-current text-[#B8954A]" /> BRIDE
              </div>

              <div className="font-serif italic text-xs sm:text-sm text-[#7A5B18] font-semibold tracking-wider mb-0.5">
                {wedding.bride.title}
              </div>

              <h3 className="font-serif-heading text-xl sm:text-3xl font-bold text-gold-metallic uppercase tracking-wider mb-1">
                <span className="text-[0.75em] text-[#B8954A] font-serif mr-1">A.</span>
                <span>MAHIRA RAHAMATH FATHIMA</span>
              </h3>

              <div className="inline-block px-3 py-0.5 rounded-full border border-[#B8954A]/60 bg-[#FAF6EF] text-[#7A5B18] text-xs font-bold tracking-wider uppercase mb-3">
                {wedding.bride.qualification}
              </div>
            </div>

            <div className="border-t-2 border-dashed border-[#B8954A]/40 pt-4 mt-2">
              <p className="font-serif text-[10px] sm:text-xs text-[#111111]/60 uppercase tracking-widest font-bold mb-1">
                DAUGHTER OF
              </p>
              <p className="font-serif text-base sm:text-lg font-bold text-[#111111]">
                {wedding.bride.fatherName}
              </p>
            </div>
          </motion.div>
        </div>

        <GoldDivider variant="crescent" className="mt-10" />
      </div>
    </section>
  );
};
