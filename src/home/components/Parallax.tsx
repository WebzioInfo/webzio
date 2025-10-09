import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity?: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    t;
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex space-x-8 font-['Plaster'] text-5xl sm:text-6xl md:text-7xl font-bold"
        style={{ x }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="tracking-wider select-none">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Parallax() {
  return (
    <section
      className="relative w-full flex flex-col justify-center items-center py-20 transition-colors duration-500 
        bg-gradient-to-br from-[#F4F3DC] to-[#EADFD4] text-[#2D151F]"
    >
      <div className="w-full">
        <ParallaxText baseVelocity={-5}>YOUR VISION,</ParallaxText>
        <ParallaxText baseVelocity={5}>OUR CODE</ParallaxText>
      </div>

      <p
        className="mt-16 text-center max-w-2xl text-lg sm:text-xl md:text-2xl font-medium leading-relaxed
       text-gray-700"
      >
        Turning your ideas into reality with{" "}
        <span className="font-bold">elegant code</span> and{" "}
        <span className="font-bold">creative design</span>.
      </p>
    </section>
  );
}
