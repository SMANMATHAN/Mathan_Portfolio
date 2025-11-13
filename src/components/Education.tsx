import React from "react";
import { GraduationCap, Calendar, MapPin, Star, CheckCircle } from "lucide-react";

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech — Computer Science and Business Systems",
      institution: "Bannari Amman Institute of Technology",
      location: "Sathyamangalam, Tamil Nadu",
      duration: "3rd Year (2023 - 2027 Batch)",
      score: "CGPA: 9.0/10",
      color: "from-blue-600 to-purple-600", // 🎨 Blue-Purple
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Machine Learning",
        "Software Engineering",
        "Business Analytics",
      ],
      achievements: [
        "Consistent high academic performance with 9.0 CGPA",
        "Active participation in technical clubs and events",
        "Regular contributor to college technical forums",
      ],
    },
    {
      degree: "12th Grade — Higher Secondary",
      institution: "Government Higher Secondary School, Kurumandhur",
      duration: "2021 – 2023",
      score: "80%",
      color: "from-green-500 to-emerald-600", // 🎨 Green
      achievements: [
        "Excelled in Mathematics & Computer Science stream",
        "Participated in district-level science exhibitions",
      ],
    },
    {
      degree: "10th Grade — Secondary School",
      institution: "Government High School, P. Karattuppalayam",
      duration: "2020 – 2021",
      score: "70%",
      color: "from-pink-500 to-rose-600", // 🎨 Pink-Red
      achievements: [
        "Strong foundation in Science & Mathematics",
        "Active involvement in extracurricular activities",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-pink-500 rounded-full"></div>

          {educationData.map((edu, idx) => (
            <div key={idx} className="relative mb-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-6 w-5 h-5 bg-gradient-to-r ${edu.color} rounded-full border-4 border-white dark:border-gray-800`}
              >
                <span
                  className={`absolute inset-0 rounded-full opacity-75 animate-ping bg-gradient-to-r ${edu.color}`}
                ></span>
              </div>

              {/* Card */}
              <div className="ml-20">
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-br ${edu.color} p-3 rounded-lg shadow-md`}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      {/* Degree + Score */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>

                        {edu.score && (
                          <span className="flex items-center text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full text-sm font-semibold">
                            <Star className="w-4 h-4 mr-1" />
                            {edu.score}
                          </span>
                        )}
                      </div>

                      {/* Institution & Duration */}
                      <div className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                        {edu.institution && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                        )}
                        {edu.duration && (
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                            <span>{edu.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Coursework (only for college) */}
                      {edu.coursework && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Key Coursework:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
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
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Academic Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((ach, i) => (
                              <li
                                key={i}
                                className="flex items-start text-gray-700 dark:text-gray-300"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
