import React from 'react';

const DataSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#FF6B6B] mb-12">The Impact</h2>
        <img 
          src="/data.png" 
          alt="Data Statistics" 
          className="w-full rounded-lg shadow-lg mb-8"
        />
        <div className="prose max-w-none">
          <h3 className="text-xl text-gray-900 mb-4">Key Statistics:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-xl text-gray-600">80% of students report experiencing anxiety or anger during registration</li>
            <li className="text-xl text-gray-600">More than half (57%) lack confidence in securing their preferred courses</li>
            <li className="text-xl text-gray-600">A significant 67% of students are unable to enroll in their first-choice classes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataSection;