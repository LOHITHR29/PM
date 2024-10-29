import React from 'react';

const SolutionSection = () => {
  const features = [
    {
      title: 'Algorithmic Excellence',
      description: 'Advanced algorithms provide personalized course recommendations'
    },
    {
      title: 'Data Tracking',
      description: 'Real-time analytics for informed decision-making'
    },
    {
      title: 'Personalization',
      description: 'Tailored recommendations based on individual student profiles'
    },
    {
      title: 'Insightful Analytics',
      description: 'Bridging the gap between student needs and university resources'
    }
  ];

  const benefits = [
    'Reduced registration stress',
    'Optimized resource allocation',
    'Improved graduation rates',
    'Enhanced student satisfaction'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#FF6B6B] mb-12">Our Solution</h2>
        <img 
          src="/solution.png" 
          alt="Solution Framework" 
          className="w-full rounded-lg shadow-lg mb-12"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Approach</h3>
            <p className="text-lg text-gray-600 mb-6">
              GradPlanner combines four key elements to revolutionize course planning:
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">
                    <strong>{feature.title}:</strong> {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-[#FF6B6B] mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600">✓ {benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;