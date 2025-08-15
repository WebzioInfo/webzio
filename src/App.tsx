import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './home/components/Services';
import Portfolio from './home/components/Portfolio';
import About from './home/components/About';
import Careers from './home/components/Careers';
import Contact from './home/components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import './App.css';
import NotFoundPage from './pages/404/NotFoundPage';
import CursorFollower from './components/CursorFollower';
import LoadingPage from './components/LoadingPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  if (isLoading) {
    return (
      <LoadingPage
        onLoadingComplete={handleLoadingComplete}
        loadingDuration={1.5}
      />
    );
  }

  return (
    <>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div
          className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/careers" element={<Careers darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer darkMode={darkMode} />
          <WhatsAppFloat />
        </div>
      </div>
      <CursorFollower />
    </>
  );
}

export default App;
