import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, Code, Layers, BarChart3, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'tech'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopied(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/10 p-6 md:p-10 space-y-8 bg-[#0F0F10] shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#E8B84A] transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-4 pr-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#E8B84A]/10 text-[#E8B84A] border border-[#E8B84A]/30 text-xs font-mono-custom uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono-custom text-white/40">Year: {project.year}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-lg font-outfit text-white/70 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Image Banner */}
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 border border-white/10 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="PREVIEW"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8B84A] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#FFD978] transition-all"
                >
                  <span>Launch Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex border-b border-white/10 gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs font-mono-custom uppercase tracking-widest transition-all border-b-2 ${
                activeTab === 'overview' ? 'border-[#E8B84A] text-[#E8B84A]' : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Overview &amp; Highlights
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 text-xs font-mono-custom uppercase tracking-widest transition-all border-b-2 ${
                activeTab === 'code' ? 'border-[#E8B84A] text-[#E8B84A]' : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Source Code Architecture
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`pb-3 text-xs font-mono-custom uppercase tracking-widest transition-all border-b-2 ${
                activeTab === 'tech' ? 'border-[#E8B84A] text-[#E8B84A]' : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Performance &amp; Tech Stack
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <p className="text-base text-white/80 font-outfit font-light leading-relaxed">
                {project.longDescription}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono-custom uppercase tracking-widest text-[#E8B84A]">
                  Key Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-outfit text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B84A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Code Snippet */}
          {activeTab === 'code' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-custom text-white/50 uppercase tracking-widest">
                  Language: {project.codeSnippet.language}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-mono-custom text-[#E8B84A] hover:bg-white/20 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-6 rounded-2xl bg-black/90 border border-white/10 overflow-x-auto text-xs font-mono-custom text-emerald-400 leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </motion.div>
          )}

          {/* Tab 3: Tech & Stats */}
          {activeTab === 'tech' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-2xl font-extrabold font-syne text-[#E8B84A]">{stat.value}</p>
                    <p className="text-[10px] font-mono-custom text-white/50 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest mb-3">Technologies Employed</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono-custom text-white/80">
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
