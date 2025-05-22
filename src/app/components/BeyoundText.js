import React, { useState, useEffect, useRef } from 'react';
import { Image, FileText, Play, Bot, User, Settings, Zap, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeyondQASection() {
  const [visibleMessages, setVisibleMessages] = useState([]);
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
      type: 'customer',
      name: 'Alex',
      message: "I’d like to book the deluxe room.",
      timestamp: '10:02 AM',
    },
    {
      id: 6,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Great! Scan this QR to pay ₹15,000 and send the screenshot.",
      media: {
        type: 'qr',
        content: '/QR_code_sample.svg',
        alt: 'Payment QR Code'
      },
      timestamp: '10:02 AM',
    },
    {
      id: 7,
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
      id: 8,
      type: 'ai-support',
      name: 'TailorTalk',
      message: "Payment received! Your deluxe room is booked for 15th June. We look forward to your stay!",
      timestamp: '10:03 AM',
    }
  ];

  // Show messages one by one, continuously, no reset
  useEffect(() => {
    let timeout;
    if (visibleMessages.length < chatScenarios.length) {
      timeout = setTimeout(() => {
        setVisibleMessages(prev => [
          ...prev,
          chatScenarios[prev.length]
        ]);
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
              top: chatContainerRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }
        }, 200);
      }, 1800);
    } else if (visibleMessages.length === chatScenarios.length) {
      timeout = setTimeout(() => {
        setVisibleMessages([]);
      }, 1800);
    }
    return () => clearTimeout(timeout);
  }, [visibleMessages, chatScenarios.length]);

  const renderMedia = (media) => {
    switch (media.type) {
      case 'image':
        return (
          <div className="mt-3">
            <img 
              src={media.content} 
              alt={media.alt}
              className="rounded-xl max-w-full h-32 object-cover border shadow-sm transition-shadow duration-200"
            />
          </div>
        );
      case 'qr':
        return (
          <div className="mt-3 flex flex-col items-center">
            <img
              src={media.content}
              alt={media.alt}
              className="rounded-xl w-32 h-32 object-contain border shadow-sm transition-shadow duration-200"
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
              className="rounded-xl max-w-full h-24 object-cover border shadow-sm transition-all duration-200"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded-full p-2 shadow-lg transition-transform duration-200">
                <Play className="w-4 h-4 text-blue-600 ml-0.5" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded-md backdrop-bl-sm">
              {media.content}
            </div>
          </div>
        );
      case 'document':
        return (
          <div className="mt-3 flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-100 transition-colors duration-200 cursor-pointer group">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200">
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          Go <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Beyound Text</span>
        </h2>    
            <p className="text-[16px] text-[#61646b] leading-relaxed">
              TailorTalk handles images, documents, audio, and video—not just text—to automate and enrich customer interactions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-10">
            {/* Understands all media */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Settings className="w-5 h-5 text-gray-700" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[20px] text-[#24242a]">
                  Understands all media
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed max-w-sm">
                  TailorTalk can receive and process images, documents, audio, and video from your customers—enabling richer, more flexible support and automation.
                </p>
              </div>
            </div>

            {/* Shares the right visuals */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Zap className="w-5 h-5 text-gray-700" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[20px] text-[#24242a]">
                  Shares the right visuals
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed max-w-sm">
                  Your AI agent can send product images, demo videos, or helpful guides at the perfect moment—boosting clarity, engagement, and conversions.
                </p>
              </div>
            </div>

            {/* Automates media-driven workflows */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[20px] text-[#24242a]">
                  Automates media-driven workflows
                </h3>
                <p className="text-[15px] text-[#61646b] leading-relaxed max-w-sm">
                  Go beyond Q&A: automate processes like document collection, visual troubleshooting, or onboarding with rich media for a seamless customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chat Animation */}
        <div className="flex items-end justify-center w-full h-full">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-lg shadow-indigo-500/40 border-0 overflow-hidden w-full mt-56">
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
                      className={`flex gap-2 ${
                        message.type === 'customer' ? 'flex-row-reverse' : ''
                      }`}
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 24, delay: index * 0.05 } }}
                      exit={{ opacity: 0, scale: 0.95, y: 30, transition: { duration: 0.2 } }}
                    >
                      {/* Minimal Avatar */}
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${
                        message.type === 'customer' 
                          ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white' 
                          : 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white'
                      }`}>
                        {message.type === 'customer' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>

                      {/* Minimal Message Bubble */}
                      <div className={` max-w-xs ${
                        message.type === 'customer' ? 'text-right' : ''
                      }`}>
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow ${
                          message.type === 'customer'
                            ? 'bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-br-md'
                            : 'bg-white border border-gray-100 rounded-bl-md'
                        }`}>
                          <span>{message.message}</span>
                          {message.media && renderMedia(message.media)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
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