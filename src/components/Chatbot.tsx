import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Lohith's virtual assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "I have experience as a Software Development Intern at Samsung R&D PRISM, where I worked on mobile applications and feature integration. Would you like to know more about my specific responsibilities?";
    }
    if (lowerInput.includes('education') || lowerInput.includes('study')) {
      return "I completed my B.Tech in Computer Science and Engineering from KL University with a CGPA of 8.78/10. Would you like to know about my academic projects?";
    }
    if (lowerInput.includes('project')) {
      return "I've worked on several projects including GradPlanner, Customer Feedback Analysis Tool, and an E-Commerce Product Recommendation System. Which one would you like to know more about?";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return "You can reach me at lohithregalla123@gmail.com or connect with me on LinkedIn. Would you like me to share my LinkedIn profile?";
    }
    if (lowerInput.includes('resume')) {
      return "You can download my resume using the 'Resume' button in the navigation bar. Would you like me to tell you about my key skills and experiences?";
    }
    
    return "I'd be happy to tell you more about my experience, projects, or skills. What would you like to know?";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
      <div className="p-4 bg-indigo-600 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">Chat with Lohith's Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:border-indigo-600"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;