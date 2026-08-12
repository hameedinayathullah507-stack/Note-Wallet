import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'INVITATION', href: '#greeting' },
    { name: 'COUPLE', href: '#couple' },
    { name: 'COUNTDOWN', href: '#countdown' },
    { name: 'NIKAH', href: '#nikah' },
    { name: 'VALIMA', href: '#valima' },
    { name: 'LIVE', href: '#live' },
    { name: 'BLESSINGS', href: '#blessing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F1E5]/95 backdrop-blur-md shadow-md border-b border-[#B8954A]/30 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-serif-heading text-lg font-bold tracking-widest text-[#111111] hover:text-[#7A5B18] transition-colors"
        >
          M <span className="font-script text-[#B8954A] font-normal">&</span> M
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-decorative text-[11px] tracking-[0.2em] uppercase text-[#111111]/85 hover:text-[#7A5B18] transition-colors font-semibold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B8954A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden text-[#111111] hover:text-[#7A5B18] p-1.5 focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Compact Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[52px] bg-[#F8F1E5] border-b-2 border-[#B8954A] shadow-2xl py-4 px-6 transition-all duration-300">
          <div className="flex flex-col gap-2.5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-decorative text-xs tracking-widest uppercase text-[#111111] hover:text-[#7A5B18] py-1.5 border-b border-[#B8954A]/15 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
