import React, { useState } from 'react';
import { ExternalLink, Github, Code, Server, Database, Globe, Rocket, Star, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Network Monitoring System',
      description: 'A comprehensive network monitoring solution built with Python and MySQL. Features real-time monitoring, alert systems, and performance analytics.',
      technologies: ['Python', 'MySQL', 'Flask', 'JavaScript', 'Bootstrap'],
      category: 'System Administration',
      icon: Server,
      features: [
        'Real-time network monitoring',
        'Automated alert system',
        'Performance analytics dashboard',
        'Historical data visualization'
      ],
      status: 'In Development',
      progress: 25,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Student Management Portal',
      description: 'A web-based student management system for educational institutions with features for enrollment, grade tracking, and communication.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Tailwind CSS'],
      category: 'Web Development',
      icon: Database,
      features: [
        'Student enrollment management',
        'Grade tracking and reporting',
        'Teacher-student communication',
        'Attendance monitoring'
      ],
      status: 'In Development',
      progress: 60,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Network Security Analyzer',
      description: 'A tool for analyzing network traffic and identifying potential security threats using packet analysis and machine learning.',
      technologies: ['Python', 'Wireshark', 'Scikit-learn', 'TensorFlow', 'Docker'],
      category: 'Cybersecurity',
      icon: Code,
      features: [
        'Packet capture and analysis',
        'Threat detection algorithms',
        'Security report generation',
        'Real-time monitoring'
      ],
      status: 'In Development',
      progress: 20,
      color: 'from-red-500 to-pink-500'
    },
    {
       title: 'ReadEasy+',
      description: 'An accessible reading assistant designed for individuals with dyslexia and visual impairments. ReadEasy+ offers simplified text presentation, text-to-speech, and visual customization to enhance reading comfort and comprehension.',
      technologies: ['HTML5', 'JavaScript', 'CSS3'],
      category: 'Accessibility & Assistive Technology',
      icon: Globe,
      features: [
        'Text-to-speech functionality',
        'Dyslexia-friendly fonts and layouts',
        'Adjustable contrast and font size',
        'Simplified reading mode',
        'Keyboard navigation and screen reader support'
      ],
      status: 'In Progress',
      progress: 90,
      color: 'from-green-500 to-blue-500',
      github: 'https://github.com/LoneMoloi/ReadEasy-',
      demo: 'https://lonemoloi.github.io/ReadEasy-/'
      }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-purple-400" />
              <h2 className="text-5xl md:text-6xl font-black gradient-text">Projects</h2>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my technical projects and academic work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] relative">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="p-8 relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <project.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{project.category}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-400" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300 group/feature">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full group-hover/feature:scale-150 transition-transform duration-300`}></div>
                            <span className="text-sm group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-bold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="glass-effect border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:border-white/30 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
  >
    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
    View Code
  </a>
  
  <a 
    href={project.demo} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1 glass-effect border border-white/20 text-gray-300 py-3 px-6 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
  >
    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
    Live Demo
  </a>
</div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Projects Section */}
          <div className="scale-in">
            <div className="glass-effect rounded-2xl p-8 lg:p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
              <div className="relative text-center">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400" />
                  Academic & Research Projects
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  In addition to personal projects, I've completed numerous academic assignments and research projects 
                  covering system design, network analysis, and software engineering principles.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'Network Analysis',
                    'System Design',
                    'Algorithm Implementation',
                    'Database Projects',
                    'Security Audits',
                    'Performance Optimization'
                  ].map((topic, index) => (
                    <span 
                      key={index}
                      className="glass-effect border border-white/20 px-6 py-3 rounded-full text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
