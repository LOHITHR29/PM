import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProblemSection from './ProblemSection';
import DataSection from './DataSection';
import SolutionSection from './SolutionSection';
import ProductSection from './ProductSection';

const GradPlannerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center text-gray-600 hover:text-indigo-600 transition-colors z-50"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Portfolio
      </Link>

      <ProblemSection />
      <DataSection />
      <SolutionSection />
      <ProductSection />
    </div>
  );
};

export default GradPlannerPage;