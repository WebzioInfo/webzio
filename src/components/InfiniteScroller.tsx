import { useEffect, useRef, useState } from "react";
import BrightLogo from '../assets/ClientLogos/BrightLogo.png';
import Gangothri from '../assets/ClientLogos/GongothriLogo.png';
import AdotzeeLogo from '../assets/ClientLogos/Adotzee.png';
import BrainBayLogo from '../assets/ClientLogos/BrainbayLogo.png';
import EssarLogo from '../assets/ClientLogos/EssarLogo.png';
import Code7Logo from '../assets/ClientLogos/Code7Logo.png';

// Hardcoded client logos
const clientLogos = [
  BrightLogo,
  Gangothri,
  AdotzeeLogo,
  BrainBayLogo,
  Code7Logo,
  EssarLogo
];

const InfiniteScroller: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(true);

      const scrollerInner = scrollerRef.current;
      if (!scrollerInner) return;

      const children = Array.from(scrollerInner.children) as HTMLElement[];

      // Duplicate logos for seamless infinite scroll
      children.forEach((child) => {
        const cloned = child.cloneNode(true) as HTMLElement;
        cloned.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(cloned);
      });
    }
  }, []);

  return (
    <div
      className="w-full overflow-hidden py-8 bg-[#F4F3DC]"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 100%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex gap-8 items-center ${animated ? "flex-nowrap" : "flex-wrap"}`}
        style={
          animated
            ? { animation: "scroll 25s linear infinite" }
            : undefined
        }
      >
        {clientLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Client Logo ${idx + 1}`}
            className="h-20 object-contain flex-shrink-0 filter grayscale"
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteScroller;
