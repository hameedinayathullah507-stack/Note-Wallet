import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ audioEnabled, setAudioEnabled }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 md:px-12 py-4 ${
          scrolled ? 'py-3 bg-[#050505]/70 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            data-cursor="HOME"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#E8B84A]/40 flex items-center justify-center bg-white/5 group-hover:border-[#E8B84A] group-hover:scale-105 transition-all">
              <span className="font-syne font-bold text-sm text-[#E8B84A]">HI</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="font-syne font-bold text-sm tracking-wider text-white group-hover:text-[#E8B84A] transition-colors">
                HAMEED INAYATHULLAH
              </p>
              <p className="text-[10px] font-mono-custom text-white/50 tracking-widest uppercase">
                Front-End Engineer
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="GO"
                className="text-xs font-mono-custom uppercase tracking-widest text-white/70 hover:text-[#E8B84A] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8B84A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              data-cursor="AUDIO"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#E8B84A] hover:border-[#E8B84A]/50 transition-all"
              title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-[#E8B84A]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              data-cursor="HIRE"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8B84A] text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#FFD978] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(232,184,74,0.3)]"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Top Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8B84A] via-[#FFD978] to-white origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl pt-28 px-8 md:hidden flex flex-col justify-between pb-12"
        >
          <div className="space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-syne font-bold uppercase tracking-wider text-white hover:text-[#E8B84A] border-b border-white/10 pb-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-mono-custom text-white/40 uppercase tracking-widest">Location</p>
            <p className="text-sm font-outfit text-white/80">Nagapattinam, Tamil Nadu, India</p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#E8B84A] text-black font-syne font-bold text-center block uppercase tracking-wider"
            >
              Initiate Contact
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};
