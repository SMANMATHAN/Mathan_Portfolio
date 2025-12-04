import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Smartphone, Image, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: 'ai' | 'web' | 'mobile';
  image: string;
  github: string;
  demo: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Resume Generator',
      description: 'AI-powered resume creation application with intelligent formatting',
      longDescription: 'A comprehensive AI-powered platform that helps users create professional resumes using machine learning algorithms. Features intelligent content suggestions, multiple templates, and real-time formatting.',
      tech: ['Python', 'React', 'Node.js', 'OpenAI API', 'MongoDB'],
      category: 'ai',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'College Attendance App',
      description: 'Comprehensive attendance tracking system for educational institutions',
      longDescription: 'A full-featured attendance management system with both mobile and web interfaces. Includes student tracking, automated reporting, and real-time analytics for educational institutions.',
      tech: ['React Native', 'Express.js', 'MySQL', 'JWT', 'React'],
      category: 'mobile',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Train Traffic Flow with AI',
      description: 'Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control',
      longDescription: 'An innovative image generation platform powered by advanced AI models. Users can create unique images from text descriptions with various styling options and customization features.',
      tech: ['ReactJS', 'Typescript', 'FastAPI', 'React', 'AWS'],
      category: 'ai',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-HITNYwo1PK09RfF2xo07s570GOSY5kVlzcLR6FQrZcJJoocxMgsoCoR5uFrKY43YcjrJl0V7T4qV5ZkLmJvySoEHy4UDEWDC3HnsQ0pWp3rbNrb3yEtYOBzA9Cfy2_iOpvIT3kuTods8JA0sYQ?key=Fs1z_K8FIehwPsc3nthqEl4q',
      github: 'https://github.com/SMANMATHAN/rail-dashboard/tree/main/frontend%20simulation',
      demo: 'https://rail-dashboard.vercel.app/',
      icon: <Image className="w-6 h-6" />
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Showcasing my latest work and innovations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-600 dark:text-blue-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;