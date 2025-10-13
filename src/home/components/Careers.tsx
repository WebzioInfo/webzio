import React from 'react';
import {
  Code,
  Smartphone,
  Server,
  Palette,
  GraduationCap,
  MapPin,
  Clock,
  Users,
  Heart,
} from 'lucide-react';

const Careers: React.FC = () => {
  const positions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Developer",
      subtitle: "React / Flutter Web",
      requirements: [
        "Strong HTML/CSS/JS and React knowledge",
        "TailwindCSS, animations, routing, component design",
      ],
      type: "Full-time",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Developer",
      subtitle: "Flutter",
      requirements: [
        "Dart and Flutter fundamentals",
        "Firebase / REST integration",
        "Mobile UI/UX animations",
      ],
      type: "Full-time",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Developer",
      subtitle: ".NET Core / Node.js",
      requirements: [
        "RESTful APIs, authentication",
        "Database architecture (SQL / MongoDB)",
        "Error handling, middleware, deployment",
      ],
      type: "Full-time",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Designer",
      subtitle: "Design & Animation",
      requirements: [
        "Figma / Adobe XD",
        "Animation design with Lottie, Framer Motion",
        "Design systems and layout design",
      ],
      type: "Full-time",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Internships",
      subtitle: "For Beginners",
      requirements: [
        "Passion for learning and technology",
        "Basic knowledge in any programming language",
        "Real project experience provided",
      ],
      type: "Internship",
    },
  ];

  const benefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Flexible Remote Work",
      description: "Work from anywhere in India",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real Projects",
      description: "Work on actual client projects with real deadlines",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Learn and work with the latest technologies",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Supportive Culture",
      description: "Collaborative team environment",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Growth Opportunity",
      description: "Grow with the company as we expand",
    },
  ];

  return (
    <section id="careers" className="py-28 bg-gradient-to-br from-[#F4F3DC] to-[#EDE9DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2D151F]">
            Careers at Webzio
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-[#2D151F]/80">
            We're not just a team — we're a movement of passionate developers and designers building for the future.
            Whether you're a beginner or a pro, Webzio offers an open space to learn, grow, and work on real-world projects.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#2D151F]">We're Hiring</h3>
            <p className="text-lg text-[#2D151F]/80">
              Join our growing team of passionate developers and designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="p-8 bg-[#F4F3DC] rounded-2xl border border-[#2D151F]/10 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-[#2D151F]/10 text-[#2D151F]">
                    {position.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      position.type === "Internship"
                        ? "bg-[#C1785A]/10 text-[#C1785A]"
                        : "bg-[#2D151F]/10 text-[#2D151F]"
                    }`}
                  >
                    {position.type}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-2 text-[#2D151F]">
                  {position.title}
                </h4>
                <p className="text-lg font-medium mb-6 text-[#C1785A]">
                  {position.subtitle}
                </p>

                {/* Requirements */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold mb-3 text-[#2D151F]/60">
                    REQUIREMENTS
                  </h5>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-start text-sm text-[#2D151F]/80"
                      >
                        <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-[#C1785A]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button className="w-full py-3 rounded-lg font-semibold bg-[#2D151F] text-[#F4F3DC] hover:bg-[#3A1C28] transition-all duration-300 hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#2D151F]">
              Why Work With Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#F4F3DC] rounded-2xl border border-[#2D151F]/10 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl mb-4 bg-[#C1785A]/10 text-[#C1785A]">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-[#2D151F]">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[#2D151F]/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-[#2D151F] to-[#3A1C28]">
          <h3 className="text-3xl font-bold text-[#F4F3DC] mb-6">
            Want to be part of something meaningful?
          </h3>
          <p className="text-xl text-[#EDE9DD]/90 mb-8 max-w-2xl mx-auto">
            Join our team and help us build digital solutions that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4F3DC] text-[#2D151F] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Email: careers@webzio.in
            </button>
            <button className="bg-[#C1785A] text-[#F4F3DC] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              WhatsApp: +91 7907805626
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
