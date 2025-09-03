import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logos/webzioLOGO-01.png";
import WhiteLogo from "../assets/Logos/WEBZIOLOGO5-01.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // opposite logic
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // ✅ Detect scroll direction (down = expand, up = shrink)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // scrolling down → expand
        setIsExpanded(true);
      } else {
        // scrolling up → shrink
        setIsExpanded(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "#services" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "About", to: "#about" },
    { name: "Careers", to: "#careers" },
    { name: "Contact", to: "#contact" },
  ];

  const isCurrentRoute = (path: string) => location.pathname === path;

  return (
    <div className="absolute">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50  bg-transparent">
        <div
          ref={menuRef}
          className={`
            transition-all duration-500 ease-out
            ${isExpanded || isHovered || isMenuOpen ? "w-[90vw] max-w-4xl" : "w-auto min-w-[200px]"}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navbar container */}
          <div
            className={`
              relative overflow-hidden backdrop-blur-xl rounded-full
              transition-all duration-500 ease-out
              ${darkMode ? "bg-webzio-primary/90 border border-webzio-gray/20" : "bg-webzio-secondary/90 border border-webzio-gray/10"}
              ${isExpanded || isHovered || isMenuOpen ? "px-6 py-3 shadow-2xl" : "px-4 py-2 shadow-lg"}
            `}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <img
                src={darkMode ? WhiteLogo : Logo}
                alt="Webzio Logo"
                className={`transition-all duration-300 ${isExpanded || isHovered || isMenuOpen ? "h-8" : "h-6"}`}
              />

              {/* Desktop Nav */}
              <nav
                className={`
                  hidden md:flex items-center space-x-6 transition-all duration-500 ease-out
                  ${isExpanded || isHovered || isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`
                      relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300
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
                  </Link>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={`
                    p-2 rounded-full transition-all duration-300
                    ${darkMode
                      ? "bg-webzio-secondary/10 text-webzio-secondary hover:bg-webzio-secondary/20"
                      : "bg-webzio-primary/10 text-webzio-primary hover:bg-webzio-primary/20"}
                    ${isExpanded || isHovered || isMenuOpen ? "opacity-100 scale-100" : "opacity-80 scale-90"}
                  `}
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={`
                    md:hidden p-2 rounded-full transition-all duration-300
                    ${darkMode
                      ? "bg-webzio-secondary/10 text-webzio-secondary hover:bg-webzio-secondary/20"
                      : "bg-webzio-primary/10 text-webzio-primary hover:bg-webzio-primary/20"}
                  `}
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden mt-2 rounded-3xl backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out
              ${darkMode ? "bg-webzio-primary/95 border border-webzio-gray/20" : "bg-webzio-secondary/95 border border-webzio-gray/10"}
              ${isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
            `}
          >
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
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
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer so content isn’t hidden under header */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
