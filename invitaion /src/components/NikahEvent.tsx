import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { GoldCorner } from './GoldCorner';
import { Calendar, Clock, MapPin, Navigation as NavigationIcon } from 'lucide-react';

export const NikahEvent: React.FC = () => {
  return (
    <section id="nikkah" className="py-10 sm:py-12 px-3 sm:px-4 max-w-3xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative p-5 sm:p-8 md:p-10 ivory-card gold-border-double rounded-sm shadow-xl text-center">
          <GoldCorner position="top-left" size={44} className="top-1 left-1" />
          <GoldCorner position="top-right" size={44} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={44} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={44} className="bottom-1 right-1" />

          <div className="font-arabic text-3xl sm:text-4xl text-[#B8954A] mb-1 animate-gold-glow">
            {wedding.nikkah.titleArabic}
          </div>
          <h3 className="font-decorative text-xl sm:text-3xl font-bold text-gold-metallic tracking-widest uppercase mb-1">
            {wedding.nikkah.title}
          </h3>

          <div className="my-4 sm:my-6 p-4 sm:p-6 rounded-sm border-2 border-[#B8954A]/50 bg-[#EFE3D0]/40 space-y-3 sm:space-y-4 max-w-lg mx-auto shadow-inner">
            <div className="flex items-center justify-center gap-2.5 text-[#111111]">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8954A] shrink-0" />
              <span className="font-serif font-bold text-base sm:text-xl tracking-wider">
                {wedding.nikkah.day}, {wedding.nikkah.dateFormatted}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-[#7A5B18]">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8954A] shrink-0" />
              <span className="font-serif font-bold text-sm sm:text-base">
                {wedding.nikkah.time} &bull; <span className="italic font-normal">{wedding.nikkah.hijri}</span>
              </span>
            </div>

            <div className="border-t-2 border-dashed border-[#B8954A]/40 pt-3">
              <div className="flex items-start justify-center gap-2.5 text-[#111111]">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#B8954A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#111111]">
                    {wedding.nikkah.venue}
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#111111]/85 mt-1 font-semibold">
                    {wedding.nikkah.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={wedding.nikkah.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#B8954A] bg-[#FAF6EF] text-[#7A5B18] hover:bg-[#B8954A] hover:text-white transition-all duration-300 font-decorative text-xs tracking-widest uppercase font-bold shadow-md active:scale-95 cursor-pointer"
          >
            <NavigationIcon className="w-4 h-4 fill-current" />
            GET DIRECTIONS
          </a>
        </div>
      </motion.div>
    </section>
  );
};
