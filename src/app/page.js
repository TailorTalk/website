"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import leadx from "../../public/Leadx.png";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import featuresData from "./Config/featuresData.json";
import { AssistantName } from "./Config/globalVariables";
import testimonials from "./Config/testimonials";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const AssistantPoints = [
    "24/7 availabile, chats in multiple languages.",
    "Follows up and send reminders to your leads.",
    "Generates insights about your leads.",
    "Keeps you informed of key developments",
    "Saves costs by up to 90%.",
  ];
  const testimonialsVariants = {
    animate: {
      x: [1000, -1000], // Right to Left scrolling
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isHovered ? 0 : 20, // Pause scrolling if hovered
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-50">
      <div className="max-w-7xl w-full px-4">
        <h1 className="text-[56px] font-medium text-center mt-10 bg-clip-text text-black">
        Hi, I’m {AssistantName}.
        </h1>
        
        <h2 className="text-[56px] font-medium text-center mb-4 text-black bg-clip-text">
        Your AI-Powered
        <span className="text-[56px] font-medium text-center ml-3 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#1d4ed8] ">Sales Assistant</span>
        
        </h2>
        <p className="text-center font-medium text-lg text-gray-500 mb-10" style={{ lineHeight: '2' }}>
        I work 24/7, at any scale, improving your lead engagement while cutting sales costs by up to 90%. <br /> I seamlessly engage with your leads across WhatsApp, Instagram, email, and more.
        </p>
      </div>
      <div className="flex w-11/12 h-auto justify-center items-center bg-[#f1f1ee] mt-10 p-6 rounded-xl shadow-xl mx-auto">
        <div className="flex w-full h-auto justify-between mx-16 my-16">
          {/* Left Section*/}
          <div className="w-[65%] space-y-4 bg-gray-50 p-5 pt-10 pl-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-medium mb-8">Hire {AssistantName}</h1>
            <p className="text-base text-[#1d1a1c99] pb-5">
              Sign up and hire {AssistantName} for your business. Onboard in minutes.
            </p>
            <ul className="space-y-2 pb-5">
              {AssistantPoints.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircleSharpIcon className="w-4 h-4 text-indigo-700 p-[2px] flex items-center justify-center rounded-full" />
                  <span className="font-light pl-1">{item}</span>
                </li>
              ))}
            </ul>
            <button className="globalBgColor mt-8 flex px-4 py-3 text-base text-white rounded-md hover:bg-indigo-700 transition">

              Interview {AssistantName}
            </button>
          </div>

          {/* Right Section*/}
          <div className="w-[37%] flex items-center justify-center bg-gray-50 p-5 ml-5 rounded-xl shadow-lg">
            <div className="relative">
              <div className="absolute top-[20px] right-[-100px] bg-white p-2 shadow-lg rounded-full flex items-center space-x-2">
                <span className="text-indigo-600 font-medium">{AssistantName}</span>
                <span className="text-gray-600">is joining your team</span>
              </div>

              <Image src={leadx} alt="icon" className=" object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <section className="flex flex-col justify-center items-center border-[1px] pt-28 rounded-b-xl py-16 mx-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium pb-10">Features that you will love</h2>
        <p className="text-[#1d1a1c99]">Along with {AssistantName}, you will get many more smart features.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-28 mt-10">
        {featuresData.features.map((feature, index) => (
          // card
          <div key={index} className="bg-white shadow-md rounded-xl p-3">
            <Image
              src="/test.png" 
              alt={feature.title}
              width={400} 
              height={300} 
              className=" object-cover rounded-xl"
            />
            <h3 className="text-lg font-medium my-3">{feature.title}</h3>
            <p className="text-[#1d1a1c99] text-[1rem] font-light mt-6 mb-6">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    {/* Testimonial */}
    <section className="flex flex-col justify-center items-center mt-10 bg-white py-16">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <motion.div
          className="overflow-hidden w-full max-w-4xl"
          variants={testimonialsVariants}
          animate="animate"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex space-x-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[300px] bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg italic">"{testimonial.text}"</p>
                <p className="mt-4 text-right font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
