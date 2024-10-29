import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'GradPlanner',
      description: 'AI-powered platform revolutionizing course planning and academic advising for universities',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      achievements: [
        'Reduced planning time by 60%',
        'Improved graduation rates by 40%',
      ],
      tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
      link: '/gradplanner'
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'NLP-powered analytics platform for real-time customer feedback processing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      achievements: [
        '98% analysis accuracy',
        '2.5x faster insights',
        '40% support cost reduction'
      ],
      tech: ['Python', 'NLP', 'React', 'AWS']
    },
    {
      title: 'E-Commerce AI',
      description: 'Smart recommendation engine driving personalized shopping experiences',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      achievements: [
        '35% conversion increase',
        '45% larger cart value',
        '3x engagement rate'
      ],
      tech: ['Python', 'ML', 'AWS', 'React']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Impact:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 mt-1.5"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  )}
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