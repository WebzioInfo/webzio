import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingPageProps {
  onLoadingComplete: () => void;
  loadingDuration: number;
}

const WebzioLoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete, loadingDuration }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set([textRef.current, taglineRef.current, progressRef.current], {
      opacity: 0,
      y: 50
    });

    // Create floating particles
    const createParticles = () => {
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: linear-gradient(45deg, #00d4ff, #7c3aed);
            border-radius: 50%;
            opacity: 0;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
          `;
          particlesRef.current.appendChild(particle);
          
          gsap.to(particle, {
            opacity: Math.random() * 0.8 + 0.2,
            duration: 2,
            delay: Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          });
          
          gsap.to(particle, {
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            duration: Math.random() * 10 + 5,
            repeat: -1,
            yoyo: true,
            ease: "none"
          });
        }
      }
    };

    // Animation sequence
    tl.to(containerRef.current, {
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      duration: loadingDuration? loadingDuration :  0.8,
      ease: "power2.inOut"
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(progressRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    createParticles();

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setLoadingComplete(true);
          }, 800); // Small delay before exit animation
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Cleanup
    return () => {
      clearInterval(progressTimer);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [progress]);

  useEffect(() => {
    if (loadingComplete) {
      const exitTl = gsap.timeline();
      
      exitTl.to([textRef.current, taglineRef.current], {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(progressRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in"
      })
      .to([textRef.current, taglineRef.current], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.in"
      }, "-=0.3")
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          onLoadingComplete();
        }
      });
    }
  }, [loadingComplete, onLoadingComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>



      {/* Company Name */}
      <div ref={textRef} className="text-center mb-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wider">
          WEBZIO
        </h1>
        <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Tagline */}
      <div ref={taglineRef} className="text-center mb-12">
        <p className="text-xl text-gray-300 font-light tracking-wide">
          Your Vision <span className="text-cyan-400 font-medium">Our Code</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div ref={progressRef} className="w-80 max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Loading...</span>
          <span className="text-sm text-cyan-400 font-mono">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
          <div 
            ref={progressBarRef}
            className="h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Loading dots */}
      <div className="flex space-x-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-gray-500">
          Crafting digital solutions with precision and innovation
        </p>
      </div>
    </div>
  );
};

export default WebzioLoadingPage;