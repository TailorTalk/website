import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
const FAQItem = ({ item, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className="mb-4 rounded-xl overflow-hidden group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
        boxShadow: isOpen 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
      }}
    >
      <motion.div 
        className={`flex justify-between items-center py-5 px-6 cursor-pointer backdrop-blur-sm ${isOpen ? 'border-b border-gray-100' : ''}`}
        onClick={toggleOpen}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-[17px] font-normal text-gray-700">{item.question}</h3>
        <motion.div 
          className="text-gray-400"
          animate={{ rotate: isOpen ? 0 : 45 }}
          transition={{ duration: 0.3 }}
        >
            <X size={20} className='group-hover:text-gray-600' /> 
        </motion.div>
      </motion.div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 pt-2 text-gray-600 text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// FAQ Section component
const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ 
      backgroundSize: '20px 20px', 
      backgroundPosition: '0 0, 10px 10px'
    }}>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-gray-400">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Seamlessly use your preferred tools for unified work, start to finish.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem 
              key={item.id}
              item={item}
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