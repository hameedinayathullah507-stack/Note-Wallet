import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, audioEnabled, setAudioEnabled }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2200; // ms
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] p-8 md:p-16 border-b border-[#E8B84A]/20 bg-noise select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs tracking-widest text-white/50 font-mono-custom">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E8B84A] animate-pulse" />
              <span>HAMEED INAYATHULLAH / PORTFOLIO '26</span>
            </div>
            
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              data-cursor="SOUND"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#E8B84A]/40 transition-colors text-white/70 hover:text-[#E8B84A]"
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#E8B84A]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] tracking-wider">{audioEnabled ? 'AUDIO ACTIVE' : 'MUTED'}</span>
            </button>
          </div>

          {/* Center Editorial Title & Counter */}
          <div className="my-auto max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84A] font-mono-custom text-sm tracking-widest uppercase mb-4"
            >
              Initializing Digital Experience
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold font-syne uppercase tracking-tight text-white leading-none"
            >
              Craftsmanship <br />
              <span className="font-serif-italic font-normal text-[#E8B84A] lowercase">&amp; precision</span>
            </motion.h1>
          </div>

          {/* Bottom Progress Line & Counter */}
          <div className="space-y-4">
            <div className="flex items-end justify-between text-white font-syne">
              <span className="text-sm tracking-widest text-white/40 uppercase">Loading Environment</span>
              <span className="text-4xl md:text-6xl font-extrabold text-[#E8B84A] font-mono-custom">
                {Math.floor(progress).toString().padStart(3, '0')}%
              </span>
            </div>

            <div className="h-[2px] w-full bg-white/10 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E8B84A] via-[#FFD978] to-[#FFFFFF] shadow-[0_0_15px_#E8B84A]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
