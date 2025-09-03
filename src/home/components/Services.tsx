import React from 'react';
import { Monitor, Globe, ShoppingCart, Settings, Palette, Server } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Personal Websites",
      description:
        "Portfolios, resumes, event pages, and blogs — crafted to showcase your individuality with elegance.",
      features: ["Portfolio Sites", "Resume Websites", "Event Pages", "Personal Blogs"],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Business Websites",
      description:
        "Corporate, NGO, or professional service websites — with contact forms, maps, and service listings.",
      features: ["Corporate Sites", "Clinic Websites", "Agency Portfolios", "Service Listings"],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Platforms",
      description:
        "From boutique stores to large catalogs — we build scalable e-commerce with payments, admin panels, and order management.",
      features: ["Online Stores", "Payment Integration", "Admin Panels", "Order Management"],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Custom Web Applications",
      description:
        "CRMs, dashboards, booking systems, and inventory managers — fully tailored to your business logic.",
      features: ["CRM Systems", "Booking Platforms", "Inventory Management", "Custom Dashboards"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "User-friendly and brand-aligned interfaces that deliver delightful digital experiences.",
      features: ["Modern UI Design", "Responsive Layouts", "Interactive Elements", "Brand Integration"],
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Hosting & SEO Setup",
      description:
        "Reliable hosting, SEO optimization, and ongoing maintenance to keep your website fast and visible.",
      features: ["Hosting Setup", "SEO Optimization", "Maintenance", "Performance Monitoring"],
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? 'bg-[#2D151F]' : 'bg-[#F4F3DC]'}`}
    >
        <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10 animate-pulse ${
            darkMode ? 'bg-[#F4F3DC]' : 'bg-[#2D151F]'
          }`}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
            }`}
          >
            Digital Services for Every Need
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'
            }`}
          >
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
                  ? 'bg-[#2D151F]/80 border border-[#F4F3DC]/20'
                  : 'bg-[#F4F3DC] border border-[#2D151F]/20'
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl mb-6 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-[#F4F3DC]/10 text-[#F4F3DC]'
                    : 'bg-[#2D151F]/10 text-[#2D151F]'
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-base mb-6 leading-relaxed ${
                  darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'
                }`}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center text-sm ${
                      darkMode ? 'text-[#F4F3DC]/70' : 'text-[#2D151F]/70'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        darkMode ? 'bg-[#F4F3DC]' : 'bg-[#2D151F]'
                      }`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    darkMode
                      ? 'text-[#F4F3DC] hover:underline'
                      : 'text-[#2D151F] hover:underline'
                  }`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p
            className={`text-lg mb-6 ${
              darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'
            }`}
          >
            Don’t see what you’re looking for? We also build custom solutions.
          </p>
          <button
            className="bg-[#2D151F] text-[#F4F3DC] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
