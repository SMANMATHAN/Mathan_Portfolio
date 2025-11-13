import { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Star, Users, Target, Zap } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return <span>{count}{suffix}</span>;
};

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Smart India Hackathon 2024',
      subtitle: 'Winner 🏆',
      description: 'Won the prestigious national-level hackathon representing innovation in technology solutions',
      highlight: true
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Inter-College Ideathon',
      subtitle: 'Winner 🏅',
      description: 'First place in inter-collegiate innovation competition for creative problem-solving',
      highlight: true
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Multiple Hackathon Victories',
      subtitle: '3× Hackathon Winner 👑',
      description: 'Consistent performance across multiple competitive programming and innovation events',
      highlight: false
    }
  ];

  const stats = [
    { number: 3, suffix: '', label: 'Hackathons Won', icon: <Trophy className="w-6 h-6" /> },
    { number: 6, suffix: '+', label: 'Months Experience', icon: <Target className="w-6 h-6" /> },
    { number: 9, suffix: '.0', label: 'CGPA', icon: <Star className="w-6 h-6" /> },
    { number: 10, suffix: '+', label: 'Projects Completed', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Awards and milestones that mark my journey
          </p>
        </div>

        {/* Stats Counter */}
        <div ref={achievementsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                <Counter end={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                achievement.highlight
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              {achievement.highlight && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className={`mb-6 ${achievement.highlight ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                  {achievement.icon}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  achievement.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {achievement.title}
                </h3>
                
                <p className={`text-lg font-semibold mb-4 ${
                  achievement.highlight ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'
                }`}>
                  {achievement.subtitle}
                </p>
                
                <p className={`text-sm leading-relaxed ${
                  achievement.highlight ? 'text-blue-50' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {achievement.description}
                </p>
              </div>

              {achievement.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Leadership & Recognition
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Beyond individual achievements, I've demonstrated strong leadership capabilities through 
              team collaborations, mentoring fellow students, and contributing to various technical 
              communities. My commitment to excellence and innovation continues to drive my success 
              in competitive environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;