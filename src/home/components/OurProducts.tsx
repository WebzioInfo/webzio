// src/pages/OurProducts.tsx
import { Heart, Droplet, ShoppingCart } from "lucide-react";
import React from "react";

interface OurProductsProps {
  darkMode: boolean;
}

const products = [
  {
    id: 1,
    name: "MediConnect",
    description:
      "A comprehensive platform for homecare agencies to efficiently manage patients, nurses, and relatives. Streamline communication, vital tracking, and medication management for seamless homecare operations.",
    features: [
      "Patient and nurse management",
      "Real-time vital tracking",
      "Food & medication logs",
      "Alerts and notifications",
      "Role-based access for nurses, relatives, and admins",
    ],
    icon: <Heart className="text-red-500 w-12 h-12 mb-4" />,
  },
  {
    id: 2,
    name: "E-Commerce Management",
    description:
      "A complete e-commerce management platform for retail businesses. Manage products, orders, inventory, payments, and customer interactions seamlessly.",
    features: [
      "Product catalog management",
      "Order & inventory tracking",
      "Customer management & support",
      "Payment gateway integration",
      "Analytics and sales reports",
      "Discounts, promotions, and coupons",
    ],
    icon: <ShoppingCart className="text-green-500 w-12 h-12 mb-4" />,
  },
  {
    id: 3,
    name: "AquaSmart",
    description:
      "A smart automation platform for aqua bottling & distribution businesses. It streamlines daily operations, reduces errors, and brings full digital control to your company.",
    features: [
      "Jar & stock management",
      "Production monitoring & delay logs",
      "Water purity logs & batch testing",
      "Automation alerts & reminders",
      "Flexible payment system (Cash, UPI, Credit)",
      "Staff attendance & work logs",
      "Smart reports & dashboards",
    ],
    icon: <Droplet className="text-cyan-500 w-12 h-12 mb-4" />,
    pdf: "/docs/AquaSmart_Business_Proposal_064418.pdf",
  },
];

const OurProducts: React.FC<OurProductsProps> = ({ darkMode }) => {
  return (
    <div

      className={`min-h-screen py-16 px-4 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-[#1A0E13]" : "bg-webzio-secondary"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          className={`text-4xl md:text-5xl font-bold ${
            darkMode ? "text-webzio-secondary" : "text-webzio-primary"
          }`}
        >
          Our Products
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl ${
            darkMode ? "text-webzio-secondary/80" : "text-webzio-gray"
          }`}
        >
          Innovative solutions tailored for your business needs
        </p>
      </div>

      {/* Products Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between ${
              darkMode ? "bg-webzio-secondary" : "bg-webzio-surface"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {product.icon}
              <h2
                className={`text-2xl font-semibold mb-4 ${
                  darkMode ? "text-webzio-primary" : "text-webzio-primary"
                }`}
              >
                {product.name}
              </h2>
              <p
                className={`mb-6 ${
                  darkMode ? "text-webzio-primary/80" : "text-webzio-gray"
                }`}
              >
                {product.description}
              </p>
              <ul
                className={`list-disc list-inside space-y-2 mb-6 text-left ${
                  darkMode ? "text-webzio-muted/90" : "text-webzio-muted"
                }`}
              >
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
              <button
                className={`px-6 py-2 rounded-full hover:scale-105 transition-transform font-medium ${
                  darkMode
                    ? "bg-webzio-secondary text-webzio-primary border border-webzio-primary hover:bg-webzio-primary hover:text-webzio-secondary"
                    : "bg-webzio-primary text-webzio-secondary"
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default OurProducts;
