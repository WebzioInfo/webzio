import React from 'react';
import { Code, Heart, MapPin, Phone, Mail, Globe, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterLogo from "../assets/Logos/WEBZIOLOGO5-01.png";
interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];


  const services = [
    'Personal Websites',
    'Business Websites',
    'E-commerce Stores',
    'Mobile Apps',
    'Custom Web Apps',
    'UI/UX Design'
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: 'Kerala, India' },
    { icon: <Phone className="w-4 h-4" />, text: '+91 7907805626' },
    { icon: <Mail className="w-4 h-4" />, text: 'support@webzio.in' },
    { icon: <Globe className="w-4 h-4" />, text: 'www.webzio.in' }
  ];

  return (
    <footer className={`py-16 mx-4 rounded-t-xl  ${darkMode ? 'bg-gray-900 border-t border-gray-900' : 'bg-gray-800 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-0">
              <img
                src={FooterLogo}
                alt="Webzio Logo"
                className="h-30 -m-5 -mt-7 -ml-9 w-auto"
              />
              <h1 className="text-2xl -mt-3 ms-2 font-extrabold" style={{ fontFamily: '"Droid Serif", serif' }}>WEBZIO</h1>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Digital Solutions, Built for Everyone. From personal websites to powerful business apps — we do it all.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/webzi.o/" target='_blank' className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="text-blue-400">
                    {info.icon}
                  </div>
                  <span className="text-gray-300 text-sm">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Webzio</span>. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;