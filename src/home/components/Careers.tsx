import React from 'react';
import { Code, Smartphone, Server, Palette, GraduationCap, MapPin, Clock, Users, Heart } from 'lucide-react';

interface CareersProps {
  darkMode: boolean;
}

const Careers: React.FC<CareersProps> = ({ darkMode }) => {
  const positions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Developer",
      subtitle: "React / Flutter Web",
      requirements: [
        "Strong HTML/CSS/JS and React knowledge",
        "TailwindCSS, animations, routing, component design"
      ],
      type: "Full-time"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Developer",
      subtitle: "Flutter",
      requirements: [
        "Dart and Flutter fundamentals",
        "Firebase / REST integration",
        "Mobile UI/UX animations"
      ],
      type: "Full-time"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Developer",
      subtitle: ".NET Core / Node.js",
      requirements: [
        "RESTful APIs, authentication",
        "Database architecture (SQL / MongoDB)",
        "Error handling, middleware, deployment"
      ],
      type: "Full-time"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Designer",
      subtitle: "Design & Animation",
      requirements: [
        "Figma / Adobe XD",
        "Animation design with Lottie, Framer Motion",
        "Design systems and layout design"
      ],
      type: "Full-time"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Internships",
      subtitle: "For Beginners",
      requirements: [
        "Passion for learning and technology",
        "Basic knowledge in any programming language",
        "Real project experience provided"
      ],
      type: "Internship"
    }
  ];

  const benefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Flexible Remote Work",
      description: "Work from anywhere in India"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real Projects",
      description: "Work on actual client projects with real deadlines"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Learn and work with the latest technologies"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Supportive Culture",
      description: "Collaborative team environment"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Growth Opportunity",
      description: "Grow with the company as we expand"
    }
  ];

  return (
    <section id="careers" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Careers at Webzio
          </h2>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We're not just a team — we're a movement of passionate developers and designers building for the future. 
            Whether you're a beginner or a pro, Webzio offers an open space to learn, grow, and work on real-world projects.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              We're Hiring
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join our growing team of passionate developers and designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gray-900 hover:bg-gray-850 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Position Type Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${
                    darkMode 
                      ? 'bg-blue-900/50 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {position.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    position.type === 'Internship'
                      ? (darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-800')
                      : (darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-purple-100 text-purple-800')
                  }`}>
                    {position.type}
                  </span>
                </div>

                {/* Title */}
                <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {position.title}
                </h4>
                <p className={`text-lg font-medium mb-6 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {position.subtitle}
                </p>

                {/* Requirements */}
                <div className="mb-6">
                  <h5 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    REQUIREMENTS
                  </h5>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className={`flex items-start text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          darkMode ? 'bg-blue-400' : 'bg-blue-600'
                        }`}></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Work With Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900 hover:bg-gray-850' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  darkMode 
                    ? 'bg-purple-900/50 text-purple-400' 
                    : 'bg-purple-100 text-purple-600'
                }`}>
                  {benefit.icon}
                </div>
                <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {benefit.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center p-12 rounded-3xl ${
          darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-6">
            Want to be part of something meaningful?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our team and help us build digital solutions that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Email: careers@webzio.in
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              WhatsApp: +91 7907805626
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;