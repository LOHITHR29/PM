import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">GradPlanner: Automating the College Experience</h1>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <img 
              src="/problem.png" 
              alt="Problem Overview" 
              className="w-full rounded-lg shadow-lg mb-8"
            />
            <div className="prose max-w-none">
              <p className="text-xl text-gray-600">
                The current college course registration system faces significant challenges that affect both students and institutions. 
                Students experience high levels of anxiety during registration periods, while universities struggle with resource allocation 
                and meeting student demands effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;