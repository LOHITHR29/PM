import React from 'react';

const About = () => {
  const skills = [
    { category: 'Product Development', items: ['Market analysis', 'Data insights', 'Product strategy', 'SaaS models'] },
    { category: 'Technical', items: ['AWS', 'Azure', 'Python', 'C++', 'JavaScript'] },
    { category: 'Web Development', items: ['ReactJS', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'MongoDB'] }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a recent Computer Science graduate with a passion for building innovative solutions. 
              My journey in tech has equipped me with strong analytical and problem-solving skills, 
              making me adept at tackling complex challenges.
            </p>
            <p className="text-lg text-gray-600">
              As a Founder's Office Intern aspirant, I combine technical expertise with business acumen 
              to drive strategic initiatives and company growth.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-lg font-medium text-indigo-600 mb-2">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;