import React from "react";
import { GraduationCap, Calendar, MapPin, Star, CheckCircle, Award, Building2 } from "lucide-react";
// To add college photo:
// 1. Place your college photo in src/assests/images/ folder
// 2. Uncomment and update the import below with your image filename
// import CollegePhoto from "../assests/images/college-photo.jpg";

interface EducationItem {
  degree: string;
  institution?: string;
  location?: string;
  duration?: string;
  score?: string;
  color: string;
  image?: string | null;
  coursework?: string[];
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "B.Tech — Computer Science and Business Systems",
      institution: "Bannari Amman Institute of Technology",
      location: "Sathyamangalam, Tamil Nadu",
      duration: "3rd Year (2023 - 2027 Batch)",
      score: "CGPA: 7.5/10",
      color: "from-blue-600 to-purple-600",
      image: null,
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Machine Learning",
        "Software Engineering",
        "Business Analytics",
      ],
      achievements: [
        "Consistent high academic performance with 7.5 CGPA",
        "Active participation in technical clubs and events",
        "Regular contributor to college technical forums",
      ],
    },
    {
      degree: "12th Grade — Higher Secondary",
      institution: "Government Higher Secondary School, Kurumandhur",
      duration: "2021 – 2023",
      score: "80%",
      color: "from-green-500 to-emerald-600",
      image: undefined,
      achievements: [
        "Excelled in Mathematics & Computer Science stream",
        "Participated in district-level Chess competitions",
        "Discipline Student and leadership roles in school clubs",
      ],
    },
    {
      degree: "10th Grade — Secondary School",
      institution: "Government High School, P. Karattuppalayam",
      duration: "2020 – 2021",
      score: "0% (All Passed)",
      color: "from-pink-500 to-rose-600",
      image: undefined,
      achievements: [
        "Strong foundation in Science & Mathematics",
        "Active involvement in extracurricular activities",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-28 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <style>{`
        .professional-glow {
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            Academic Background
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Educational qualifications and academic achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative"
            >
              <div
                className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl border border-slate-700/50 dark:border-gray-700/50 rounded-2xl p-8 professional-glow"
              >
                {/* Professional Icon Badge */}
                <div className="relative mb-6">
                  <div
                    className={`bg-gradient-to-br ${edu.color} p-4 rounded-xl shadow-lg inline-flex items-center justify-center`}
                    style={{
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 -2px 5px rgba(0,0,0,0.2)",
                    }}
                  >
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Degree Title */}
                <h3
                  className="text-xl font-bold text-white mb-4 leading-snug"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  {edu.degree}
                </h3>

                {/* Score Badge */}
                {edu.score && (
                  <div className="mb-6 inline-flex items-center bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Star className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-blue-300 font-semibold text-sm">{edu.score}</span>
                  </div>
                )}

                {/* Institution & Duration */}
                <div className="space-y-3 mb-6 text-slate-300">
                  {edu.institution && (
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 mt-1 flex-shrink-0" />
                      <span className="font-medium text-sm leading-relaxed">{edu.institution}</span>
                    </div>
                  )}
                  {edu.duration && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  )}
                </div>

                {/* Coursework Tags */}
                {edu.coursework && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center text-sm uppercase tracking-wide">
                      <Award className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-slate-400">Key Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, index) => (
                        <span
                          key={index}
                          className="bg-slate-700/50 text-slate-200 px-3 py-1.5 rounded-md text-xs border border-slate-600/50"
                          style={{
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && (
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center text-sm uppercase tracking-wide">
                      <Award className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-slate-400">Achievements</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {edu.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start text-slate-300 text-sm leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" style={{ filter: "drop-shadow(0 0 3px rgba(16,185,129,0.5))" }} />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} rounded-b-2xl opacity-50`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
