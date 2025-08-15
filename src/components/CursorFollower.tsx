import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const moveCursor = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      gsap.to(dot, {
        x: pos.x - 8,
        y: pos.y - 8,
        duration: 0.3,
        ease: 'power3.out',
        force3D: true, 
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], [tabindex="0"], .cursor-pointer'
      );
      isHoveringRef.current = !!interactive;

      if (dot) {
        const hoverClass = interactive
          ? 'w-8 h-8 bg-gray-300/30 backdrop-blur-sm'
          : 'w-1.5 h-1.5 bg-gray-600/80';

        dot.className = `fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform rounded-full transition-all duration-300 ease-out ${hoverClass}`;
      }
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        transform: 'translate3d(-8px, -8px, 0)',
      }}
    />
  );
};

export default CursorFollower;
