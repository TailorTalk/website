import React, { useState } from 'react';
import useCaseData from '../Config/useCaseData';

const UseCases = () => {
  const [selectedHeader, setSelectedHeader] = useState(1);

  const Header = [
    { id: 1, label: useCaseData[0].title },
    { id: 2, label: useCaseData[1].title },
    { id: 3, label: useCaseData[2].title },
    { id: 4, label: useCaseData[3].title },
    { id: 5, label: useCaseData[4].title },
  ];

  return (
    <div className="w-11/12 px-2 md:px-12 lg:px-24 pt-12 bg-[#f1f1ee] rounded-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-medium text-gray-900 text-center mt-5 mb-6">Use cases</h2>
      <p className="text-sm md:text-base text-gray-500 text-center md:mb-0 mb-5">See how we can transform your customer interactions with a single call.</p>
      
      <div className="flex flex-col md:flex-row md:pt-28 w-full">
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
          <div className="flex flex-col gap-4 justify-center items-center">
            {Header.map((item) => (
              <div
                key={item.id}
                className={`p-[2px] w-full md:w-10/12 hover:cursor-pointer ml-4 md:ml-0 rounded-lg ${
                  selectedHeader === item.id ? 'globalBgColor' : 'bg-white'
                }`}
              >
                <div
                  onClick={() => setSelectedHeader(item.id)}
                  className={`flex justify-center items-center w-full px-4 py-3 text-center text-sm md:text-lg rounded-lg transition-all duration-300 ${
                    selectedHeader === item.id
                      ? 'globalBgColor text-white border-white border'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300 border-transparent'
                  }`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center pl-4">
          {selectedHeader >= 1 && (
            <div className="flex flex-col w-full h-auto md:h-[30rem] pb-7 md:p-4 overflow-hidden">
              <div className="w-full md:pl-10 flex flex-col justify-center">
                <h3 className="text-[22px] md:text-4xl font-medium text-gray-900 mb-2">
                  {useCaseData[selectedHeader - 1].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg mt-3 md:mt-6">
                  {useCaseData[selectedHeader - 1].description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
