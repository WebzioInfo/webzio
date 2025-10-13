import { useEffect, useRef, useState } from "react";
import BrightLogo from '../assets/ClientLogos/BrightLogo.webp';
import Gangothri from '../assets/ClientLogos/GongothriLogo.webp';
import AdotzeeLogo from '../assets/ClientLogos/Adotzee.webp';
import BrainBayLogo from '../assets/ClientLogos/BrainbayLogo.webp';
import EssarLogo from '../assets/ClientLogos/EssarLogo.webp';
import Code7Logo from '../assets/ClientLogos/Code7Logo.webp';
// import BiofixLogo from '../assets/ClientLogos/BiofixLogo.w';
import BiofixLogo2 from '../assets/ClientLogos/BiofixLogo2.webp'

// Hardcoded client logos
const clientLogos = [
  BrightLogo,
  Gangothri,
  AdotzeeLogo,
  BrainBayLogo,
  Code7Logo,
  EssarLogo,
  // BiofixLogo,
  BiofixLogo2
];



const InfiniteScroller: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(true);

      const scrollerInner = scrollerRef.current;
      if (!scrollerInner) return;

      const children = Array.from(scrollerInner.children) as HTMLElement[];

      // Duplicate logos for seamless scroll
      children.forEach((child) => {
        const cloned = child.cloneNode(true) as HTMLElement;
        cloned.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(cloned);
      });
    }
  }, []);

  return (
    <div
      className="w-full mx-auto overflow-hidden py-12 bg-[#F4F3DC]"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
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
            ? {
                animation: "scroll 20s linear infinite",
                willChange: "transform",
              }
            : undefined
        }
      >
        {clientLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Client Logo ${idx + 1}`}
            className="h-20 object-contain flex-shrink-0 filter grayscale hover:filter-none transition duration-300"
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

        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScroller;
