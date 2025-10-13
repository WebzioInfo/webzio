import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import LoadingPage from "../components/LoadingPage";

// ✅ Lazy load heavy sections for better LCP performance
const Hero = lazy(() => import("../home/components/Hero"));
const About = lazy(() => import("../home/components/About"));
const Services = lazy(() => import("../home/components/Services"));
const Portfolio = lazy(() => import("../home/components/Portfolio"));
const Parallax = lazy(() => import("../home/components/Parallax"));
const Contact = lazy(() => import("../home/components/Contact"));
const InfiniteScroller = lazy(() => import("../components/InfiniteScroller"));
// const OurProducts = lazy(() => import("../home/components/OurProducts"));

const Home = () => {
  // ✅ AOS initialization (only once)
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Webzio International | Web Development & Branding Agency</title>
        <meta
          name="description"
          content="Webzio International builds powerful websites, apps, and brands with modern technology and creative design."
        />
        <meta
          name="keywords"
          content="web design, react development, branding, seo, kerala, india"
        />
      </Helmet>

      {/* ✅ Suspense ensures smooth lazy loading with fallback */}
      <Suspense fallback={<LoadingPage />}>
        {/* Hero Section */}
        <section className="bg-[#FAF9F6] text-webzio-primary">
          <Hero />
        </section>

        {/* About Section */}
        <section data-aos="fade-up" className="bg-webzio-secondary text-webzio-primary">
          <About />
        </section>

        {/* Services Section */}
        <section id="services" data-aos="fade-up" className="bg-webzio-light text-webzio-primary">
          <Services />
        </section>

        {/* Products (optional)
        <section
          id="products"
          data-aos="fade-up"
          className={darkMode ? "bg-webzio-dark text-webzio-secondary" : "bg-webzio-light text-webzio-primary"}
        >
          <OurProducts darkMode={darkMode} />
        </section> */}

        {/* Portfolio Section */}
        <section data-aos="fade-up" className="bg-webzio-surface text-webzio-primary">
          <Portfolio />
        </section>

        {/* Parallax Section */}
        <section
          data-aos="fade-up"
          className="bg-gradient-to-b from-webzio-light to-webzio-surface text-webzio-primary"
        >
          <Parallax />
        </section>

        {/* Contact Section */}
        <section data-aos="fade-up" className="bg-webzio-light text-webzio-primary">
          <Contact />
        </section>

        {/* Infinite Scroller */}
        <section data-aos="fade-up">
          <InfiniteScroller />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
