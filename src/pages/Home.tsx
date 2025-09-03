import Hero from "../home/components/Hero";
import Services from "../home/components/Services";
import Portfolio from "../home/components/Portfolio";
import About from "../home/components/About";
import Contact from "../home/components/Contact";

const Home = ({ darkMode }: { darkMode: boolean }) => {
   const toggleDarkMode = () => {
    const newMode = !darkMode;
    // setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  return (
    <>
      <div data-aos="fade-up">
        <Hero darkMode={darkMode} />
      </div>

      <div data-aos="fade-up">
        <Services darkMode={darkMode} />
      </div>

      <div data-aos="fade-up">
        <Portfolio darkMode={darkMode} />
      </div>

      <div data-aos="fade-up">
        <About darkMode={darkMode} />
      </div>

      <div data-aos="fade-up">
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
};


export default Home;
