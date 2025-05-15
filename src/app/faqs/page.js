"use client"
import { useState, useRef } from "react";
import { Search, Plus, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundBeamsWithCollision } from "../components/ui/backgroundBeamExplosion";

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

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What makes TailorTalk more than just a standard chatbot?",
    answer: "Unlike standard chatbots that often follow rigid scripts, TailorTalk is an actionable AI agent designed specifically for B2C businesses to automate sales, support, and other customer-facing workflows. It operates primarily on WhatsApp and Instagram, handling tasks like bookings, payments, lead follow-ups, and custom actions through API integrations. TailorTalk can also understand rich media like images, documents, audio, and video, going far beyond a chatbot."
  },
  {
    id: 2,
    question: "How is TailorTalk different from WhatsApp API providers?",
    answer: "WhatsApp API providers offer foundational access to the WhatsApp Business API and basic messaging tools or simple bot builders. Unlike basic API platforms, TailorTalk utilizes built-in tools for tasks like booking and payments, performs sophisticated actions like contextual lead follow-ups, integrates deeply with your other business systems via API for custom tasks, and simplifies setup through natural language – focusing on intelligent automation rather than just basic messaging connectivity."
  },
  {
    id: 3,
    question: "What kind of B2C businesses is TailorTalk best suited for?",
    answer: "TailorTalk is industry-agnostic and benefits any B2C business that interacts with customers via chat (especially WhatsApp and Instagram) and wants to automate workflows like sales inquiries, lead follow-ups, appointment booking, payment collection, customer support, and more."
  },
  {
    id: 4,
    question: "Does TailorTalk only work on WhatsApp and Instagram?",
    answer: "While TailorTalk is optimized primarily for WhatsApp and Instagram automation, we also support integration with website chat widgets, Facebook Messenger, and SMS. Our core focus is on delivering the best experience on the main B2C chat platforms where your customers engage most."
  },
  {
    id: 5,
    question: "How simple is it really to set up TailorTalk?",
    answer: "Setting up TailorTalk is designed to be incredibly easy. You do not need any developer or technical skills. Much of the setup can be done using natural language to describe your workflows."
  },
  {
    id: 6,
    question: "Do you help in setting up TailorTalk?",
    answer: "Yes, we provide initial setup assistance and tutorials to get you started quickly. Our platform is designed so that updating workflows or information afterwards is straightforward and manageable yourself."
  },
  {
    id: 7,
    question: "How long does the TailorTalk setup process typically take?",
    answer: "For many standard workflows, initial setup can often be completed in under 30 minutes. More complex integrations might take slightly longer, but the process is designed for speed and simplicity."
  },
  {
    id: 8,
    question: "What information or access do I need to provide to get TailorTalk working?",
    answer: "To get started, you typically need to provide: • A description of the workflow you want to automate (often in natural language). • Access to relevant company information (like website content, FAQs, or documents for the AI to learn from). • If connecting to WhatsApp, a dedicated phone number for the WhatsApp Business API."
  },
  {
    id: 9,
    question: "Is my customer data secure and private with TailorTalk?",
    answer: "Yes. We take data security and privacy extremely seriously. TailorTalk employs robust security measures and adheres to industry best practices to protect your customer data and ensure confidentiality."
  },
  {
    id: 10,
    question: "Does TailorTalk support multiple languages?",
    answer: "Yes, TailorTalk is designed to support interactions in multiple languages. Please contact us to discuss your specific language requirements."
  },
  {
    id: 11,
    question: "Is there a free trial or a demo available?",
    answer: "Yes, we offer a 15-day free trial so you can experience TailorTalk's capabilities firsthand. You can also request a personalized demo."
  },
  {
    id: 12,
    question: "What kind of customer support do you offer after setup?",
    answer: "We offer various levels of customer support depending on your chosen package, ranging from standard email/chat support to dedicated account management. Details are available on our pricing page."
  },
  {
    id: 13,
    question: "Is TailorTalk reliable? Can it handle large volume data/conversations?",
    answer: "Absolutely. TailorTalk is built on a robust and scalable infrastructure designed to handle high volumes of conversations and data reliably. We ensure high availability and consistent performance for your critical customer interactions."
  },
  {
    id: 14,
    question: "Does TailorTalk understand files (images, videos, PDFs)?",
    answer: "Yes, TailorTalk can understand and process various file types including images, documents, audio, and video messages from customers. This is crucial for automating complex workflows – for example, receiving a photo ID, automatically extracting ID number, and updating your backend systems via API."
  },
  {
    id: 15,
    question: "Can TailorTalk send images/videos/PDFs?",
    answer: "Absolutely. TailorTalk can proactively share rich media like product images, explainer videos, brochures (PDFs), price lists, or other documents directly within the chat. This greatly enhances customer understanding and engagement, allowing you to visually showcase products, provide detailed information instantly, and create a more compelling interaction compared to plain text."
  },
  {
    id: 16,
    question: "Can TailorTalk be used for B2B businesses too?",
    answer: "TailorTalk excels in B2C due to typically higher lead volumes where scaling personalized chat is crucial. Yes, it can also be used for B2B, automating tasks like lead qualification, demo scheduling, and CRM integration via API."
  },
  {
    id: 17,
    question: "Who is TailorTalk best for?",
    answer: "TailorTalk is ideal for B2C businesses of any industry that rely heavily on chat platforms like WhatsApp and Instagram for customer interaction. It's particularly beneficial if you handle a high volume of leads or inquiries and want to automate personalized conversations, sales processes (like booking/payments), lead follow-ups, and customer support without significantly increasing manual workload."
  }
];

// Individual FAQ Item component
const FAQItem = ({ item, isOpen, toggleOpen, index }) => {
  const [ref, inView] = useInView({ once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`mb-5 rounded-xl overflow-hidden group relative transition-all duration-300 ${
        isOpen 
          ? 'shadow-lg bg-white' 
          : 'shadow-md hover:shadow-lg bg-zinc-50 hover:bg-white'
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
        className={`flex justify-between items-center py-5.5 px-8 cursor-pointer ${isOpen ? 'border-b border-gray-100' : ''}`}
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-[17px] text-[#24242A]">{item.question}</h3>
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
          <Plus size={20} strokeWidth={1.5} className="group-hover:text-indigo-500" /> 
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
              className="p-8 pt-5 text-gray-600 font-normal"
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

// FAQ Categories for organization
const categories = [
  { id: "all", name: "All FAQs" },
  { id: "features", name: "Features & Capabilities", faqs: [1, 2, 14, 15] },
  { id: "compatibility", name: "Business Compatibility", faqs: [3, 4, 16, 17] },
  { id: "setup", name: "Setup & Implementation", faqs: [5, 6, 7, 8] },
  { id: "support", name: "Security & Support", faqs: [9, 10, 11, 12, 13] }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const [sectionInView] = useInView({ once: true, amount: 0.1 });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "all" || 
      categories.find(cat => cat.id === activeCategory)?.faqs?.includes(faq.id);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Hero Section with improved background */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-purple-900/5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)"
          }}
        ></div>
        
        <BackgroundBeamsWithCollision className="!h-auto !min-h-0 !pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl font-semibold sm:text-5xl sm:tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Knowledge Center
              </motion.h1>
              <motion.p 
                className="max-w-2xl mt-6 mx-auto text-xl text-gray-600 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Discover everything you need to know about TailorTalk&apos;s AI capabilities and solutions
              </motion.p>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Main Content with improved spacing and sizing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={sectionRef}>
        {/* Search with improved styling */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-indigo-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-5 py-3 border border-indigo-100 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 text-base"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Tabs with improved styling */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-indigo-200 hover:shadow-sm"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion with preserved card design but improved spacing */}
        <motion.div 
          className="space-y-3 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem 
                key={faq.id}
                item={faq}
                index={index}
                isOpen={activeIndex === faq.id}
                toggleOpen={() => toggleFAQ(faq.id)}
              />
            ))
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-600">
                No FAQs found matching your search. Try a different query.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Section with improved styling */}
        <motion.div 
          className="mt-24 rounded-3xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(238, 242, 255, 0.8) 0%, rgba(252, 231, 243, 0.8) 100%)",
            boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.05)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700 mb-5">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
            Our expert team is ready to help you implement the perfect AI solution for your business.
          </p>
          <motion.button 
            className="inline-flex items-center px-10 py-4 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Our Experts <MoveRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}