// LoadingPage.tsx
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700 dark:text-gray-300">Loading...</p>
    </motion.div>
  );
};

export default LoadingPage;
