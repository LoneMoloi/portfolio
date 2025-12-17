import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book, Star, Trophy, Target } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BSc(Hons) Computer Systems Engineering',
      institution: 'Botswana Accountancy College',
      location: 'Botswana',
      period: '2023 - 2027',
      description: 'Comprehensive program covering system design, network engineering, programming, and database management.',
      highlights: [
        'System Architecture & Design',
        'Network Engineering & Security',
        'Software Development',
        'Database Management Systems',
        'Project Management',
        'Cloud Computing'
      ]
    }
  ];

  const certifications = [
    {
      name: 'CompTIA Network+',
      status: 'In Progress',
      description: 'Networking fundamentals and security',
      progress: 75,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AWS Cloud Practitioner',
      status: 'Planning',
      description: 'Cloud computing fundamentals',
      progress: 25,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Cisco CCNA',
      status: 'Complete',
      description: 'Network administration and configuration',
      progress: 100,
      color: 'from-green-500 to-green-500'
    }
  ];

  const achievements = [
    { icon: Trophy, title: 'Botswana Accountancy College Girls in ICT Day Hackathon 2025', description: 'Second Position' },
    { icon: Star, title: 'FNBB Hackathon 2025', description: 'Participant' },
    { icon: Target, title: 'Project Leader (ABSA Girl Code Hackathon 2025)', description: 'Team Leadership' }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h2 className="text-5xl md:text-6xl font-black gradient-text">Education</h2>
              <Book className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey and continuous learning path in technology
            </p>
          </div>

          {/* Current Education */}
          <div className="mb-20 slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              Current Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="glass-effect rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <h5 className="text-2xl text-purple-400 font-semibold mb-6">{edu.institution}</h5>
                      
                      <div className="flex flex-wrap gap-6 mb-8 text-gray-400">
                        <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                          <MapPin className="w-4 h-4 text-green-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">{edu.description}</p>
                      
                      <div>
                        <h6 className="font-bold text-white mb-4 text-lg">Key Areas of Study:</h6>
                        <div className="grid md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 glass-effect rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 group/item">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Side Panel */}
                    <div className="space-y-6">
                      <div className="glass-effect rounded-xl p-6 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                        <Award className="w-10 h-10 text-yellow-400 mb-4" />
                        <h6 className="font-bold text-white mb-3">Academic Focus</h6>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Specializing in system engineering with emphasis on practical applications 
                          and real-world problem solving.
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {achievements.map((achievement, idx) => (
                          <div key={idx} className="glass-effect rounded-lg p-4 border border-white/5 hover:border-white/20 transition-all duration-300 group/achievement">
                            <div className="flex items-center gap-3">
                              <achievement.icon className="w-6 h-6 text-yellow-400 group-hover/achievement:scale-110 transition-transform duration-300" />
                              <div>
                                <h6 className="text-white font-semibold text-sm">{achievement.title}</h6>
                                <p className="text-gray-400 text-xs">{achievement.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Book className="w-8 h-8 text-purple-400" />
              Certifications & Learning Path
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cert.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        cert.status === 'Planning' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">{cert.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-medium">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${cert.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
