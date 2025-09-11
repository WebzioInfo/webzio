import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import {  useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Smooth animations
import Logo from "../assets/Logos/webzioLOGO-01-cropped.png";

import { HashLink } from "react-router-hash-link";


interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // ✅ Throttled scroll detection
  const navigate = useNavigate();
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          setIsExpanded(currentScroll <= lastScrollY);
          setLastScrollY(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    console.log(location.pathname)
  }, [location.pathname]);

  const navItems = [
    { name: "Services", to: "#services" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "About", to: "#about" },
    // { name: "Careers", to: "#careers" },
    { name: "Contact", to: "#contact" },
  ];

  const isCurrentRoute = (path: string) => location.pathname === path;

  return (
    <div className="absolute">
      <header
      data-aos="fade-down"
  data-aos-duration="800"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-transparent">
        <motion.div
          ref={menuRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
           initial={{
    width: "90vw", // 👈 matches expanded state
    padding: "12px 24px",
  }}
          animate={{
            width: isExpanded || isHovered || isMenuOpen ? "90vw" : "300px",
            padding: isExpanded || isHovered || isMenuOpen ? "12px 24px" : "8px 16px",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="md:max-w-4xl"
        >
          {/* Navbar container */}
          <div
            className={`
              relative overflow-hidden backdrop-blur-xl rounded-full
              transition-all duration-500 ease-in-out p-2
              ${darkMode
                ? " bg-webzio-secondary/90 border border-webzio-gray/20"
                : "bg-webzio-secondary/90 border border-webzio-gray/10"}
              ${isExpanded || isHovered || isMenuOpen ? "shadow-2xl" : "shadow-lg"}
            `}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.img
                src={Logo}
                initial={{ height: 28 }}
                alt="Webzio Logo"
                animate={{ height: isExpanded || isHovered || isMenuOpen ? 28 : 26 }}
                transition={{ duration: 0.3 }}
                className="transition-all duration-300 p-1.5"
                onClick={()=>navigate('/')}
              />

              {/* Desktop Nav */}
              <motion.nav
                className={`hidden items-center space-x-6  ${isExpanded || isHovered || isMenuOpen ? "md:flex" : "hidden"}`}
                animate={{
                  opacity: isExpanded || isHovered || isMenuOpen ? 1 : 0,
                  scale: isExpanded || isHovered || isMenuOpen ? 1 : 0.95,
                }}
                transition={{ duration: 0.4 }}
              >
                {navItems.map((item) => (
                  <HashLink
                    key={item.name}
                    smooth to={`/${item.to}`}
                    className={`
                      relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300
                      ${isCurrentRoute(item.to)
                        ? darkMode
                          ? "bg-webzio-secondary text-webzio-primary"
                          : "bg-webzio-primary text-webzio-secondary"
                        :  "text-webzio-primary hover:bg-webzio-primary/10"}
                    `}
                  >
                    {item.name}
                  </HashLink>
                ))}
              </motion.nav>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleDarkMode}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    p-2 rounded-full transition-all duration-300
                    ${ "bg-webzio-primary/10 text-webzio-primary hover:bg-webzio-primary/20"}
                  `}
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    md:hidden p-2 rounded-full transition-all duration-300
                    ${darkMode
                      ? "bg-webzio-secondary/10 text-webzio-secondary hover:bg-webzio-secondary/20"
                      : "bg-webzio-primary/10 text-webzio-primary hover:bg-webzio-primary/20"}
                  `}
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={
              isMenuOpen
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.95, y: -10 }
            }
            transition={{ duration: 0.4 }}
            className={`
              md:hidden mt-2 rounded-3xl backdrop-blur-xl overflow-hidden
              ${darkMode
                ? "bg-webzio-primary/95 border border-webzio-gray/20"
                : "bg-webzio-secondary/95 border border-webzio-gray/10"}
            `}
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  to={item.to}
                  className={`
                    block px-4 py-3 text-sm font-medium rounded-2xl transition-colors duration-300
                    ${isCurrentRoute(item.to)
                      ? darkMode
                        ? "bg-webzio-secondary text-webzio-primary"
                        : "bg-webzio-primary text-webzio-secondary"
                      : darkMode
                        ? "text-webzio-secondary hover:bg-webzio-secondary/10"
                        : "text-webzio-primary hover:bg-webzio-primary/10"}
                  `}
                >
                  {item.name}
                </HashLink>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      </header>

      {/* Spacer so content isn’t hidden under header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
