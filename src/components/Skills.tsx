import React, { useState } from 'react';
import { Code, Server, Database, Network, Shield, PenTool as Tools, Zap, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Kotlin', level: 85, description: 'Mobile Application Development' },
        { name: 'Java', level: 80, description: 'Object-oriented programming and Analysis' },
        { name: 'JavaScript', level: 70, description: 'Web development' },
        { name: 'SQL', level: 80, description: 'Database queries and management' },
        { name: 'HTML/CSS', level: 85, description: 'Frontend development' }
      ]
    },
    {
      icon: Server,
      title: 'System Administration',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Linux/Unix', level: 80, description: 'Server management and configuration' },
        { name: 'Windows Server', level: 75, description: 'Enterprise environments' },
        { name: 'Shell Scripting', level: 70, description: 'Automation and scripting' },
        { name: 'System Monitoring', level: 75, description: 'Performance optimization' },
        { name: 'Virtualization', level: 70, description: 'VMware and Hyper-V' }
      ]
    },
    {
      icon: Network,
      title: 'Networking',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'TCP/IP', level: 85, description: 'Network protocols and architecture' },
        { name: 'Routing & Switching', level: 80, description: 'Cisco and network infrastructure' },
        { name: 'Network Security', level: 75, description: 'Firewalls and security protocols' },
        { name: 'Wireless Networks', level: 70, description: 'WiFi and wireless technologies' },
        { name: 'VPN Configuration', level: 70, description: 'Secure remote connections' }
      ]
    },
    {
      icon: Database,
      title: 'Database Management',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MySQL', level: 80, description: 'Relational database management' },
        { name: 'PostgreSQL', level: 75, description: 'Advanced SQL features' },
        { name: 'MongoDB', level: 70, description: 'NoSQL document databases' },
        { name: 'Database Design', level: 85, description: 'Schema design and optimization' },
        { name: 'Query Optimization', level: 75, description: 'Performance tuning' }
      ]
    },
    {
      icon: Tools,
      title: 'Development Tools',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git/GitHub', level: 85, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 90, description: 'Integrated development environment' },
        { name: 'Agile Methodologies', level: 80, description: 'Scrum and Kanban practices' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Other',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Network Security', level: 75, description: 'Security protocols and best practices' },
        { name: 'Penetration Testing', level: 65, description: 'Ethical hacking and vulnerability assessment' },
        { name: 'Risk Assessment', level: 70, description: 'Security risk analysis' },
        { name: 'Project Management', level: 80, description: 'Agile and traditional methodologies' },
        { name: 'Technical Writing', level: 85, description: 'Documentation and communication' }
      ]
    }
  ];

  const CurrentIcon = skillCategories[activeCategory].icon;

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
              <h2 className="text-5xl md:text-6xl font-black gradient-text">Technical Skills</h2>
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My technical expertise and proficiency levels across various domains
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 slide-in-left">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'text-white scale-105'
                    : 'text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} opacity-100`
                    : 'glass-effect opacity-0 group-hover:opacity-100'
                }`}></div>
                <div className="relative flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="slide-in-right">
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${skillCategories[activeCategory].color} rounded-xl flex items-center justify-center`}>
                    <CurrentIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group p-6 glass-effect rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Competencies */}
          <div className="mt-20 scale-in">
            <div className="glass-effect rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Additional Competencies</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'Problem Solving', description: 'Analytical thinking and debugging', icon: '🧩' },
                  { title: 'Team Collaboration', description: 'Agile methodologies and teamwork', icon: '🤝' },
                  { title: 'Communication', description: 'Technical documentation and presentations', icon: '💬' },
                  { title: 'Continuous Learning', description: 'Staying updated with technology trends', icon: '📚' }
                ].map((competency, index) => (
                  <div 
                    key={index} 
                    className="text-center group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {competency.icon}
                    </div>
                    <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {competency.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {competency.description}
                    </p>
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