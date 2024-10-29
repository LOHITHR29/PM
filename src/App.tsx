import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download, MessageCircle, Send, ChevronUp } from 'lucide-react';
import Chatbot from './components/Chatbot';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GradPlannerPage from './components/GradPlannerPage';

function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50"
        aria-label="Toggle chat"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/gradplanner" element={<GradPlannerPage />} />
      </Routes>
    </Router>
  );
}

export default App;