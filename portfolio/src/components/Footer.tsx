import React, { useEffect, useState } from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-16 bg-[#050505] border-t border-white/10 text-white/60 font-mono-custom text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Info & Live Clock */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold font-syne uppercase tracking-wider">Nagapattinam, IN</span>
            <span className="text-white/40">|</span>
            <span className="text-[#E8B84A] font-mono-custom">{localTime} IST</span>
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            © 2026 Hameed Inayathullah • All Rights Reserved
          </p>
        </div>

        {/* Center Craftsmanship Badge */}
        <div className="flex items-center gap-2 text-[11px] text-white/50 border border-white/10 px-4 py-2 rounded-full glass-card">
          <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
          <span>Award-Grade Web Experience</span>
        </div>

        {/* Right Scroll To Top */}
        <button
          onClick={scrollToTop}
          data-cursor="TOP"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#E8B84A] text-white/80 hover:text-[#E8B84A] transition-all"
        >
          <span className="text-[10px] uppercase tracking-widest">Return To Apex</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
