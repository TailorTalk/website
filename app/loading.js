"use client";
import React from "react";
import { FaRobot } from "react-icons/fa"; // You can replace with your chatbot icon

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-gray-800 animate-bounce">
        <div className="flex items-center">
          <FaRobot className="mr-2 text-3xl text-blue-500" />
          <div className="px-4 py-2 bg-gray-300 rounded-lg">
            {/* <p className="text-lg font-semibold">Chatbot:</p> */}
            <p className="text-lg">Page is loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
