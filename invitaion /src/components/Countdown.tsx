import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { wedding } from '../data/wedding';
import { SectionTitle } from './SectionTitle';
import { GoldCorner } from './GoldCorner';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(wedding.nikkah.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isFinished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (updated.isFinished) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#B8954A', '#D8BE7A', '#F8F1E5'],
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-16 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto text-center w-full">
      <SectionTitle
        arabic="إِنْ شَاءَ ٱللَّٰهُ"
        title="NIKKAH COUNTDOWN"
        subtitle="Until the blessed beginning..."
      />

      {timeLeft.isFinished ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="ivory-card gold-border-double p-6 sm:p-8 rounded-sm max-w-md mx-auto"
        >
          <div className="font-arabic text-3xl sm:text-4xl text-[#B8954A] mb-2 animate-gold-glow">الْحَمْدُ لِلَّهِ</div>
          <h3 className="font-serif-heading text-2xl sm:text-3xl text-gold-metallic font-bold uppercase mb-2">
            ALHAMDULILLAH
          </h3>
          <p className="font-serif text-base sm:text-lg text-[#111111]/90 font-medium">
            The blessed day has arrived.
          </p>
        </motion.div>
      ) : (
        /* Mobile 2x2 Grid Layout fitting 320px-430px screens */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 my-6 sm:my-8 max-w-2xl mx-auto px-1">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="ivory-card gold-border-double p-3 sm:p-5 text-center border-2 border-[#B8954A] shadow-lg rounded-sm relative"
            >
              <GoldCorner position="top-left" size={20} className="top-0.5 left-0.5" />
              <GoldCorner position="top-right" size={20} className="top-0.5 right-0.5" />

              <div className="font-serif-heading text-3xl sm:text-5xl font-bold text-gold-metallic tabular-nums leading-none">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="font-decorative text-[10px] sm:text-xs tracking-[0.2em] text-[#7A5B18] font-bold uppercase mt-2">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 font-serif text-xs sm:text-sm text-[#7A5B18] tracking-widest uppercase font-bold px-2">
        05 SEPTEMBER 2026 &bull; 5:00 PM &bull; IST (ASIA/KOLKATA)
      </div>
    </section>
  );
};
