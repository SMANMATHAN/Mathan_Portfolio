import React from 'react';
import { Code, Brain, Trophy, Users, Linkedin, Github, Instagram } from 'lucide-react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

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

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manmathan-s-2282ab2a0/',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SMANMATHAN',
      icon: Github,
      color: 'text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/SMANMATHAN/',
      icon: SiLeetcode,
      color: 'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/smanmathan',
      icon: SiCodechef,
      color: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/manmathan_6305/',
      icon: Instagram,
      color: 'text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300'
    }
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen w-full py-20 px-6 font-sans bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 text-gray-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)' }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header - Top Center */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">
            About <span className="text-lime-500 dark:text-cyan-400">Me</span>
          </h2>
        </div>

        {/* Content - Centered */}
        <div className="grid md:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Left Section — Text */}
          <div className="space-y-6 text-center md:text-left w-full">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold">MANMATHAN S</span>, a 3rd-year Computer Science and Business Systems student at
              Bannari Amman Institute of Technology, maintaining a CGPA of <span className="text-lime-500 dark:text-cyan-400">7.5/10</span>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold"></span> Iam completed a 6-month internship at Crayon D Company, contributing to
              full-stack projects.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about leveraging technology to solve real-world problems and constantly push the boundaries of
              innovation.
            </p>

            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <div className="flex-1 text-center border border-lime-400 dark:border-cyan-400 rounded-lg p-4 hover:shadow-md transition-all">
                <div className="text-2xl font-bold text-lime-600 dark:text-cyan-400">7.5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="flex-1 text-center border border-lime-400 dark:border-cyan-400 rounded-lg p-4 hover:shadow-md transition-all">
                <div className="text-2xl font-bold text-lime-600 dark:text-cyan-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months Experience</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <div className="flex gap-6 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-all duration-300 hover:scale-110 transform p-2 rounded-lg border border-gray-300 dark:border-gray-600`}
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section — Highlight Cards */}
          <div className="relative grid sm:grid-cols-2 gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/40 dark:bg-gray-900/30 backdrop-blur-sm w-full">
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
      </div>
    </section>
  );
};

export default About;
