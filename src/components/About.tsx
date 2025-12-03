import React from 'react';
import { Code, Brain, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Skilled in modern frontend and backend frameworks for scalable web solutions.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Developing intelligent systems that bring data-driven insights to life.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Hackathon Winner',
      description: 'Proven creativity and technical expertise in fast-paced problem solving.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership & Teamwork',
      description: 'Collaborative approach with experience leading multidisciplinary teams.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 font-sans bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Section — Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">
            About <span className="text-lime-500 dark:text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm <span className="font-semibold">MANMATHAN S</span>, a 3rd-year Computer Science and Business Systems student at
            Bannari Amman Institute of Technology, maintaining a CGPA of <span className="text-lime-500 dark:text-cyan-400">7.5/10</span>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="font-semibold"></span> Iam completed a 6-month internship at Crayon D Company, contributing to
            full-stack projects.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m passionate about leveraging technology to solve real-world problems and constantly push the boundaries of
            innovation.
          </p>

          <div className="flex gap-6 mt-8">
            <div className="flex-1 text-center border border-lime-400 dark:border-cyan-400 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="text-2xl font-bold text-lime-600 dark:text-cyan-400">7.5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
            </div>
            <div className="flex-1 text-center border border-lime-400 dark:border-cyan-400 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="text-2xl font-bold text-lime-600 dark:text-cyan-400">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Months Experience</div>
            </div>
          </div>
        </div>

        {/* Right Section — Highlight Cards */}
        <div className="relative grid sm:grid-cols-2 gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/40 dark:bg-gray-900/30 backdrop-blur-sm">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/70 dark:bg-[#111111]/60 border border-lime-300 dark:border-cyan-600 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-lime-600 dark:text-cyan-400 mb-3">{highlight.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{highlight.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
