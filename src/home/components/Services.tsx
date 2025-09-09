import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Monitor, Globe, ShoppingCart, Settings, Palette, Server } from "lucide-react";

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

 const services = [
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Digital Solutions",
    description:
      "Personal and business websites, portfolios, resumes, event pages, and blogs — fully responsive and tailored to your needs.",
    features: ["Portfolio Sites", "Corporate Websites", "Event Pages", "Blogs"],
    animation: "fade-up",
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-commerce Platforms",
    description:
      "From boutique stores to large catalogs — we build scalable e-commerce solutions with payments, admin panels, and order management.",
    features: ["Online Stores", "Payment Integration", "Admin Panels", "Order Management"],
    animation: "fade-up",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Custom Web Applications",
    description:
      "CRMs, dashboards, booking systems, and inventory managers — fully tailored to your business processes and workflow.",
    features: ["CRM Systems", "Booking Platforms", "Inventory Management", "Custom Dashboards"],
    animation: "fade-up",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description:
      "User-friendly, modern, and brand-aligned interfaces that deliver delightful digital experiences across all devices.",
    features: ["Responsive Layouts", "Interactive Elements", "Brand Integration", "Modern UI Design"],
    animation: "fade-up",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Digital Marketing & SEO",
    description:
      "Boost your online presence with search engine optimization, social media marketing, and performance tracking for measurable growth.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    animation: "fade-up",
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Cloud & Hosting",
    description:
      "Reliable cloud infrastructure, website hosting, backups, and performance monitoring to ensure uptime and scalability.",
    features: ["Web Hosting", "Cloud Deployment", "Backups & Security", "Performance Monitoring"],
    animation: "fade-up",
  },
];

  return (
   <section
  id="services"
  className={`py-20 relative overflow-hidden ${
    darkMode
      ? "bg-gradient-to-br from-[#2D151F] to-[#3A1C28]"
      : "bg-gradient-to-br from-[#F4F3DC] to-[#EDE9DD]"
  }`}
>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10 animate-pulse ${
            darkMode ? "bg-[#F4F3DC]" : "bg-[#2D151F]"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
            }`}
          >
            Digital Services for Every Need
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-[#EDE9DD]/80" : "text-[#2D151F]/80"
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
              data-aos={service.animation}
              data-aos-delay={index * 100}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode
                  ? index % 2 === 0
                    ? "bg-[#2D151F]/90 border border-[#F4F3DC]/20"
                    : "bg-[#3A1C28]/80 border border-[#F4F3DC]/10"
                  : index % 2 === 0
                    ? "bg-[#F4F3DC] border border-[#2D151F]/20"
                    : "bg-[#EDE9DD] border border-[#2D151F]/10"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-300 group-hover:shadow-lg ${
                  darkMode
                    ? "bg-[#F4F3DC]/10 text-[#F4F3DC] group-hover:bg-[#C1785A]/20"
                    : "bg-[#2D151F]/10 text-[#2D151F] group-hover:bg-[#C1785A]/10"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-[#F4F3DC]" : "text-[#2D151F]"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-base mb-6 leading-relaxed ${
                  darkMode ? "text-[#EDE9DD]/80" : "text-[#2D151F]/80"
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
                      darkMode ? "text-[#EDE9DD]/70" : "text-[#2D151F]/70"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        darkMode ? "bg-[#C1785A]" : "bg-[#2D151F]"
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
                      ? "text-[#F4F3DC] hover:text-[#C1785A]"
                      : "text-[#2D151F] hover:text-[#C1785A]"
                  }`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p
            className={`text-lg mb-6 ${
              darkMode ? "text-[#EDE9DD]/80" : "text-[#2D151F]/80"
            }`}
          >
            Don’t see what you’re looking for? We also build custom solutions.
          </p>
          <button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              darkMode
                ? "bg-[#F4F3DC] text-[#2D151F] hover:bg-[#EDE9DD]"
                : "bg-[#2D151F] text-[#F4F3DC] hover:bg-[#3A1C28]"
            }`}
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
