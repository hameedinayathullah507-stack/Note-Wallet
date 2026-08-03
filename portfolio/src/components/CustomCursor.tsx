import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'project' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    document.body.classList.add('has-custom-cursor');

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor], a, button, input, textarea');
      if (interactiveEl) {
        const cursorAttr = interactiveEl.getAttribute('data-cursor');
        if (cursorAttr) {
          setHoverState('project');
          setCursorText(cursorAttr);
        } else {
          setHoverState('pointer');
          setCursorText('');
        }
      } else {
        setHoverState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(232, 184, 74, 0.2)',
      borderColor: '#E8B84A',
      borderWidth: 1.5,
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(232, 184, 74, 0.15)',
      borderColor: '#FFD978',
      borderWidth: 2,
    },
    project: {
      width: 90,
      height: 90,
      backgroundColor: '#E8B84A',
      borderColor: '#FFFFFF',
      borderWidth: 0,
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Follower Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={cursorVariants}
        animate={hoverState === 'text' ? 'default' : hoverState}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="rounded-full flex items-center justify-center shadow-lg backdrop-blur-[2px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-extrabold uppercase tracking-widest text-black font-mono-custom"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverState === 'project' ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        className="w-1.5 h-1.5 bg-[#E8B84A] rounded-full shadow-[0_0_10px_#E8B84A]"
      />
    </div>
  );
};
