import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Lohith Regalla</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate software developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/LOHITHR29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lohithregalla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lohithregalla123@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;