import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Send, MapPin, Globe, Github, Linkedin, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-[#050505] bg-noise"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest mb-2">
              <Mail className="w-4 h-4" />
              <span>08 // Initiate Dialogue</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-white uppercase tracking-tight">
              Let's create <span className="font-serif-italic text-[#E8B84A] font-normal lowercase">something extraordinary</span>
            </h2>
          </div>
          <p className="text-sm font-mono-custom text-white/50 max-w-xs">
            Open for frontend engineering opportunities, collaborations, and technological discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Metadata & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Availability Status Card */}
            <div className="glass-panel p-8 rounded-3xl space-y-6 border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#E8B84A] animate-ping" />
                <span className="text-xs font-mono-custom text-[#E8B84A] uppercase tracking-widest">
                  CURRENT AVAILABILITY
                </span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white">
                {PORTFOLIO_DATA.personal.availability}
              </h3>
              <p className="text-xs font-outfit text-white/70 font-light leading-relaxed">
                Ready to contribute to cutting-edge web applications, UI architecture design, and high-performance frontend teams.
              </p>
            </div>

            {/* Direct Information */}
            <div className="space-y-4 font-outfit">
              
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-medium text-white">{PORTFOLIO_DATA.personal.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="w-10 h-10 rounded-xl bg-[#E8B84A]/10 border border-[#E8B84A]/30 flex items-center justify-center text-[#E8B84A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Direct Email</p>
                  <a href="mailto:hameed.inayathullah@example.com" className="text-sm font-medium text-white hover:text-[#E8B84A] transition-colors">
                    hameed.inayathullah@example.com
                  </a>
                </div>
              </div>

            </div>

            {/* Social Link Buttons */}
            <div className="space-y-3">
              <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Connect Across Channels</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/hameed-inayathullah"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GITHUB"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E8B84A]/60 text-xs font-mono-custom text-white/80 hover:text-[#E8B84A] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINKEDIN"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E8B84A]/60 text-xs font-mono-custom text-white/80 hover:text-[#E8B84A] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E8B84A]/20 text-[#E8B84A] border border-[#E8B84A] flex items-center justify-center mx-auto shadow-[0_0_30px_#E8B84A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-syne font-bold text-white">Transmission Received!</h3>
                  <p className="text-sm font-outfit text-white/70 max-w-md mx-auto">
                    Thank you for reaching out, Hameed will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono-custom text-white hover:border-[#E8B84A]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-syne font-bold text-white">Direct Message</h3>
                    <p className="text-xs font-mono-custom text-white/50">Fill in details below to initiate contact</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono-custom text-white/70 uppercase tracking-widest block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E8B84A] font-outfit transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono-custom text-white/70 uppercase tracking-widest block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alexander@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E8B84A] font-outfit transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-custom text-white/70 uppercase tracking-widest block">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Front-End Collaboration Proposal"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E8B84A] font-outfit transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-custom text-white/70 uppercase tracking-widest block">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your vision or inquiry..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#E8B84A] font-outfit transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="SUBMIT"
                    className="w-full py-4 rounded-xl bg-[#E8B84A] text-black font-syne font-bold text-xs uppercase tracking-widest hover:bg-[#FFD978] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(232,184,74,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Sparkles className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
