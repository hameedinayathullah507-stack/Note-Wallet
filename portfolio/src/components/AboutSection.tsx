import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote, Sparkles, CheckCircle2, Award, Terminal, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 md:px-16 bg-[#0F0F10]/50 border-t border-b border-white/5 bg-noise"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>03 // Story &amp; Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-white uppercase tracking-tight">
              Architecting <span className="font-serif-italic text-[#E8B84A] font-normal lowercase">digital elegance</span>
            </h2>
          </div>
          <p className="text-sm font-mono-custom text-white/50 max-w-xs">
            Synthesizing complex logic into intuitive, award-worthy web interfaces.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Card & Floating Quote */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden about-card-anim border-white/10">
              <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                <Quote className="w-32 h-32" />
              </div>

              <span className="text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest block mb-4">
                The Narrative
              </span>

              <h3 className="text-2xl md:text-4xl font-syne font-bold text-white leading-snug mb-6">
                "Code is more than syntax — it is the digital canvas through which human curiosity connects with seamless functionality."
              </h3>

              <p className="text-base text-white/70 font-outfit leading-relaxed font-light mb-6">
                Based in <strong className="text-white font-medium">Nagapattinam, Tamil Nadu</strong>, I am a passionate Front-End Developer currently pursuing an <strong className="text-[#E8B84A] font-medium">M.Sc in Computer Science</strong>. My focus lies at the intersection of modern frontend architectures, responsive design systems, interactive 3D graphics, and high-performance Web APIs.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono-custom text-white/40 uppercase tracking-wider mr-2">Core Ethos:</span>
                {PORTFOLIO_DATA.personal.strengths.slice(0, 3).map((strength, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-custom text-[#E8B84A]"
                  >
                    ✦ {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Language & Location Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 about-card-anim">
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest mb-2">Linguistic Proficiency</p>
                <div className="space-y-2">
                  {PORTFOLIO_DATA.personal.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm font-outfit">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-xs font-mono-custom text-[#E8B84A]">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest mb-2">Primary Specialization</p>
                <div className="space-y-1">
                  <p className="text-white font-syne font-bold text-lg">React 19 &amp; WebGL</p>
                  <p className="text-xs text-white/60 font-outfit">Full Stack Python Integration in progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-card p-6 rounded-2xl text-center space-y-2 border-white/10 about-card-anim"
                >
                  <p className="text-3xl md:text-5xl font-extrabold font-syne text-[#E8B84A] gold-gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono-custom uppercase tracking-widest text-white/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Editorial Image Overlay */}
            <div className="glass-card p-4 rounded-2xl relative overflow-hidden group about-card-anim">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                alt="Code Philosophy"
                className="w-full h-48 object-cover rounded-xl filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <p className="text-xs font-mono-custom text-[#E8B84A] uppercase tracking-wider">Engineering Standard</p>
                  <p className="text-sm font-syne font-bold text-white">Clean Architecture &amp; Zero Technical Debt</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
