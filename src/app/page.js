"use client";
import React from "react";
import Image from 'next/image';
import leadx from "../../public/Leadx.png";
import { CircleCheck } from 'lucide-react';
import featuresData from "./Config/featuresData.json"
import { AssistantName } from "./Config/globalVariables";

export default function Home() {
  const AssistantPoints = [
    "Automate inbound sales calls",
    "Supercharge your speed to lead",
    "24/7 calling at scale",
    "Speaks any language",
    "Speaks any language",
    "Speaks any language",
  ];
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
        <p className="text-center font-medium text-lg text-gray-500 mb-10">
        I work 24/7, at any scale, improving your lead engagement while cutting sales costs by up to 90%.
        </p>
      </div>
      <div className="flex w-11/12 h-auto justify-center items-center bg-[#f1f1ee] mt-10 p-6 rounded-xl shadow-xl mx-auto">
        <div className="flex w-full h-auto justify-between mx-16 my-16">
          {/* Left Section (70%) */}
          <div className="w-[65%] space-y-4 bg-gray-50 p-5 pt-10 pl-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-medium mb-8">Hire {AssistantName}</h1>
            <p className="text-base text-[#1d1a1c99] pb-5">
              Sign up and connect {AssistantName} to your team. Get started in minutes.
            </p>
            <ul className="space-y-2 pb-5">
              {AssistantPoints.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CircleCheck className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center"/>
                  <span className="font-light pl-1">{item}</span>
                </li>
              ))}
            </ul>
            <button className="globalBgColor mt-8 flex px-4 py-3 text-base text-white rounded-md hover:bg-indigo-700 transition">

              Book a Demo
            </button>
          </div>

          {/* Right Section (30%) */}
          <div className="w-[37%] flex items-center justify-center bg-gray-50 p-5 ml-5 rounded-xl shadow-lg">
            <div className="relative">
              {/* Adjusted Positioning */}
              <div className="absolute top-[20px] right-[-100px] bg-white p-2 shadow-lg rounded-full flex items-center space-x-2">
                <span className="text-indigo-600 font-medium">{AssistantName}</span>
                <span className="text-gray-600">is joining your team</span>
              </div>

              <Image src={leadx} alt="icon" className=" object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center py-16 mx-16">
      <div className="text-center mb-12">
        <p className="font-normal text-base text-indigo-700 mb-5">MEET {AssistantName.toUpperCase()}</p>
        <h2 className="text-5xl font-medium">Features that you will love</h2>
        <p className="text-gray-600">{AssistantName} integrates with the tools you love to manage calls and streamline operations on autopilot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>


    </div>
  );
}
