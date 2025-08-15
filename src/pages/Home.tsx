import Hero from '../home/components/Hero';
import Services from '../home/components/Services';
import Portfolio from '../home/components/Portfolio';
import About from '../home/components/About';
import Contact from '../home/components/Contact';

const Home = ({ darkMode }: { darkMode: boolean }) => {

  return (
    <>
      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
};

export default Home;
