import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Samsung R&D PRISM',
      location: 'Bangalore (Remote)',
      period: 'June 2022 – May 2023',
      description: [
        'Contributed to the development of innovative mobile applications and new feature integration',
        'Collaborated with cross-functional teams to design and implement new product features',
        'Participated in code reviews and agile development processes',
        'Gained hands-on experience in Android development and Samsung\'s proprietary technologies'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Experience & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-indigo-600">{exp.title}</h4>
                  <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
                  <p className="text-gray-600 mt-1">{exp.location}</p>
                  <p className="text-gray-600 mt-1">{exp.period}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="group relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-indigo-600">B.Tech in Computer Science and Engineering</h4>
                <p className="text-lg text-gray-700 mt-1">KL University</p>
                <p className="text-gray-600 mt-1">2020 - 2024</p>
                <p className="text-gray-600 mt-1">CGPA: 8.78/10</p>
                
                <div className="mt-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Activities & Leadership</h5>
                  <ul className="space-y-3">
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2"></span>
                      President, University Tech Club (2022 - 2023)
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2"></span>
                      Hackathon Organizer, KL University CodeFest 2023
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2"></span>
                      Mentor, Computer Science Department
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 mt-2"></span>
                      Sustainability Initiatives Volunteer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;