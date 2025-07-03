import React from 'react';
import { Target, Heart, Lightbulb, Users, Rocket, Brain, Code2, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'I approach challenges with analytical thinking and creative solutions.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion for Tech',
      description: 'Constantly learning and staying updated with the latest technological trends.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always looking for ways to improve and optimize systems and processes.',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-blue-400" />
              <h2 className="text-5xl md:text-6xl font-black gradient-text">About Me</h2>
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know more about my journey and what drives me in the world of technology
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Section */}
            <div className="slide-in-left">
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-blue-400" />
                  My Story
                </h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    I'm <span className="gradient-text font-semibold">Lone Moloi</span>, a dedicated Computer Systems Engineering student at 
                    <span className="text-blue-400 font-semibold"> Botswana Accountancy College</span>. 
                    My journey in technology began with a fascination for how systems work and communicate with each other.
                  </p>
                  <p className="text-lg">
                    Throughout my studies, I've developed a strong foundation in <span className="text-purple-400 font-semibold">system design</span>, 
                    <span className="text-cyan-400 font-semibold"> programming</span>, and <span className="text-green-400 font-semibold">network architecture</span>. 
                    I'm particularly interested in creating efficient, scalable solutions that can make a real difference in people\'s lives.
                  </p>
                  <p className="text-lg">
                    When I'm not studying or coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and sharing knowledge with fellow students and the broader tech community.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="slide-in-right">
              <div className="relative">
                <div className="glass-effect rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-purple-400" />
                    Current Focus
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: 'System Architecture & Design', icon: '🏗️' },
                      { name: 'Network Engineering', icon: '🌐' },
                      { name: 'Software Development', icon: '💻' },
                      { name: 'Database Management', icon: '🗄️' },
                      { name: 'Cloud Computing', icon: '☁️' },
                      { name: 'Cybersecurity', icon: '🔒' }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg glass-effect border border-white/5 hover:border-white/20 transition-all duration-300 group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scale-in">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;