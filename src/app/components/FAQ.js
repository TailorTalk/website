import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the FAQ data
const faqData = [
  {
    id: 1,
    question: "What is TailorTalk?",
    answer: "TailorTalk is an AI-powered customer communication platform that helps businesses automate and personalize their customer interactions across WhatsApp and other channels. It boosts conversion rates by 30% and reduces operational costs by 80%."
  },
  {
    id: 2,
    question: "Integration details?",
    answer: "TodoFusion integrates seamlessly with popular tools like Google Calendar, Slack, Microsoft Teams, Trello, and more to keep all your tasks in sync across platforms."
  },
  {
    id: 3,
    question: "Main features?",
    answer: "Smart task prioritization, collaborative workspaces, customizable workflows, deadline tracking, recurring tasks, and comprehensive reporting tools."
  },
  {
    id: 4,
    question: "Mobile availability?",
    answer: "TodoFusion is available on iOS and Android devices with full feature parity to the web version."
  },
  {
    id: 5,
    question: "How long does it take to set up TailorTalk?",
    answer: "TailorTalk can be set up in just 5 minutes, with no technical skills required. The platform is designed to be user-friendly and intuitive."
  },
  {
    id: 6,
    question: "Customer support options?",
    answer: "24/7 live chat support, email assistance, comprehensive knowledge base, video tutorials, and regular webinars for advanced users."
  }
];

// Individual FAQ Item component
const FAQItem = ({ item, isOpen, toggleOpen, index }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`mb-4 rounded-xl overflow-hidden group relative transition-all duration-300 ${
          isOpen 
            ? 'shadow-lg bg-white' 
            : 'shadow-md hover:shadow-lg bg-gray-50 hover:bg-white'
        }`}
        style={{
          borderTopWidth: '1px',
          borderBottomWidth: '1px',
          borderLeftWidth: '0',
          borderRightWidth: '0',
          borderStyle: 'solid',
          borderTopColor: 'white',
          borderBottomColor: '#E2E8F0',
          transform: isOpen ? 'translateY(-2px)' : 'none'
        }}
      >
        <div 
          className={`flex justify-between items-center py-5 px-6 cursor-pointer ${isOpen ? 'border-b border-gray-100' : ''}`}
          onClick={toggleOpen}
        >
          <h3 className="text-lg text-gray-900 font-sans">{item.question}</h3>
          <motion.div 
            className="text-gray-400"
            animate={{ rotate: isOpen ? 0 : 45 }}
            transition={{ duration: 0.3 }}
          >
            <X size={20} strokeWidth={1.5} className='group-hover:text-indigo-500' /> 
          </motion.div>
        </div>
        
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-6 pt-4 text-[#61646B] font-[350]">
            {item.answer}
          </div>
        </motion.div>
      </motion.div>
    );
  };

// FAQ Section component
const FAQSection = () => {
  const [openItem, setOpenItem] = useState(0); // First item open by default

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-white bg-opacity-50" style={{ 
      backgroundImage: 'radial-gradient(rgba(134, 36, 255, 0.03) 2px, transparent 2px)',
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0'
    }}>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our platform and services
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem 
              key={item.id}
              item={item}
              index={index}
              isOpen={openItem === item.id}
              toggleOpen={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;