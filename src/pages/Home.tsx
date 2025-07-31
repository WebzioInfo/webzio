import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
// import Careers from '../components/Careers';
import Contact from '../components/Contact';

const Home = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <About darkMode={darkMode} />
      {/* <Careers darkMode={darkMode} /> */}
      <Contact darkMode={darkMode} />
    </>
  );
};

export default Home;
