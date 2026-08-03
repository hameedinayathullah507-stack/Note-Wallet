import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CareerGoalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.goal-text-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="career-goal"
      className="relative py-36 px-6 md:px-16 overflow-hidden bg-[#0F0F10] border-t border-b border-white/5 bg-noise"
    >
      {/* Background Volumetric Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E8B84A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#E8B84A]/30 glass-card goal-text-reveal">
          <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
          <span>07 // Strategic Horizon &amp; Vision</span>
        </div>

        {/* Animated Editorial Quote */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-syne font-bold text-white leading-tight goal-text-reveal">
          "My ultimate objective is to evolve into an exceptional{' '}
          <span className="font-serif-italic text-[#E8B84A] font-normal lowercase underline decoration-[#E8B84A]/40 underline-offset-8">
            full stack developer
          </span>{' '}
          while continuously mastering cutting-edge web technologies."
        </h2>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 goal-text-reveal text-left">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Frontend Finesse</h3>
            <p className="text-xs font-outfit text-white/70 font-light leading-relaxed">
              Advancing WebGL shaders, React Server Components, and 60 FPS GSAP animation architectures.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A]">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Python Backend</h3>
            <p className="text-xs font-outfit text-white/70 font-light leading-relaxed">
              Deepening Python REST API services, relational database ORMs, microservices, and security logic.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A]">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Continuous Innovation</h3>
            <p className="text-xs font-outfit text-white/70 font-light leading-relaxed">
              Relentlessly reading research papers, exploring web standards, and building real-world projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
