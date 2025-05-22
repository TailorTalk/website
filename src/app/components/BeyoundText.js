import React, { useState, useEffect, useRef } from 'react';
import { Image, FileText, Volume2, Play, Bot, User, Headphones, Settings, Zap, Users, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeyondQASection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const chatScenarios = [
    {
      id: 1,
      type: 'customer',
      name: 'Alex',
      message: "Hi, I'd like to book a hotel room.",
      timestamp: '10:00 AM',
    },
    {
      id: 2,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Absolutely! Would you like to see pictures of our available rooms?",
      timestamp: '10:00 AM',
    },
    {
      id: 3,
      type: 'customer',
      name: 'Alex',
      message: "Yes, please show me the room pictures.",
      timestamp: '10:01 AM',
    },
    {
      id: 4,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Here are some pictures of our deluxe rooms.",
      media: {
        type: 'image',
        content: '/deluxeRoom.jpeg',
        alt: 'Deluxe Room'
      },
      timestamp: '10:01 AM',
    },
    {
      id: 5,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Standard rooms:",
      media: {
        type: 'image',
        content: '/standardRoom.webp',
        alt: 'Standard Room'
      },
      timestamp: '10:01 AM',
    },
    {
      id: 6,
      type: 'customer',
      name: 'Alex',
      message: "I’d like to book the deluxe room.",
      timestamp: '10:02 AM',
    },
    {
      id: 7,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Great choice! Please scan this QR code to pay ₹15,000 for your deluxe room booking. After payment, please send the payment screenshot.",
      media: {
        type: 'qr',
        content: '/QR_code_sample.svg',
        alt: 'Payment QR Code'
      },
      timestamp: '10:02 AM',
    },
    {
      id: 8,
      type: 'customer',
      name: 'Alex',
      message: "Here's the payment screenshot.",
      media: {
        type: 'image',
        content: '/payment_ss.jpg',
        alt: 'Payment Screenshot'
      },
      timestamp: '10:03 AM',
    },
    {
      id: 9,
      type: 'ai-support',
      name: 'TailorTalk',
      message: `Payment received! Your deluxe room is booked.

Booking Details:
- Room Type: Deluxe Room
- Check-in: 12:00 PM, 15th June 2024
- Check-out: 11:00 AM, 16th June 2024
- Amount Paid: ₹15,000

We look forward to your stay!`,
      timestamp: '10:03 AM',
    }
  ];

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < chatScenarios.length) {
          // Show typing indicator before AI messages
          if (chatScenarios[prev] && chatScenarios[prev].type !== 'customer') {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
            }, 1000);
          }
          return prev + 1;
        } else {
          setTimeout(() => {
            setVisibleMessages([]);
            setCurrentStep(0);
          }, 0);
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentStep > 0 && currentStep <= chatScenarios.length) {
      const message = chatScenarios[currentStep - 1];
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
        setTimeout(scrollToBottom, 200);
      }, chatScenarios[currentStep - 1].type !== 'customer' ? 1200 : 0);
    } else if (currentStep === 0) {
      setVisibleMessages([]);
    }
  }, [currentStep]);

  const renderMedia = (media) => {
    switch (media.type) {
        case 'image':
            return (
              <div className="mt-3">
                <img 
                  src={media.content} 
                  alt={media.alt}
                  className="rounded-xl max-w-full h-32 object-cover border shadow-sm hover:shadow-md transition-shadow duration-200"
                />
              </div>
            );
          case 'qr':
            return (
              <div className="mt-3 flex flex-col items-center">
                <img
                  src={media.content}
                  alt={media.alt}
                  className="rounded-xl w-32 h-32 object-contain border shadow-sm hover:shadow-md transition-shadow duration-200"
                />
                <div className="text-xs text-gray-500 mt-2">Scan to pay</div>
              </div>
            );
      case 'video':
        return (
          <div className="mt-3 relative group cursor-pointer">
            <img 
              src={media.thumbnail} 
              alt="Video thumbnail"
              className="rounded-xl max-w-full h-24 object-cover border shadow-sm group-hover:shadow-md transition-all duration-200"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play className="w-4 h-4 text-blue-600 ml-0.5" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              {media.content}
            </div>
          </div>
        );
      case 'document':
        return (
          <div className="mt-3 flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-200 cursor-pointer group">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 text-sm truncate">{media.content}</p>
              <p className="text-xs text-gray-500">PDF Document</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Framer Motion variants for message animation
  const messageVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // Framer Motion variants for typing indicator
  const typingVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: 16,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  };

  // Framer Motion bounce for typing dots
  const bounceTransition = {
    y: {
      duration: 0.5,
      yoyo: Infinity,
      ease: 'easeInOut'
    }
  };

  const TypingIndicator = () => (
    <div className="flex gap-2">
      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-sm">
        <Bot className="w-3 h-3 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">TailorTalk is typing...</div>
        <div className="bg-white border shadow-sm p-3 rounded-2xl rounded-bl-md max-w-xs">
          <div className="flex items-center gap-1">
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ ...bounceTransition, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ ...bounceTransition, delay: 0.1 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ ...bounceTransition, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-[44px] text-[#24242a] leading-tight">
              Go Beyond Text: Understand & Share Rich Media
            </h2>
            <p className="text-[17px] text-[#61646b] leading-relaxed">
              Automate richer workflows beyond just words. TailorTalk can understand and process incoming images, documents, audio, and video. It can also strategically share crucial media like product visuals, demos, or guides to boost clarity and conversions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-12">
            {/* Understands all media */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Settings className="w-6 h-6 text-gray-700" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[20px] text-[#24242a]">
                  Understands all media
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed">
                  TailorTalk can receive and process images, documents, audio, and video from your customers—enabling richer, more flexible support and automation.
                </p>
              </div>
            </div>

            {/* Shares the right visuals */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Zap className="w-6 h-6 text-gray-700" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[20px] text-[#24242a]">
                  Shares the right visuals
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed">
                  Your AI agent can send product images, demo videos, or helpful guides at the perfect moment—boosting clarity, engagement, and conversions.
                </p>
              </div>
            </div>

            {/* Automates media-driven workflows */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[20px] text-[#24242a]">
                  Automates media-driven workflows
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed">
                  Go beyond Q&A: automate processes like document collection, visual troubleshooting, or onboarding with rich media for a seamless customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chat Animation */}
        <div className="flex items-end justify-center w-full h-full">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-lg shadow-indigo-500/40 border-0 overflow-hidden w-full">
              {/* Only Chat Messages, no header or input */}
              <div 
                ref={chatContainerRef}
                className="h-[30rem] overflow-y-auto px-4 py-12 space-y-4 bg-gradient-to-b from-gray-50 to-white custom-scrollbar"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#cbd5e1 #f8fafc'
                }}
              >
                <AnimatePresence initial={false}>
                  {visibleMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.type === 'customer' ? 'flex-row-reverse' : ''
                      }`}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={messageVariants}
                    >
                      {/* Enhanced Avatar */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ${
                        message.type === 'customer' 
                          ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white ring-2 ring-indigo-200' 
                          : message.type === 'ai-sales'
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-2 ring-green-200'
                          : 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white ring-2 ring-purple-200'
                      }`}>
                        {message.type === 'customer' ? (
                          <User className="w-3 h-3" />
                        ) : message.type === 'ai-sales' ? (
                          <Bot className="w-3 h-3" />
                        ) : (
                          <Bot className="w-3 h-3" />
                        )}
                      </div>

                      {/* Enhanced Message Bubble */}
                      <div className={`flex-1 max-w-xs ${
                        message.type === 'customer' ? 'text-right' : ''
                      }`}>
                        <div className="text-xs text-gray-500 mb-2 font-medium">
                          {message.name.split(' ')[0]} • {message.timestamp}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm hover:shadow-md transition-all duration-200 ${
                          message.type === 'customer'
                            ? 'bg-gradient-to-br from-indigo-400 to-indigo-500 text-white ml-auto rounded-br-md'
                            : 'bg-white border border-gray-100 rounded-bl-md hover:border-gray-200'
                        }`}>
                          <p>{message.message}</p>
                          {message.media && renderMedia(message.media)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={typingVariants}
                    >
                      <TypingIndicator />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}