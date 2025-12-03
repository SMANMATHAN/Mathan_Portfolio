import React, { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Cloud, Wrench, Users } from "lucide-react";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "Java", "C++"],
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "HTML/CSS", "JavaScript ES6+"],
    },
    {
      title: "Backend Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git/GitHub", "VS Code", "Postman", "Vercel/Netlify"],
    },
  ];

  const softSkills = [
    "Leadership",
    "Team Collaboration",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full"></div>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill grid */}
        <div
          ref={skillsRef}
          className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start"
        >
          {/* Technical Skills */}
          <div className="space-y-8">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill chips instead of levels */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition 
                        ${
                          isVisible
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-100"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 scale-95"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills + Cloud */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="backdrop-blur-lg bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white/70 dark:bg-gray-800/60 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-gray-800 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
