import React, { useState } from 'react';
import useCaseData from '../Config/useCaseData';
import Image from 'next/image';

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
    <div className="w-11/12 px-6 md:px-12 lg:px-24 py-12 bg-[#f1f1ee] rounded-3xl">
      <h2 className="text-5xl font-medium text-gray-900 text-center mb-4">Use cases</h2>
      <p className="text-lg text-gray-500 text-center mb-12">See how he can transform your customer interactions with a single call.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-20 mb-10">
        {Header.map((item) => (
            <div className={`rounded-lg flex justify-center items-center ${
                selectedHeader === item.id
                    ? 'globalBgColor'
                    : 'bg-white'}`}>
                <div
                    key={item.id}
                    onClick={() => setSelectedHeader(item.id)}
                    className={`w-full m-[1px] px-2 py-3 text-center text-lg border border-white hover:cursor-pointer rounded-lg transition-all duration-300 ${
                    selectedHeader === item.id
                        ? 'globalBgColor text-white border-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {item.label}
                </div>
            </div>
          
        ))}
      </div>

      <div className="flex flex-col items-center">
        {selectedHeader >= 1 && (
          <div className="flex w-full max-w-6xl h-[30rem] p-4  overflow-hidden mb-6">
            <div className="w-1/2 p-4">
              <Image
                width={420}
                height={280}
                src={useCaseData[selectedHeader - 1].img} 
                alt={useCaseData[selectedHeader - 1].title}
                className="w-full h-auto object-cover rounded-xl" 
              />
            </div>
            <div className="w-1/2 pl-20 flex flex-col justify-center pb-16">
              <h3 className="text-5xl font-medium text-gray-900 mb-2">{useCaseData[selectedHeader - 1].title}</h3>
              <p className="text-gray-600 text-lg mt-10">{useCaseData[selectedHeader - 1].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCases;
