import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, MapPin, Calendar, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create floating particles
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {particles}
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          transition: 'all 0.1s ease-out'
        }}
      />

      <div className="container mx-auto px-4 py-20 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="mb-12 fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold gradient-text">LM</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black gradient-text mb-6 glitch" data-text="Lone Moloi">
                Lone Moloi
              </h1>
              
              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-300 mb-4 slide-in-left">
                  Computer Systems Engineering Student
                </p>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-400 slide-in-right">
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Botswana</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>BSc(Hons) Computer Systems Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 scale-in">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate about <span className="gradient-text font-semibold">technology and innovation</span>, 
              I'm dedicated to building efficient systems and creating impactful solutions. 
              Currently pursuing my degree at <span className="text-blue-400 font-semibold">Botswana Accountancy College</span>, 
              I'm excited to contribute to the future of technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </div>
            </a>
            
            <a 
              href="#projects"
              className="group relative px-8 py-4 glass-effect border border-white/20 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="relative flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </div>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="floating">
            <a href="#about" className="inline-block group">
              <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown className="w-8 h-8 animate-bounce group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;