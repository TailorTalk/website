import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MoveRight, Plus } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

// Individual FAQ Item component
const FAQItem = ({ item, isOpen, toggleOpen, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
      <motion.div 
        className={`flex justify-between items-center py-5 px-6 cursor-pointer ${isOpen ? 'border-b border-gray-100' : ''}`}
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-[17px] text-gray-900">{item.question}</h3>
        <motion.div 
          className="text-gray-400"
          animate={{ 
            rotate: isOpen ? 45 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300
          }}
        >
          <Plus size={20} strokeWidth={1.5} className='group-hover:text-indigo-500' /> 
        </motion.div>
      </motion.div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98]
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.15 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className="p-6 pt-4 text-[#61646B] font-[350]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.1, duration: 0.2 }
              }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// FAQ Section component
const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-white bg-opacity-50" style={{ 
      backgroundImage: 'radial-gradient(rgba(134, 36, 255, 0.03) 2px, transparent 2px)',
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0'
    }}>
      <div className="max-w-3xl mx-auto" ref={sectionRef}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Everything you need to know about our platform and services
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqData.map((item, index) => (
            <FAQItem 
              key={item.id}
              item={item}
              index={index}
              isOpen={openItem === item.id}
              toggleOpen={() => toggleItem(item.id)}
            />
          ))}
         <div className="flex justify-center pt-4">
  <button
    onClick={() => router.push('/faqs')}
    className="group flex items-center gap-2 px-7 py-2 rounded-2xl bg-indigo-50 text-indigo-700 font-medium shadow hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer"
  >
    More FAQs
    <MoveRight className="ml-1 transition-transform group-hover:translate-x-1 hover:text-indigo-800 text-indigo-700" size={20} />
  </button>
</div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;