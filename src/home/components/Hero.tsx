import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LightRays from "../../components/LightRays";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[70px] transition-colors duration-500 bg-webzio-secondary"
    >
      {/* Light Rays Effect */}
      <div className="absolute inset-0 overflow-hidden"> <LightRays raysOrigin="top-center" raysColor="#0A0A0A" 
        raysSpeed={1.2} lightSpread={2.0} rayLength={1.5} followMouse={true} mouseInfluence={0.15} noiseAmount={0.05} distortion={0.03} className="absolute inset-0 z-0" /> </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-webzio-primary"
          
        >
          Build Websites & Apps
          <br />
          <span
            className="text-webzio-gray"
          >
            That Speak for You
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-webzio-primary/80"
        >
          From personal portfolios to business platforms — Webzio crafts
          beautiful, budget-friendly digital solutions that bring your vision to
          life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-webzio-accent text-webzio-secondary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
            onClick={() => navigate("/contact")}
          >
            <span>Get a Free Quote</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            onClick={() => navigate("/services")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 
              bg-transparent text-webzio-primary hover:bg-webzio-primary hover:text-webzio-secondary border-2 border-webzio-primary"
            
          >
            <Play size={20} />
            <span>Explore Services</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center border-webzio-primary"
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse bg-webzio-primary"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;