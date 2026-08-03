import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  velocity: number;
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    velocity: 0
  });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();

    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = dist / dt;

      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;

      setMousePosition({
        x: event.clientX,
        y: event.clientY,
        normalizedX: (event.clientX / window.innerWidth) * 2 - 1,
        normalizedY: -(event.clientY / window.innerHeight) * 2 + 1,
        velocity: speed
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}
