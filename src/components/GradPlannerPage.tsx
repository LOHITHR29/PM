import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import problemImg from "./assets/problem.png";
import dataImg from "./assets/data.png";
import solutionImg from "./assets/solution.png";
import logoImg from './assets/grad-planner-logo.png';

const GradPlannerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center text-gray-600 hover:text-[#DC3545] transition-colors z-50"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back
      </Link>

      {/* Hero Section */}
      <section className="bg-[#DC3545] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Course Planning Made Easy.
              </h1>
              <button className="bg-white text-[#DC3545] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Get Started
              </button>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <img 
                src={logoImg}
                alt="GP Logo" 
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#DC3545] mb-12 text-center">What's the Problem?</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
            <img 
              src={problemImg}
              alt="A student struggling with class planning" 
              className="w-full max-w-lg mx-auto mb-8 rounded-md"
            />
            <p className="text-xl text-gray-700 leading-relaxed">
              For three years, every semester, I used to stress about class planning. Figuring out which classes to take seemed like an impossible, convoluted task. Through research, I discovered that this was not an isolated problem, but one that every university student faced. So I decided to automate this process and build a machine learning algorithm that makes it easier for students to select and register for classes.
            </p>
          </div>
        </div>
      </section>

      {/* Data Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#DC3545] mb-12 text-center">What do we build?</h2>
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-12">
            With initial research complete, we leveraged our user data to define product specifications. 
            Because 90% of our target audience found personalization a valuable product feature, we 
            decided to use the power of machine learning to create tailored recommendations for each student. 
            As more students used our product, the stronger the recommendation they would get on which 
            classes to choose.
          </p>
          <div className="flex justify-center">
            <img 
              src={dataImg}
              alt="Illustration of data-driven insights"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#DC3545] mb-12 text-center">Solution</h2>
          <img 
            src={solutionImg} 
            alt="Solution overview with key features"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg mb-12"
          />
          <p className="text-center text-xl text-gray-700 mb-16 leading-relaxed">
            A comprehensive solution with features to improve course selection and university insights.
          </p>
        </div>

        {/* Product Roadmap Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">What does the Product Roadmap look like?</h2>
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-8">
            I translated all of these decisions into user specifications and a product roadmap. The challenge here was to manage both the engineering and marketing processes simultaneously, so I created concurrent roadmaps for both software development as well as product launch marketing. Working in an agile environment led to a more scalable solution, for example, the engineers built a rigorous backend that was completely serverless even though this wasn’t a part of the initial product specs.
          </p>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center">
              <h3 className="text-4xl font-bold text-[#DC3545] mb-4">700+</h3>
              <p className="text-lg text-gray-600">Course plans created every month</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center">
              <h3 className="text-4xl font-bold text-[#DC3545] mb-4">97%</h3>
              <p className="text-lg text-gray-600">Of KL University students used our solution</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center">
              <h3 className="text-4xl font-bold text-[#DC3545] mb-4">84%</h3>
              <p className="text-lg text-gray-600">Of users report vastly improved registration experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#DC3545] mb-12 text-center">Key Features</h2>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
              <div className="text-2xl font-semibold text-[#DC3545] mb-4">Algorithmic</div>
              <p className="text-gray-600 mb-6">A cutting-edge algorithm for personalized recommendations.</p>
              <div className="text-2xl font-semibold text-[#DC3545] mb-4">Data Tracking</div>
              <p className="text-gray-600 mb-6">Aggregate information for universities on student demand.</p>
              <div className="text-2xl font-semibold text-[#DC3545] mb-4">Personalized</div>
              <p className="text-gray-600 mb-6">Recommendations tailored to each student's needs and wants.</p>
              <div className="text-2xl font-semibold text-[#DC3545] mb-4">Insightful</div>
              <p className="text-gray-600">Bridging the gap between student needs and university resources.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GradPlannerPage;
