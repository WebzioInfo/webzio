import React from 'react';
import { Monitor, Smartphone, ShoppingCart, Settings, Palette, Globe } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Personal Websites",
      description: "Resume sites, portfolios, events, and more — we build beautiful websites that represent individuals with elegance.",
      features: ["Portfolio Sites", "Resume Websites", "Event Pages", "Personal Blogs"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Business Websites",
      description: "We create full-featured websites for shops, clinics, startups, and agencies — including contact forms, map integration, and service listings.",
      features: ["Corporate Sites", "Clinic Websites", "Agency Portfolios", "Service Listings"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Using Flutter, we build cross-platform mobile apps for Android and iOS — perfect for businesses needing apps with login, bookings, dashboards, and more.",
      features: ["Cross-Platform Apps", "Business Utilities", "Booking Systems", "Admin Dashboards"]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Custom Web Applications",
      description: "Internal tools, dashboards, booking platforms, inventory managers — fully tailored to your business logic.",
      features: ["CRM Systems", "Booking Platforms", "Inventory Management", "Custom Dashboards"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Platforms",
      description: "Start your own online store — product listing, shopping cart, admin panel, payment gateway, customer support integration — all included.",
      features: ["Online Stores", "Payment Integration", "Admin Panels", "Order Management"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX & Animation",
      description: "Delight your users with modern, animated UIs using Framer Motion, Lottie, and micro-interactions. We make your product unforgettable.",
      features: ["Modern UI Design", "Smooth Animations", "User Experience", "Interactive Elements"]
    }
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Digital Services for Every Need
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Webzio delivers end-to-end solutions — from design to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl mb-6 transition-colors duration-300 ${
                darkMode 
                  ? 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/50' 
                  : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
              }`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-base mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <button className={`text-sm font-semibold transition-colors duration-200 ${
                  darkMode 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't see what you're looking for? We build custom solutions too.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;