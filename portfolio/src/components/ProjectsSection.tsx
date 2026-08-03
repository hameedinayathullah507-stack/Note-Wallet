import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Layers, ArrowUpRight, Sparkles, Code2, Eye, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = scrollTrackRef.current;
      if (!track) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      if (window.innerWidth >= 1024) {
        gsap.to(track, {
          x: -totalScrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${totalScrollWidth + 800}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        id="projects"
        className="relative bg-[#050505] overflow-hidden min-h-screen border-t border-b border-white/5 bg-noise flex flex-col justify-center py-20 lg:py-0"
      >
        {/* Section Header (Absolute Overlay on Desktop) */}
        <div className="px-6 md:px-16 mb-8 lg:mb-0 lg:absolute lg:top-12 lg:left-12 lg:z-20">
          <div className="flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4" />
            <span>06 // Selected Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white uppercase tracking-tight">
            Featured <span className="font-serif-italic text-[#E8B84A] font-normal lowercase">creations</span>
          </h2>
        </div>

        {/* Horizontal Track Container */}
        <div className="w-full overflow-x-auto lg:overflow-visible">
          <div
            ref={scrollTrackRef}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 md:px-16 lg:pt-32 lg:pb-24 w-full lg:w-max"
          >
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="w-full lg:w-[700px] shrink-0 glass-panel rounded-3xl p-6 md:p-10 space-y-6 relative group border-white/10 hover:border-[#E8B84A]/50 transition-all shadow-2xl"
              >
                {/* Top Badge & Index */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest">
                    PROJECT // 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono-custom text-white/40">{project.year}</span>
                </div>

                {/* Project Image & Mask */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Overlay Trigger Button */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      data-cursor="EXPAND"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:border-[#E8B84A] text-xs font-mono-custom transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#E8B84A]" />
                      <span>Explore Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-syne font-bold text-white group-hover:text-[#E8B84A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-outfit text-white/70 font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-custom text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs font-mono-custom text-white/60">
                    <span>{project.stats[0]?.label}: <strong className="text-[#E8B84A]">{project.stats[0]?.value}</strong></span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor="OPEN"
                    className="flex items-center gap-1.5 text-xs font-syne font-bold text-[#E8B84A] uppercase tracking-wider hover:text-white transition-colors"
                  >
                    <span>Full Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};
