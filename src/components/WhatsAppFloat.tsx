import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '917907805626';
    const message = encodeURIComponent('Hi Webzio! I\'m interested in your services. Can we discuss my project?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
    
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-webzio-accent hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;