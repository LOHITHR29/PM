import React from 'react';

const ProductSection = () => {
  const features = [
    'Smart course recommendations based on academic history',
    'Real-time availability tracking and waitlist management',
    'Comprehensive analytics dashboard for administrators',
    'Automated graduation requirement tracking'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#FF6B6B] mb-12">The Product</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="/product.png" 
            alt="GradPlanner Product Interface" 
            className="w-full rounded-lg shadow-xl"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Revolutionary Course Planning Platform
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              GradPlanner is an all-in-one web application that transforms the course registration experience 
              for both students and administrators. Our intuitive interface combines powerful analytics with 
              user-friendly design to make course planning effortless.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></span>
                    <span className="text-lg text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;