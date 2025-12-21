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
      degree: "10th Grade — Secondary School",
      institution: "Government High School",
      location: "P. Karattuppalayam, Erode, Tamil Nadu",
      duration: "2020 - 2021",
      score: " All Pass",
      color: "from-pink-500 to-rose-600",
      image: undefined,
    },
    {
      degree: "12th Grade — Higher Secondary",
      institution: "Government Higher Secondary School",
      location: "Kurumandhur, Erode, Tamil Nadu",
      duration: "2021 – 2023",
      score: "80%",
      color: "from-green-500 to-emerald-600",
      image: undefined,
    },
    {
      degree: "B.Tech — Computer Science and Business Systems",
      institution: "Bannari Amman Institute of Technology",
      location: "Sathyamangalam, Erode, Tamil Nadu",
      duration: "2023 - 2027",
      score: "CGPA: 7.5/10",
      color: "from-blue-600 to-purple-600",
      image: null,
    },

  ];

  return (
    <section
      id="education"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Educational qualifications and achievements
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                {/* Institution, Location & Duration */}
                <div className="space-y-3 mb-6 text-slate-300">
                  {edu.institution && (
                    <div className="flex items-start">
                      <Building2 className="w-4 h-4 mr-2 text-slate-400 mt-1 flex-shrink-0" />
                      <span className="font-medium text-sm leading-relaxed">
                        {edu.institution}
                      </span>
                    </div>
                  )}
                  {edu.location && (
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{edu.location}</span>
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
