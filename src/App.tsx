import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorFollower from "./components/CursorFollower";
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
import OurProducts from "./home/components/OurProducts";
import LoadingPage from "./components/LoadingPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate a short loading for first render
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // 500ms minimum loading
    return () => clearTimeout(timer);
  }, []);


  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  if (isLoading) return <LoadingPage />;

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingPage key="loading" />
      ) : (
        <div className="min-h-screen hide-scrollbar bg-[#F4F3DC] text-gray-900 transition-colors duration-500">
          <Header />
          <main>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<OurProducts />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <CursorFollower />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
