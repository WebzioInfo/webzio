import { useEffect } from "react";

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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-[9999]">
   
      {/* Simple Spinner */}
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
