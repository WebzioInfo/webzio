import Hero from "../home/components/Hero";
import Services from "../home/components/Services";
import Portfolio from "../home/components/Portfolio";
import About from "../home/components/About";
import Contact from "../home/components/Contact";
import Parallax from "../home/components/Parallax";
import OurProducts from "../home/components/OurProducts";

const Home = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <>
      {/* Hero Section */}
      <div
        
        className={darkMode ? "bg-webzio-primary text-webzio-secondary" : "bg-webzio-secondary text-webzio-primary"}
      >
        <Hero darkMode={darkMode} />
      </div>

      {/* Services Section */}
      <div
      id="services"
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-dark text-webzio-secondary" : "bg-webzio-light text-webzio-primary"}
      >
        <Services darkMode={darkMode} />
      </div>
      <div
      id="services"
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-dark text-webzio-secondary" : "bg-webzio-light text-webzio-primary"}
      >
        <OurProducts darkMode={darkMode} />
      </div>

      {/* Portfolio Section */}
      <div
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-contrast text-webzio-secondary" : "bg-webzio-surface text-webzio-primary"}
      >
        <Portfolio darkMode={darkMode} />
      </div>

      {/* About Section */}
      <div
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-primary text-webzio-secondary" : "bg-webzio-secondary text-webzio-primary"}
      >
        <About darkMode={darkMode} />
      </div>

      {/* Parallax Section */}
      <div
        data-aos="fade-up"
        className={darkMode ? "bg-gradient-to-b from-webzio-dark to-webzio-contrast text-webzio-secondary" : "bg-gradient-to-b from-webzio-light to-webzio-surface text-webzio-primary"}
      >
        <Parallax darkMode={darkMode} />
      </div>

      {/* Contact Section */}
      <div
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-dark text-webzio-secondary" : "bg-webzio-light text-webzio-primary"}
      >
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
};

export default Home;
