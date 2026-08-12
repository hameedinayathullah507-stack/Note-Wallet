import React, { useEffect, useState } from 'react';

export const FloatingParticles: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particleCount = isMobile ? 10 : 24;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 select-none">
      {[...Array(particleCount)].map((_, i) => {
        const size = (i % 3) * 2 + 3; // 3px, 5px, 7px
        const left = (i * 19 + 7) % 95;
        const top = (i * 23 + 11) % 90;
        const duration = 6 + (i % 5);
        const delay = (i % 4) * 0.8;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-[#B8954A] to-[#E5D2A5] shadow-sm animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
