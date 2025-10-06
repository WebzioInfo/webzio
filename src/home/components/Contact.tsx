import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_kbl4037',
        'template_eolkcae',
        formData,
        'hxbWYGVcLo4SCG7mK'
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Failed to send message:', error);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: "Location", details: "Kerala, India" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", details: "+91 7907805626" },
    { icon: <Mail className="w-6 h-6" />, title: "Email", details: "webzio-info@gmail.com" },
    { icon: <Globe className="w-6 h-6" />, title: "Website", details: "webzio-info.vercel.app" }
  ];

  const services = [
    "Personal Website",
    "Business Website", 
    "E-commerce Store",
    "Mobile App",
    "Custom Web App",
    "UI/UX Design",
    "Other"
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-[#2D151F]' : 'bg-[#F4F3DC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
            }`}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'
            }`}
          >
            We're just one message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3
              className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
              }`}
            >
              Get in Touch
            </h3>
            <p
              className={`text-lg mb-8 leading-relaxed ${
                darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'
              }`}
            >
              Have a project in mind? Whether it's a simple portfolio or a complex business application, 
              we'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl ${
                      darkMode
                        ? 'bg-[#F4F3DC]/10 text-[#F4F3DC]'
                        : 'bg-[#2D151F]/10 text-[#2D151F]'
                    }`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className={`${darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'}`}
                    >
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
              <button
                className={`w-full px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border flex items-center justify-center space-x-2 ${
                  darkMode
                    ? 'border-[#F4F3DC]/30 text-[#F4F3DC] hover:bg-[#F4F3DC]/10'
                    : 'border-[#2D151F]/30 text-[#2D151F] hover:bg-[#2D151F]/10'
                }`}
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-[#F4F3DC]/10' : 'bg-[#2D151F]/5'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
              }`}
            >
              Send us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  className={`w-16 h-16 mx-auto mb-4 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}
                />
                <h4
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                  }`}
                >
                  Message Sent!
                </h4>
                <p
                  className={`${darkMode ? 'text-[#F4F3DC]/80' : 'text-[#2D151F]/80'}`}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                      }`}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2D151F] ${
                        darkMode
                          ? 'bg-[#2D151F] border-[#F4F3DC]/30 text-[#F4F3DC] placeholder-[#F4F3DC]/50'
                          : 'bg-white border-[#2D151F]/30 text-[#2D151F] placeholder-[#2D151F]/50'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2D151F] ${
                        darkMode
                          ? 'bg-[#2D151F] border-[#F4F3DC]/30 text-[#F4F3DC] placeholder-[#F4F3DC]/50'
                          : 'bg-white border-[#2D151F]/30 text-[#2D151F] placeholder-[#2D151F]/50'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                      }`}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2D151F] ${
                        darkMode
                          ? 'bg-[#2D151F] border-[#F4F3DC]/30 text-[#F4F3DC] placeholder-[#F4F3DC]/50'
                          : 'bg-white border-[#2D151F]/30 text-[#2D151F] placeholder-[#2D151F]/50'
                      }`}
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                      }`}
                    >
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2D151F] ${
                        darkMode
                          ? 'bg-[#2D151F] border-[#F4F3DC]/30 text-[#F4F3DC]'
                          : 'bg-white border-[#2D151F]/30 text-[#2D151F]'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? 'text-[#F4F3DC]' : 'text-[#2D151F]'
                    }`}
                  >
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2D151F] resize-none ${
                      darkMode
                        ? 'bg-[#2D151F] border-[#F4F3DC]/30 text-[#F4F3DC] placeholder-[#F4F3DC]/50'
                        : 'bg-white border-[#2D151F]/30 text-[#2D151F] placeholder-[#2D151F]/50'
                    }`}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#2D151F] to-[#6D2C3B] text-[#F4F3DC] hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
