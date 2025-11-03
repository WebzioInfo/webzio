import { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home";

import LoadingPage from "./components/LoadingPage";

// ✅ Lazy-loaded components

// ✅ Lazy-loaded pages
// const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./home/components/Services"));
const Portfolio = lazy(() => import("./home/components/Portfolio"));
const About = lazy(() => import("./home/components/About"));
const Careers = lazy(() => import("./home/components/Careers"));
const Contact = lazy(() => import("./home/components/Contact"));
const OurProducts = lazy(() => import("./home/components/OurProducts"));
const NotFoundPage = lazy(() => import("./pages/404/NotFoundPage"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const WhatsAppFloat = lazy(() => import("./components/WhatsAppFloat"));
const CursorFollower = lazy(() => import("./components/CursorFollower"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // ✅ Handle initial load (network-safe)
    const onLoad = () => setIsLoading(false);
    window.addEventListener("load", onLoad);

    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let frame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  useEffect(() => {
    const preload = async () => {
      await Promise.all([
        import("./home/components/Services"),
        import("./home/components/Portfolio"),
        import("./home/components/Contact"),
      ]);
    };
    preload();
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen hide-scrollbar bg-[#F4F3DC] text-gray-900 transition-colors duration-500">
        <Suspense fallback={<LoadingPage />}>
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
        </Suspense>
      </div>
    </AnimatePresence>
  );
}

export default App;
