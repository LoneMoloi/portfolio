import React from 'react';
import { Code, Heart, Mail, Phone, MapPin, Zap, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="fade-in-up">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold gradient-text">Lone Moloi</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Computer Systems Engineering student passionate about technology and innovation.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Currently pursuing BSc(Hons) Computer Systems Engineering at Botswana Accountancy College.
              </p>
            </div>

            {/* Quick Links */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Education', href: '#education' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Contact Info
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'cse23-070@thuto.bac.ac.bw', color: 'text-blue-400' },
                  { icon: Phone, text: '+267 71 779 913', color: 'text-green-400' },
                  { icon: MapPin, text: 'Gaborone, Botswana', color: 'text-purple-400' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-400 group">
                    <contact.icon className={`w-4 h-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm group-hover:text-white transition-colors duration-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 flex items-center gap-2 scale-in">
                Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Lone Moloi
              </p>
              <p className="text-gray-500 text-sm scale-in" style={{ animationDelay: '0.2s' }}>
                © 2024 Lone Moloi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;