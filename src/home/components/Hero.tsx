import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LightRays from "../../components/LightRays";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? "bg-webzio-primary" : "bg-webzio-secondary"
      }`}
    >
      {/* Light Rays Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor={darkMode ? "#FAFAFA" : "#0A0A0A"} // Updated to match monochrome theme
          raysSpeed={1.2}
          lightSpread={1.0}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight ${
            darkMode ? "text-webzio-secondary" : "text-webzio-primary"
          }`}
        >
          Build Websites & Apps
          <br />
          <span 
            className={`${
              darkMode 
                ? "text-webzio-muted" 
                : "text-webzio-gray"
            }`}
          >
            That Speak for You
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto ${
            darkMode ? "text-webzio-secondary/80" : "text-webzio-primary/80"
          }`}
        >
          From personal portfolios to business platforms — Webzio crafts
          beautiful, budget-friendly digital solutions that make your vision a
          reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button className="group bg-webzio-primary text-webzio-secondary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
            <span>Get a Free Quote</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => navigate("/services")}
            className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
              darkMode
                ? "bg-transparent text-webzio-secondary hover:bg-webzio-secondary hover:text-webzio-primary border-2 border-webzio-secondary"
                : "bg-transparent text-webzio-primary hover:bg-webzio-primary hover:text-webzio-secondary border-2 border-webzio-primary"
            }`}
          >
            <Play size={20} />
            <span>Explore Services</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "10+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "Fast", label: "Delivery" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`text-3xl font-bold transition-colors duration-300 ${
                  darkMode 
                    ? "text-webzio-secondary group-hover:text-webzio-muted" 
                    : "text-webzio-primary group-hover:text-webzio-gray"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-webzio-secondary/80" : "text-webzio-primary/80"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? "border-webzio-secondary" : "border-webzio-primary"
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? "bg-webzio-secondary" : "bg-webzio-primary"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;