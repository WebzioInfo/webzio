import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorFollower from "./components/CursorFollower";
import LoadingPage from "./components/LoadingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Services from "./home/components/Services";
import Portfolio from "./home/components/Portfolio";
import About from "./home/components/About";
import Careers from "./home/components/Careers";
import Contact from "./home/components/Contact";
import NotFoundPage from "./pages/404/NotFoundPage";
import Lenis from "@studio-freight/lenis";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

   useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const handleLoadingComplete = () => setIsLoading(false);

  if (isLoading)
    return (
      <LoadingPage
        onLoadingComplete={handleLoadingComplete}
        loadingDuration={1.5}
      />
    );

  return (
    <div
      className={`min-h-screen hide-scrollbar transition-colors duration-500 ${
        darkMode ? "bg-webzio-primary text-white" : "bg-[#FAF9F6] text-gray-900"
      }`}
    >
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/careers" element={<Careers darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
      <WhatsAppFloat />
      <CursorFollower />
    </div>
  );
}

export default App;
