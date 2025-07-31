import React from 'react';
import { Target, Heart, Code, Smartphone } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Budget-Friendly",
      description: "High-quality results without heavy costs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "We deliver working websites in days, not weeks."
    },  
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom-Built",
      description: "Everything is tailored — no copy-paste templates."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First",
      description: "Every design works flawlessly on all screen sizes."
    }
  ];

  const team = [
    {
      name: "Mohammed Sanoof",
      role: "Fullstack Developer",
      bio: "Specializes in React, .NET Core, and project architecture.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nihal",
      role: "Frontend/Mobile Developer", 
      bio: "Expert in Flutter, Tailwind CSS, and building mobile-first experiences.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Built for Everyone Section */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Built for Everyone
          </h2>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you're a student, a startup, a local store, or a school — we have a digital solution for you. 
            <span className="font-semibold"> Your vision, our code.</span>
          </p>
        </div>

        {/* Why Webzio Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Webzio?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  darkMode 
                    ? 'bg-blue-900/50 text-blue-400' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {feature.icon}
                </div>
                <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="text-center mb-16">
          <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Who We Are
          </h3>
          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            A small team with big vision
          </p>
        </div>

        {/* Story */}
        <div className={`rounded-3xl p-8 md:p-12 mb-16 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Webzio was started by two passionate developers from Kerala with a shared goal — to make 
              high-quality digital products accessible to everyone.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We noticed that small businesses, students, and everyday people needed websites and apps 
              but were blocked by high costs and lack of technical knowledge.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              So we created Webzio — where creativity meets code, affordability meets functionality, 
              and every project gets the personal care it deserves.
            </p>
            <p className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              We don't just build websites. We help people build futures.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
              </div>
              <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h4>
              <p className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {member.role}
              </p>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;