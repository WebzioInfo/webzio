import Hero from "../home/components/Hero";
import Services from "../home/components/Services";
import Portfolio from "../home/components/Portfolio";
import About from "../home/components/About";
import Contact from "../home/components/Contact";
import Parallax from "../home/components/Parallax";
// import OurProducts from "../home/components/OurProducts";
import InfiniteScroller from "../components/InfiniteScroller";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
  <title>Webzio International | Web Development & Branding Agency</title>
  <meta
    name="description"
    content="Webzio International builds powerful websites, apps, and brands with modern technology and creative design."
  />
  <meta name="keywords" content="web design, react development, branding, seo, kerala, india" />
</Helmet>
      {/* Hero Section */}
      <div
        className="bg-[#FAF9F6]  text-webzio-primary"
      >
        <Hero />
      </div>

      {/* About Section */}
      <div
        data-aos="fade-up"
        className="bg-webzio-secondary text-webzio-primary"
      >
        <About />
      </div>

      {/* Services Section */}
      <div
        id="services"
        data-aos="fade-up"
        className="bg-webzio-light text-webzio-primary"
      >
        <Services />
      </div>
      {/* <div
        id="products"
        data-aos="fade-up"
        className={darkMode ? "bg-webzio-dark text-webzio-secondary" : "bg-webzio-light text-webzio-primary"}
      >
        <OurProducts darkMode={darkMode} />
      </div> */}

      {/* Portfolio Section */}
      <div
        data-aos="fade-up"
        className="bg-webzio-surface text-webzio-primary"
      >
        <Portfolio />
      </div>


      {/* Parallax Section */}
      <div
        data-aos="fade-up"
        className="bg-gradient-to-b from-webzio-light to-webzio-surface text-webzio-primary"
      >
        <Parallax />
      </div>


      {/* Contact Section */}
      <div
        data-aos="fade-up"
        className="bg-webzio-light text-webzio-primary"
      >
        <Contact />
      </div>
      <div
        data-aos="fade-up"
        className=""
      >
        <InfiniteScroller />
      </div>
    </>
  );
};

export default Home;
