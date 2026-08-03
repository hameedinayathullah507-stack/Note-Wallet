import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, SkillNode } from '../data/portfolioData';
import { Cpu, Sparkles, Zap, Code2, Terminal, LayoutGrid, Palette, GitBranch, Github } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export const SkillsConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(PORTFOLIO_DATA.skills[3]); // React by default
  const mouse = useMousePosition();

  // Mapping string icons to Lucide components
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Atom': return <Cpu className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#3776AB]" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Canvas Constellation render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      angle += 0.005;

      // Draw Orbit Rings & Connecting Energy Lines
      PORTFOLIO_DATA.skills.forEach((skill, idx) => {
        const rad = skill.orbitRadius * (canvas.width < 768 ? 0.6 : 1);
        const currentAngle = angle * skill.orbitSpeed * 100 + idx;
        const x = centerX + Math.cos(currentAngle) * rad + mouse.normalizedX * 15;
        const y = centerY + Math.sin(currentAngle) * rad - mouse.normalizedY * 15;

        // Draw line to next node
        const nextSkill = PORTFOLIO_DATA.skills[(idx + 1) % PORTFOLIO_DATA.skills.length];
        const nextRad = nextSkill.orbitRadius * (canvas.width < 768 ? 0.6 : 1);
        const nextAngle = angle * nextSkill.orbitSpeed * 100 + (idx + 1);
        const nx = centerX + Math.cos(nextAngle) * nextRad + mouse.normalizedX * 15;
        const ny = centerY + Math.sin(nextAngle) * nextRad - mouse.normalizedY * 15;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = selectedSkill.id === skill.id ? 'rgba(232, 184, 74, 0.4)' : 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = selectedSkill.id === skill.id ? 1.5 : 0.8;
        ctx.stroke();

        // Draw line to center
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(232, 184, 74, 0.03)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse, selectedSkill]);

  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-[#0F0F10]/70 border-t border-b border-white/5 bg-noise"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>05 // Interactive Skill Orbit</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-white uppercase tracking-tight">
              Technology <span className="font-serif-italic text-[#E8B84A] font-normal lowercase">constellation</span>
            </h2>
          </div>
          <p className="text-sm font-mono-custom text-white/50 max-w-xs">
            Hover or click node points to explore technical depth and ecosystems.
          </p>
        </div>

        {/* Orbit Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Skill Grid Buttons */}
          <div className="lg:col-span-7 relative min-h-[450px] flex items-center justify-center rounded-3xl glass-panel p-6 border-white/10 overflow-hidden">
            
            {/* Canvas Constellation Vector Lines */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

            {/* Central Core Element */}
            <div className="z-10 text-center pointer-events-none p-6 rounded-full bg-black/60 border border-[#E8B84A]/40 shadow-[0_0_40px_rgba(232,184,74,0.2)] backdrop-blur-md">
              <span className="text-[10px] font-mono-custom text-[#E8B84A] uppercase tracking-widest block">CORE STACK</span>
              <p className="text-xs font-syne font-bold text-white uppercase">React &amp; WebGL</p>
            </div>

            {/* Orbiting Interactive Skill Buttons */}
            <div className="absolute inset-0 z-20 flex flex-wrap items-center justify-center gap-4 p-8">
              {PORTFOLIO_DATA.skills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;
                return (
                  <motion.button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor={skill.name.toUpperCase()}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#E8B84A] text-black border-white font-bold shadow-[0_0_25px_rgba(232,184,74,0.6)]'
                        : 'bg-white/5 text-white/80 border-white/10 hover:border-[#E8B84A]/60 hover:text-[#E8B84A]'
                    }`}
                  >
                    {renderSkillIcon(skill.iconName)}
                    <span className="text-xs font-mono-custom tracking-wider">{skill.name}</span>
                  </motion.button>
                );
              })}
            </div>

          </div>

          {/* Selected Skill Details Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 rounded-3xl space-y-6 border-white/10 border-l-4 border-l-[#E8B84A]"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${selectedSkill.color}20`, color: selectedSkill.color }}
                    >
                      {renderSkillIcon(selectedSkill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-syne font-bold text-white">{selectedSkill.name}</h3>
                      <p className="text-xs font-mono-custom text-white/50 uppercase tracking-widest">
                        Category: {selectedSkill.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-extrabold font-mono-custom text-[#E8B84A]">
                    {selectedSkill.level}%
                  </span>
                </div>

                {/* Level Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono-custom text-white/60">
                    <span>Proficiency Level</span>
                    <span>{selectedSkill.level >= 90 ? 'Expert' : selectedSkill.level >= 80 ? 'Advanced' : 'Active Learning'}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#E8B84A] to-[#FFD978] shadow-[0_0_10px_#E8B84A]"
                    />
                  </div>
                </div>

                {/* Skill Narrative Description */}
                <p className="text-sm font-outfit text-white/80 font-light leading-relaxed">
                  {selectedSkill.description}
                </p>

                {/* Ecosystem Highlights */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Architectural Advantage</p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-outfit text-white/80">
                    ✦ Production-ready implementation with responsive mobile degradation and GPU acceleration.
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
