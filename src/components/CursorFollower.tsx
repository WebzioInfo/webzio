import { useEffect, useRef, useCallback } from 'react';

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    const dot = dotRef.current;
    if (!dot) return;

    currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.15);
    currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.15);

    dot.style.transform = `translate3d(${currentPos.current.x - 8}px, ${currentPos.current.y - 8}px, 0)`;
    dot.className = `fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform rounded-full transition-all duration-300 ease-out ${
      isHoveringRef.current
        ? 'w-8 h-8 bg-gray-300/30 backdrop-blur-sm'
        : 'w-1.5 h-1.5 bg-gray-600/80'
    }`;

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], [tabindex="0"], .cursor-pointer'
      );
      isHoveringRef.current = !!interactive;
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return <div ref={dotRef} style={{ transform: 'translate3d(-8px, -8px, 0)' }} />;
};

export default CursorFollower;
