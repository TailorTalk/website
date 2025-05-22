import React, { useEffect } from 'react';
import AnimatedCard from './ui/GradientBorder';
import { motion } from 'framer-motion';
import { FlipWords } from './ui/flip-words';
import { Button } from './ui/button';
import { PointerHighlight } from './ui/pointer-highlight';

const HeroSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <section className="py-24 md:py-24 overflow-hidden relative mt-16 w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-5"></div>
      
      <div className="container relative">
        <motion.div 
          className="max-w-6xl mx-auto text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-5xl md:text-[3.3rem] font-medium w-full tracking-tight mb-6"
            variants={fadeInUp}
          >
            Transform Customer Engagement
            <br />
            <div className='mt-2'>
            <span className="">with Actionable </span>
            <span className="text-indigo-600"> AI Agent</span>
            </div>
          </motion.h1>
          
          <motion.div
  className="text-[17px] text-[#61646B] mb-10 mt-10 max-w-[50rem] mx-auto pl-1 font-light"
  variants={fadeInUp}
>
  <span>
    Let our AI agent manage your B2C sales, support, and any complex workflow on{" "}
    <span className="relative inline-block align-middle mr-1" style={{ minWidth: 105 }}>
      {/* Placeholder for width stability */}
      <span className="invisible">
        Whatsapp
      </span>
      {/* FlipWords absolutely positioned */}
      <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center border border-indigo-400 rounded px-2 bg-white shadow">
        <FlipWords
          words={["Whatsapp", "Instagram"]}
          duration={1000}
          className="inline-block text-[17px] font-medium text-indigo-600"
        />
      </span>
    </span>
    chat. It automates{" "}
    <span className="relative inline-block align-middle mx-1" style={{ minWidth: 130 }}>
      {/* Placeholder for width stability */}
      <span className="invisible">
        appointments
      </span>
      {/* FlipWords absolutely positioned */}
      <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center border border-indigo-400 rounded px-2 bg-white shadow">
        <FlipWords
          words={["follow-ups", "appointments", "payments"]}
          duration={1000}
          className="inline-block text-[17px] font-medium text-indigo-600 px-2"
        />
      </span>
    </span>
    and even integrates with your systems.
  </span>
</motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
             <Button color="indigo">Get Started</Button>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button color="white">See how it works</Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="relative">
          {/* Background gradients */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute z-10 -top-16 left-[32%] transform -translate-x-1/2 w-[30rem] h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-0"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="absolute z-10 -top-16 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-0"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute z-10 -top-16 right-[30%] transform translate-x-1/2 w-[30rem] h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-0"
          ></motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute z-10 -bottom-10 left-1/2 transform -translate-x-1/2 w-[40rem] h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-0"
          ></motion.div>
          
          {/* Left animated square with gradient border */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-16 left-[6%] -translate-y-1/2 w-60 h-60 z-0"
          >
            <AnimatedCard cardWrapperNumber={0}>
              <div 
                style={{
                  background: "repeating-linear-gradient(45deg, rgb(245, 246, 248), rgb(245, 246, 248) 1px, transparent 1px, transparent 4px)"
                }}
                className="h-[calc(100%-1px)] w-[calc(100%-1px)] rounded-3xl text-center bg-gray-400 backdrop-blur-3xl"
              ></div>
            </AnimatedCard>
          </motion.div>
          
          {/* Right animated square with gradient border */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-24 right-[8%] -translate-y-1/2 w-60 h-60 z-0"
          >
            <AnimatedCard cardWrapperNumber={3}>
              <div 
                style={{
                  background: "repeating-linear-gradient(45deg, rgb(245, 246, 248), rgb(245, 246, 248) 1px, transparent 1px, transparent 4px)"
                }}
                className="h-[calc(100%-1px)] w-[calc(100%-1px)] rounded-3xl text-center bg-white/40 backdrop-blur-3xl"
              ></div>
            </AnimatedCard>
          </motion.div>

          {/* bottom animated square with gradient border */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -bottom-40 right-[20%] -translate-y-1/2 w-60 h-60 z-0"
          >
            <AnimatedCard cardWrapperNumber={1}>
              <div 
                style={{
                  background: "repeating-linear-gradient(45deg, rgb(245, 246, 248), rgb(245, 246, 248) 1px, transparent 1px, transparent 4px)"
                }}
                className="h-[calc(100%-1px)] w-[calc(100%-1px)] rounded-3xl text-center bg-white/40 backdrop-blur-3xl"
              ></div>
            </AnimatedCard>
          </motion.div>
          
          {/* TailorTalk App Preview */}
          <motion.div 
            className="relative mt-16 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-5xl z-20"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mac-like window header */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-2 border-b flex items-center gap-2">
              <div className="flex space-x-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium">TailorTalk</div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4"></div>
                <div className="w-4 h-4"></div>
              </div>
            </div>
            
            {/* App interface */}
            <div className="bg-white">
              {/* Platform image */}
              <div className="w-full bg-white">
                <img 
                  src="/PlatformImage.png" 
                  alt="TailorTalk Platform Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;