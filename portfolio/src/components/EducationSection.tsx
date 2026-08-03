import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Sparkles, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline expanding height linked to scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true
          }
        }
      );

      // Card reveals
      gsap.utils.toArray<HTMLElement>('.edu-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          x: card.classList.contains('edu-right') ? 50 : -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-noise"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 glass-card">
            <GraduationCap className="w-4 h-4" />
            <span>04 // Academic Evolution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-white uppercase tracking-tight">
            Academic <span className="font-serif-italic text-[#E8B84A] font-normal lowercase">milestones</span>
          </h2>
          <p className="text-sm font-mono-custom text-white/60">
            A solid theoretical foundation in Computer Science, powering modern pragmatic web engineering.
          </p>
        </div>

        {/* Vertical Growing Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-[#E8B84A] via-[#FFD978] to-transparent origin-top shadow-[0_0_15px_#E8B84A]"
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-16">
            {PORTFOLIO_DATA.education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-16`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#E8B84A] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(232,184,74,0.5)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E8B84A] animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'edu-right' : 'edu-left'} edu-card`}>
                    <div className="glass-panel p-8 rounded-3xl space-y-6 relative overflow-hidden border-white/10 hover:border-[#E8B84A]/40 transition-all duration-500">
                      
                      {/* Status Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono-custom uppercase tracking-wider bg-[#E8B84A]/10 text-[#E8B84A] border border-[#E8B84A]/30">
                          {item.status === 'Pursuing' ? <Sparkles className="w-3 h-3 animate-spin" /> : <Award className="w-3 h-3" />}
                          {item.status}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs font-mono-custom text-white/50">
                          <Calendar className="w-3.5 h-3.5 text-[#E8B84A]" />
                          {item.period}
                        </span>
                      </div>

                      {/* Degree & Field */}
                      <div>
                        <h3 className="text-2xl font-syne font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                          {item.degree} — {item.field}
                        </h3>
                        <p className="text-xs font-mono-custom text-[#E8B84A] mt-1">
                          {item.institution}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-outfit text-white/70 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Key Highlights</p>
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs font-outfit text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84A] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Course Modules */}
                      <div className="pt-2">
                        <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest mb-2">Core Modules</p>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono-custom text-white/70"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
