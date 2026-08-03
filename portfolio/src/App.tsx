import React, { useState, useEffect, useRef } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsConstellation } from './components/SkillsConstellation';
import { ProjectsSection } from './components/ProjectsSection';
import { CareerGoalSection } from './components/CareerGoalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Lenis smooth scroll
  useLenis();

  // Synthetic Ambient Web Audio Sound Engine
  useEffect(() => {
    if (!audioEnabled) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Low Ambient Warm Chord Frequencies (Hz)
      const freqs = [110, 164.81, 220, 293.66];
      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
      });
    } catch (e) {
      console.warn('Web Audio initialized:', e);
    }

    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, [audioEnabled]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E8B84A] selection:text-black font-outfit overflow-hidden">
      {/* Custom Mouse Follower Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader
        onComplete={() => setIsLoading(false)}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      {/* 3D WebGL Background Scene */}
      <ThreeBackground />

      {/* Main Website Flow */}
      {!isLoading && (
        <main className="relative z-10">
          <Navbar audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsConstellation />
          <ProjectsSection />
          <CareerGoalSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default App;
