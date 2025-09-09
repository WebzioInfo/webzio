import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight, Sparkles, Target, Rocket, Monitor, Globe, Pause, Play } from 'lucide-react';
import AdotzeeImg from '../../assets/projects/Adotzee.png';
import MediConnectImg from '../../assets/projects/mediConnect.png';
import PlashoeImg from '../../assets/projects/plashoe.png';
import GangothiriAquaImg from '../../assets/projects/plashoe.png';
import BrightElectricalImg from '../../assets/projects/plashoe.png';
import PortfolioImg from '../../assets/projects/Portfolio.png';

import { useLocation, useNavigate } from 'react-router-dom';

interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPortfolio, setIsPortfolio] = useState(false);

  const [isHolographic, setIsHolographic] = useState(false);
  const [viewMode, setViewMode] = useState<'showcase' | 'grid' >('showcase');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any | null>(null);
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    setIsPortfolio(location.pathname.startsWith('/portfolio'));
  }, [location.pathname]);

  const projects = [
    {
      name: "ADOTZEE",
      subtitle: "Admission Assistance Platform",
      description: "Revolutionary online admission consultancy platform that transforms how students explore and apply to colleges, courses, and specialized programs with AI-powered matching.",
      techStack: ["React", "Vite", "Tailwind CSS", ".NET Core", "SQL Server"],
      image: AdotzeeImg,
      category: "EdTech",
      year: "2024",
      stats: { users: "10K+", rating: "4.9", conversion: "85%" },
      features: [
        "AI-Powered Course Matching",
        "Real-time Application Tracking",
        "Smart Dashboard Analytics",
        "Automated Document Processing",
        "Multi-language Support"
      ],
      liveLink: "https://www.adotzee.in",
      primaryColor: "#1C3B70",      // Core brand blue
      secondaryColor: "#3575F0",    // Lively blue for CTA buttons
      glowColor: "rgba(53, 117, 240, 0.1)"
    },
    {
      name: "PLASHOE",
      subtitle: "E-Commerce Footwear Store",
      description: "Next-generation online shoe store featuring immersive product experiences, smart recommendations, and seamless checkout process for modern consumers.",
      techStack: ["React", "Vite", "Tailwind CSS", ".NET Core", "SQL Server"],
      image: PlashoeImg,
      category: "E-Commerce",
      year: "2024",
      stats: { products: "5K+", orders: "2K+", satisfaction: "96%" },
      features: ["Advanced Product Catalog", "Smart Filtering", "Secure Payments", "Order Tracking", "Customer Reviews"],
      liveLink: "https://sanoof-plashoe.vercel.app/",
      primaryColor: "#FACC15",      // Vibrant Yellow (key accent)
      secondaryColor: "#575756",    // Strong Black for backgrounds/buttons
      glowColor: "rgba(250, 204, 21, 0.1)"
    },
    {
      name: "MEDICONNECT",
      subtitle: "Smart Medical Communication Platform",
      description: "Advanced healthcare platform bridging the gap between medical professionals, patients, and caregivers with real-time monitoring and secure communication.",
      techStack: ["React", "Vite", "Tailwind CSS", ".NET Core", "Entity Framework", "SQL Server"],
      image: MediConnectImg,
      category: "HealthTech",
      year: "2024",
      stats: { patients: "1K+", accuracy: "99%", uptime: "99.9%" },
      features: [
        "Real-time Vitals Monitoring",
        "Secure Patient Communication",
        "Medical Records Management",
        "Appointment Scheduling",
        "Emergency Alerts"
      ],
      liveLink: "https://sanoof-mediconnect.vercel.app/",
      primaryColor: "#0EA5E9",       // Red for urgency/health
      secondaryColor: "#10B981",     // Orange for action elements
      glowColor: "rgba(14, 165, 233, 0.2)"
    },
    {
      name: "CARPLE",
      subtitle: "Smart Carpool & Ride-Sharing",
      description: "Eco-friendly ride-sharing platform powered by intelligent matching algorithms for optimal route planning and sustainable transportation solutions.",
      techStack: ["React", "Vite", "Tailwind CSS", ".NET Core", "SQL Server"],
      image: MediConnectImg,
      category: "Transportation",
      year: "2024",
      stats: { rides: "500+", savings: "40%", co2: "2T+" },
      features: [
        "Smart Route Matching",
        "Real-time GPS Tracking",
        "Carbon Footprint Calculator",
        "User Verification System",
        "Dynamic Fare Calculation"
      ],
      liveLink: "https://carple-app.vercel.app/",
      primaryColor: "#8B5CF6",           // Vivid Violet
      secondaryColor: "#EC4899",
      glowColor: "rgba(139, 92, 246, 0.15)"
    },
    {
      name: "Gangothiri Aqua",
      subtitle: "Pure Hydration for a Healthier Life",
      description:
        "Experience the perfect balance of minerals and purity with Gangothiri Aqua's premium drinking water. Sustainably packaged, quality-assured, and optimized for taste and health.",
      techStack: ["React", "Vite", "Tailwind CSS", ".NET Core"],
      image: GangothiriAquaImg, // replace with actual image import
      category: "Consumer Goods",
      year: "2025",
      stats: {
        products: "6+ Types",
        certified: "ISO 9001:2015",
        monitoring: "24/7 Quality Checks"
      },
      features: [
        "Perfect Mineral Balance",
        "Multi‑Stage Purification",
        "ISO Certified Quality",
        "Eco‑Friendly Packaging",
        "24/7 Quality Monitoring"
      ],
      liveLink: "https://gangothiri.vercel.app/",
      primaryColor: "#0C6D8C",
      secondaryColor: "#60C2C8",
      glowColor: "rgba(12, 109, 140, 0.2)"
    },
    {
      name: "Bright Electrical",
      subtitle: "Powering Your Future",
      description: "Bright Electrical is a professional electrical services provider committed to delivering safe, reliable, and affordable electrical solutions for residential, commercial, and industrial needs.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: BrightElectricalImg, // Replace this with actual image import (e.g., import BrightElectricalImg from '../assets/Logos/BrightElectrical.png')
      category: "Electrical Services",
      year: "2025",
      stats: {
        projects: "100+ Completed",
        clients: "80+ Happy Clients",
        experience: "10+ Years in Service"
      },
      features: [
        "Residential & Commercial Wiring",
        "Electrical Maintenance",
        "Panel Upgrades",
        "Lighting Installation",
        "Emergency Services"
      ],
      liveLink: "https://webzioinfo.github.io/BrightElectricals/",
      primaryColor: "#002F6C", // Deep Blue from the logo
      secondaryColor: "#0074D9", // Bright Blue highlight
      glowColor: "rgba(0, 47, 108, 0.15)" // Matching soft blue glow
    }, 
    {
      name: "Personal Portfolio Website",
      subtitle: "Professional Developer Showcase",
      "description": "A modern personal portfolio to showcase projects, skills, and experience. Built with responsive design, elegant UI, and smooth user experience to reflect a professional developer brand.",
      "year": "2025",
      "category": "Portfolio",
      "techStack": ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      "features": [
        "Responsive Design",
        "Animated Transitions",
        "Project & Skill Sections",
        "Social Media Integration",
        "Smooth Navigation"
      ],
      "stats": {
        "visitors": "5K+",
        "loadingSpeed": "100/100",
        "responsiveness": "100%"
      },
      "image": PortfolioImg,
      "liveLink": "https://sanoof-portfolio.vercel.app",
      "primaryColor": "#6F4EF2",
      "secondaryColor": "#F3F4F6",
      "glowColor": "rgba(111, 78, 242, 0.1)"
    }


  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && viewMode === 'showcase') {
      intervalRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 6000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, viewMode, projects.length]);


  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: (x - 0.5) * 2, y: (y - 0.5) * 2 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Inside your Portfolio component
  const handleIframeMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleIframeMouseLeave = () => {
    if (isAutoPlay && viewMode === 'showcase') {
      intervalRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 6000);
    }
  };


  const currentProjectData = projects[currentProject];
    const displayedProjects = isPortfolio ? projects : projects.slice(0, 3);

  return (
    <div
    id='portfolio'
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${darkMode ? 'bg-[#2D151F]' : 'bg-[#F4F3DC]'}`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: `linear-gradient(225deg, ${currentProjectData.secondaryColor}, ${currentProjectData.primaryColor})`,
            bottom: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            animationDelay: '2s'
          }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          >
            <div
              className="w-4 h-4 rotate-45"
              style={{
                background: `linear-gradient(45deg, ${currentProjectData.primaryColor}, ${currentProjectData.secondaryColor})`
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Enhanced Header */}
        <div className="text-center py-16 px-4">
          <div className="relative max-w-6xl mx-auto">


            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight ${isHolographic
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse'
                : darkMode ? 'text-white' : 'text-gray-900'
                }`}
              style={{
                filter: isHolographic ? 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))' : 'none',
                textShadow: isHolographic ? '0 0 50px rgba(168, 85, 247, 0.5)' : 'none',
                transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
              }}
            >
              PORTFOLIO
            </h1>

            <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Crafting Digital Experiences That <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Transform</span> Ideas Into Reality
            </p>

            {/* View Mode Selector */}
            <div className="flex justify-center space-x-2">
              {[
                { mode: 'showcase', icon: Monitor, label: 'Showcase' },
                { mode: 'grid', icon: Globe, label: 'Grid' }
              ].map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${viewMode === mode
                    ? 'text-white shadow-lg transform scale-105'
                    : darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                  style={{
                    background: viewMode === mode
                      ? `linear-gradient(135deg, ${currentProjectData.primaryColor}, ${currentProjectData.secondaryColor})`
                      : 'transparent'
                  }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setIsHolographic(!isHolographic)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 transform hover:scale-105 ${isHolographic
              ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/30'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
              }`}
          >
            <Sparkles size={16} className="inline mr-2" />
            {isHolographic ? 'HOLOGRAPHIC' : 'STANDARD'}
          </button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${darkMode
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-lg`}
          >
            {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
            {isAutoPlay ? 'Pause' : 'Play'}
          </button>

        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          {viewMode === 'showcase' && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
              {/* Laptop Screenshot (Takes 2 Columns) */}
              <div className="xl:col-span-2 relative">
                <div className="relative rounded-3xl shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4">
                  <div className="relative bg-black rounded-xl p-3 shadow-inner">
                    {/* Header Bar */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-gray-800 rounded-lg h-6 flex items-center px-3">
                        <Globe size={12} className="text-gray-400 mr-2" />
                        <span className="text-xs text-gray-400 truncate">
                          {currentProjectData.liveLink}
                        </span>
                      </div>
                    </div>



                    {/* Preview */}
                    <div
                      className="relative w-full rounded-lg overflow-hidden group h-[500px]"
                      onMouseEnter={handleIframeMouseEnter}
                      onMouseLeave={handleIframeMouseLeave}
                    >
                      <iframe
                        src={currentProjectData.liveLink}
                        className="min-w-full h-full"
                        style={{ border: 'none', minWidth: '100%' }}
                        title="Website Preview"
                      ></iframe>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10">
                      <button
                        onClick={prevProject}
                        className={`p-3 rounded-full shadow-lg transition hover:scale-110 group ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                        style={{
                          boxShadow: `0 10px 30px ${currentProjectData.glowColor}`,
                        }}
                      >
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={nextProject}
                        className={`p-3 rounded-full shadow-lg transition hover:scale-110 group ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                        style={{
                          boxShadow: `0 10px 30px ${currentProjectData.glowColor}`,
                        }}
                      >
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="bg-gray-300 dark:bg-gray-600 rounded-b-2xl h-6 relative mt-1">
                    <div className="absolute inset-x-0 top-2 flex justify-center">
                      <div className="w-16 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="xl:col-span-1 px-4 flex flex-col justify-center">
                <div className="mb-6">
                  <h2
                    className="text-4xl lg:text-5xl font-black mb-2 leading-tight"
                    style={{ color: currentProjectData.primaryColor }}
                  >
                    {currentProjectData.name}
                  </h2>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {currentProjectData.subtitle}
                  </h3>
                </div>

                <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {currentProjectData.description}
                </p>

                {/* Features */}
                <div className="mb-10">
                  <h4 className={`text-xs font-bold mb-4 tracking-widest uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {currentProjectData.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center p-2 rounded-lg transition hover:scale-105 group">
                        <Rocket size={14} className="mr-3" style={{ color: currentProjectData.primaryColor }} />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Launch Button */}
                <button
                  onClick={() => window.open(currentProjectData.liveLink, "_blank")}
                  className="flex items-center justify-center w-full px-8 py-4 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 shadow-xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${currentProjectData.primaryColor}, ${currentProjectData.secondaryColor})`,
                    boxShadow: `0 15px 50px ${currentProjectData.glowColor}`
                  }}
                >
                  <ExternalLink size={20} />
                  <span className="ml-3">Launch Project</span>
                </button>
              </div>

            </div>

          )}

          {viewMode === 'grid' && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentProject(index);
                      setViewMode('showcase');
                    }}
                    className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'
                      } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl`}
                    style={{
                      boxShadow: currentProject === index
                        ? `0 25px 50px -12px ${project.glowColor}`
                        : undefined
                    }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 hover:bg-black/10 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div
                            className="px-6 py-3 rounded-full text-white font-bold shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, ${project.primaryColor}, ${project.secondaryColor})`
                            }}
                            onClick={() => window.open(project.liveLink, "_blank")}
                          >
                            View Project
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="px-3 py-1 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: project.primaryColor }}
                        >
                          {project.category}
                        </div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {project.year}
                        </div>
                      </div>

                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: project.primaryColor }}
                      >
                        {project.name}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.subtitle}
                      </p>

                      {/* Mini Stats */}
                      <div className="flex justify-between text-xs">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div
                              className="font-bold"
                              style={{ color: project.primaryColor }}
                            >
                              {value}
                            </div>
                            <div className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                {!isPortfolio && (
   <div className="text-center mt-10">
     <button
       onClick={() => navigate("/portfolio")}
       className="px-8 py-4 rounded-full font-bold text-white shadow-lg transition hover:scale-105"
       style={{
         background:
           "linear-gradient(135deg, #6F4EF2, #EC4899)", // Gradient CTA
       }}
     >
       View All Projects
     </button>
   </div>
 )}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {viewMode === 'showcase' && isAutoPlay && isPortfolio && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div
            className="h-1 transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${currentProjectData.primaryColor}, ${currentProjectData.secondaryColor})`,
              width: `${((currentProject + 1) / projects.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;