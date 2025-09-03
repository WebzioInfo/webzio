import { useEffect } from "react";
import logo from "../assets/Logos/WEBZIOLOGO5-01.png";

const LoadingPage = ({ 
  onLoadingComplete, 
  loadingDuration = 2 
}: { 
  onLoadingComplete: () => void; 
  loadingDuration?: number; 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, loadingDuration * 1000);

    return () => clearTimeout(timer);
  }, [loadingDuration, onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-[9999]">
      {/* Logo Loader */}
      <div className="flex items-center space-x-2">
        {/* W Logo */}
        <img 
          src={logo} 
          alt="Webzio Logo" 
          className="w-40 md:w-20 animate-bounce"
        />
        {/* EZIO in Montserrat */}
        <h1 className="text-5xl md:text-6xl font-bold font-[Montserrat] tracking-wide">
          EZIO
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
