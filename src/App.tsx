import { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorFollower from "./components/CursorFollower";
import LoadingPage from "./components/LoadingPage";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./home/components/Services"));
const Portfolio = lazy(() => import("./home/components/Portfolio"));
const About = lazy(() => import("./home/components/About"));
const Careers = lazy(() => import("./home/components/Careers"));
const Contact = lazy(() => import("./home/components/Contact"));
const OurProducts = lazy(() => import("./home/components/OurProducts"));
const NotFoundPage = lazy(() => import("./pages/404/NotFoundPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initial loader (handles network slowness gracefully)
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);

    // Timeout fallback (if load event never fires)
    const timeout = setTimeout(() => setIsLoading(false), 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
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
      <div className="min-h-screen hide-scrollbar bg-[#F4F3DC] text-gray-900 transition-colors duration-500">
        <Header />

        {/* ✅ Suspense wraps lazy routes */}
        <Suspense fallback={<LoadingPage />}>
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
        </Suspense>

        <Footer />
        <WhatsAppFloat />
        <CursorFollower />
      </div>
    </AnimatePresence>
  );
}

export default App;
