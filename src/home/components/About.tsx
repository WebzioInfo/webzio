import React, { useEffect, useRef } from 'react';
import { Target, Heart, Code, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import planePng from '../../assets/paper.png'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const planeRef = useRef<HTMLImageElement | null>(null);
  const builtSectionRef = useRef<HTMLDivElement | null>(null);

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Budget-Friendly",
      description: "High-quality results without heavy costs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "We deliver working websites in days, not weeks."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom-Built",
      description: "Everything is tailored — no copy-paste templates."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First",
      description: "Every design works flawlessly on all screen sizes."
    }
  ];

useEffect(() => {
  if (!planeRef.current || !builtSectionRef.current) return;

  const section = builtSectionRef.current;
  const sectionWidth = section.offsetWidth;
  const sectionHeight = section.offsetHeight;

  const animation = gsap.to(planeRef.current, {
    scrollTrigger: {
      trigger: builtSectionRef.current,
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
    motionPath: {
      path: [
        { x: 0, y: 0 },                        // start at bottom-left
        { x: sectionWidth * 0.3, y: -100 },    // rise up a bit
        { x: sectionWidth * 0.6, y: -50 },     // mid-air
        { x: sectionWidth * 0.9, y: sectionHeight * 0.5 }, // land near bottom-right
      ],
      curviness: 1.5,
      autoRotate: true,
    },
    ease: "power1.inOut",
    duration: 3,
  });

  return () => {
    animation.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);



  return (
    <section
      id="about"
      className={` transition-colors duration-500 ${
        darkMode ? "bg-[#1A0E13]" : "bg-[#FAF9F6]"
      }`}
    >
      
      <div ref={builtSectionRef} className="relative py-20 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* === Built for Everyone Section === */}
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
              }`}
            >
              Built for Everyone
            </h2>
            <p
              className={`text-xl leading-relaxed ${
                darkMode ? "text-[#EDE9DD]" : "text-gray-700"
              }`}
            >
              Whether you're a student, a startup, a local store, or a school — we have a digital solution for you.
              <span className="font-semibold text-[#C1785A]"> Your vision, our code.</span>
            </p>
          </div>
          <img
            ref={planeRef}
            src={planePng}
            alt="Paper Plane"
            className="w-20 h-auto absolute left-0 top-1/2 z-0"
          />

          {/* === Why Webzio Section === */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
                }`}
              >
                Why Webzio?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-[#3A1C28] hover:bg-[#4C2A34]"
                      : "bg-[#EDE9DD] hover:bg-[#FAF9F6]"
                  }`}
                >
                  <div
                    className={`inline-flex p-4 rounded-xl mb-4 ${
                      darkMode
                        ? "bg-[#C1785A]/20 text-[#F4F3DC]"
                        : "bg-[#C1785A]/10 text-[#2D151F]"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h4
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
                    }`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-[#EDE9DD]" : "text-gray-700"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* === Who We Are Section === */}
          <div className="text-center mb-16">
            <h3
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
              }`}
            >
              Who We Are
            </h3>
            <p
              className={`text-lg mb-4 ${
                darkMode ? "text-[#EDE9DD]" : "text-gray-600"
              }`}
            >
              A small team with big vision
            </p>
          </div>

          {/* === Story Section === */}
          <div
            className={`rounded-3xl p-8 md:p-12 mb-16 ${
              darkMode ? "bg-[#3A1C28]" : "bg-[#EDE9DD]"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? "text-[#F4F3DC]" : "text-gray-700"
                }`}
              >
                Webzio was started by two passionate developers from Kerala with a shared goal — to make
                high-quality digital products accessible to everyone.
              </p>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? "text-[#F4F3DC]" : "text-gray-700"
                }`}
              >
                We noticed that small businesses, students, and everyday people needed websites and apps
                but were blocked by high costs and lack of technical knowledge.
              </p>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? "text-[#F4F3DC]" : "text-gray-700"
                }`}
              >
                So we created Webzio — where creativity meets code, affordability meets functionality,
                and every project gets the personal care it deserves.
              </p>
              <p
                className={`text-xl font-semibold ${
                  darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
                }`}
              >
                We don't just build websites. We help people build futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
