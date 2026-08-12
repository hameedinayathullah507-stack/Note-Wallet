import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { SectionTitle } from './SectionTitle';
import { GoldCorner } from './GoldCorner';
import { Video, QrCode, ExternalLink, Radio } from 'lucide-react';

export const NikkahLive: React.FC = () => {
  const NIKKAH_LIVE_URL = wedding.nikkahLiveUrl;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(NIKKAH_LIVE_URL)}&color=7A5B18&bgcolor=FAF6EF`;

  return (
    <section id="live" className="py-16 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto w-full">
      <SectionTitle
        arabic="البَثُّ المُبَاشِر"
        title="NIKKAH LIVE"
        subtitle="Join us online for the blessed occasion"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative p-5 sm:p-8 md:p-10 ivory-card gold-border-double rounded-sm shadow-xl text-center max-w-lg mx-auto">
          <GoldCorner position="top-left" size={44} className="top-1 left-1" />
          <GoldCorner position="top-right" size={44} className="top-1 right-1" />
          <GoldCorner position="bottom-left" size={44} className="bottom-1 left-1" />
          <GoldCorner position="bottom-right" size={44} className="bottom-1 right-1" />

          {/* Live Indicator Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/40 bg-red-50 text-red-700 text-[11px] font-serif font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>LIVE STREAM BROADCAST</span>
          </div>

          <h3 className="font-serif-heading text-xl sm:text-3xl font-bold text-gold-metallic uppercase tracking-wider mb-2">
            NIKKAH LIVE
          </h3>
          <p className="font-serif text-xs sm:text-sm text-[#111111]/85 max-w-md mx-auto mb-5 leading-relaxed">
            Join us online for the blessed occasion from anywhere in the world.
          </p>

          {/* Mobile Optimized QR Frame with Glowing Frame (QR itself non-animated for easy scanning) */}
          <div className="my-5 p-4 sm:p-5 rounded-sm border-2 border-[#B8954A] bg-[#FAF6EF] shadow-xl inline-block relative max-w-[240px] mx-auto animate-qr-glow">
            <GoldCorner position="top-left" size={24} className="top-1 left-1" />
            <GoldCorner position="top-right" size={24} className="top-1 right-1" />
            <GoldCorner position="bottom-left" size={24} className="bottom-1 left-1" />
            <GoldCorner position="bottom-right" size={24} className="bottom-1 right-1" />

            {/* Clear White Border & Background for 100% Scan Reliability */}
            <div className="w-48 h-48 sm:w-52 sm:h-52 mx-auto border-2 border-[#D8BE7A] p-2 bg-white rounded shadow-inner flex items-center justify-center">
              <img
                src={qrImageUrl}
                alt="Nikkah Live Stream QR Code"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[#7A5B18] font-decorative text-[11px] sm:text-xs tracking-widest uppercase font-bold">
              <QrCode className="w-3.5 h-3.5" /> SCAN TO WATCH LIVE
            </div>
          </div>

          {/* WATCH NIKKAH LIVE CTA Button opening YouTube Channel in new tab */}
          <div className="mt-4">
            <a
              href={NIKKAH_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#B8954A] bg-gradient-to-r from-[#B8954A] via-[#D8BE7A] to-[#B8954A] text-white hover:from-[#7A5B18] hover:to-[#7A5B18] transition-all duration-300 font-decorative text-xs tracking-widest uppercase font-bold shadow-lg active:scale-95 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              WATCH NIKKAH LIVE
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <p className="font-serif text-[11px] sm:text-xs text-[#7A5B18] italic mt-3.5 font-medium">
            * Broadcast will commence on Saturday, 05 September 2026 at 5:00 PM IST
          </p>
        </div>
      </motion.div>
    </section>
  );
};
