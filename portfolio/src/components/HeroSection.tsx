import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Sparkles, Code2, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-split-text',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.2
        }
      );

      gsap.fromTo(
        '.hero-sub-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 flex flex-col justify-between overflow-hidden bg-noise"
    >
      {/* Background Lighting Shift Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8B84A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section 1: Massive Editorial Title & Split Text */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-12">
        
        {/* Availability Badge & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 hero-sub-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 text-xs font-mono-custom text-[#E8B84A]">
            <span className="w-2 h-2 rounded-full bg-[#E8B84A] animate-ping" />
            <span>{PORTFOLIO_DATA.personal.availability}</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono-custom text-white/50">
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#E8B84A]" /> {PORTFOLIO_DATA.personal.location}</span>
            <span className="hidden sm:inline-block">M.Sc CS Scholar</span>
          </div>
        </div>

        {/* Oversized Typography Name */}
        <div className="overflow-hidden">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-extrabold font-syne uppercase tracking-tighter text-white leading-[0.9] select-none"
          >
            <div className="overflow-hidden">
              <span className="inline-block hero-split-text">HAMEED</span>
            </div>
            <div className="overflow-hidden flex flex-wrap items-center gap-4 md:gap-8">
              <span className="inline-block hero-split-text font-serif-italic font-normal text-[#E8B84A] lowercase tracking-normal">
                inayathullah
              </span>
              <span className="text-xs md:text-sm font-mono-custom font-normal text-white/40 tracking-widest border border-white/10 px-4 py-1.5 rounded-full uppercase hidden md:inline-block">
                Front-End Architect
              </span>
            </div>
          </h1>
        </div>

        {/* Subhead Editorial Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-end hero-sub-reveal">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xl md:text-2xl text-white/80 font-outfit font-light leading-relaxed">
              {PORTFOLIO_DATA.personal.headline}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col items-start md:items-end justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono-custom text-white/60">
              <Code2 className="w-4 h-4 text-[#E8B84A]" />
              <span>React 19 • WebGL • GSAP • TypeScript</span>
            </div>
          </div>
        </div>

      </div>

      {/* Section 2: Dramatic Mask & Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-end justify-between gap-8 pt-12 border-t border-white/10">
        
        {/* Abstract Image Mask & Visual Accent */}
        <div className="relative group w-full md:w-96 h-44 rounded-2xl overflow-hidden glass-card p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84A]/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
            alt="Editorial Work Preview"
            className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono-custom text-white/80">
            <span>DIGITAL CRAFTSMANSHIP</span>
            <span className="text-[#E8B84A]">EST. 2026</span>
          </div>
        </div>

        {/* Interactive Scroll Prompt */}
        <motion.a
          href="#about"
          data-cursor="SCROLL"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#E8B84A]/50 transition-colors text-white/70 hover:text-white"
        >
          <div className="w-8 h-8 rounded-full bg-[#E8B84A] text-black flex items-center justify-center">
            <ArrowDown className="w-4 h-4" />
          </div>
          <div className="text-left font-mono-custom">
            <p className="text-[10px] text-white/40 uppercase tracking-widest">Scroll To Explore</p>
            <p className="text-xs font-bold text-[#E8B84A] uppercase tracking-wider">My Journey</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
