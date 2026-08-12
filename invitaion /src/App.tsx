import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { OpeningScreen } from './components/OpeningScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IslamicGreeting } from './components/IslamicGreeting';
import { Couple } from './components/Couple';
import { Countdown } from './components/Countdown';
import { NikahEvent } from './components/NikahEvent';
import { ValimaEvent } from './components/ValimaEvent';
import { EventTimeline } from './components/EventTimeline';
import { NikkahLive } from './components/NikkahLive';
import { FamilySection } from './components/FamilySection';
import { Blessing } from './components/Blessing';
import { Footer } from './components/Footer';
import { MusicPlayer, type MusicPlayerRef } from './components/MusicPlayer';
import { FloatingParticles } from './components/FloatingParticles';
import { VisualBreak } from './components/VisualBreak';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerRef>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B8954A', '#D8BE7A', '#F8F1E5', '#7A5B18'],
      });
    } catch {
      // ignore if confetti fails
    }

    // Start background music only after user tap
    if (musicPlayerRef.current) {
      musicPlayerRef.current.startAudio();
    }
  };

  return (
    <div className="min-h-dvh bg-[#F8F1E5] text-[#111111] font-serif relative overflow-x-hidden w-full">
      {/* Subtle Floating Gold Particles */}
      <FloatingParticles />

      <AnimatePresence mode="wait">
        {!isOpen && (
          <OpeningScreen key="opening" onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {isOpen && (
        <main className="w-full overflow-x-hidden animate-fade-in relative z-10 pb-safe">
          <Navigation />
          <Hero />
          <IslamicGreeting />
          
          <VisualBreak variant="mosque" title="SACRED UNION" subtitle="Bound in faith and love" />
          
          <Couple />
          <Countdown />
          
          <VisualBreak variant="geometric" title="BLESSED CELEBRATIONS" subtitle="Join us in prayer and joy" />
          
          <NikahEvent />
          <ValimaEvent />
          <EventTimeline />
          
          <VisualBreak variant="moon" title="ONLINE BROADCAST" subtitle="Live stream for distant loved ones" />
          
          <NikkahLive />
          <FamilySection />
          <Blessing />
          <Footer />
        </main>
      )}

      {/* Floating Music Controller */}
      <MusicPlayer ref={musicPlayerRef} />
    </div>
  );
}

export default App;
